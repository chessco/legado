import React from 'react';
import { Link } from 'react-router-dom';

export const AIBuilder: React.FC = () => {
  return (
    <div className="flex min-h-screen font-body-md text-body-md bg-paper-surface">
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-paper-surface text-ink-text h-screen w-64 fixed left-0 top-0 border-r border-border-subtle flex-col py-stack-md z-10">
        <div className="px-6 pb-8">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-ink-text tracking-tight mb-8 block">Legado</Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-border-subtle bg-surface flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-muted-ink">robot_2</span>
            </div>
            <div>
              <h2 className="font-label-md text-label-md font-semibold text-ink-text">New Agent</h2>
              <p className="font-label-sm text-label-sm text-muted-ink uppercase">AI Persona Draft</p>
            </div>
          </div>
          <button className="w-full bg-ink-text text-paper-surface py-2.5 rounded hover:bg-opacity-90 transition-colors font-label-md text-label-md uppercase tracking-wider">
            Save Draft
          </button>
        </div>
        <div className="flex-1 px-4 overflow-y-auto">
          <ul className="space-y-1">
            {/* Active Tab: Configuration */}
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink-text font-bold border-l-2 border-heritage-gold pl-4 bg-surface-container-low transition-colors" href="#">
                <span className="material-symbols-outlined" data-icon="tune">tune</span>
                <span className="font-label-md text-label-md">Configuration</span>
              </a>
            </li>
            {/* Inactive Tabs */}
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-ink hover:bg-surface-container-high transition-colors pl-4" href="#">
                <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
                <span className="font-label-md text-label-md">Personality</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-ink hover:bg-surface-container-high transition-colors pl-4" href="#">
                <span className="material-symbols-outlined" data-icon="database">database</span>
                <span className="font-label-md text-label-md">Knowledge</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-ink hover:bg-surface-container-high transition-colors pl-4" href="#">
                <span className="material-symbols-outlined" data-icon="shield_person">shield_person</span>
                <span className="font-label-md text-label-md">Access</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-auto pt-4 border-t border-border-subtle">
          <ul className="space-y-1">
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-ink hover:bg-surface-container-high transition-colors pl-4" href="#">
                <span className="material-symbols-outlined" data-icon="history">history</span>
                <span className="font-label-md text-label-md">History</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-ink hover:bg-surface-container-high transition-colors pl-4" href="#">
                <span className="material-symbols-outlined" data-icon="settings">settings</span>
                <span className="font-label-md text-label-md">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="md:ml-64 flex-1 flex flex-col md:flex-row h-screen overflow-hidden">
        {/* Left/Center: Form Configuration */}
        <section className="flex-1 overflow-y-auto p-gutter lg:p-stack-lg bg-background border-r border-border-subtle">
          <div className="max-w-2xl mx-auto">
            <header className="mb-stack-lg">
              <h2 className="font-headline-xl text-headline-xl text-ink-text mb-4">Builder</h2>
              <p className="font-body-lg text-body-lg text-muted-ink">Define the core attributes and knowledge access for your new AI persona.</p>
            </header>
            <form className="space-y-stack-md">
              {/* Section 1: Name */}
              <div className="group">
                <label className="block font-label-sm text-label-sm text-ink-text uppercase mb-2" htmlFor="agent-name">Nombre del Agente</label>
                <input className="w-full bg-paper-surface border border-border-subtle rounded-DEFAULT px-4 py-3 font-body-md text-ink-text focus:outline-none focus:border-heritage-gold focus:ring-1 focus:ring-heritage-gold transition-colors placeholder:text-muted-ink/50" id="agent-name" placeholder="e.g., Abuelo Juan" type="text" />
              </div>
              {/* Section 2: Personality */}
              <div className="group">
                <label className="block font-label-sm text-label-sm text-ink-text uppercase mb-2" htmlFor="agent-personality">Personalidad</label>
                <p className="font-label-sm text-label-sm text-muted-ink mb-3 normal-case">Describe the tone, mannerisms, and perspective.</p>
                <textarea className="w-full bg-paper-surface border border-border-subtle rounded-DEFAULT px-4 py-3 font-body-md text-ink-text focus:outline-none focus:border-heritage-gold focus:ring-1 focus:ring-heritage-gold transition-colors resize-y placeholder:text-muted-ink/50" id="agent-personality" placeholder="Empático, Historiador, Formal..." rows={4}></textarea>
              </div>
              {/* Section 3: Knowledge Sources */}
              <div className="group">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <label className="block font-label-sm text-label-sm text-ink-text uppercase mb-2">Fuentes de Conocimiento</label>
                    <p className="font-label-sm text-label-sm text-muted-ink normal-case">Connected folders from the Human Vault.</p>
                  </div>
                  <button className="flex items-center gap-2 text-ink-text hover:text-heritage-gold transition-colors font-label-md text-label-md" type="button">
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>add_circle</span>
                    Add Source
                  </button>
                </div>
                <div className="space-y-3">
                  {/* Source Item 1 */}
                  <div className="flex items-center justify-between p-4 bg-paper-surface border border-border-subtle rounded-DEFAULT group-hover:border-outline-variant transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-muted-ink" style={{ fontSize: "24px" }}>folder_special</span>
                      <div>
                        <h4 className="font-label-md text-label-md text-ink-text font-semibold">Entrevistas Abuelo</h4>
                        <p className="font-label-sm text-label-sm text-muted-ink">12 Audio files, 4 Transcripts</p>
                      </div>
                    </div>
                    <button className="text-muted-ink hover:text-error transition-colors p-2 rounded-full hover:bg-surface-container-high" type="button">
                      <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
                    </button>
                  </div>
                  {/* Source Item 2 */}
                  <div className="flex items-center justify-between p-4 bg-paper-surface border border-border-subtle rounded-DEFAULT group-hover:border-outline-variant transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-muted-ink" style={{ fontSize: "24px" }}>description</span>
                      <div>
                        <h4 className="font-label-md text-label-md text-ink-text font-semibold">Diarios 1950</h4>
                        <p className="font-label-sm text-label-sm text-muted-ink">24 Scanned pages</p>
                      </div>
                    </div>
                    <button className="text-muted-ink hover:text-error transition-colors p-2 rounded-full hover:bg-surface-container-high" type="button">
                      <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Section 4: Access Level */}
              <div className="group pt-4">
                <label className="block font-label-sm text-label-sm text-ink-text uppercase mb-4">Nivel de Acceso</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Option 1 */}
                  <label className="relative flex cursor-pointer rounded-DEFAULT border border-border-subtle bg-paper-surface p-4 focus:outline-none hover:bg-surface transition-colors">
                    <input defaultChecked className="peer sr-only" name="access_level" type="radio" value="privado" />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-muted-ink peer-checked:text-heritage-gold" style={{ fontSize: "20px" }}>lock</span>
                        <span className="font-label-md text-label-md text-ink-text">Privado</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-DEFAULT border-2 border-transparent peer-checked:border-heritage-gold pointer-events-none transition-colors"></div>
                  </label>
                  {/* Option 2 */}
                  <label className="relative flex cursor-pointer rounded-DEFAULT border border-border-subtle bg-paper-surface p-4 focus:outline-none hover:bg-surface transition-colors">
                    <input className="peer sr-only" name="access_level" type="radio" value="familiar" />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-muted-ink peer-checked:text-heritage-gold" style={{ fontSize: "20px" }}>group</span>
                        <span className="font-label-md text-label-md text-ink-text">Familiar</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-DEFAULT border-2 border-transparent peer-checked:border-heritage-gold pointer-events-none transition-colors"></div>
                  </label>
                  {/* Option 3 */}
                  <label className="relative flex cursor-pointer rounded-DEFAULT border border-border-subtle bg-paper-surface p-4 focus:outline-none hover:bg-surface transition-colors">
                    <input className="peer sr-only" name="access_level" type="radio" value="publico" />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-muted-ink peer-checked:text-heritage-gold" style={{ fontSize: "20px" }}>public</span>
                        <span className="font-label-md text-label-md text-ink-text">Público</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-DEFAULT border-2 border-transparent peer-checked:border-heritage-gold pointer-events-none transition-colors"></div>
                  </label>
                </div>
              </div>
              <div className="pt-8 border-t border-border-subtle flex justify-end">
                <button className="bg-heritage-gold text-paper-surface px-8 py-3 rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-colors shadow-sm" type="button">
                  Save Agent
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* Right: Chat Preview */}
        <aside className="w-full md:w-[400px] lg:w-[480px] bg-paper-surface flex flex-col border-t md:border-t-0 md:border-l border-border-subtle shrink-0">
          {/* Chat Header */}
          <header className="p-6 border-b border-border-subtle flex items-center gap-4 bg-paper-surface z-10">
            <div className="w-10 h-10 rounded-full border border-border-subtle bg-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-ink-text">psychology</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md font-bold text-ink-text text-lg">Preview</h3>
              <p className="font-label-sm text-label-sm text-muted-ink">Test your persona in real-time</p>
            </div>
          </header>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-container-lowest">
            {/* System/AI Message */}
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-8 h-8 rounded-full border border-border-subtle bg-surface flex items-center justify-center shrink-0 mt-1">
                <span className="material-symbols-outlined text-muted-ink" style={{ fontSize: "16px" }}>robot_2</span>
              </div>
              <div className="bg-surface border border-border-subtle p-4 rounded-xl rounded-tl-sm shadow-sm">
                <p className="font-body-md text-body-md text-ink-text">Hola Mateo, estoy listo para explorar tu legado. ¿Por dónde empezamos?</p>
              </div>
            </div>
            {/* Placeholder for future user message to show context */}
            <div className="flex gap-4 max-w-[85%] ml-auto justify-end opacity-50 hidden">
              <div className="bg-ink-text p-4 rounded-xl rounded-tr-sm shadow-sm">
                <p className="font-body-md text-body-md text-paper-surface">Cuéntame sobre el abuelo.</p>
              </div>
            </div>
          </div>
          {/* Chat Input */}
          <div className="p-6 border-t border-border-subtle bg-paper-surface">
            <div className="relative">
              <textarea className="w-full bg-surface border border-border-subtle rounded-lg pl-4 pr-12 py-3 font-body-md text-ink-text focus:outline-none focus:border-heritage-gold focus:ring-1 focus:ring-heritage-gold transition-colors resize-none placeholder:text-muted-ink/50" placeholder="Type a message to test..." rows={2}></textarea>
              <button className="absolute right-3 bottom-3 text-heritage-gold hover:text-secondary transition-colors p-1 rounded-full hover:bg-surface-container-high">
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: "24px" }}>send</span>
              </button>
            </div>
            <p className="text-center font-label-sm text-label-sm text-muted-ink mt-3">Interactions here are not saved to history.</p>
          </div>
        </aside>
      </main>
    </div>
  );
};
