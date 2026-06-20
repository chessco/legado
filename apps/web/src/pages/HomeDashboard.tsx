import React from 'react';

export const HomeDashboard: React.FC = () => {
  return (
    <>
      {/* Canvas */}
      <div className="flex flex-col gap-stack-lg pb-24">
        {/* Welcome Header */}
        <section className="mt-8">
          <h2 className="font-headline-xl text-headline-xl text-ink-text">Buenas noches, Mateo.</h2>
          <p className="font-headline-md text-headline-md text-muted-ink mt-2">Tu legado sigue creciendo.</p>
        </section>

        {/* Metrics Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Metric Card 1 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Historias</span>
              <span className="material-symbols-outlined text-ink-text opacity-50">auto_stories</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">42</span>
              <span className="font-label-sm text-muted-ink mt-1 block">capturadas</span>
            </div>
          </div>
          {/* Metric Card 2 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Grabación</span>
              <span className="material-symbols-outlined text-ink-text opacity-50">mic</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">18.5</span>
              <span className="font-label-sm text-muted-ink mt-1 block">horas totales</span>
            </div>
          </div>
          {/* Metric Card 3 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Documentos</span>
              <span className="material-symbols-outlined text-ink-text opacity-50">description</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">124</span>
              <span className="font-label-sm text-muted-ink mt-1 block">almacenados</span>
            </div>
          </div>
          {/* Metric Card 4 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Red</span>
              <span className="material-symbols-outlined text-ink-text opacity-50">group</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">8</span>
              <span className="font-label-sm text-muted-ink mt-1 block">personas</span>
            </div>
          </div>
          {/* Metric Card 5: Progress */}
          <div className="bg-ink-text text-white p-6 flex flex-col justify-between relative overflow-hidden rounded">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "16px 16px" }}></div>
            <div className="relative z-10 flex items-center justify-between mb-2">
              <span className="font-label-sm uppercase tracking-wider text-primary-fixed-dim">Progreso</span>
              <span className="material-symbols-outlined text-heritage-gold">military_tech</span>
            </div>
            <div className="relative z-10 flex items-end justify-between mt-auto">
              <div>
                <span className="font-headline-lg text-headline-lg text-white block">65%</span>
                <span className="font-label-sm text-primary-fixed-dim mt-1 block">fase actual</span>
              </div>
              {/* Simple visual progress indicator */}
              <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center relative">
                <svg className="w-full h-full -rotate-90 absolute" viewBox="0 0 36 36">
                  <path className="text-heritage-gold" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="65, 100" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Content Widgets Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column: Recent Activity & Active Projects */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Proyectos Activos */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-2 w-full flex justify-between">
                  Proyectos activos
                  <button className="text-muted-ink hover:text-ink-text text-label-sm font-label-sm uppercase tracking-wider flex items-center gap-1">Ver todos <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project Card 1 */}
                <div className="bg-surface border border-border-subtle p-6 hover:border-ink-text/30 transition-colors cursor-pointer group rounded">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-border-subtle">
                      <span className="material-symbols-outlined text-ink-text text-[20px]">account_tree</span>
                    </div>
                    <span className="px-2 py-1 bg-surface-container-low border border-border-subtle font-label-sm text-muted-ink text-[10px] uppercase rounded">En curso</span>
                  </div>
                  <h4 className="font-headline-md text-[20px] text-ink-text mb-2 group-hover:text-heritage-gold transition-colors">Historia Familiar de los García</h4>
                  <p className="text-muted-ink font-body-md text-[14px] line-clamp-2">Recopilación de documentos y fotografías desde la llegada a Veracruz en 1920.</p>
                  <div className="mt-6 w-full bg-surface-container-high h-1 rounded">
                    <div className="bg-ink-text h-1 w-3/4 rounded"></div>
                  </div>
                </div>
                {/* Project Card 2 */}
                <div className="bg-surface border border-border-subtle p-6 hover:border-ink-text/30 transition-colors cursor-pointer group rounded">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-border-subtle">
                      <span className="material-symbols-outlined text-ink-text text-[20px]">folder_special</span>
                    </div>
                    <span className="px-2 py-1 bg-surface-container-low border border-border-subtle font-label-sm text-muted-ink text-[10px] uppercase rounded">Revisión</span>
                  </div>
                  <h4 className="font-headline-md text-[20px] text-ink-text mb-2 group-hover:text-heritage-gold transition-colors">Archivo Profesional 1990-2020</h4>
                  <p className="text-muted-ink font-body-md text-[14px] line-clamp-2">Digitalización de notas de campo, diarios y correspondencia académica.</p>
                  <div className="mt-6 w-full bg-surface-container-high h-1 rounded">
                    <div className="bg-ink-text h-1 w-1/3 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actividad Reciente */}
            <div className="mt-4">
              <h3 className="font-headline-md text-headline-md text-ink-text border-b border-border-subtle pb-2 mb-6">Actividad reciente</h3>
              <div className="flex flex-col relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-border-subtle">
                {/* Timeline Item 1 */}
                <div className="flex gap-6 mb-6 relative">
                  <div className="w-6 h-6 rounded-full bg-paper-surface border-2 border-heritage-gold z-10 flex-shrink-0 mt-1"></div>
                  <div className="flex-1 bg-surface border border-border-subtle p-4 hover:bg-surface-container-low transition-colors rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-label-md font-medium text-ink-text">Entrevista con abuelo Juan grabada</span>
                      <span className="font-label-sm text-muted-ink">Hoy, 10:30 AM</span>
                    </div>
                    <p className="text-muted-ink font-body-md text-[14px]">Sesión de 45 minutos. Etiquetada bajo 'Infancia' y 'Guerra Civil'.</p>
                  </div>
                </div>
                {/* Timeline Item 2 */}
                <div className="flex gap-6 mb-6 relative">
                  <div className="w-6 h-6 rounded-full bg-paper-surface border-2 border-border-subtle z-10 flex-shrink-0 mt-1"></div>
                  <div className="flex-1 bg-surface border border-border-subtle p-4 hover:bg-surface-container-low transition-colors rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-label-md font-medium text-ink-text">Documento de herencia subido</span>
                      <span className="font-label-sm text-muted-ink">Ayer</span>
                    </div>
                    <p className="text-muted-ink font-body-md text-[14px]">PDF escaneado. 12 páginas. Pendiente de transcripción.</p>
                  </div>
                </div>
                {/* Timeline Item 3 */}
                <div className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-paper-surface border-2 border-border-subtle z-10 flex-shrink-0 mt-1"></div>
                  <div className="flex-1 bg-surface border border-border-subtle p-4 hover:bg-surface-container-low transition-colors rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-label-md font-medium text-ink-text">Nueva persona añadida: Tía Carmen</span>
                      <span className="font-label-sm text-muted-ink">Lun, 14 Mar</span>
                    </div>
                    <p className="text-muted-ink font-body-md text-[14px]">Árbol genealógico actualizado. Rama materna.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column: Próximas Entrevistas */}
          <div className="lg:col-span-1">
            <div className="bg-surface-bright border border-border-subtle p-6 sticky top-24 rounded">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-ink-text">calendar_today</span>
                <h3 className="font-headline-md text-[20px] text-ink-text">Próximas entrevistas</h3>
              </div>
              <div className="flex flex-col gap-4">
                {/* Schedule Item 1 */}
                <div className="border border-border-subtle bg-paper-surface p-4 border-l-4 border-l-heritage-gold rounded-r">
                  <div className="font-label-sm text-heritage-gold uppercase tracking-wider mb-2">Mañana, 16:00 h</div>
                  <h4 className="font-label-md text-ink-text font-semibold mb-1">Memorias Universitarias</h4>
                  <p className="text-muted-ink font-body-md text-[13px] flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Dr. Roberto Silva
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 border border-border-subtle py-1.5 text-label-sm font-label-sm hover:bg-surface-container-low transition-colors rounded">Reprogramar</button>
                    <button className="flex-1 bg-ink-text text-white py-1.5 text-label-sm font-label-sm hover:bg-opacity-90 transition-colors rounded">Iniciar</button>
                  </div>
                </div>
                {/* Schedule Item 2 */}
                <div className="border border-border-subtle bg-paper-surface p-4 rounded">
                  <div className="font-label-sm text-muted-ink uppercase tracking-wider mb-2">Jueves, 24 Mar - 10:00 h</div>
                  <h4 className="font-label-md text-ink-text font-semibold mb-1">Recetas de la Abuela (Parte 2)</h4>
                  <p className="text-muted-ink font-body-md text-[13px] flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Marta García
                  </p>
                  <button className="w-full border border-border-subtle py-1.5 text-label-sm font-label-sm text-muted-ink hover:bg-surface-container-low transition-colors rounded">Ver detalles</button>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border border-dashed border-border-subtle text-muted-ink font-label-sm uppercase tracking-wider hover:border-ink-text hover:text-ink-text transition-colors flex items-center justify-center gap-2 rounded">
                <span className="material-symbols-outlined text-[16px]">add</span>
                Agendar sesión
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
