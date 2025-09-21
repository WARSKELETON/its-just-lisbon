import type { FC } from 'react';

type Testimonial = {
  guest: string;
  origin: string;
  quote: string;
  stay: string;
  tourDate: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    guest: 'Fam. de Jong',
    origin: 'Amsterdam',
    quote:
      'Onze host dacht werkelijk aan alles. De toegang tot Pena Palace voordat iemand anders binnen was, voelde magisch. Elke minuut was perfect getimed.',
    stay: '3 nachten — Lissabon & Sintra',
    tourDate: 'Mei 2024',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=160&h=160&q=80'
  },
  {
    guest: 'Sophie & Bram',
    origin: 'Rotterdam',
    quote:
      'De persoonlijke aandacht van Just Lisbon is ongeëvenaard. Van privé-fado tot een helikoptertransfer naar Comporta: alles was naadloos geregeld.',
    stay: 'Weekend get-away',
    tourDate: 'Maart 2024',
    avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=facearea&w=160&h=160&q=80'
  },
  {
    guest: 'Marc & Lotte',
    origin: 'Utrecht',
    quote:
      'We wilden een culinaire reis en kregen een ervaring voor alle zintuigen. Het team stond 24/7 klaar, zonder ooit opdringerig te zijn.',
    stay: 'Gastronomische tour',
    tourDate: 'November 2023',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=160&h=160&q=80'
  }
];

const Testimonials: FC = () => {
  return (
    <section className="relative border-t border-bone/10 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-bone/40">Ervaringen</p>
          <h2 className="mt-6 font-display text-3xl text-bone md:text-4xl">Verhalen van gasten die vertrouwen op onze lokale expertise.</h2>
          <p className="mt-4 text-sm text-bone/70">
            Onze gasten kiezen voor rust, discretie en authenticiteit. Hun woorden vertellen het verhaal beter dan wij ooit zouden kunnen.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.guest}
              className="flex h-full flex-col gap-6 rounded-3xl border border-bone/10 bg-slate/25 p-8 backdrop-blur-md transition hover:border-accent/50"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={`${item.guest} uit ${item.origin}`}
                  className="h-16 w-16 rounded-full border border-bone/20 object-cover"
                  loading="lazy"
                />
                <div className="space-y-1">
                  <div className="font-semibold text-bone">{item.guest}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-bone/60">{item.origin}</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/40">{item.tourDate}</div>
                </div>
              </div>
              <blockquote className="flex-1 text-sm text-bone/75">“{item.quote}”</blockquote>
              <figcaption className="border-t border-bone/10 pt-6 text-xs uppercase tracking-[0.3em] text-bone/50">
                <div>{item.stay}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
