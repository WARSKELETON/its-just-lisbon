import type { FC } from 'react';
import heroImage from '../images/hero-centered.jpg';

const Hero: FC = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImage.src}
        width={heroImage.width}
        height={heroImage.height}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center px-6 py-32 text-center lg:px-8">
        <div className="space-y-10">
          <h1 className="font-display text-4xl leading-tight text-bone md:text-6xl md:leading-[1.05]">
            Voor wie Lissabon &amp; Sintra op een unieke en gezellige manier wil ontdekken
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-bone/80 md:text-xl">
            Beleef de ziel van Portugal met een Nederlandse privé gids, waarbij je op ontspannen
            wijze door de Portugese geschiedenis loopt, met her en der een verrassend verhaal, een prachtig
            uitzichtpunt, insider tips en altijd een gezellig terras voor een drankje.
            Met Just Lisbon bekijk je de stad met andere ogen
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#tours"
              className="group inline-flex items-center justify-center rounded-full border border-transparent bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-midnight transition hover:text-midnight hover:bg-champagne"
            >
              Toon Mij Alle Toers
            </a>
          </div>
          <dl className="grid gap-6 text-sm uppercase tracking-[0.3em] text-bone/60 sm:grid-cols-3">
            <div>
              <dt className="text-bone/50">Sinds</dt>
              <dd className="mt-2 text-2xl font-semibold text-bone">2014</dd>
            </div>
            <div>
              <dt className="text-bone/50">Ervaren hosts</dt>
              <dd className="mt-2 text-2xl font-semibold text-bone">14</dd>
            </div>
            <div>
              <dt className="text-bone/50">Gastbeoordeling</dt>
              <dd className="mt-2 text-2xl font-semibold text-bone">Een topgids</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
