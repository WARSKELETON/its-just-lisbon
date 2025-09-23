import { apiPlugin, storyblokInit, type StoryblokClient } from '@storyblok/js';

let cachedApi: StoryblokClient | null = null;

export const getStoryblokApi = (): StoryblokClient | null => {
  if (cachedApi) {
    return cachedApi;
  }

  const accessToken = import.meta.env.STORYBLOK_TOKEN;

  if (!accessToken) {
    return null;
  }

  const { storyblokApi } = storyblokInit({
    accessToken,
    use: [apiPlugin],
    bridge: false,
  });

  cachedApi = storyblokApi ?? null;
  return cachedApi;
};
