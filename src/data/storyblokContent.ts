type StoryblokStory = {
  id?: number;
  name?: string;
  slug?: string;
  content?: Record<string, unknown>;
};

type StoryblokAsset = {
  filename?: string;
};

const readString = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : '';

const readAsset = (value: unknown): string => {
  if (!value) {
    return '';
  }

  if (typeof value === 'string') {
    return value.trim();
  }

  if (typeof value === 'object') {
    const asset = value as StoryblokAsset;

    if (asset.filename) {
      return asset.filename;
    }
  }

  return '';
};

const readField = (content: Record<string, unknown>, keys: string[]): unknown => {
  for (const key of keys) {
    if (key in content) {
      return content[key];
    }
  }
  return undefined;
};

export type { StoryblokAsset, StoryblokStory };
export { readAsset, readField, readString };
