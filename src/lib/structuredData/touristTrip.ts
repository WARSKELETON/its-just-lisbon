import type {
  ItemList,
  TouristTrip,
  WithContext,
  ItemAvailability,
  Offer,
} from 'schema-dts';
import type { Tour } from '../../types/tour';
import { buildOrganizationData } from './organization';
import { parsePrice, toAbsoluteUrl } from './tourUtils';

type TouristTripOptions = {
  siteUrl?: URL;
  heroImage?: string;
  url?: string;
  priceCurrency?: string;
  availability?: ItemAvailability;
};

const buildItinerary = (landmarks: string[]): ItemList | undefined =>
  landmarks.length
    ? {
      '@type': 'ItemList',
      itemListElement: landmarks.map((landmark, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Place',
          name: landmark,
        },
      })),
    }
    : undefined;

export const buildTouristTripJsonLd = (
  tour: Tour,
  options: TouristTripOptions = {}
): WithContext<TouristTrip> => {
  const {
    siteUrl,
    heroImage,
    url,
    priceCurrency = 'EUR',
    availability = 'https://schema.org/InStock',
  } = options;
  const tourUrl = url ?? toAbsoluteUrl(siteUrl, `/tours/${tour.bookName}`);
  const tourId = tourUrl ? `${tourUrl}#tour` : undefined;
  const numericPrice = parsePrice(tour.price);
  const itinerary = buildItinerary(tour.landmarks);
  const resolvedImage =
    heroImage ? toAbsoluteUrl(siteUrl, heroImage) ?? heroImage : undefined;

  const offers: Offer | undefined =
    numericPrice !== null
      ? {
        '@type': 'Offer',
        price: numericPrice,
        priceCurrency,
        availability,
        ...(tourUrl ? { url: tourUrl } : {}),
      }
      : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    ...(tourId ? { '@id': tourId } : {}),
    name: tour.name,
    description: tour.description,
    ...(resolvedImage ? { image: resolvedImage } : {}),
    provider: buildOrganizationData({ siteUrl }),
    ...(tourUrl ? { url: tourUrl } : {}),
    ...(itinerary ? { itinerary } : {}),
    ...(offers ? { offers } : {}),
  };
};
