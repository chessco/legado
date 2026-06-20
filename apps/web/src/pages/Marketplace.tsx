import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Curator {
  id: string;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  isVerified: boolean;
}

interface KnowledgeSource {
  id: string;
  title: string;
  type: string;
  description: string;
  downloads: string;
}

interface AIAgent {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const Marketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Curadores');

  const curators: Curator[] = [
    {
      id: '1',
      name: 'Dr. Arthur Pendelton',
      role: 'Master Historian',
      experience: 'Specializing in European genealogies and medieval document preservation. Over 40 years of archival experience at the British Museum.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-IfLTEl_i4uZqnKqEmuJolvgGwki0-KYvvog1thOOdiKIiPTIIu0c3pS65n2HhG1ofenUI3AffaG6SmX9rIj-ZPjNmx8KC7yY0z4s3-_n7TanVCA4UjJJh9YQ8LSstFg95NbSM62R80vVFW2DaEUyicVzVV33N2VpfILqALHpUC4H4PrMZwYziuOPd0e5DPfqNlO463QeypyTjGe-srjwaplY6XnWyguDHfkt-tWYKv6-QbE4peY_HFA7Fma_VK6_h-xGWNBCSb4',
      isVerified: true
    },
    {
      id: '2',
      name: 'Elena Rostova',
      role: 'Senior Archivist',
      experience: 'Expert in restoring and digitizing fragile 19th-century correspondence and personal journals. Fluent in 4 languages.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6u7_-Ut5jNXnCuu-IIrlNyY1i7aZDao634tkpcIys3B8tHaI0_i-cnrfwf3RX24BHRwsfSmalKGytr1B74b-PhjT4iqPWqJoMnPt0S-krRu2Vswhpc0dtSvZC5bOK00zAxcnED-oxjZfg1WYRgVu0WHRt-OBEGQvFjeTcXOEl_8vD1lzSo2Uur7mjL2nrYQ3OEoRyrtVISNv_thiLNT2vRccxMDhSLWI-YPUICwfDrkFufkUuttyuVzDZnmWAf8h-Lsb-UxinoVo',
      isVerified: true
    },
    {
      id: '3',
      name: 'Marcus Lin',
      role: 'Genealogist',
      experience: 'Dedicated to tracing trans-pacific migration patterns and family histories. Specialized in connecting fragmented ancestral records.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrK-aJa6TrBHdzbb3tkaue40SfSWrKmmrYgi6Eab6cy23REkTlZ2AX4KA25Lf_xp2p3Wx-r0OIXNVRWnwOs0LD04beG5TvkKWnP32KE2ZMjxAiXuwEoUBaKEmgobBh9IBwCZwN2_lJHBg5UBtUs5iUobIeOjX0-S-udL4_1QGbTGpSpNj6JP1RDnW5wkJF5hq6NJwy9beiWz5mw1g3PDW7BsuE-6VTElgKPFJv1T29y7NzBdXiTwxlfzySDEzxYrBv0eWhpYAj8n4',
      isVerified: false
    }
  ];

  const knowledgeSources: KnowledgeSource[] = [
    {
      id: '1',
      title: 'Archivos Históricos de Veracruz (1850-1920)',
      type: 'Registry Database',
      description: 'Digitized records of passenger arrivals, port logs, and public declarations from Veracruz, MX.',
      downloads: '1.2k accesses'
    },
    {
      id: '2',
      title: 'Genealogías Reales de Europa Occidental',
      type: 'Historical Catalog',
      description: 'A verified database of noble lineage, migrations, and land registries across Western Europe.',
      downloads: '850 accesses'
    }
  ];

  const aiAgents: AIAgent[] = [
    {
      id: '1',
      title: 'The Chronicler',
      description: 'An AI trained on historical narratives to help synthesize raw family data into compelling chronological stories.',
      icon: 'auto_awesome'
    },
    {
      id: '2',
      title: 'Genealogy Bot',
      description: 'Cross-references vast public databases to identify missing links in your constructed family tree.',
      icon: 'account_tree'
    }
  ];

