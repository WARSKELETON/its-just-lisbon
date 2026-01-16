import type { FC } from 'react';

interface NavigationProps {
  variant?: 'default' | 'hero';
}

const Navigation: FC<NavigationProps> = ({ variant = 'default' }) => {
  const headerClasses =
    variant === 'hero'
      ? 'fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-sm'
      : 'fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-md';

  return (
    <header className={headerClasses}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="font-display text-xl text-bone">
          Just Lisbon
        </a>
        <div className="hidden items-center gap-8 text-[0.7rem] uppercase tracking-[0.35em] text-bone/60 md:flex">
          <a href="/#tours" className="transition hover:text-accent">
            Toers
          </a>
          <a href="/#contact" className="transition hover:text-accent">
            Boek Een Toer
          </a>
        </div>
        <a
          href="/#contact"
          className="hidden rounded-full border border-accent/40 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-accent transition hover:border-accent md:inline-flex"
        >
          Boek Nu
        </a>
        <button
          className="inline-flex items-center rounded-full border border-bone/20 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-bone/60 transition hover:text-accent md:hidden"
          type="button"
        >
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
