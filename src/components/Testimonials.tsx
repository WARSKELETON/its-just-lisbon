import { useEffect, useRef, useState, type FC } from 'react';
import type { Review } from '../types/review';

type TestimonialsProps = {
  reviews: Review[];
};

const Testimonials: FC<TestimonialsProps> = ({ reviews }) => {
  if (!reviews.length) {
    return null;
  }

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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

  return (
    <section className="relative border-t border-bone/10 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
          className="mt-10 flex items-start snap-x snap-mandatory gap-8 overflow-x-auto pb-6 pr-6 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Ervaringen carousel"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          {reviews.map((item) => (
            <figure
              key={item.uuid}
              data-review-card
              className="flex w-[85%] shrink-0 snap-start flex-col gap-6 rounded-3xl border border-bone/10 bg-slate/25 p-8 backdrop-blur-md transition hover:border-accent/50 sm:w-[65%] lg:w-[32%]"
            >
              <div className="flex items-center gap-4">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-16 w-16 rounded-full border border-bone/20 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/20 bg-bone/10 text-sm font-semibold text-bone/70">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div className="space-y-1">
                  <div className="font-semibold text-bone">{item.name}</div>
                  {item.publishedAt ? (
                    <div className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/40">{item.publishedAt}</div>
                  ) : null}
                </div>
              </div>
              {item.content ? (
                <div className="flex flex-col gap-3">
                  <input id={`review-${item.uuid}`} type="checkbox" className="peer sr-only" />
                  <blockquote className="text-sm text-bone/75 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:6] peer-checked:[-webkit-line-clamp:unset] peer-checked:[display:block] peer-checked:overflow-visible">
                    “{item.content}”
                  </blockquote>
                  <label
                    htmlFor={`review-${item.uuid}`}
                    className="w-fit cursor-pointer text-[0.6rem] uppercase tracking-[0.3em] text-accent/70 transition hover:text-bone/80 peer-checked:hidden"
                    data-ph-event="review_toggle"
                    data-ph-action="expand"
                    data-ph-review-id={item.uuid}
                  >
                    Lees meer
                  </label>
                  <label
                    htmlFor={`review-${item.uuid}`}
                    className="hidden w-fit cursor-pointer text-[0.6rem] uppercase tracking-[0.3em] text-accent/70 transition hover:text-bone/80 peer-checked:inline-flex"
                    data-ph-event="review_toggle"
                    data-ph-action="collapse"
                    data-ph-review-id={item.uuid}
                  >
                    Lees minder
                  </label>
                </div>
              ) : null}
              {item.tour ? (
                <figcaption className="border-t border-bone/10 pt-6 text-xs uppercase tracking-[0.3em] text-bone/50">
                  <div>{item.tour}</div>
                </figcaption>
              ) : null}
            </figure>
          ))}
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
