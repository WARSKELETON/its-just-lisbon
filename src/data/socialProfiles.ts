export type SocialProfile = {
  name: 'Instagram' | 'Facebook';
  handle: string;
  href: string;
};

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: 'Instagram',
    handle: '@just.lisbon',
    href: 'https://www.instagram.com/just.lisbon/',
  },
  {
    name: 'Facebook',
    handle: 'renatevicente.hv',
    href: 'https://www.facebook.com/renatevicente.hv/',
  },
];
