import React from 'react';

export const VaultDashboard: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="mb-stack-md">
        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-2">Human Vault</h1>
        <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">A curated archive of personal history, preserving artifacts, memories, and voices for future generations.</p>
      </div>

      {/* Filters / Categories */}
      <div className="flex flex-wrap gap-2 mb-stack-lg border-b border-border-subtle pb-6">
        <button className="px-4 py-2 bg-ink-text text-white font-label-md text-label-md rounded border border-ink-text transition-colors flex items-center gap-2">
            Todos
        </button>
        <button className="px-4 py-2 bg-paper-surface text-ink-text font-label-md text-label-md rounded border border-border-subtle hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">photo_camera</span>
            Fotos
        </button>
        <button className="px-4 py-2 bg-paper-surface text-ink-text font-label-md text-label-md rounded border border-border-subtle hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">videocam</span>
            Videos
        </button>
        <button className="px-4 py-2 bg-paper-surface text-ink-text font-label-md text-label-md rounded border border-border-subtle hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">mic</span>
            Audios
        </button>
        <button className="px-4 py-2 bg-paper-surface text-ink-text font-label-md text-label-md rounded border border-border-subtle hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">description</span>
            Documentos
        </button>
        <button className="px-4 py-2 bg-paper-surface text-ink-text font-label-md text-label-md rounded border border-border-subtle hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">auto_stories</span>
            Historias
        </button>
        <button className="px-4 py-2 bg-paper-surface text-ink-text font-label-md text-label-md rounded border border-border-subtle hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">person</span>
            Personas
        </button>
        <button className="px-4 py-2 bg-paper-surface text-ink-text font-label-md text-label-md rounded border border-border-subtle hover:bg-surface-container-low transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">location_on</span>
            Lugares
        </button>
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {/* Audio Card */}
        <article className="masonry-item bg-paper-surface border border-border-subtle rounded-lg p-6 hover:border-outline transition-colors group cursor-pointer flex flex-col gap-4">
          <div className="flex justify-between items-start mb-2">
            <span className="px-2 py-1 bg-surface-container text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
              <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>mic</span>
              Audio
            </span>
            <button className="text-muted-ink hover:text-ink-text"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>
          <h3 className="font-headline-md text-headline-md text-ink-text group-hover:text-heritage-gold transition-colors">Entrevista con Abuelo Juan</h3>
          <div className="h-16 w-full bg-surface-container-low border border-border-subtle rounded flex items-center justify-center relative overflow-hidden">
            {/* Abstract Waveform representation */}
            <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-50 px-4">
              <div className="w-1 h-3 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-6 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-10 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-4 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-8 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-12 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-5 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-9 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-3 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-7 bg-muted-ink rounded-full"></div>
              <div className="w-1 h-2 bg-muted-ink rounded-full"></div>
            </div>
            <button className="w-10 h-10 rounded-full bg-ink-text text-white flex items-center justify-center z-10 hover:bg-surface-tint transition-colors">
              <span className="material-symbols-outlined ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
          </div>
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-subtle">
            <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
              12 Oct 2021
            </div>
            <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
              45:20
            </div>
          </div>
        </article>

        {/* Photo Card */}
        <article className="masonry-item bg-paper-surface border border-border-subtle rounded-lg overflow-hidden hover:border-outline transition-colors group cursor-pointer flex flex-col">
          <div className="relative h-64 w-full bg-surface-container">
            <img alt="Boda en Veracruz" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9EuoPkkr2U5zHLVcZO4CDIlOiTyXAD48_bfkUK6p6hSUrTIi3gBU-T1kxkliFI9U_MPpAJgUWqOKfFyq75Vwt7XhfW83r1Bup8C9OEfWvVN2L4mub7HYpU7CP-d9_is5wy8O_MQh27qm6Kp9YXUQJsK97iiu-gZFsey8R7ylw07vh04K9ISktCa_odlRspg3uo3WqvHrFZmtiDpk9O1Qc_7h3uMaPhl-LZQqqlo_i0k_l6pfl7-7ZcPxMRuS3oJb7K92evhUfFt0" />
            <div className="absolute top-4 left-4">
              <span className="px-2 py-1 bg-paper-surface/90 backdrop-blur text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
                <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>photo_camera</span>
                Foto
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-2">
            <h3 className="font-headline-md text-headline-md text-ink-text">Boda en Veracruz, 1950</h3>
            <p className="font-body-md text-body-md text-muted-ink line-clamp-2">Ceremonia en la catedral principal. Familia extendida presente en la plaza.</p>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>location_on</span>
                Veracruz, MX
              </div>
            </div>
          </div>
        </article>

        {/* Document Card */}
        <article className="masonry-item bg-paper-surface border border-border-subtle rounded-lg p-6 hover:border-outline transition-colors group cursor-pointer flex flex-col gap-4">
          <div className="flex justify-between items-start mb-2">
            <span className="px-2 py-1 bg-surface-container text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
              <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>description</span>
              Documento
            </span>
            <button className="text-muted-ink hover:text-ink-text"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>
          <h3 className="font-headline-md text-headline-md text-ink-text">Títulos de Propiedad</h3>
          <div className="p-4 bg-surface-container-low border border-border-subtle rounded font-body-md text-body-md text-muted-ink italic border-l-4 border-l-heritage-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>format_quote</span>
            </div>
            "Por el presente instrumento legal, se hace constar la transferencia de los terrenos ubicados en..."
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 bg-surface border border-border-subtle text-muted-ink font-label-sm text-label-sm rounded">Legal</span>
            <span className="px-2 py-1 bg-surface border border-border-subtle text-muted-ink font-label-sm text-label-sm rounded">Herencia</span>
          </div>
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-subtle">
            <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
              14 May 1965
            </div>
            <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>inventory_2</span>
              Caja Fuerte A
            </div>
          </div>
        </article>

        {/* Video Card */}
        <article className="masonry-item bg-paper-surface border border-border-subtle rounded-lg overflow-hidden hover:border-outline transition-colors group cursor-pointer flex flex-col">
          <div className="relative h-48 w-full bg-surface-container flex items-center justify-center">
            <img alt="Viaje a Madrid" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1c3jyKljPTn16ry8oLyN_qZT5VzDTJ7hylycggBt3bVLLVBkh5vHXzRJ6Aq7ui971xSytw2DT7ih5W1TevJGGycZ7Ne0d2TOfJKyRRshE6lYmkYc8ZB47bHe8mhiiC-7i5hDrsl7RLZ2bY2NoIvlNO5D-E1n78iFjVjnuX4nIhvTwxTTUuq-8O9vEhzmtk30364dQrrvbS7PLU-D8G0Jp3ELnZdJichlhehEIa4iyHkB5yIJLVunn5S9gmLQHnZDIfUYgADdiKgo" />
            <div className="absolute inset-0 bg-ink-text/20 group-hover:bg-ink-text/10 transition-colors"></div>
            <div className="absolute top-4 left-4 z-10">
              <span className="px-2 py-1 bg-paper-surface/90 backdrop-blur text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider flex items-center gap-1 w-max">
                <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>videocam</span>
                Video
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-ink-text ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-2">
            <h3 className="font-headline-md text-headline-md text-ink-text">Viaje a Madrid</h3>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                Verano 1982
              </div>
              <div className="flex items-center gap-2 text-muted-ink font-label-sm text-label-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
                12:04
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Empty Space at bottom for scrolling */}
      <div className="h-32 w-full flex items-center justify-center text-muted-ink font-label-sm text-label-sm uppercase tracking-widest mt-8">
        Fin del Archivo
      </div>
    </>
  );
};
