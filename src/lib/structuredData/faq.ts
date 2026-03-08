import type { FAQPage, WithContext } from 'schema-dts';
import type { Faq } from '../../types/faq';
import type { TourFaq } from '../../types/tour';

export const buildFaqJsonLd = (faqs: Faq[] | TourFaq[]): WithContext<FAQPage> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
