import type { TravelAgency, WithContext } from 'schema-dts';
import { SOCIAL_PROFILES } from '../../data/socialProfiles';

type OrganizationOptions = {
  siteUrl?: URL;
  logoUrl?: string;
};

export const buildOrganizationData = (
  options: OrganizationOptions = {}
): TravelAgency & object => {
  const { siteUrl, logoUrl } = options;

  return {
    '@type': 'TravelAgency',
    '@id': siteUrl?.href ?? 'https://www.just-lisbon.com',
    name: 'Just Lisbon',
    url: siteUrl?.href ?? 'https://www.just-lisbon.com',
    sameAs: SOCIAL_PROFILES.map((profile) => profile.href),
    logo: logoUrl,
    email: 'renatevicente@gmail.com',
    areaServed: ['Lisboa', 'Sintra'],
    address: {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
    }
  };
};

export const buildOrganizationJsonLd = (
  options: OrganizationOptions = {}
): WithContext<TravelAgency> => {
  const organization = buildOrganizationData(options);

  return {
    '@context': 'https://schema.org',
    ...organization,
  };
};
