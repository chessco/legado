import React from 'react';
import { Link } from 'react-router-dom';

export const StoryBuilder: React.FC = () => {
  return (
    <div className="bg-paper-surface text-ink-text font-body-md h-screen flex flex-col overflow-hidden">
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface-container-lowest w-full h-16 border-b border-border-subtle dark:border-outline-variant flex justify-between items-center px-gutter sticky top-0 z-50">
        <div className="flex items-center gap-stack-md">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-ink-text dark:text-inverse-on-surface tracking-tight">Legado</Link>
          <div className="hidden md:flex gap-stack-md ml-stack-lg">
            <a className="text-primary dark:text-inverse-primary border-b-2 border-heritage-gold pb-1 font-label-md text-label-md cursor-pointer transition-opacity active:opacity-70" href="#">Drafts</a>
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-on-surface transition-colors font-label-md text-label-md cursor-pointer transition-opacity active:opacity-70" href="#">Archive</a>
            <a className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-on-surface transition-colors font-label-md text-label-md cursor-pointer transition-opacity active:opacity-70" href="#">Settings</a>
          </div>
        </div>
        <div className="flex items-center gap-stack-sm">
          <button className="bg-ink-text text-on-primary px-4 py-2 rounded font-label-md text-label-md hover:bg-opacity-90 transition-opacity">Publish</button>
          <button className="text-muted-ink hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant">
            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          </button>
        </div>
      </nav>
      {/* Main Layout Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Outline (Manuscrito) */}
        <aside className="w-64 bg-surface-container-lowest border-r border-border-subtle flex flex-col h-full overflow-y-auto">
          <div className="p-6 border-b border-border-subtle">
            <h2 className="font-label-sm text-label-sm text-muted-ink uppercase tracking-wider mb-4">Manuscrito</h2>
            <div className="flex items-center justify-between text-ink-text hover:bg-surface-variant p-2 rounded cursor-pointer transition-colors -mx-2">
              <span className="font-label-md text-label-md">The Eternal City</span>
              <span className="material-symbols-outlined text-sm">unfold_more</span>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {/* Chapter 1 */}
              <li className="group">
                <div className="flex items-center gap-2 p-2 hover:bg-surface-container-low rounded cursor-pointer text-ink-text">
                  <span className="material-symbols-outlined text-muted-ink text-sm opacity-0 group-hover:opacity-100 cursor-grab">drag_indicator</span>
                  <span className="material-symbols-outlined text-muted-ink text-sm">folder</span>
                  <span className="font-label-md text-label-md flex-1">Capítulo 1: El Inicio</span>
                  <span className="material-symbols-outlined text-muted-ink text-sm">expand_more</span>
                </div>
                <ul className="pl-8 space-y-1 mt-1 border-l border-border-subtle ml-4">
                  <li className="flex items-center gap-2 p-2 hover:bg-surface-container-low rounded cursor-pointer text-ink-text bg-surface-variant border-l-2 border-heritage-gold -ml-[2px]">
                    <span className="material-symbols-outlined text-muted-ink text-sm opacity-0 hover:opacity-100 cursor-grab">drag_indicator</span>
                    <span className="material-symbols-outlined text-muted-ink text-sm">description</span>
                    <span className="font-label-md text-label-md">Escena: El Encuentro</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-surface-container-low rounded cursor-pointer text-muted-ink">
                    <span className="material-symbols-outlined text-muted-ink text-sm opacity-0 hover:opacity-100 cursor-grab">drag_indicator</span>
                    <span className="material-symbols-outlined text-muted-ink text-sm">description</span>
                    <span className="font-label-md text-label-md">Escena: La Decisión</span>
                  </li>
                </ul>
              </li>
              {/* Chapter 2 */}
              <li className="group mt-2">
                <div className="flex items-center gap-2 p-2 hover:bg-surface-container-low rounded cursor-pointer text-muted-ink">
                  <span className="material-symbols-outlined text-muted-ink text-sm opacity-0 group-hover:opacity-100 cursor-grab">drag_indicator</span>
                  <span className="material-symbols-outlined text-muted-ink text-sm">folder</span>
                  <span className="font-label-md text-label-md flex-1">Capítulo 2: El Viaje</span>
                  <span className="material-symbols-outlined text-muted-ink text-sm">chevron_right</span>
                </div>
              </li>
            </ul>
            <button className="mt-4 flex items-center gap-2 text-muted-ink hover:text-ink-text p-2 rounded w-full justify-center border border-dashed border-border-subtle hover:border-outline-variant transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
              <span className="font-label-md text-label-md">Add Chapter</span>
            </button>
          </div>
        </aside>
        {/* Central Editor Area */}
        <main className="flex-1 bg-paper-surface flex flex-col h-full overflow-hidden relative">
          {/* Editor Toolbar */}
          <div className="h-12 border-b border-border-subtle bg-surface-container-lowest/80 backdrop-blur-sm flex items-center px-6 gap-4 sticky top-0 z-10">
            <div className="flex gap-1 border-r border-border-subtle pr-4">
              <button aria-label="Bold" className="p-1.5 rounded hover:bg-surface-variant text-ink-text"><span className="font-serif font-bold">B</span></button>
              <button aria-label="Italic" className="p-1.5 rounded hover:bg-surface-variant text-ink-text"><span className="font-serif italic">I</span></button>
              <button aria-label="Underline" className="p-1.5 rounded hover:bg-surface-variant text-ink-text"><span className="font-serif underline">U</span></button>
            </div>
            <div className="flex gap-1 border-r border-border-subtle pr-4">
              <button aria-label="Align Left" className="p-1.5 rounded bg-surface-variant text-ink-text"><span className="material-symbols-outlined text-sm">format_align_left</span></button>
              <button aria-label="Align Center" className="p-1.5 rounded hover:bg-surface-variant text-muted-ink"><span className="material-symbols-outlined text-sm">format_align_center</span></button>
              <button aria-label="Align Right" className="p-1.5 rounded hover:bg-surface-variant text-muted-ink"><span className="material-symbols-outlined text-sm">format_align_right</span></button>
              <button aria-label="Justify" className="p-1.5 rounded hover:bg-surface-variant text-muted-ink"><span className="material-symbols-outlined text-sm">format_align_justify</span></button>
            </div>
            <div className="flex gap-2">
              <span className="font-label-sm text-label-sm text-muted-ink flex items-center">Source Serif 4</span>
              <span className="material-symbols-outlined text-muted-ink text-sm flex items-center">expand_more</span>
            </div>
            <div className="ml-auto text-muted-ink font-label-sm text-label-sm">
              Saved just now
            </div>
          </div>
          {/* Writing Canvas */}
          <div className="flex-1 overflow-y-auto px-12 py-16 flex justify-center">
            <div className="w-full max-w-[800px]">
              <h1 className="font-headline-xl text-headline-xl text-ink-text mb-8 outline-none" contentEditable>
                El Legado de los García
              </h1>
              <div className="font-body-lg text-body-lg text-ink-text space-y-6 outline-none leading-relaxed" contentEditable>
                <p>
                  El olor a tierra mojada siempre le recordaba a Mateo las tardes en la finca del abuelo Juan. No era un simple aroma; era un pasaporte directo a 1950, a los veranos interminables bajo la sombra del viejo roble, antes de que la guerra cambiara todo el paisaje de sus vidas.
                </p>
                <p>
                  Aquel día, sin embargo, el aire traía consigo algo más que humedad. Traía el sonido lejano de motores pesados, un rugido antinatural que rompía la sinfonía de cigarras que habitualmente dominaba el valle.
                </p>
                <p>
                  —¿Lo escuchas, muchacho? —preguntó el abuelo, apoyando sus manos nudosas sobre el bastón de caoba—. Vienen por el río.
                </p>
                <p>
                  Mateo asintió, sintiendo un nudo frío en el estómago. La carta que habían recibido la semana anterior, sellada con cera roja, no dejaba lugar a dudas. Era el comienzo del fin de la tranquilidad en el valle, y el inicio de una historia que obligaría a la familia García a tomar decisiones imposibles.
                </p>
              </div>
            </div>
          </div>
        </main>
        {/* Right Sidebar: Properties (Detalles de la Historia) */}
        <aside className="w-72 bg-surface-container-lowest border-l border-border-subtle flex flex-col h-full overflow-y-auto">
          <div className="p-6 border-b border-border-subtle">
            <h2 className="font-label-sm text-label-sm text-muted-ink uppercase tracking-wider">Detalles de la Historia</h2>
          </div>
          <div className="p-6 space-y-8">
            {/* Personajes Section */}
            <div>
              <h3 className="font-label-md text-label-md text-ink-text mb-3 flex items-center justify-between">
                Personajes
                <button className="text-muted-ink hover:text-ink-text"><span className="material-symbols-outlined text-sm">add</span></button>
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 bg-surface border border-border-subtle rounded-full pr-3 pl-1 py-1">
                  <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-[10px]">M</div>
                  <span className="font-label-sm text-label-sm text-ink-text">Mateo</span>
                </div>
                <div className="flex items-center gap-2 bg-surface border border-border-subtle rounded-full pr-3 pl-1 py-1">
                  <div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-label-sm text-[10px]">AJ</div>
                  <span className="font-label-sm text-label-sm text-ink-text">Abuelo Juan</span>
                </div>
              </div>
            </div>
            {/* Cronología Section */}
            <div>
              <h3 className="font-label-md text-label-md text-ink-text mb-3">Cronología</h3>
              <div className="flex items-center gap-2 p-3 border border-border-subtle rounded bg-surface text-ink-text hover:border-outline-variant cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-muted-ink text-sm">calendar_month</span>
                <span className="font-label-md text-label-md">Verano, 1950</span>
              </div>
            </div>
            {/* Eventos Section */}
            <div>
              <h3 className="font-label-md text-label-md text-ink-text mb-3 flex items-center justify-between">
                Eventos Clave
                <button className="text-muted-ink hover:text-ink-text"><span className="material-symbols-outlined text-sm">add</span></button>
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-variant text-ink-text font-label-sm text-label-sm rounded">Migración</span>
                <span className="px-3 py-1 border border-border-subtle text-muted-ink font-label-sm text-label-sm rounded hover:bg-surface-variant cursor-pointer">Conflicto</span>
              </div>
            </div>
            {/* Meta Information */}
            <div className="pt-8 border-t border-border-subtle">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-muted-ink">Palabras</span>
                <span className="font-label-sm text-label-sm text-ink-text font-bold">184</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-muted-ink">Estado</span>
                <span className="flex items-center gap-1 text-heritage-gold">
                  <span className="w-2 h-2 rounded-full bg-heritage-gold"></span>
                  <span className="font-label-sm text-label-sm">En progreso</span>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
