import React from 'react';

export const PersonsPage: React.FC = () => {
  return (
    <div>
      <div className="mb-stack-md">
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Personas</h1>
        <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">Familiares, amigos, socios y mentores que forman parte de tu patrimonio intelectual.</p>
      </div>
      <div className="p-8 bg-paper-surface border border-border-subtle rounded-xl flex items-center justify-center min-h-[400px]">
        <p className="text-muted-ink font-body-lg">Próximamente: Las personas de tu legado.</p>
      </div>
    </div>
  );
};
