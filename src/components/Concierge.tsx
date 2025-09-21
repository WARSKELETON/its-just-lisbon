import type { FC } from 'react';

const Concierge: FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-bone/10 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate/40 via-transparent to-slate/20" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-bone/10 bg-slate/30 p-10 backdrop-blur-xl lg:p-16">
        <header className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-bone/40">Travel concierge</p>
          <h2 className="font-display text-4xl text-bone md:text-5xl">Uw persoonlijke Lisbon curator staat klaar.</h2>
          <p className="text-bone/70">
            Deel uw reiswensen en wij ontwerpen een voorstel binnen 24 uur. Volledig flexibel, met advies vanuit ons team in het hart van Lissabon.
          </p>
        </header>
        <form
          className="mt-12 grid gap-6 md:grid-cols-2"
          action="https://formspree.io/f/mknlzjqn"
          method="POST"
        >
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-bone/50">
            Naam
            <input
              type="text"
              name="naam"
              required
              placeholder="Bijv. Sophie van Dijk"
              className="rounded-2xl border border-bone/20 bg-midnight/80 px-5 py-4 text-sm text-bone placeholder:text-bone/30 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-bone/50">
            E-mail
            <input
              type="email"
              name="email"
              required
              placeholder="uw@email.nl"
              className="rounded-2xl border border-bone/20 bg-midnight/80 px-5 py-4 text-sm text-bone placeholder:text-bone/30 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-bone/50">
            Reisperiode
            <input
              type="text"
              name="periode"
              placeholder="Bijv. 14-19 september"
              className="rounded-2xl border border-bone/20 bg-midnight/80 px-5 py-4 text-sm text-bone placeholder:text-bone/30 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-bone/50">
            Aantal gasten
            <input
              type="number"
              name="gasten"
              min="1"
              placeholder="2"
              className="rounded-2xl border border-bone/20 bg-midnight/80 px-5 py-4 text-sm text-bone placeholder:text-bone/30 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="md:col-span-2 flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-bone/50">
            Vertel ons meer
            <textarea
              name="verzoek"
              rows={4}
              placeholder="Specifieke interesses, gelegenheden of wensen"
              className="rounded-2xl border border-bone/20 bg-midnight/80 px-5 py-4 text-sm text-bone placeholder:text-bone/30 focus:border-accent focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="md:col-span-2 inline-flex h-14 items-center justify-center rounded-full border border-transparent bg-accent px-10 text-sm font-semibold uppercase tracking-[0.3em] text-midnight transition hover:bg-champagne"
          >
            Verstuur mijn verzoek
          </button>
          <p className="md:col-span-2 text-[0.65rem] uppercase tracking-[0.25em] text-bone/40">
            * Wij nemen binnen 24 uur contact met u op met een eerste voorstel.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Concierge;
