import type { FC } from 'react';
import type { Review } from '../types/review';

type TestimonialsProps = {
  reviews: Review[];
};

const Testimonials: FC<TestimonialsProps> = ({ reviews }) => {
  if (!reviews.length) {
    return null;
  }

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
          {reviews.map((item) => (
            <figure
              key={item.id}
              className="flex h-full flex-col gap-6 rounded-3xl border border-bone/10 bg-slate/25 p-8 backdrop-blur-md transition hover:border-accent/50"
            >
              <div className="flex items-center gap-4">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={item.origin ? `${item.name} uit ${item.origin}` : item.name}
                    className="h-16 w-16 rounded-full border border-bone/20 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/20 bg-bone/10 text-sm font-semibold text-bone/70">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div className="space-y-1">
                  <div className="font-semibold text-bone">{item.name}</div>
                  {item.origin ? (
                    <div className="text-xs uppercase tracking-[0.3em] text-bone/60">{item.origin}</div>
                  ) : null}
                  {item.publishedAt ? (
                    <div className="text-[0.65rem] uppercase tracking-[0.28em] text-bone/40">{item.publishedAt}</div>
                  ) : null}
                </div>
              </div>
              {item.content ? (
                <blockquote className="flex-1 text-sm text-bone/75">“{item.content}”</blockquote>
              ) : null}
              {item.tour ? (
                <figcaption className="border-t border-bone/10 pt-6 text-xs uppercase tracking-[0.3em] text-bone/50">
                  <div>{item.tour}</div>
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
