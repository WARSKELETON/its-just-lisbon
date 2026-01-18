import type { Tour } from '../../types/tour';

export const DEFAULT_TOUR_IMAGE =
  'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070';

export const locationLabels: Record<Tour['location'], string> = {
  lisbon: 'Lisboa',
  sintra: 'Sintra',
};

export const toAbsoluteUrl = (
  siteUrl: URL | undefined,
  path?: string
): string | undefined => {
  if (!path) {
    return undefined;
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return siteUrl ? new URL(normalized, siteUrl).href : normalized;
};

export const parsePrice = (value: string): number | null => {
  const match = value.match(/([0-9]+(?:[.,][0-9]{2})?)/);
  if (!match) {
    return null;
  }

  const normalized = match[1].replace('.', '').replace(',', '.');
  const numeric = Number.parseFloat(normalized);
  return Number.isFinite(numeric) ? numeric : null;
};
