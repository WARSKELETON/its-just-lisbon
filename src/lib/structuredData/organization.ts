import type { TravelAgency, WithContext } from 'schema-dts';

type OrganizationOptions = {
  siteUrl?: URL;
  logoUrl?: string;
};

type OrganizationData = {
  '@type': 'TravelAgency';
  '@id'?: string;
  name: string;
  url: string;
  logo?: string;
  email: string;
  telephone: string;
  areaServed: string[];
};

export const buildOrganizationData = (
  options: OrganizationOptions = {}
): OrganizationData => {
  const { siteUrl, logoUrl } = options;

  return {
    '@type': 'TravelAgency',
    '@id': siteUrl?.href ?? 'https://www.just-lisbon.com',
    name: 'Just Lisbon',
    url: siteUrl?.href ?? 'https://www.just-lisbon.com',
    logo: logoUrl,
    email: 'concierge@justlisbon.pt',
    telephone: '+351 912 345 678',
    areaServed: ['Lisboa', 'Sintra'],
  } satisfies TravelAgency;
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
