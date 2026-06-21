import React from 'react';

export const StoriesPage: React.FC = () => {
  return (
    <div>
      <div className="mb-stack-md">
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Historias</h1>
        <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">Narrativas capturadas mediante entrevistas o escritura. Donde la vida se convierte en legado.</p>
      </div>
      <div className="p-8 bg-paper-surface border border-border-subtle rounded-xl flex items-center justify-center min-h-[400px]">
        <p className="text-muted-ink font-body-lg">Próximamente: Tus historias aquí.</p>
      </div>
    </div>
  );
};
