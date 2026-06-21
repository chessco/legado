import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('Photo');
  const [newDate, setNewDate] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', path: '/inicio', icon: 'home' },
    { name: 'Bóveda', path: '/boveda', icon: 'account_balance_wallet' },
    { name: 'Historias', path: '/historias', icon: 'menu_book' },
    { name: 'Personas', path: '/personas', icon: 'group' },
    { name: 'Línea de Tiempo', path: '/linea-de-tiempo', icon: 'timeline' },
    { name: 'Entrevistas', path: '/entrevistas', icon: 'mic' },
    { name: 'Constructor', path: '/constructor', icon: 'auto_stories' },
    { name: 'Agentes', path: '/agentes', icon: 'psychology' },
    { name: 'Comunidad', path: '/comunidad', icon: 'forum' },
    { name: 'Curadores', path: '/curadores', icon: 'workspace_premium' },
    { name: 'Analítica', path: '/analitica', icon: 'analytics' },
  ];

  const pageTitles: Record<string, string> = {
    '/inicio': 'Inicio',
    '/boveda': 'Bóveda',
    '/historias': 'Historias',
    '/personas': 'Personas',
    '/linea-de-tiempo': 'Línea de Tiempo',
    '/entrevistas': 'Entrevistas',
    '/constructor': 'Constructor',
    '/agentes': 'Agentes',
    '/comunidad': 'Comunidad',
    '/curadores': 'Curadores',
    '/analitica': 'Analítica',
    '/configuracion': 'Configuración',
  };

  const currentPageTitle = pageTitles[location.pathname] ?? 'Legado';

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    setSuccessMsg('¡Conocimiento preservado exitosamente!');
    setTimeout(() => {
      setSuccessMsg('');
      setIsModalOpen(false);
      setNewTitle('');
      setNewDate('');
      setNewDesc('');
    }, 2000);
  };

  return (
    <div className="antialiased min-h-screen flex bg-paper-surface text-ink-text">
      {/* Mobile Overlay */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

      {/* SideNavBar */}
      <nav className={`bg-surface font-body-md text-body-md h-screen w-64 fixed left-0 top-0 border-r border-border-subtle flex flex-col py-8 gap-stack-md z-40 transition-transform duration-300 ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="px-6 mb-6">
          <Link to="/inicio" className="block">
            <h1 className="font-headline-md text-headline-md font-bold text-ink-text">Legado</h1>
            <p className="text-label-sm font-label-sm text-muted-ink mt-0.5 uppercase tracking-wider">Preservación de Conocimiento</p>
          </Link>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mx-6 py-2.5 px-4 bg-ink-text text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-80 transition-all duration-200 font-label-md text-label-md active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
          Nueva Entrada
        </button>

        <div className="flex-1 mt-2 overflow-y-auto">
          <p className="px-6 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-ink/70">Navegación</p>
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={`pl-4 pr-4 py-2.5 flex items-center gap-3 transition-all duration-200 rounded-none ${
                      isActive
                        ? 'text-ink-text font-semibold border-l-2 border-heritage-gold bg-surface-container-low'
                        : 'text-muted-ink hover:bg-surface-container-low hover:text-ink-text'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {item.icon}
                    </span>
                    <span className="font-label-md text-label-md">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-auto border-t border-border-subtle">
          <Link
            to="/configuracion"
            onClick={() => setIsMobileNavOpen(false)}
            className={`text-muted-ink pl-4 pr-4 py-2.5 flex items-center gap-3 hover:bg-surface-container-low hover:text-ink-text transition-all duration-200 ${location.pathname === '/configuracion' ? 'text-ink-text font-semibold border-l-2 border-heritage-gold bg-surface-container-low' : ''}`}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            <span className="font-label-md text-label-md">Configuración</span>
          </Link>

          {/* User Profile Area */}
          <div className="px-6 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container overflow-hidden border border-border-subtle shrink-0">
              <img
                alt="User profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSM5DjaTakX1rKGuZmaIqcYSnBi2p3fWjJQmeCMw2SDRg5AWVOWFR4fyxjIuxDqyRKjhm_a4FqxNbw0uR7eaXHs75KyvWX7_aydZYSqMXZ2GCEqfirdF6br5DOkTkoWxOWOSOeClcYFm2SDvDo-5GZdaEU0PrpHYuyQMVT2VmKYH5XBHxuNXmiefsXvwyRE6fqw82k5QCvBvO_Ofhyi6tsym3oIFYkz-s-31nBddSjPvjahC2ufVk8asAK5_tConA2qSAIMThttAE"
              />
            </div>
            <div className="overflow-hidden">
              <p className="font-label-md text-label-md text-ink-text truncate">Eleanor Vance</p>
              <p className="font-label-sm text-label-sm text-muted-ink truncate">Curador Principal</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* TopAppBar */}
        <header className="bg-paper-surface/80 backdrop-blur-md border-b border-border-subtle flex justify-between items-center w-full px-6 md:px-8 h-14 z-30 sticky top-0">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-ink-text hover:text-muted-ink transition-colors p-1"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="font-headline-sm text-[15px] font-semibold text-ink-text tracking-tight">
              {currentPageTitle}
            </h2>
          </div>

          {/* Search + Actions */}
          <div className="flex items-center gap-3">
            <div className="relative max-w-xs w-full hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-ink text-[18px]">search</span>
              <input
                className="w-full pl-9 pr-4 py-1.5 bg-surface-container-low border border-border-subtle rounded-lg text-label-md font-label-md focus:outline-none focus:border-outline transition-colors text-ink-text placeholder:text-muted-ink text-sm"
                placeholder="Buscar en la bóveda..."
                type="text"
              />
            </div>
            <button className="text-muted-ink hover:text-ink-text transition-colors p-1.5 rounded-full hover:bg-surface-container-low sm:hidden">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <button className="text-muted-ink hover:text-ink-text transition-colors p-1.5 rounded-full hover:bg-surface-container-low relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-heritage-gold rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-8 flex-1">
          {children}
        </div>
      </main>

      {/* New Entry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-paper-surface border border-border-subtle rounded-xl p-6 max-w-md w-full shadow-xl flex flex-col gap-4 text-ink-text">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-headline-md font-bold">Preservar Conocimiento</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-ink hover:text-ink-text transition-colors p-1 rounded-full hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {successMsg ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center font-label-md text-label-md border border-green-200">
                {successMsg}
              </div>
            ) : (
              <form onSubmit={handleSave} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase tracking-wider">Título</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Boda de mis abuelos"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="p-2.5 border border-border-subtle rounded-lg bg-surface focus:outline-none focus:border-outline text-body-md transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase tracking-wider">Tipo</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    className="p-2.5 border border-border-subtle rounded-lg bg-surface focus:outline-none focus:border-outline text-body-md text-ink-text transition-colors"
                  >
                    <option value="Photo">Foto</option>
                    <option value="Video">Video</option>
                    <option value="Audio">Audio</option>
                    <option value="Document">Documento</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase tracking-wider">Fecha</label>
                  <input
                    type="text"
                    placeholder="e.g. 1950"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="p-2.5 border border-border-subtle rounded-lg bg-surface focus:outline-none focus:border-outline text-body-md transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase tracking-wider">Descripción</label>
                  <textarea
                    rows={3}
                    placeholder="Describe este artefacto..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="p-2.5 border border-border-subtle rounded-lg bg-surface focus:outline-none focus:border-outline text-body-md resize-none transition-colors"
                  />
                </div>
                <div className="flex justify-end gap-3 mt-1">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-border-subtle rounded-lg hover:bg-surface-container-low text-label-md font-label-md transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-ink-text text-white rounded-lg hover:bg-opacity-80 text-label-md font-label-md transition-all active:scale-95"
                  >
                    Guardar Entrada
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
