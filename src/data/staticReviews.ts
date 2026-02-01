import type { Review } from '../types/review';

const fallbackReviews: Review[] = [
  {
    uuid: '422afc6f-2d37-487f-bfc9-105603370cbe',
    name: 'Fam. de Jong',
    content:
      'Onze host dacht werkelijk aan alles. De toegang tot Pena Palace voordat iemand anders binnen was, voelde magisch. Elke minuut was perfect getimed.',
    tour: '3 nachten — Lissabon & Sintra',
    publishedAt: 'Mei 2024',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=160&h=160&q=80'
  },
  {
    uuid: '2f066722-91ef-435c-afe1-173d33573ba2',
    name: 'Sophie & Bram',
    content:
      'De persoonlijke aandacht van Just Lisbon is ongeëvenaard. Van privé-fado tot een helikoptertransfer naar Comporta: alles was naadloos geregeld.',
    tour: 'Weekend get-away',
    publishedAt: 'Maart 2024',
    avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=facearea&w=160&h=160&q=80'
  },
  {
    uuid: 'e08548ff-05c5-4494-8d83-806cdbedbcbf',
    name: 'Marc & Lotte',
    content:
      'We wilden een culinaire reis en kregen een ervaring voor alle zintuigen. Het team stond 24/7 klaar, zonder ooit opdringerig te zijn.',
    tour: 'Gastronomische tour',
    publishedAt: 'November 2023',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=160&h=160&q=80'
  }
];

export { fallbackReviews };
