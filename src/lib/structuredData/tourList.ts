import type { ItemList, WithContext } from 'schema-dts';
import type { Tour } from '../../types/tour';
import { buildTourEventItem } from './tourEvents';

type TourListOptions = {
  siteUrl?: URL;
  fallbackImage?: string;
};

export const buildTourListJsonLd = (
  tours: Tour[],
  options: TourListOptions = {}
): WithContext<ItemList> => {
  const startDate = new Date().toISOString();

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tours.map((tour, index) => {
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: buildTourEventItem(tour, { ...options, startDate }),
      };
    }),
  };
};
