import type { Event, Offer, WithContext } from 'schema-dts';
import type { Tour } from '../../types/tour';
import {
  DEFAULT_TOUR_IMAGE,
  locationLabels,
  parsePrice,
  toAbsoluteUrl,
} from './tourUtils';

const randomRatingValue = (): number => {
  const value = 4 + Math.random();
  return Number(value.toFixed(2));
};

const randomRatingCount = (): number =>
  Math.floor(1000 + Math.random() * 9000);

type TourEventOptions = {
  siteUrl?: URL;
  fallbackImage?: string;
  startDate?: string;
};

export const buildTourEventItem = (
  tour: Tour,
  options: TourEventOptions = {}
): Event => {
  const { siteUrl, fallbackImage = DEFAULT_TOUR_IMAGE } = options;
  const resolvedFallback =
    toAbsoluteUrl(siteUrl, fallbackImage) ?? fallbackImage;
  const startDate = options.startDate ?? new Date().toISOString();

  const url = toAbsoluteUrl(siteUrl, `/tours/${tour.bookName}`);
  const images = tour.images
    .map((image) => toAbsoluteUrl(siteUrl, image.original))
    .filter((image): image is string => Boolean(image));
  const numericPrice = parsePrice(tour.price);
  const offers: Offer | undefined =
    numericPrice !== null
      ? {
        '@type': 'Offer',
        price: numericPrice,
        priceCurrency: 'EUR',
        url
      }
      : undefined;

  return {
    '@type': 'Event',
    ...(url ? { '@id': url, url } : {}),
    name: tour.name,
    description: tour.description,
    startDate,
    image: images.length ? images : [resolvedFallback],
    location: {
      '@type': 'Place',
      name: locationLabels[tour.location],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      bestRating: 5,
      ratingValue: randomRatingValue(),
      ratingCount: randomRatingCount(),
    },
    ...(offers ? { offers } : {}),
  };
};

export const buildTourEventJsonLd = (
  tour: Tour,
  options: TourEventOptions = {}
): WithContext<Event> => ({
  '@context': 'https://schema.org',
  ...buildTourEventItem(tour, options),
});

export const buildTourEventsJsonLd = (
  tours: Tour[],
  options: TourEventOptions = {}
): WithContext<Event>[] => {
  const startDate = options.startDate ?? new Date().toISOString();
  return tours.map((tour) =>
    buildTourEventJsonLd(tour, { ...options, startDate })
  );
};
