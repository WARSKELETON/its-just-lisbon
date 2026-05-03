import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import type { Review } from '../types/review';
import type { Tour } from '../types/tour';

type TestimonialsProps = {
  reviews: Review[];
  tours: Tour[];
};

type ReviewTour = {
  name: string;
  href?: string;
  location?: Tour['location'];
  image?: string;
};

type ExpandableReviewProps = {
  content: string;
  reviewId: string;
};

const ExpandableReview: FC<ExpandableReviewProps> = ({ content, reviewId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const measureRef = useRef<HTMLQuoteElement | null>(null);

  useEffect(() => {
    const measuredElement = measureRef.current;
    if (!measuredElement) {
      return;
    }

    const updateTruncationState = () => {
      const shouldTruncate = measuredElement.scrollHeight > measuredElement.clientHeight + 1;
      setIsTruncated(shouldTruncate);

      if (!shouldTruncate) {
        setIsExpanded(false);
      }
    };

    updateTruncationState();

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== 'undefined' && measuredElement.parentElement) {
      resizeObserver = new ResizeObserver(updateTruncationState);
      resizeObserver.observe(measuredElement.parentElement);
    }

    window.addEventListener('resize', updateTruncationState);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateTruncationState);
    };
  }, [content]);

  return (
    <div className="relative flex flex-col gap-3">
      <blockquote
        className={`text-sm text-bone/75 ${isExpanded
          ? 'overflow-visible [display:block]'
          : 'overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:6]'
          }`}
      >
        “{content}”
      </blockquote>
      <blockquote
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 right-0 top-0 w-full overflow-hidden text-sm [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:6]"
      >
        “{content}”
      </blockquote>
      {isTruncated ? (
        <button
          type="button"
          onClick={() => setIsExpanded((previous) => !previous)}
          className="w-fit cursor-pointer text-[0.6rem] uppercase tracking-[0.3em] text-accent/70 transition hover:text-bone/80"
          data-ph-event="review_toggle"
          data-ph-action={isExpanded ? 'collapse' : 'expand'}
          data-ph-review-id={reviewId}
        >
          {isExpanded ? 'Lees minder' : 'Lees meer'}
        </button>
      ) : null}
    </div>
  );
};

const locationLabels: Record<Tour['location'], string> = {
  lisbon: 'Lissabon',
  sintra: 'Sintra',
};

const normalizeMatchValue = (value: string): string => value.trim().toLowerCase();

const hashString = (value: string): number => {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
};

const normalizeImageUrl = (image: string): string => {
  if (image.startsWith('https://a.storyblok.com/') && !image.includes('/m/')) {
    return `${image}/m/700x360`;
  }

  if (image.startsWith('http') || image.startsWith('/')) {
    return image;
  }

  return `/${image}`;
};

const pickTourImage = (tour: Tour, review: Review, reviewIndex: number): string | undefined => {
  if (!tour.images.length) {
    return undefined;
  }

  const imageIndex = hashString(`${tour.uuid}:${review.uuid}:${reviewIndex}`) % tour.images.length;
  return normalizeImageUrl(tour.images[imageIndex]);
};

