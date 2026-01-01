import type { FC } from 'react';
import type { Tour } from '../types/tour';

interface HeroProps {
  featuredTour: Tour;
}

const DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070';

const Hero: FC<HeroProps> = ({ featuredTour }) => {
  const heroImage = featuredTour.images[0]?.original || DEFAULT_HERO_IMAGE;

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-slate/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-center">
          <div className="space-y-10">
            <h1 className="font-display text-4xl leading-tight text-bone md:text-6xl md:leading-[1.05]">
              Op maat gemaakte luxe tours in Lissabon &amp; Sintra voor de veeleisende reiziger.
            </h1>
            <p className="max-w-2xl text-lg text-bone/75 md:text-xl">
              Beleef de ziel van Portugal met een privéconciërge, selecteerde chauffeurs en exclusieve toegang tot locaties die normaal verborgen blijven voor het publiek.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#tours"
                className="group inline-flex items-center justify-center rounded-full border border-transparent bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-midnight transition hover:bg-champagne"
              >
                Ontdek tours
              </a>
            </div>
            <dl className="grid gap-6 text-sm uppercase tracking-[0.3em] text-bone/50 sm:grid-cols-3">
              <div>
                <dt className="text-bone/40">Sinds</dt>
                <dd className="mt-2 text-2xl font-semibold text-bone">2012</dd>
              </div>
              <div>
                <dt className="text-bone/40">Ervaren hosts</dt>
                <dd className="mt-2 text-2xl font-semibold text-bone">14</dd>
              </div>
              <div>
                <dt className="text-bone/40">Gastbeoordeling</dt>
                <dd className="mt-2 text-2xl font-semibold text-bone">9.8/10</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-[32px] border border-bone/10 bg-slate/30 shadow-glow">
              <img
                src={heroImage}
                alt={`${featuredTour.name} — ${featuredTour.location === 'lisbon' ? 'Lissabon' : 'Sintra'}`}
                className="h-full w-full object-cover brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 space-y-2 text-left">
                <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-bone/70 backdrop-blur">
                  {featuredTour.location === 'lisbon' ? 'Lisboa' : 'Sintra'}
                </span>
                <p className="max-w-xs font-display text-2xl text-bone">{featuredTour.name}</p>
              </div>
            </div>
            <div className="relative rounded-[28px] border border-bone/10 bg-slate/40 p-8 shadow-glow">
              <header className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-bone/60">Private signature</p>
              </header>
              <h2 className="mt-6 font-display text-2xl text-bone">{featuredTour.name}</h2>
              <ul className="mt-8 space-y-4 text-sm text-bone/60">
                {featuredTour.included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-center justify-between border-t border-bone/10 pt-6 text-sm">
                <span className="font-semibold text-bone">{featuredTour.price}</span>
                <a href="#contact" className="text-xs uppercase tracking-[0.3em] text-accent hover:text-champagne">
                  {featuredTour.toBook ? 'Reserveer nu' : 'Vraag beschikbaarheid'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
