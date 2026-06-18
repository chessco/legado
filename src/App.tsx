/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ActiveView, DashboardTab, VaultItem, LegacyProject, 
  VaultActivity, InterviewRecording 
} from './types';
import { 
  INITIAL_VAULT_ITEMS, INITIAL_LEGACY_PROJECTS, 
  INITIAL_VAULT_ACTIVITY 
} from './data';

// Component Imports
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import RegisterIdentity from './components/RegisterIdentity';
import DashboardOverview from './components/DashboardOverview';
import HumanVault from './components/HumanVault';
import InterviewStudio from './components/InterviewStudio';
import StoryBuilder from './components/StoryBuilder';
import LegacyAI from './components/LegacyAI';
import Marketplace from './components/Marketplace';

import { 
  Shield, Compass, LogOut, Briefcase, FolderLock, 
  Mic, BookOpen, Cpu, ShoppingBag, User 
} from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeView, setActiveView] = useState<ActiveView>('landing');
  const [dashboardTab, setDashboardTab] = useState<DashboardTab>('overview');

  // User Profile State
  const [userSession, setUserSession] = useState<{ name: string; email: string } | null>({
    name: 'Arthur Sterling',
    email: 'arthur.sterling@vauld.ch'
  });

  // Vault/Project Global States
  const [vaultItems, setVaultItems] = useState<VaultItem[]>(INITIAL_VAULT_ITEMS);
  const [projects, setProjects] = useState<LegacyProject[]>(INITIAL_LEGACY_PROJECTS);
  const [activities, setActivities] = useState<VaultActivity[]>(INITIAL_VAULT_ACTIVITY);
  const [assignedCurator, setAssignedCurator] = useState<string>('Dr. Elena Rossi');
  const [marketplaceBalance, setMarketplaceBalance] = useState<number>(12450);

  // Success Auth callbacks
  const handleLoginSuccess = (name: string, email: string) => {
    setUserSession({ name, email });
    setActiveView('dashboard');
    
    // Add activity log
    const welcomeActivity: VaultActivity = {
      id: `act-${Date.now()}`,
      type: 'security',
      title: 'Institutional Handshake Initialized',
      description: `User "${name}" authorized from secure IP node. Sealed Swiss signature.`,
      timestamp: 'Just now',
      user: name,
      severity: 'info'
    };
    setActivities([welcomeActivity, ...activities]);
  };

  const handleRegisterSuccess = (name: string, email: string) => {
    setUserSession({ name, email });
    setActiveView('dashboard');

    const registerActivity: VaultActivity = {
      id: `act-${Date.now()}`,
      type: 'security',
      title: 'Swiss Custody Account Sealing',
      description: `Newly generated cryptographic seed phrase sealed for client "${name}".`,
      timestamp: 'Just now',
      user: name,
      severity: 'critical'
    };
    setActivities([registerActivity, ...activities]);
  };

  const handleLogout = () => {
    setUserSession(null);
    setActiveView('landing');
    setDashboardTab('overview');
  };

  // State Manipulation Handlers (passed down to modular subcomponents)
  const handleAddProject = (newProj: Partial<LegacyProject>) => {
    setProjects([newProj as LegacyProject, ...projects]);
  };

  const handleAddActivity = (newAct: Partial<VaultActivity>) => {
    const fullAct: VaultActivity = {
      id: `act-${Date.now()}`,
      timestamp: 'Just now',
      user: userSession?.name || 'Arthur Sterling',
      severity: 'info',
      ...newAct
    } as VaultActivity;
    setActivities([fullAct, ...activities]);
  };

  const handleAddVaultItem = (newItem: VaultItem) => {
    setVaultItems([newItem, ...vaultItems]);
    
    // Add activity entry
    const upAct: VaultActivity = {
      id: `act-${Date.now()}`,
      type: 'upload',
      title: 'New Digital Deed Locked',
      description: `Completed 2048-bit signature lock of "${newItem.name}".`,
      timestamp: 'Just now',
      user: userSession?.name || 'Arthur Sterling',
      severity: 'info'
    };
    setActivities([upAct, ...activities]);
  };

  const handleDeleteVaultItem = (id: string) => {
    const filtered = vaultItems.filter(v => v.id !== id);
    setVaultItems(filtered);

    const delAct: VaultActivity = {
      id: `act-${Date.now()}`,
      type: 'upload',
      title: 'Vault Asset Purged',
      description: 'Physical segment un-sealed and cleared of offline backup servers.',
      timestamp: 'Just now',
      user: userSession?.name || 'Arthur Sterling',
      severity: 'warning'
    };
    setActivities([delAct, ...activities]);
  };

  const handleUpdateVaultItem = (id: string, updated: Partial<VaultItem>) => {
    const updatedList = vaultItems.map(item => {
      if (item.id === id) {
        return { ...item, ...updated };
      }
      return item;
    });
    setVaultItems(updatedList);
  };

  const handleSaveInterviewRecording = (recording: InterviewRecording) => {
    // Add recording transcript as a text item into Vault
    const newVaultFile: VaultItem = {
      id: `vf-${Date.now()}`,
      name: `${recording.question.substring(0, 25)}... (Transcript).pdf`,
      type: 'document',
      category: 'Family History',
      size: `${(recording.audioDuration * 0.15).toFixed(1)} MB`,
      updatedAt: recording.timestamp,
      isLocked: false,
      notes: recording.transcript
    };
    
    setVaultItems([newVaultFile, ...vaultItems]);

    // Also update dynamic projects hours recorded
    const updatedProjects = projects.map(proj => {
      if (proj.title === 'The 1984 Foundation') {
        return {
          ...proj,
          hoursRecorded: parseFloat((proj.hoursRecorded + recording.audioDuration / 3600).toFixed(2)),
          storiesCount: proj.storiesCount + 1,
          progress: Math.min(proj.progress + 3, 100)
        };
      }
      return proj;
    });
    setProjects(updatedProjects);
  };

  const handleDeductBalance = (amount: number): boolean => {
    if (marketplaceBalance >= amount) {
      setMarketplaceBalance(prev => prev - amount);
      return true;
    }
    return false;
  };

  // Switch routing based on activeView
  if (activeView === 'landing') {
    return <LandingPage onNavigate={setActiveView} />;
  }

  if (activeView === 'login') {
    return <SignIn onNavigate={setActiveView} onLoginSuccess={handleLoginSuccess} />;
  }

  if (activeView === 'register') {
    return <RegisterIdentity onNavigate={setActiveView} onRegisterSuccess={handleRegisterSuccess} />;
  }

  // Dashboard Master View Frame
  return (
    <div id="master-dashboard-container" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Dynamic Top bar header */}
      <header className="bg-slate-950 border-b border-slate-900 px-6 py-4 sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          
          {/* Logo & Platform label */}
          <div 
            onClick={() => setActiveView('landing')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-amber-500/10 p-2 rounded border border-amber-500/20 group-hover:border-amber-500/50 transition">
              <span className="font-mono text-xl tracking-widest text-amber-500 font-extrabold">L</span>
            </div>
            <div className="text-left">
              <span className="font-sans text-xl uppercase font-semibold tracking-widest text-slate-200 group-hover:text-white transition">LEGADO</span>
              <span className="text-[9px] block font-mono text-slate-500 tracking-wider">CUSTODIAL PLATFORM</span>
            </div>
          </div>

          {/* Navigation Bar Hub */}
          <nav className="flex items-center bg-slate-900/45 border border-slate-900 rounded-lg p-1 space-x-1.5 overflow-x-auto max-w-full">
            <button
              id="tab-btn-overview"
              onClick={() => setDashboardTab('overview')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded text-xs font-mono uppercase tracking-wide transition ${dashboardTab === 'overview' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Compass size={13} />
              <span>Dashboard</span>
            </button>

            <button
              id="tab-btn-human-vault"
              onClick={() => setDashboardTab('human-vault')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded text-xs font-mono uppercase tracking-wide transition ${dashboardTab === 'human-vault' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <FolderLock size={13} />
              <span>Human Vault</span>
            </button>

            <button
              id="tab-btn-interview"
              onClick={() => setDashboardTab('interview-studio')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded text-xs font-mono uppercase tracking-wide transition ${dashboardTab === 'interview-studio' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Mic size={13} />
              <span>Interview Studio</span>
            </button>

            <button
              id="tab-btn-story"
              onClick={() => setDashboardTab('story-builder')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded text-xs font-mono uppercase tracking-wide transition ${dashboardTab === 'story-builder' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <BookOpen size={13} />
              <span>Story Builder</span>
            </button>

            <button
              id="tab-btn-legacy-ai"
              onClick={() => setDashboardTab('legacy-ai')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded text-xs font-mono uppercase tracking-wide transition ${dashboardTab === 'legacy-ai' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Cpu size={13} />
              <span>Legacy AI</span>
            </button>

            <button
              id="tab-btn-marketplace"
              onClick={() => setDashboardTab('marketplace')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded text-xs font-mono uppercase tracking-wide transition ${dashboardTab === 'marketplace' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <ShoppingBag size={13} />
              <span>Marketplace</span>
            </button>
          </nav>

          {/* User Signout header metrics */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2.5 text-right font-mono">
              <div className="hidden sm:block">
                <span className="block text-xs text-white font-bold">{userSession?.name}</span>
                <span className="block text-[8px] text-slate-500 uppercase">{userSession?.email}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500">
                <User size={14} />
              </div>
            </div>

            <button
              id="nav-logout-btn"
              onClick={handleLogout}
              className="text-slate-500 hover:text-rose-450 transition hover:bg-slate-950 p-2 rounded cursor-pointer"
              title="Terminate Session"
            >
              <LogOut size={14} />
            </button>
          </div>

        </div>
      </header>

      {/* Main Tab Routing content screen container with mobile padding bounds */}
      <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-grow">
        {dashboardTab === 'overview' && (
          <DashboardOverview 
            projects={projects}
            activities={activities}
            marketplaceBalance={marketplaceBalance}
            onAddProject={handleAddProject}
            onAddActivity={handleAddActivity}
            onNavigateTab={setDashboardTab}
            userName={userSession?.name || 'Arthur Sterling'}
          />
        )}

        {dashboardTab === 'human-vault' && (
          <HumanVault 
            items={vaultItems}
            onAddItem={handleAddVaultItem}
            onDeleteItem={handleDeleteVaultItem}
            onUpdateItem={handleUpdateVaultItem}
          />
        )}

        {dashboardTab === 'interview-studio' && (
          <InterviewStudio 
            onSaveRecording={handleSaveInterviewRecording}
            onAddActivity={handleAddActivity}
          />
        )}

        {dashboardTab === 'story-builder' && (
          <StoryBuilder 
            onAddActivity={handleAddActivity}
          />
        )}

        {dashboardTab === 'legacy-ai' && (
          <LegacyAI 
            onAddActivity={handleAddActivity}
          />
        )}

        {dashboardTab === 'marketplace' && (
          <Marketplace 
            balance={marketplaceBalance}
            onDeductBalance={handleDeductBalance}
            onAddActivity={handleAddActivity}
            onAssignCurator={setAssignedCurator}
          />
        )}
      </main>

      {/* Footer copyright */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 text-center text-slate-700 font-mono text-[9px]">
        LEGADO ARCHIVALS S.A. MUNICH & ZURICH // ALL CORE SEALS CRYPTOGRAPHICALLY SECURED WITH VAULD SYSTEM CH-924A
      </footer>

    </div>
  );
}