  return (
    <div className="bg-surface text-ink-text font-body-md antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="w-full top-0 sticky bg-surface border-b border-border-subtle z-50">
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-headline-lg text-headline-lg font-bold text-ink-text">Legado</Link>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => setActiveTab('Curadores')} className={`font-label-md text-label-md transition-colors ${activeTab === 'Curadores' ? 'text-ink-text font-bold border-b-2 border-heritage-gold pb-1' : 'text-muted-ink hover:text-ink-text'}`}>Curators</button>
              <button onClick={() => setActiveTab('Conocimiento')} className={`font-label-md text-label-md transition-colors ${activeTab === 'Conocimiento' ? 'text-ink-text font-bold border-b-2 border-heritage-gold pb-1' : 'text-muted-ink hover:text-ink-text'}`}>Knowledge</button>
              <button onClick={() => setActiveTab('Legacy AI')} className={`font-label-md text-label-md transition-colors ${activeTab === 'Legacy AI' ? 'text-ink-text font-bold border-b-2 border-heritage-gold pb-1' : 'text-muted-ink hover:text-ink-text'}`}>Legacy AI</button>
              <Link className="text-muted-ink font-label-md text-label-md hover:text-ink-text transition-colors" to="/archive">Archives</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-ink">search</span>
              <input className="pl-10 pr-4 py-2 border border-border-subtle rounded bg-paper-surface focus:ring-0 focus:border-heritage-gold transition-colors w-64 text-label-md font-label-md text-ink-text" placeholder="Search the archive..." type="text" />
            </div>
            <Link to="/vault" className="bg-ink-text text-white px-6 py-2 rounded font-label-md text-label-md hover:bg-opacity-90 transition-opacity text-center">Dashboard</Link>
            <div className="flex items-center gap-2 text-ink-text">
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">menu</span></button>
              <Link to="/settings" className="p-2 hover:bg-surface-container rounded-full transition-colors hidden sm:block"><span className="material-symbols-outlined text-ink-text">account_circle</span></Link>
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
          {['Curadores', 'Conocimiento', 'Legacy AI'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-label-md text-label-md pb-2 whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'text-ink-text font-bold border-b-2 border-heritage-gold'
                  : 'text-muted-ink hover:text-ink-text'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Curadores Section */}
        {activeTab === 'Curadores' && (
          <section className="mb-stack-lg animate-fadeIn">
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-headline-md text-headline-md text-ink-text">Featured Curators</h2>
              <a className="font-label-sm text-label-sm text-heritage-gold hover:underline uppercase tracking-wider" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curators.map((curator) => (
                <article key={curator.id} className="border border-border-subtle rounded bg-paper-surface p-6 flex flex-col group hover:border-surface-tint transition-colors shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded overflow-hidden">
                      <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt={curator.name} src={curator.avatar} />
                    </div>
                    {curator.isVerified && (
                      <div className="flex items-center gap-1 text-heritage-gold">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        <span className="font-label-sm text-label-sm uppercase">Legacy Verified</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-1 text-ink-text">{curator.name}</h3>
                  <p className="font-label-sm text-label-sm uppercase text-muted-ink mb-4">{curator.role}</p>
                  <p className="font-body-md text-body-md text-muted-ink mb-6 line-clamp-3">{curator.experience}</p>
                  <div className="mt-auto pt-4 border-t border-border-subtle">
                    <button
                      onClick={() => alert(`Connection request sent to ${curator.name}`)}
                      className="w-full py-2 border border-ink-text text-ink-text rounded font-label-md text-label-md hover:bg-ink-text hover:text-white transition-colors"
                    >
                      Connect
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Conocimiento Section */}
        {activeTab === 'Conocimiento' && (
          <section className="mb-stack-lg animate-fadeIn">
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-headline-md text-headline-md text-ink-text">Archival Knowledge Sources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {knowledgeSources.map((source) => (
                <article key={source.id} className="border border-border-subtle rounded bg-paper-surface p-6 flex flex-col group hover:border-surface-tint transition-colors shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 bg-surface-container text-ink-text font-label-sm text-label-sm rounded uppercase tracking-wider">
                      {source.type}
                    </span>
                    <span className="text-label-sm font-label-sm text-muted-ink">{source.downloads}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2 text-ink-text">{source.title}</h3>
                  <p className="font-body-md text-body-md text-muted-ink mb-6">{source.description}</p>
                  <div className="mt-auto pt-4 border-t border-border-subtle">
                    <button
                      onClick={() => alert(`Requesting access to database: ${source.title}`)}
                      className="w-full py-2 bg-ink-text text-white rounded font-label-md text-label-md hover:bg-opacity-90 transition-colors"
                    >
                      Request Database Access
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Legacy AI Section */}
        {activeTab === 'Legacy AI' && (
          <section className="animate-fadeIn">
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-headline-md text-headline-md text-ink-text">Legacy AI Agents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiAgents.map((agent) => (
                <article key={agent.id} className="border border-border-subtle rounded bg-paper-surface p-8 flex items-center gap-6 shadow-sm hover:border-surface-tint transition-colors">
                  <div className="w-20 h-20 rounded bg-primary-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-heritage-gold text-4xl">{agent.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-2 text-ink-text">{agent.title}</h3>
                    <p className="font-body-md text-body-md text-muted-ink mb-4">{agent.description}</p>
                    <button
                      onClick={() => alert(`Accessing specialized agent: ${agent.title}`)}
                      className="text-heritage-gold font-label-md text-label-md hover:underline flex items-center gap-1"
                    >
                      Access Agent <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-container mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter py-stack-md max-w-container-max mx-auto">
          <div className="mb-4 md:mb-0">
            <span className="font-headline-md text-headline-md text-on-primary">Legado</span>
            <p className="font-body-md text-body-md text-on-primary-container mt-1">© 2026 Legado. Preserving the human narrative.</p>
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
