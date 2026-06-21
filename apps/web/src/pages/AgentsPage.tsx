import React from 'react';

export const AgentsPage: React.FC = () => {
  return (
    <div>
      <div className="mb-stack-md flex justify-between items-start">
        <div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Agentes</h1>
          <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">Tu conocimiento puede seguir ayudando a otros. Entrena agentes con tu legado.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-muted-ink">filter_list</span>
          <select className="border border-border-subtle rounded-lg p-2 bg-surface text-body-sm font-body-sm focus:outline-none focus:border-heritage-gold">
            <option value="all">Todos los idiomas de entrenamiento</option>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-paper-surface border border-border-subtle rounded-xl flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h3 className="font-headline-md text-ink-text">Agente Mentor Familiar</h3>
            <span className="px-2 py-1 bg-surface-container-low rounded text-xs font-semibold text-ink-text border border-border-subtle">
              Activo
            </span>
          </div>
          <p className="text-muted-ink font-body-md">Responde preguntas basadas en la historia y los valores de la familia.</p>
          
          <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col gap-2">
            <h4 className="font-label-sm uppercase tracking-wider text-muted-ink mb-1">Configuración Lingüística</h4>
            <div className="flex items-center justify-between">
              <span className="font-body-sm text-ink-text">Idioma Base:</span>
              <span className="font-label-sm text-ink-text font-semibold flex items-center gap-1">🇲🇽 Español (México)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body-sm text-ink-text">Idiomas Disponibles:</span>
              <div className="flex gap-1">
                <span className="px-2 py-0.5 bg-surface-container-lowest border border-border-subtle rounded text-[10px] font-semibold">ES</span>
                <span className="px-2 py-0.5 bg-surface-container-lowest border border-border-subtle rounded text-[10px] font-semibold">EN</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-ink flex items-start gap-1">
              <span className="material-symbols-outlined text-[14px]">translate</span>
              <span>Capacidad de responder en múltiples idiomas manteniendo el conocimiento original intacto.</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-surface border border-dashed border-border-subtle rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-heritage-gold transition-colors">
          <span className="material-symbols-outlined text-[32px] text-muted-ink">add_circle</span>
          <p className="text-ink-text font-label-md uppercase tracking-wider">Entrenar Nuevo Agente</p>
        </div>
      </div>
    </div>
  );
};

