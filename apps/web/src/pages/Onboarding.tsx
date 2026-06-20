import React from 'react';

export const Onboarding: React.FC = () => {
  return (
    <div className="bg-paper-surface min-h-screen flex flex-col font-body-md text-body-md text-on-surface selection:bg-heritage-gold selection:text-white">
      <nav className="bg-background flex justify-center items-center py-8 w-full max-w-container-max mx-auto px-gutter sticky top-0 z-50">
        <span className="font-headline-md text-headline-md text-ink-text tracking-tight">Legado</span>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center px-gutter py-stack-lg">
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-stack-sm">
            ¿Qué deseas preservar?
          </h1>
          <p className="font-body-lg text-body-lg text-muted-ink mb-stack-lg max-w-2xl">
            Comienza a estructurar tu legado seleccionando el área que deseas documentar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <button className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
              <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="edit">edit</span>
              <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Historia personal</span>
            </button>
            <button className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
              <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="family_home">family_home</span>
              <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Historia familiar</span>
            </button>
            <button className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
              <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="domain">domain</span>
              <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Historia empresarial</span>
            </button>
            <button className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
              <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="menu_book">menu_book</span>
              <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Conocimiento profesional</span>
            </button>
          </div>
          <button className="mt-12 font-label-md text-label-md text-muted-ink hover:text-ink-text transition-colors duration-200 underline focus:outline-none">
            Otro
          </button>
        </div>
      </main>
      <footer className="bg-background flex flex-col md:flex-row justify-between items-center py-stack-md w-full max-w-container-max mx-auto px-gutter mt-stack-lg border-t border-border-subtle">
        <span className="font-headline-md text-headline-md text-ink-text mb-4 md:mb-0">Legado</span>
        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Privacy</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Terms</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Archive</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Contact</a>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-right">
          © 2024 Legado. Preserving the essence of human thought.
        </p>
      </footer>
    </div>
  );
};
