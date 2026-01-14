import type { Faq } from '../types/faq';
import { getStoryblokApi } from '../lib/storyblok';
import { fallbackFaqs } from './staticFaqs';
import { readField, readString, type StoryblokStory } from './storyblokContent';

const normalizeStory = (story: StoryblokStory, index: number): Faq => {
  const content = (story.content ?? {}) as Record<string, unknown>;
  const question = readString(readField(content, ['question', 'title'])) || readString(story.name);
  const answer = readString(readField(content, ['answer', 'content', 'body']));

  return {
    id: typeof story.id === 'number' ? story.id : index + 1,
    question,
    answer,
  };
};

const fetchFaqsFromStoryblok = async (): Promise<Faq[] | null> => {
  const api = getStoryblokApi();

  if (!api) {
    return null;
  }

  try {
    const response = await api.get('cdn/stories', {
      version: 'published',
      per_page: 100,
      sort_by: 'position:asc',
      content_type: 'faq',
    });

    const stories = Array.isArray(response.data?.stories)
      ? (response.data.stories as StoryblokStory[])
      : [];

    if (!stories.length) {
      return [];
    }

    const faqs = stories
      .map((story, index) => normalizeStory(story, index))
      .filter((faq) => faq.question.length > 0 || faq.answer.length > 0);

    return faqs;
  } catch (error) {
    console.warn('Storyblok request for faqs failed.', error);
    return null;
  }
};

let cachedFaqs: Faq[] | null = null;

export const getFaqs = async (): Promise<Faq[]> => {
  if (cachedFaqs) {
    return cachedFaqs;
  }

  const storyblokFaqs = await fetchFaqsFromStoryblok();

  if (storyblokFaqs && storyblokFaqs.length) {
    cachedFaqs = storyblokFaqs;
    return cachedFaqs;
  }

  cachedFaqs = fallbackFaqs;
  return cachedFaqs;
};

export type { Faq };
