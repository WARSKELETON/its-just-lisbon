import type { Review } from '../types/review';
import { getStoryblokApi } from '../lib/storyblok';
import { fallbackReviews } from './staticReviews';
import {
  readAsset,
  readField,
  readString,
  type StoryblokStory,
} from './storyblokContent';

const formatPublishedAt = (value: unknown): string => {
  const raw = readString(value);
  if (!raw) {
    return '';
  }

  const parsed = new Date(raw);

  if (Number.isNaN(parsed.getTime())) {
    return raw;
  }

  return new Intl.DateTimeFormat('nl-NL', {
    month: 'long',
    year: 'numeric',
  }).format(parsed);
};

const normalizeStory = (story: StoryblokStory, index: number): Review => {
  const content = (story.content ?? {}) as Record<string, unknown>;
  const name = readString(readField(content, ['name'])) || readString(story.name) || `Review ${index + 1}`;
  const reviewContent = readString(readField(content, ['content']));
  const avatar = readAsset(readField(content, ['avatar']));
  const publishedAt = formatPublishedAt(readField(content, ['published_at', 'publishedAt', 'date']));
  const tour = readString(readField(content, ['tour']));
  const origin = readString(readField(content, ['origin']));

  return {
    id: typeof story.id === 'number' ? story.id : index + 1,
    name,
    content: reviewContent,
    avatar,
    publishedAt,
    tour,
    origin,
  };
};

const fetchReviewsFromStoryblok = async (): Promise<Review[] | null> => {
  const api = getStoryblokApi();

  if (!api) {
    return null;
  }

  try {
    const response = await api.get('cdn/stories', {
      version: 'published',
      per_page: 100,
      sort_by: 'content.published_at:desc',
      content_type: 'review',
    });

    const stories = Array.isArray(response.data?.stories)
      ? (response.data.stories as StoryblokStory[])
      : [];

    if (!stories.length) {
      return [];
    }

    const reviews = stories
      .map((story, index) => normalizeStory(story, index))
      .filter((review) => review.name.length > 0 || review.content.length > 0);

    return reviews;
  } catch (error) {
    console.warn('Storyblok request for reviews failed.', error);
    return null;
  }
};

let cachedReviews: Review[] | null = null;

export const getReviews = async (): Promise<Review[]> => {
  if (cachedReviews) {
    return cachedReviews;
  }

  const storyblokReviews = await fetchReviewsFromStoryblok();

  if (storyblokReviews && storyblokReviews.length) {
    cachedReviews = storyblokReviews;
    return cachedReviews;
  }

  cachedReviews = fallbackReviews;
  return cachedReviews;
};

export type { Review };