const Testimonials: FC<TestimonialsProps> = ({ reviews, tours }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const tourLookup = useMemo(() => {
    const byId = new Map<string, Tour>();
    const byLabel = new Map<string, Tour>();

    tours.forEach((tour) => {
      byId.set(tour.uuid, tour);
      byLabel.set(normalizeMatchValue(tour.name), tour);
      byLabel.set(normalizeMatchValue(tour.slug), tour);
      byLabel.set(normalizeMatchValue(tour.bookName), tour);
    });

    return { byId, byLabel };
  }, [tours]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const updateControls = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollPrev(track.scrollLeft > 8);
      setCanScrollNext(track.scrollLeft < maxScrollLeft - 8);
    };

    updateControls();

    const handleScroll = () => updateControls();
    const handleResize = () => updateControls();

    track.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      track.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [reviews.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    window.phCapture?.('reviews_scroll', {
      direction: direction === 1 ? 'next' : 'prev',
    });

    const firstCard = track.querySelector<HTMLElement>('[data-review-card]');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : track.clientWidth;
    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
    const delta = (cardWidth + gap) * direction;

    track.scrollBy({ left: delta, behavior: 'smooth' });
  };

  if (!reviews.length) {
    return null;
  }

  const toReviewTour = (tour: Tour, review: Review, reviewIndex: number): ReviewTour => ({
    name: tour.name,
    href: `/tours/${tour.slug}`,
    location: tour.location,
    image: pickTourImage(tour, review, reviewIndex),
  });

  const resolveTour = (review: Review, reviewIndex: number): ReviewTour | null => {
    const matchedById = review.tourIds
      ?.map((tourId) => tourLookup.byId.get(tourId))
      .find((tour): tour is Tour => Boolean(tour));

    if (matchedById) {
      return toReviewTour(matchedById, review, reviewIndex);
    }

    if (review.tour) {
      const matchedByLabel = tourLookup.byLabel.get(normalizeMatchValue(review.tour));

      if (matchedByLabel) {
        return toReviewTour(matchedByLabel, review, reviewIndex);
      }

      return { name: review.tour };
    }

    return null;
  };

  return (
    <section className="relative border-t border-bone/10 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-bone/40">Beoordelingen</p>
          <h2 className="mt-6 font-display text-3xl text-bone md:text-4xl">Ervaringen van gasten, die zich hebben laten verrassen door Just Lisbon</h2>
          <p className="mt-4 text-sm text-bone/70">
            Onze gasten kiezen voor verborgen pareltjes, ludieke verhalen en een ontspannen sfeer.
            Hun woorden vertellen de ervaring beter dan wij ooit zouden kunnen.
          </p>
        </div>
        <div
          ref={trackRef}
          id="reviews-carousel"
          className="mt-10 flex scroll-mt-32 items-start snap-x snap-mandatory gap-6 overflow-x-auto px-px pb-10 pt-px scroll-smooth focus:outline-none sm:gap-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Ervaringen carousel"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          {reviews.map((item, index) => {
            const reviewTour = resolveTour(item, index);

            return (
              <figure
                key={item.uuid}
                data-review-card
                className="group flex w-[92%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-bone/10 bg-slate/25 backdrop-blur-md transition-colors duration-300 hover:border-accent/45 hover:bg-slate/35 sm:w-[65%] lg:w-[32%]"
              >
                <div className="flex flex-1 flex-col gap-6 p-6 pb-5 sm:p-8 sm:pb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-14 w-14 rounded-full border border-bone/20 object-cover sm:h-16 sm:w-16"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-bone/20 bg-bone/10 text-sm font-semibold text-bone/70 sm:h-16 sm:w-16">
                        {item.name.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0 space-y-1">
                      <div className="whitespace-nowrap font-semibold text-bone">{item.name}</div>
                      {item.publishedAt ? (
                        <div className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/40">{item.publishedAt}</div>
                      ) : null}
                    </div>
                  </div>
                  {item.content ? (
                    <ExpandableReview content={item.content} reviewId={item.uuid} />
                  ) : null}
                </div>
                {reviewTour ? (
                  <figcaption className="mt-auto border-t border-bone/10">
                    {reviewTour.href ? (
                      <a
                        href={reviewTour.href}
                        className="group/tour relative block min-h-[8.75rem] overflow-hidden text-left transition duration-300 active:scale-[0.995]"
                        data-ph-event="review_tour_click"
                        data-ph-review-id={item.uuid}
                        data-ph-tour={reviewTour.name}
                      >
                        {reviewTour.image ? (
                          <span className="absolute inset-0">
                            <img
                              src={reviewTour.image}
                              alt={reviewTour.name}
                              className="h-full w-full object-cover opacity-58 transition duration-500 group-hover/tour:scale-[1.03] group-hover/tour:opacity-72"
                              loading="lazy"
                            />
                          </span>
                        ) : null}
                        <span className="absolute inset-0 bg-[linear-gradient(105deg,rgba(4,4,4,0.98)_0%,rgba(4,4,4,0.70)_36%,rgba(4,4,4,0.50)_68%,rgba(4,4,4,0.20)_100%)]" />
                        <span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-midnight/82 to-transparent" />
                        <span className="relative flex min-h-[8.75rem] items-end justify-between gap-5 px-6 py-5 sm:px-8">
                          <span className="min-w-0">
                            <span className="block whitespace-nowrap text-[0.56rem] uppercase tracking-[0.22em] text-accent/70">
                              Ervaren tijdens
                            </span>
                            <span
                              className="mt-1 block whitespace-nowrap text-[0.82rem] font-semibold leading-snug text-bone transition-colors duration-300 group-hover/tour:text-champagne"
                              data-review-tour-name
                            >
                              {reviewTour.name}
                            </span>
                            {reviewTour.location ? (
                              <span className="mt-1 block whitespace-nowrap text-[0.6rem] uppercase tracking-[0.18em] text-bone/[0.70]">
                                {locationLabels[reviewTour.location]}
                              </span>
                            ) : null}
                          </span>
                          <span
                            className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center border border-accent rounded-full bg-midnight/40 text-base text-accent backdrop-blur-sm transition duration-300 group-hover/tour:translate-x-0.5 group-hover/tour:border-accent/45 group-hover/tour:text-champagne"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </span>
                      </a>
                    ) : (
                      <div className="px-6 py-5 sm:px-8">
                        <span className="block text-[0.58rem] uppercase tracking-[0.28em] text-bone/[0.38]">
                          Ervaren tijdens
                        </span>
                        <span className="mt-1 block text-sm font-semibold leading-snug text-bone/80">
                          {reviewTour.name}
                        </span>
                      </div>
                    )}
                  </figcaption>
                ) : null}
              </figure>
            );
          })}
        </div>
        <div className="mt-12 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone/70 transition hover:border-accent/60 hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Vorige review"
            aria-controls="reviews-carousel"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone/70 transition hover:border-accent/60 hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Volgende review"
            aria-controls="reviews-carousel"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
