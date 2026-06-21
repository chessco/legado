import React from 'react';

export const CuratorsPage: React.FC = () => {
  return (
    <div>
      <div className="mb-stack-md flex justify-between items-start">
        <div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Curadores</h1>
          <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">Historiadores, genealogistas y editores que te ayudarán a estructurar tu legado.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-muted-ink">filter_list</span>
          <select className="border border-border-subtle rounded-lg p-2 bg-surface text-body-sm font-body-sm focus:outline-none focus:border-heritage-gold">
            <option value="all">Idiomas del Curador</option>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="pt">Portugués</option>
            <option value="fr">Francés</option>
          </select>
        </div>
      </div>
      <div className="p-8 bg-paper-surface border border-border-subtle rounded-xl flex items-center justify-center min-h-[400px]">
        <p className="text-muted-ink font-body-lg">Próximamente: Expertos a tu disposición, filtrados por idioma.</p>
      </div>
    </div>
  );
};

