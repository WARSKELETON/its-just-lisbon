import type {
  Offer,
  Product,
  WithContext,
  ItemAvailability,
} from 'schema-dts';
import type { Tour } from '../../types/tour';
import { buildOrganizationData } from './organization';
import { parsePrice, toAbsoluteUrl } from './tourUtils';

type TourProductOptions = {
  siteUrl?: URL;
  priceCurrency?: string;
  availability?: ItemAvailability;
};

export const buildTourProductJsonLd = (
  tour: Tour,
  options: TourProductOptions = {}
): WithContext<Product> => {
  const {
    siteUrl,
    priceCurrency = 'EUR',
    availability = 'https://schema.org/InStock',
  } = options;
  const tourUrl = toAbsoluteUrl(siteUrl, `/tours/${tour.slug}`);
  const productId = tourUrl ? `${tourUrl}#product` : undefined;
  const tourId = tourUrl ? `${tourUrl}#tour` : undefined;
  const numericPrice = parsePrice(tour.price);
  const offers: Offer | undefined =
    numericPrice !== null
      ? {
        '@type': 'Offer',
        ...(tourUrl ? { url: tourUrl } : {}),
        priceCurrency,
        price: numericPrice,
        availability,
      }
      : undefined;
  const relatedTour: Product['isRelatedTo'] | undefined = tourId
    ? { '@id': tourId }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    ...(productId ? { '@id': productId } : {}),
    name: tour.name,
    description: tour.description,
    ...(tourUrl ? { url: tourUrl } : {}),
    brand: buildOrganizationData({ siteUrl }),
    image: tour.images[0],
    ...(offers ? { offers } : {}),
    ...(relatedTour ? { isRelatedTo: relatedTour } : {}),
  };
};
