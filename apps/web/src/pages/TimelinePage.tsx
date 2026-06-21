import React from 'react';

export const TimelinePage: React.FC = () => {
  return (
    <div>
      <div className="mb-stack-md">
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Línea de Tiempo</h1>
        <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">La representación cronológica de tu historia. Visualiza los momentos clave de tu vida y patrimonio.</p>
      </div>
      <div className="p-8 bg-paper-surface border border-border-subtle rounded-xl flex items-center justify-center min-h-[400px]">
        <p className="text-muted-ink font-body-lg">Tu historia se está construyendo...</p>
      </div>
    </div>
  );
};
