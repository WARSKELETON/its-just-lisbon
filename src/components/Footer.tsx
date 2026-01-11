import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="border-t border-bone/10 bg-black/40 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm text-bone/50 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-display text-xl text-bone">Just Lisbon</span>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-bone/40">Luxe tours • Lissabon &amp; Sintra</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="#tours" className="uppercase tracking-[0.3em] transition hover:text-accent">
            Signature tours
          </a>
          <a href="#contact" className="uppercase tracking-[0.3em] transition hover:text-accent">
            Concierge
          </a>
        </div>
        <div className="space-y-1 text-right text-xs">
          <p>RNAAT 259/2022</p>
          <p>+351 912 345 678 • concierge@justlisbon.pt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
