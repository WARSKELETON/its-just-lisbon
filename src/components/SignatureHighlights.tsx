import type { FC } from 'react';

const highlights = [
  {
    title: 'Privéchauffeur & conciërge',
    description:
      'Nederlandstalige hosts en ervaren chauffeurs zorgen voor een discretieus en naadloos verloop van elke tour.',
    metric: '24/7',
    meta: 'Beschikbaar'
  },
  {
    title: 'Toegang tot verborgen locaties',
    description:
      'Van privébezoeken aan Palácio da Pena voor openingstijd tot exclusieve rooftop-sessies in de Bairro Alto.',
    metric: '18+',
    meta: 'Partners'
  },
  {
    title: 'Op maat gemaakte gastronomie',
    description:
      'Chef-curated tasting menu’s, signature cocktails en wijnpairings geselecteerd door onze sommeliers.',
    metric: 'Michelin',
    meta: 'Samenwerkingen'
  }
];

const SignatureHighlights: FC = () => {
  return (
    <section id="waarden" className="relative border-t border-bone/10 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-bone/40">Uw ervaring</p>
        <h2 className="mt-6 font-display text-3xl text-bone md:text-4xl">
          Persoonlijk ontworpen, met aandacht voor ieder detail.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-bone/70">
          Wij creëren een verhaal rond uw verblijf: privégalerijen, charters, slow travel en culinaire parels samengebracht in één zorgeloos programma.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-bone/10 bg-slate/30 px-8 py-10 text-left transition hover:border-accent/50 hover:shadow-glow"
            >
              <header>
                <span className="text-xs uppercase tracking-[0.35em] text-bone/50">{item.meta}</span>
                <h3 className="mt-4 font-display text-2xl text-bone">{item.title}</h3>
                <p className="mt-4 text-sm text-bone/70">{item.description}</p>
              </header>
              <div className="mt-8 text-right">
                <span className="font-display text-3xl text-accent">{item.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureHighlights;
