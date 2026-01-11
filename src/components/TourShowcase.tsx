import type { FC } from 'react';
import type { Tour } from '../types/tour';

const locationLabels: Record<Tour['location'], string> = {
  lisbon: 'Lissabon',
  sintra: 'Sintra',
};

interface TourShowcaseProps {
  tours: Tour[];
}

const DEFAULT_CARD_IMAGE = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070';

const TourShowcase: FC<TourShowcaseProps> = ({ tours }) => {
  return (
    <section id="tours" className="relative border-t border-bone/10 py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-56 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-bone/40">Signature tours</p>
            <h2 className="mt-6 font-display text-3xl text-bone md:text-4xl">
              De essentie van Lissabon &amp; Sintra in negen zorgvuldig samengestelde ervaringen.
            </h2>
            <p className="mt-4 text-sm text-bone/70">
              Combineer wandelingen door volksbuurten en culinaire hotspots met exclusieve Sintra-landgoederen. Onze selectie is ontworpen voor kleine gezelschappen die Nederlandstalige begeleiding waarderen.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => {
            return (
              <article
                key={tour.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-bone/10 bg-slate/30 transition hover:border-accent/60 hover:shadow-glow"
              >
                <div className="relative">
                  <img
                    src={tour.images[0]?.original || DEFAULT_CARD_IMAGE}
                    alt={`${tour.name} — ${locationLabels[tour.location]}`}
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-bone/70 backdrop-blur">
                      {locationLabels[tour.location]}
                    </span>
                    <h3 className="font-display text-2xl text-bone md:text-3xl">{tour.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 px-8 py-8">
                  <header className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.28em] text-bone/50">
                      <span className="rounded-full border border-bone/20 px-4 py-1">
                        {tour.included.length} inclusies
                      </span>
                    </div>
                  </header>
                  <ul className="space-y-3 text-sm text-bone/70">
                    {tour.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-4 border-t border-bone/10 pt-6 text-sm">
                    <span className="font-semibold text-bone whitespace-pre-line">{tour.price}</span>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em]">
                      <a href={`/tours/${tour.bookName}`} className="text-bone/60 transition hover:text-champagne">
                        Bekijk details
                      </a>
                      <a href="#contact" className="text-accent transition hover:text-champagne">
                        {tour.toBook ? 'Reserveer nu' : 'Informeer naar opties'}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourShowcase;
