import React from 'react';
import { Link } from 'react-router-dom';

export const Marketplace: React.FC = () => {
  return (
    <div className="bg-surface text-ink-text font-body-md antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="w-full top-0 sticky bg-surface border-b border-border-subtle z-50">
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-headline-lg text-headline-lg font-bold text-ink-text">Legado</Link>
            <div className="hidden md:flex space-x-6">
              <a className="text-ink-text font-bold border-b-2 border-heritage-gold pb-1 hover:text-ink-text transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Curators</a>
              <a className="text-muted-ink font-label-md text-label-md hover:text-ink-text transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Knowledge</a>
              <a className="text-muted-ink font-label-md text-label-md hover:text-ink-text transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Legacy AI</a>
              <a className="text-muted-ink font-label-md text-label-md hover:text-ink-text transition-colors duration-200 cursor-pointer active:opacity-70" href="#">Archives</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-ink">search</span>
              <input className="pl-10 pr-4 py-2 border border-border-subtle rounded bg-paper-surface focus:ring-0 focus:border-heritage-gold transition-colors w-64 text-label-md font-label-md" placeholder="Search the archive..." type="text" />
            </div>
            <button className="bg-ink-text text-on-secondary px-6 py-2 rounded font-label-md text-label-md hover:bg-opacity-90 transition-opacity">Connect</button>
            <div className="flex items-center gap-2 text-ink-text">
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">menu</span></button>
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors hidden sm:block"><span className="material-symbols-outlined">account_circle</span></button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-stack-lg">
        {/* Hero Section */}
        <header className="mb-16 max-w-3xl">
          <h1 className="font-headline-xl text-headline-xl mb-4 text-ink-text">Bóveda de Expertise</h1>
          <p className="font-body-lg text-body-lg text-muted-ink">Connect with distinguished human curators, archival knowledge, and specialized artificial intelligence. Preserving the human narrative through rigorous curation.</p>
        </header>

        {/* Category Tabs */}
        <div className="flex space-x-8 mb-12 border-b border-border-subtle overflow-x-auto pb-1">
          <button className="font-label-md text-label-md text-ink-text font-bold border-b-2 border-heritage-gold pb-2 whitespace-nowrap">Curadores</button>
          <button className="font-label-md text-label-md text-muted-ink hover:text-ink-text transition-colors pb-2 whitespace-nowrap">Conocimiento</button>
          <button className="font-label-md text-label-md text-muted-ink hover:text-ink-text transition-colors pb-2 whitespace-nowrap">Legacy AI</button>
        </div>

        {/* Curadores Grid */}
        <section className="mb-stack-lg">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-headline-md text-headline-md text-ink-text">Featured Curators</h2>
            <a className="font-label-sm text-label-sm text-heritage-gold hover:underline uppercase tracking-wider" href="#">View All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curator Card 1 */}
            <article className="border border-border-subtle rounded-DEFAULT bg-paper-surface p-6 flex flex-col group hover:border-surface-tint transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded overflow-hidden">
                  <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Dr. Arthur Pendelton" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-IfLTEl_i4uZqnKqEmuJolvgGwki0-KYvvog1thOOdiKIiPTIIu0c3pS65n2HhG1ofenUI3AffaG6SmX9rIj-ZPjNmx8KC7yY0z4s3-_n7TanVCA4UjJJh9YQ8LSstFg95NbSM62R80vVFW2DaEUyicVzVV33N2VpfILqALHpUC4H4PrMZwYziuOPd0e5DPfqNlO463QeypyTjGe-srjwaplY6XnWyguDHfkt-tWYKv6-QbE4peY_HFA7Fma_VK6_h-xGWNBCSb4" />
                </div>
                <div className="flex items-center gap-1 text-heritage-gold">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="font-label-sm text-label-sm uppercase">Legacy Verified</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-1 text-ink-text">Dr. Arthur Pendelton</h3>
              <p className="font-label-sm text-label-sm uppercase text-muted-ink mb-4">Master Historian</p>
              <p className="font-body-md text-body-md text-muted-ink mb-6 line-clamp-3">Specializing in European genealogies and medieval document preservation. Over 40 years of archival experience at the British Museum.</p>
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <button className="w-full py-2 border border-ink-text text-ink-text rounded font-label-md text-label-md hover:bg-ink-text hover:text-on-secondary transition-colors">Connect</button>
              </div>
            </article>
            {/* Curator Card 2 */}
            <article className="border border-border-subtle rounded-DEFAULT bg-paper-surface p-6 flex flex-col group hover:border-surface-tint transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded overflow-hidden">
                  <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Elena Rostova" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6u7_-Ut5jNXnCuu-IIrlNyY1i7aZDao634tkpcIys3B8tHaI0_i-cnrfwf3RX24BHRwsfSmalKGytr1B74b-PhjT4iqPWqJoMnPt0S-krRu2Vswhpc0dtSvZC5bOK00zAxcnED-oxjZfg1WYRgVu0WHRt-OBEGQvFjeTcXOEl_8vD1lzSo2Uur7mjL2nrYQ3OEoRyrtVISNv_thiLNT2vRccxMDhSLWI-YPUICwfDrkFufkUuttyuVzDZnmWAf8h-Lsb-UxinoVo" />
                </div>
                <div className="flex items-center gap-1 text-heritage-gold">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="font-label-sm text-label-sm uppercase">Legacy Verified</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-1 text-ink-text">Elena Rostova</h3>
              <p className="font-label-sm text-label-sm uppercase text-muted-ink mb-4">Senior Archivist</p>
              <p className="font-body-md text-body-md text-muted-ink mb-6 line-clamp-3">Expert in restoring and digitizing fragile 19th-century correspondence and personal journals. Fluent in 4 languages.</p>
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <button className="w-full py-2 border border-ink-text text-ink-text rounded font-label-md text-label-md hover:bg-ink-text hover:text-on-secondary transition-colors">Connect</button>
              </div>
            </article>
            {/* Curator Card 3 */}
            <article className="border border-border-subtle rounded-DEFAULT bg-paper-surface p-6 flex flex-col group hover:border-surface-tint transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded overflow-hidden">
                  <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Marcus Lin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrK-aJa6TrBHdzbb3tkaue40SfSWrKmmrYgi6Eab6cy23REkTlZ2AX4KA25Lf_xp2p3Wx-r0OIXNVRWnwOs0LD04beG5TvkKWnP32KE2ZMjxAiXuwEoUBaKEmgobBh9IBwCZwN2_lJHBg5UBtUs5iUobIeOjX0-S-udL4_1QGbTGpSpNj6JP1RDnW5wkJF5hq6NJwy9beiWz5mw1g3PDW7BsuE-6VTElgKPFJv1T29y7NzBdXiTwxlfzySDEzxYrBv0eWhpYAj8n4" />
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-1 text-ink-text">Marcus Lin</h3>
              <p className="font-label-sm text-label-sm uppercase text-muted-ink mb-4">Genealogist</p>
              <p className="font-body-md text-body-md text-muted-ink mb-6 line-clamp-3">Dedicated to tracing trans-pacific migration patterns and family histories. Specialized in connecting fragmented ancestral records.</p>
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <button className="w-full py-2 border border-ink-text text-ink-text rounded font-label-md text-label-md hover:bg-ink-text hover:text-on-secondary transition-colors">Connect</button>
              </div>
            </article>
          </div>
        </section>

        {/* Legacy AI Grid */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-headline-md text-headline-md text-ink-text">Legacy AI Agents</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="border border-border-subtle rounded-DEFAULT bg-paper-surface p-8 flex items-center gap-6">
              <div className="w-20 h-20 rounded bg-primary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-heritage-gold text-4xl">auto_awesome</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 text-ink-text">The Chronicler</h3>
                <p className="font-body-md text-body-md text-muted-ink mb-4">An AI trained on historical narratives to help synthesize raw family data into compelling chronological stories.</p>
                <button className="text-heritage-gold font-label-md text-label-md hover:underline flex items-center gap-1">Access Agent <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
            </article>
            <article className="border border-border-subtle rounded-DEFAULT bg-paper-surface p-8 flex items-center gap-6">
              <div className="w-20 h-20 rounded bg-primary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-heritage-gold text-4xl">account_tree</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 text-ink-text">Genealogy Bot</h3>
                <p className="font-body-md text-body-md text-muted-ink mb-4">Cross-references vast public databases to identify missing links in your constructed family tree.</p>
                <button className="text-heritage-gold font-label-md text-label-md hover:underline flex items-center gap-1">Access Agent <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-container mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter py-stack-md max-w-container-max mx-auto">
          <div className="mb-4 md:mb-0">
            <span className="font-headline-md text-headline-md text-on-primary">Legado</span>
            <p className="font-body-md text-body-md text-on-primary-container mt-1">© 2024 Legado. Preserving the human narrative.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a className="font-label-sm text-label-sm text-on-primary-container hover:text-on-primary transition-opacity inline-block" href="#">Terms of Service</a>
            <a className="font-label-sm text-label-sm text-on-primary-container hover:text-on-primary transition-opacity inline-block" href="#">Privacy Policy</a>
            <a className="font-label-sm text-label-sm text-on-primary-container hover:text-on-primary transition-opacity inline-block" href="#">Institutional Access</a>
            <a className="font-label-sm text-label-sm text-on-primary-container hover:text-on-primary transition-opacity inline-block" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
