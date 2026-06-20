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

  const navItems = [
    { name: 'Home', path: '/home', icon: 'home' },
    { name: 'Vault', path: '/vault', icon: 'account_balance_wallet' },
    { name: 'Archive', path: '/archive', icon: 'archive' },
    { name: 'Interviews', path: '/interviews', icon: 'mic' },
    { name: 'Story Builder', path: '/story-builder', icon: 'auto_stories' },
    { name: 'Marketplace', path: '/marketplace', icon: 'storefront' },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    setSuccessMsg('Entry successfully registered and processed by Legacy AI!');
    setTimeout(() => {
      setSuccessMsg('');
      setIsModalOpen(false);
      setNewTitle('');
      setNewDate('');
      setNewDesc('');
    }, 2000);
  };

  return (
    <div className="antialiased min-h-screen flex bg-paper-surface dark:bg-surface text-ink-text dark:text-inverse-on-surface">
      {/* SideNavBar */}
      <nav className="bg-surface dark:bg-surface-dim font-body-md text-body-md h-screen w-64 fixed left-0 top-0 border-r border-border-subtle dark:border-outline-variant hidden md:flex flex-col py-8 gap-stack-md z-40">
        <div className="px-6 mb-8">
          <h1 className="font-headline-md text-headline-md font-bold text-ink-text dark:text-inverse-on-surface">Legado</h1>
          <p className="text-label-sm font-label-sm text-muted-ink mt-1 uppercase tracking-wider">Knowledge Preservation</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="mx-6 py-3 px-4 bg-ink-text text-on-primary rounded-lg flex items-center justify-center gap-2 hover:bg-surface-tint transition-colors duration-200 ease-in-out font-label-md text-label-md"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
          New Entry
        </button>
        
        <div className="flex-1 mt-6">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`pl-4 py-3 flex items-center gap-3 transition-colors duration-200 ease-in-out ${
                      isActive 
                        ? "text-ink-text dark:text-primary-fixed font-semibold border-l-2 border-heritage-gold bg-surface-container-low/50" 
                        : "text-muted-ink dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container"
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="mt-auto">
          <Link to="/settings" className="text-muted-ink dark:text-on-surface-variant pl-4 py-3 flex items-center gap-3 hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors duration-200 ease-in-out">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            Settings
          </Link>
          
          {/* User Profile Area */}
          <div className="px-6 mt-6 flex items-center gap-3 border-t border-border-subtle pt-6">
            <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-border-subtle shrink-0">
              <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSM5DjaTakX1rKGuZmaIqcYSnBi2p3fWjJQmeCMw2SDRg5AWVOWFR4fyxjIuxDqyRKjhm_a4FqxNbw0uR7eaXHs75KyvWX7_aydZYSqMXZ2GCEqfirdF6br5DOkTkoWxOWOSOeClcYFm2SDvDo-5GZdaEU0PrpHYuyQMVT2VmKYH5XBHxuNXmiefsXvwyRE6fqw82k5QCvBvO_Ofhyi6tsym3oIFYkz-s-31nBddSjPvjahC2ufVk8asAK5_tConA2qSAIMThttAE" />
            </div>
            <div className="overflow-hidden">
              <p className="font-label-md text-label-md text-ink-text truncate">Eleanor Vance</p>
              <p className="font-label-sm text-label-sm text-muted-ink truncate">Chief Archivist</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* TopAppBar */}
        <header className="bg-paper-surface/80 dark:bg-surface/80 backdrop-blur-md font-headline-md text-headline-md docked full-width top-0 sticky border-b border-border-subtle dark:border-outline-variant flex justify-between items-center w-full px-gutter h-16 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button className="md:hidden text-ink-text hover:text-primary transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="font-headline-md text-headline-md font-black text-ink-text dark:text-on-primary-fixed hidden sm:block">Dashboard</h2>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center justify-end flex-1 gap-4">
            <div className="relative max-w-md w-full hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-ink text-sm">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-border-subtle rounded text-label-md font-label-md focus:outline-none focus:border-outline transition-colors text-ink-text placeholder:text-muted-ink" placeholder="Search the archive..." type="text" />
            </div>
            <button className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors scale-95 active:scale-100 p-2 rounded-full hover:bg-surface-container-low sm:hidden">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors scale-95 active:scale-100 p-2 rounded-full hover:bg-surface-container-low relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-heritage-gold rounded-full"></span>
            </button>
            <button className="text-muted-ink dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors scale-95 active:scale-100 p-2 rounded-full hover:bg-surface-container-low">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-gutter max-w-container-max mx-auto w-full flex-1">
          {children}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-paper-surface border border-border-subtle rounded-lg p-6 max-w-md w-full shadow-lg flex flex-col gap-4 text-ink-text">
            <h2 className="font-headline-md text-headline-md font-bold">New Vault Entry</h2>
            
            {successMsg ? (
              <div className="bg-green-100 dark:bg-green-950/30 text-green-800 dark:text-green-400 p-4 rounded text-center font-label-md text-label-md border border-green-200">
                {successMsg}
              </div>
            ) : (
              <form onSubmit={handleSave} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Boda de mis abuelos"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="p-2 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    className="p-2 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md text-ink-text"
                  >
                    <option value="Photo">Photo</option>
                    <option value="Video">Video</option>
                    <option value="Audio">Audio</option>
                    <option value="Document">Document</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. 1950"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="p-2 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-muted-ink uppercase">Description</label>
                  <textarea
                    rows={3}
                    placeholder="Describe this artifact..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="p-2 border border-border-subtle rounded bg-surface focus:outline-none focus:border-outline text-body-md resize-none"
                  />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-border-subtle rounded hover:bg-surface-container-low text-label-md font-label-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-ink-text text-white rounded hover:bg-opacity-90 text-label-md font-label-md"
                  >
                    Save Entry
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
