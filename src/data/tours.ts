import type { Tour } from '../types/tour';
import { getStoryblokApi } from '../lib/storyblok';
import { fallbackTours } from './staticTours';
import {
  readField,
  readString,
  type StoryblokAsset,
  type StoryblokStory,
} from './storyblokContent';

const readBoolean = (value: unknown, fallback: boolean): boolean =>
  typeof value === 'boolean' ? value : fallback;

const readLocation = (value: unknown, fallback: Tour['location']): Tour['location'] => {
  if (typeof value !== 'string') {
    return fallback;
  }

  const normalized = value.trim().toLowerCase();

  if (normalized === 'sintra') {
    return 'sintra';
  }

  if (normalized === 'lisbon' || normalized === 'lissabon') {
    return 'lisbon';
  }

  return fallback;
};

const toStringArray = (value: unknown): string[] => {
  const asString = readString(value);
  if (!asString) {
    return [];
  }

  return asString
    .split(',')
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
};

const toImages = (value: unknown): Tour['images'] => {
  if (!Array.isArray(value)) {
    return [];
  }

  const images: Tour['images'] = [];

  for (const entry of value) {
    if (!entry || typeof entry !== 'object') {
      continue;
    }

    const image = entry as StoryblokAsset;

    images.push({
      original: image.filename ?? '',
      thumbnail: image.filename ?? '',
    });
  }

  return images;
};

const normalizeStory = (story: StoryblokStory, index: number): Tour => {
  const content = (story.content ?? {}) as Record<string, unknown>;
  const slug = readString(story.slug);
  const explicitBookName = readString(
    readField(content, ['bookName', 'book_name', 'slug'])
  );
  const bookName = explicitBookName || slug || `tour-${story.id ?? index + 1}`;

  const fallback =
    fallbackTours.find((tour) => tour.bookName === bookName) ??
    fallbackTours.find((tour) => tour.bookName === slug) ??
    fallbackTours[index] ??
    fallbackTours[0];

  console.log(fallback);

  const name = readString(readField(content, ['name', 'title'])) || readString(story.name) || fallback.name;
  const description =
    readString(readField(content, ['description', 'intro', 'summary'])) || fallback.description;
  const location = readLocation(
    readField(content, ['location', 'region']),
    fallback.location
  );
  const toBook = readBoolean(
    readField(content, ['toBook', 'to_book', 'available']),
    fallback.toBook
  );
  const price = readString(readField(content, ['price', 'pricing'])) || fallback.price;

  const included = toStringArray(readField(content, ['included', 'inclusions']));
  const landmarks = toStringArray(readField(content, ['landmarks', 'highlights']));
  const images = toImages(readField(content, ['images', 'gallery', 'media']));

  return {
    id: typeof story.id === 'number' ? story.id : fallback.id,
    name,
    bookName,
    location,
    toBook,
    description,
    landmarks: landmarks.length ? landmarks : [],
    included: included.length ? included : [],
    price,
    images: images.length ? images : [],
  };
};

const fetchToursFromStoryblok = async (): Promise<Tour[] | null> => {
  const api = getStoryblokApi();

  if (!api) {
    return null;
  }

  try {
    const response = await api.get('cdn/stories', {
      version: 'published',
      per_page: 100,
      sort_by: 'position:asc',
      content_type: 'tour',
    });
    const stories = Array.isArray(response.data?.stories)
      ? (response.data.stories as StoryblokStory[])
      : [];

    if (!stories.length) {
      return [];
    }

    const deduped = new Map<string, Tour>();

    stories.forEach((story, index) => {
      const tour = normalizeStory(story, index);
      deduped.set(tour.bookName, tour);
    });

    return Array.from(deduped.values());
  } catch (error) {
    console.warn('Storyblok request for tours failed.', error);
    return null;
  }
};

let cachedTours: Tour[] | null = null;

export const getTours = async (): Promise<Tour[]> => {
  if (cachedTours) {
    return cachedTours;
  }

  const storyblokTours = await fetchToursFromStoryblok();

  if (storyblokTours && storyblokTours.length) {
    cachedTours = storyblokTours;
    return cachedTours;
  }

  cachedTours = fallbackTours;
  return cachedTours;
};

export const getTourByBookName = async (bookName: string): Promise<Tour | undefined> => {
  const tours = await getTours();
  return tours.find((tour) => tour.bookName === bookName);
};

export type { Tour };
