import React from 'react';

export const HomeDashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-stack-lg pb-24">
        {/* Welcome Header */}
        <section className="mt-8">
          <h2 className="font-headline-xl text-headline-xl text-ink-text">Buenas noches, Mateo.</h2>
          <p className="font-headline-md text-headline-md text-muted-ink mt-2">Tu legado sigue creciendo y trascendiendo.</p>
        </section>

        {/* Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Conocimiento Documentado</span>
              <span className="material-symbols-outlined text-heritage-gold opacity-80">menu_book</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">42</span>
              <span className="font-label-sm text-muted-ink mt-1 block">historias capturadas</span>
            </div>
          </div>
          {/* Metric 2 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Horas de Experiencia</span>
              <span className="material-symbols-outlined text-heritage-gold opacity-80">mic</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">18.5</span>
              <span className="font-label-sm text-muted-ink mt-1 block">horas de entrevistas</span>
            </div>
          </div>
          {/* Metric 3 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Activos del Legado</span>
              <span className="material-symbols-outlined text-heritage-gold opacity-80">inventory_2</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">124</span>
              <span className="font-label-sm text-muted-ink mt-1 block">documentos, fotos y medios</span>
            </div>
          </div>
          {/* Metric 4 */}
          <div className="bg-surface border border-border-subtle p-6 flex flex-col justify-between rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-sm uppercase tracking-wider text-muted-ink">Personas Registradas</span>
              <span className="material-symbols-outlined text-heritage-gold opacity-80">group</span>
            </div>
            <div>
              <span className="font-headline-lg text-headline-lg text-ink-text block">8</span>
              <span className="font-label-sm text-muted-ink mt-1 block">familiares y mentores</span>
            </div>
          </div>
        </section>

        {/* Índice de Legado */}
        <section className="bg-ink-text text-white p-8 rounded-xl relative overflow-hidden shadow-md">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "16px 16px" }}></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-heritage-gold text-[28px]">account_balance</span>
                <h3 className="font-headline-lg text-[28px] text-white">Índice de Legado</h3>
              </div>
              <p className="font-body-md text-primary-fixed-dim">El estado de la preservación de tu patrimonio intelectual e histórico.</p>
            </div>
            <div className="mt-4 md:mt-0 px-6 py-3 border border-heritage-gold/50 rounded-lg bg-surface-tint/20 backdrop-blur-md">
              <span className="font-label-sm uppercase tracking-wider text-heritage-gold block mb-1">Nivel Actual</span>
              <span className="font-headline-md text-white block">En Construcción</span>
            </div>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-primary-fixed-dim">Familiar</span>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden"><div className="w-[80%] h-full bg-heritage-gold"></div></div>
              <span className="font-label-sm text-white text-right">80%</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-primary-fixed-dim">Profesional</span>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden"><div className="w-[45%] h-full bg-heritage-gold"></div></div>
              <span className="font-label-sm text-white text-right">45%</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-primary-fixed-dim">Histórica</span>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-heritage-gold"></div></div>
              <span className="font-label-sm text-white text-right">60%</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-primary-fixed-dim">Documental</span>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden"><div className="w-[30%] h-full bg-heritage-gold"></div></div>
              <span className="font-label-sm text-white text-right">30%</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-primary-fixed-dim">Temática</span>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden"><div className="w-[15%] h-full bg-heritage-gold"></div></div>
              <span className="font-label-sm text-white text-right">15%</span>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Centro de Recomendaciones (IA) */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-ink-text text-[24px]">lightbulb</span>
                <h3 className="font-headline-md text-headline-md text-ink-text">Centro de Recomendaciones</h3>
              </div>
              <div className="bg-surface-bright border border-border-subtle rounded-xl p-6 shadow-sm">
                <p className="font-body-md text-muted-ink mb-6">Basado en el análisis de tu Bóveda de Conocimiento, hemos identificado las siguientes áreas para enriquecer tu legado:</p>
                <div className="flex flex-col gap-4">
                  <div className="bg-paper-surface border border-border-subtle p-4 rounded-lg flex items-start gap-4">
                    <span className="material-symbols-outlined text-heritage-gold mt-0.5">school</span>
                    <div>
                      <h4 className="font-label-md text-ink-text font-bold mb-1">Falta documentar los años universitarios</h4>
                      <p className="font-body-md text-muted-ink text-sm">Hay un vacío narrativo entre 1995 y 2000. Te sugerimos grabar una breve historia sobre tus mentores en la universidad.</p>
                      <button className="mt-3 text-ink-text font-label-sm uppercase tracking-wider hover:text-heritage-gold transition-colors flex items-center gap-1">Planear entrevista <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
                    </div>
                  </div>
                  <div className="bg-paper-surface border border-border-subtle p-4 rounded-lg flex items-start gap-4">
                    <span className="material-symbols-outlined text-heritage-gold mt-0.5">business_center</span>
                    <div>
                      <h4 className="font-label-md text-ink-text font-bold mb-1">Inicios de la empresa familiar</h4>
                      <p className="font-body-md text-muted-ink text-sm">No existen registros sobre la fundación de tu primera empresa. Tus aprendizajes profesionales aquí son valiosos.</p>
                      <button className="mt-3 text-ink-text font-label-sm uppercase tracking-wider hover:text-heritage-gold transition-colors flex items-center gap-1">Crear historia <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
                    </div>
                  </div>
                  <div className="bg-paper-surface border border-border-subtle p-4 rounded-lg flex items-start gap-4">
                    <span className="material-symbols-outlined text-heritage-gold mt-0.5">family_history</span>
                    <div>
                      <h4 className="font-label-md text-ink-text font-bold mb-1">Historia familiar materna</h4>
                      <p className="font-body-md text-muted-ink text-sm">Tienes mucha documentación del lado paterno, pero solo existe una entrevista relacionada con la infancia de tu madre.</p>
                      <button className="mt-3 text-ink-text font-label-sm uppercase tracking-wider hover:text-heritage-gold transition-colors flex items-center gap-1">Conectar con curador <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Historias en Construcción */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-ink-text w-full flex justify-between items-end border-b border-border-subtle pb-2">
                  Historias en construcción
                  <button className="text-muted-ink hover:text-ink-text text-label-sm font-label-sm uppercase tracking-wider flex items-center gap-1">Ver todas <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface border border-border-subtle p-6 hover:border-ink-text/30 transition-colors cursor-pointer group rounded-xl">
                  <h4 className="font-headline-md text-[20px] text-ink-text mb-2 group-hover:text-heritage-gold transition-colors">Historia Familiar de los García</h4>
                  <p className="text-muted-ink font-body-md text-[14px] line-clamp-2 mb-4">Recopilación de documentos y fotografías desde la llegada a Veracruz en 1920.</p>
                  <div className="flex flex-col gap-3">
                    <span className="inline-flex w-fit items-center gap-1 bg-surface-container-low px-2 py-1 rounded text-xs font-semibold text-ink-text border border-border-subtle">
                      🇲🇽 Español (México)
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-muted-ink text-[18px]">history_edu</span>
                      <span className="font-label-sm text-muted-ink">Última edición ayer</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface border border-border-subtle p-6 hover:border-ink-text/30 transition-colors cursor-pointer group rounded-xl">
                  <h4 className="font-headline-md text-[20px] text-ink-text mb-2 group-hover:text-heritage-gold transition-colors">Archivo Profesional 1990-2020</h4>
                  <p className="text-muted-ink font-body-md text-[14px] line-clamp-2 mb-4">Digitalización de notas de campo, diarios y correspondencia académica.</p>
                  <div className="flex flex-col gap-3">
                    <span className="inline-flex w-fit items-center gap-1 bg-surface-container-low px-2 py-1 rounded text-xs font-semibold text-ink-text border border-border-subtle">
                      🇺🇸 English
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-muted-ink text-[18px]">history_edu</span>
                      <span className="font-label-sm text-muted-ink">Última edición hace 3 días</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Column: Próximas Entrevistas */}
          <div className="lg:col-span-1">
            <div className="bg-surface-bright border border-border-subtle p-6 sticky top-24 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-ink-text">calendar_today</span>
                <h3 className="font-headline-md text-[20px] text-ink-text">Próximas entrevistas</h3>
              </div>
              <div className="flex flex-col gap-4">
                {/* Schedule Item 1 */}
                <div className="border border-border-subtle bg-paper-surface p-4 border-l-4 border-l-heritage-gold rounded-r-lg">
                  <div className="font-label-sm text-heritage-gold uppercase tracking-wider mb-2">Mañana, 16:00 h</div>
                  <h4 className="font-label-md text-ink-text font-semibold mb-1">Memorias Universitarias</h4>
                  <p className="text-muted-ink font-body-md text-[13px] flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Dr. Roberto Silva
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 border border-border-subtle py-1.5 text-label-sm font-label-sm hover:bg-surface-container-low transition-colors rounded">Reprogramar</button>
                    <button className="flex-1 bg-ink-text text-white py-1.5 text-label-sm font-label-sm hover:bg-opacity-90 transition-colors rounded">Iniciar sesión</button>
                  </div>
                </div>
                {/* Schedule Item 2 */}
                <div className="border border-border-subtle bg-paper-surface p-4 rounded-lg">
                  <div className="font-label-sm text-muted-ink uppercase tracking-wider mb-2">Jueves, 24 Mar - 10:00 h</div>
                  <h4 className="font-label-md text-ink-text font-semibold mb-1">Recetas de la Abuela (Parte 2)</h4>
                  <p className="text-muted-ink font-body-md text-[13px] flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    Marta García
                  </p>
                  <button className="w-full border border-border-subtle py-1.5 text-label-sm font-label-sm text-muted-ink hover:bg-surface-container-low transition-colors rounded">Ver detalles</button>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border border-dashed border-border-subtle text-muted-ink font-label-sm uppercase tracking-wider hover:border-ink-text hover:text-ink-text transition-colors flex items-center justify-center gap-2 rounded-lg">
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
