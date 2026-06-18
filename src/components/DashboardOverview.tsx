/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Award, TrendingUp, History, UserCheck, Plus, Sparkles, 
  Trash2, ShieldCheck, FileText, Hourglass, CheckSquare, Compass 
} from 'lucide-react';
import { LegacyProject, VaultActivity } from '../types';

interface DashboardOverviewProps {
  projects: LegacyProject[];
  activities: VaultActivity[];
  marketplaceBalance: number;
  onAddProject: (p: Partial<LegacyProject>) => void;
  onAddActivity: (a: Partial<VaultActivity>) => void;
  onNavigateTab: (tab: any) => void;
  userName: string;
}

export default function DashboardOverview({
  projects,
  activities,
  marketplaceBalance,
  onAddProject,
  onAddActivity,
  onNavigateTab,
  userName
}: DashboardOverviewProps) {
  const [showAddProjModal, setShowAddProjModal] = useState(false);
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjCover, setNewProjCover] = useState('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80');

  // Calculates total stats dynamically
  const totalStories = projects.reduce((acc, p) => acc + p.storiesCount, 0) + 54;
  const totalHours = projects.reduce((acc, p) => acc + p.hoursRecorded, 0) + 12.5;
  const totalDocs = projects.reduce((acc, p) => acc + p.documentsStored, 0) + 72;
  const activeCount = projects.length;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle.trim()) return;
    
    // Add new project
    onAddProject({
      id: `proj-${Date.now()}`,
      title: newProjTitle.trim(),
      description: newProjDesc.trim() || 'A secondary digital preservation portfolio.',
      progress: 0,
      storiesCount: 0,
      hoursRecorded: 0,
      documentsStored: 0,
      coverUrl: newProjCover,
      status: 'active'
    });

    // Add activity log
    onAddActivity({
      type: 'enrich',
      title: 'New Legacy Project Created',
      description: `Project "${newProjTitle}" registered with Swiss custodial matrix.`,
      severity: 'info'
    });

    // Reset values
    setNewProjTitle('');
    setNewProjDesc('');
    setShowAddProjModal(false);
  };

  return (
    <div id="overview-content" className="space-y-8">
      {/* Welcome Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/20 p-6 rounded-2xl border border-slate-900">
        <div>
          <h2 className="text-xl font-serif text-white flex items-center space-x-2">
            <span>Welcome, {userName}</span>
            <span className="text-amber-500 text-xs font-mono uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Institutional Tier</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">Your cryptographic signature binds with Swiss security hubs for timeline consistency.</p>
        </div>

        <button
          id="trigger-add-proj"
          onClick={() => setShowAddProjModal(true)}
          className="mt-4 sm:mt-0 flex items-center space-x-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 font-sans text-xs font-semibold text-slate-950 uppercase rounded transition cursor-pointer"
        >
          <Plus size={14} />
          <span>Create Vault Project</span>
        </button>
      </div>

      {/* Grid Layout 1: Knowledge score card + Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Knowledge Score KPI (Progress radial) */}
        <div className="lg:col-span-4 bg-slate-900/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl"></div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">Preservation Score</h3>
            <span className="text-[10px] block font-mono text-slate-500 mt-0.5">VAULT INTEGRITY ANALYSIS</span>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            {/* SVG radial ring */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="absolute transform -rotate-90 w-32 h-32">
                <circle cx="64" cy="64" r="50" strokeWidth="6" stroke="#1e293b" fill="transparent" />
                <circle cx="64" cy="64" r="50" strokeWidth="8" stroke="#f59e0b" strokeDasharray="314" strokeDashoffset="75" strokeLinecap="round" fill="transparent" />
              </svg>
              <div className="text-center z-10">
                <span className="text-4xl font-serif text-white font-extrabold block">75%</span>
                <span className="text-[9px] block uppercase font-mono tracking-widest text-slate-400 mt-1">OPTIMAL LEVEL</span>
              </div>
            </div>
            
            <p className="text-[11px] font-mono text-center text-slate-400 max-w-xs mt-4">
              Your stories captured covers <strong>88%</strong> of your targeted key milestones. Add <strong>2 more oral memoirs</strong> to rank up.
            </p>
          </div>

          <button
            id="score-improve-btn"
            onClick={() => onNavigateTab('interview-studio')}
            className="w-full py-2 border border-amber-500/15 bg-amber-500/5 hover:bg-amber-500/10 text-[10px] font-mono tracking-wider text-amber-500 uppercase rounded transition"
          >
            Enhance Timeline Score &rarr;
          </button>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-5 flex flex-col justify-between">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Stories Captured</h4>
            <div className="mt-4 flex items-baseline space-x-2">
              <span className="text-3xl font-serif font-bold text-white">{totalStories}</span>
              <span className="text-[10px] font-mono text-emerald-500">+12</span>
            </div>
            <span className="text-[9px] block font-mono text-slate-500 mt-2">CHRONO-CATALOGED</span>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-5 flex flex-col justify-between">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Hours Recorded</h4>
            <div className="mt-4 flex items-baseline space-x-2">
              <span className="text-3xl font-serif font-bold text-white">{totalHours.toFixed(1)}h</span>
              <span className="text-[10px] font-mono text-emerald-500">+4.5</span>
            </div>
            <span className="text-[9px] block font-mono text-slate-500 mt-2">HI-RES WAV MASTERING</span>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-5 flex flex-col justify-between">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Documents Stored</h4>
            <div className="mt-4 flex items-baseline space-x-2">
              <span className="text-3xl font-serif font-bold text-white">{totalDocs}</span>
              <span className="text-[10px] font-mono text-slate-500">Secure</span>
            </div>
            <span className="text-[9px] block font-mono text-slate-500 mt-2">MUTABLE LEGAL LOGS</span>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-5 flex flex-col justify-between">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Active Portfolios</h4>
            <div className="mt-4 flex items-baseline space-x-2">
              <span className="text-3xl font-serif font-bold text-amber-500">{activeCount}</span>
              <span className="text-[10px] font-mono text-slate-400">Total</span>
            </div>
            <span className="text-[9px] block font-mono text-slate-500 mt-2">ZURICH CENTRAL SYNC</span>
          </div>
        </div>

      </div>

      {/* Grid Layout 2: Active Projects & Activity Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Active Legacy Portfolios */}
        <div className="lg:col-span-7 bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-300">Active Legacy Projects</h3>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-500">MAPPED ON CHRONO</span>
          </div>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                className="group relative flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-xl p-4 transition"
              >
                {/* Cover thumbnail */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-slate-950 relative border border-slate-800">
                  <img src={proj.coverUrl} alt={proj.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
                  <div className="absolute bottom-1 left-1.5 text-[8px] font-mono text-white/90 bg-slate-950/60 px-1 py-0.5 rounded border border-white/5 uppercase">
                    PROJ #{proj.id.split('-')[1]?.substring(0, 3) || '924'}
                  </div>
                </div>

                {/* Progress parameters */}
                <div className="flex-grow space-y-1.5 w-full">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-sans font-bold text-white">{proj.title}</h4>
                    <span className="text-[10px] font-mono text-amber-500 font-bold">{proj.progress}% Code</span>
                  </div>
                  
                  <p className="text-[10px] text-slate-400 line-clamp-1.5 leading-normal">
                    {proj.description}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[9px] font-mono text-slate-500">
                    <span className="flex items-center space-x-1">
                      <FileText size={10} className="text-slate-600" />
                      <span>{proj.storiesCount} stories</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Hourglass size={10} className="text-slate-600" />
                      <span>{proj.hoursRecorded} hours</span>
                    </span>
                    {proj.curatorName && (
                      <span className="bg-amber-500/5 px-1.5 py-0.5 rounded border border-amber-500/10 text-[8px] text-amber-500 font-bold uppercase">
                        {proj.curatorName}
                      </span>
                    )}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-950 rounded-full h-1 mt-2 overflow-hidden border border-slate-900">
                    <div className="bg-amber-500 h-1 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Curator & Marketplace Quick Metrics */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Curator Card Dr. Elena Rossi */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-3xl"></div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-950 border border-amber-500/20 shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80" 
                  alt="Dr. Elena Rossi" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-amber-500 font-bold uppercase">Assigned Curator</span>
                <h4 className="text-xs font-sans font-bold text-white mt-1">Dr. Elena Rossi</h4>
                <p className="text-[10px] text-slate-400 font-mono">Expert Swiss Biography Curation Specialist</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 bg-slate-950/40 border border-slate-900 p-3 rounded-lg mt-4 font-serif leading-relaxed">
              "Arthur, I finalized the review of the Ancestral migration records. The timeline tags are secured. Ready to start our next Cambridge chapter interviewing session?"
            </p>

            <button
              id="curator-chat-nav"
              onClick={() => onNavigateTab('interview-studio')}
              className="w-full flex items-center justify-center space-x-2 py-2 bg-slate-900 hover:bg-slate-850 font-sans text-[10px] tracking-wider text-slate-300 font-semibold uppercase rounded mt-4 border border-slate-800"
            >
              <span>Connect Live Room</span>
            </button>
          </div>

          {/* Balance Marketplace Card */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 flex justify-between items-center relative overflow-hidden">
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Marketplace Balance</h4>
              <div className="text-2xl font-serif text-white font-extrabold mt-1">
                ${marketplaceBalance.toLocaleString()}
              </div>
              <span className="text-[9px] block font-mono text-emerald-500 mt-0.5 flex items-center space-x-1">
                <TrendingUp size={10} />
                <span>SAVINGS TIER ACTIVE +4.2%</span>
              </span>
            </div>

            <button
              id="dashboard-market-nav"
              onClick={() => onNavigateTab('marketplace')}
              className="px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 hover:border-amber-500/40 rounded font-sans text-[10px] uppercase font-bold tracking-wider transition"
            >
              Shop Vault Kit
            </button>
          </div>

        </div>

      </div>

      {/* Activity Timeline section */}
      <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-mono uppercase tracking-widest text-slate-300">Recent Vault Activity Timeline</h3>
          <span className="text-[9px] block font-mono text-slate-500">CRYPTOGRAPHIC STAMPS</span>
        </div>

        <div className="relative border-l border-slate-900 ml-3 space-y-6 pl-6 py-1">
          {activities.map((act) => (
            <div key={act.id} className="relative group">
              {/* timeline point dot */}
              <div className={`absolute -left-[30px] top-1 w-3 h-3 rounded-full border bg-slate-950 transition ${act.severity === 'critical' ? 'border-rose-500 scale-110' : 'border-amber-500'}`}></div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <div>
                  <h4 className="text-xs font-sans font-bold text-white group-hover:text-amber-500 transition">{act.title}</h4>
                  <p className="text-[10pt] text-slate-400 mt-0.5 leading-relaxed">{act.description}</p>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center space-x-3 text-[10px] font-mono text-slate-500">
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8pt] font-semibold text-slate-400 uppercase">{act.user}</span>
                  <span>{act.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CREATE NEW PROJECT MODAL */}
      {showAddProjModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-850 rounded-2xl p-6 shadow-2xl relative space-y-6">
            <div className="space-y-1">
              <h3 className="text-base font-serif text-white">Create New Custodial Project</h3>
              <p className="text-[11px] text-slate-400">Establish a separate portfolio to bundle historical artifacts, audios and assets.</p>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-mono uppercase text-slate-400">Project Title</label>
                <input 
                  id="modal-proj-title"
                  type="text" 
                  value={newProjTitle} 
                  required
                  onChange={(e) => setNewProjTitle(e.target.value)}
                  placeholder="e.g. Oxford Economics Fellowship Archives" 
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded font-sans text-xs focus:outline-none focus:border-amber-500/30 text-white" 
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-[10px] font-mono uppercase text-slate-400">Historical Synopsis</label>
                <textarea 
                  id="modal-proj-desc"
                  value={newProjDesc} 
                  onChange={(e) => setNewProjDesc(e.target.value)}
                  placeholder="Briefly describe what this category preserves" 
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded font-sans text-xs h-20 focus:outline-none focus:border-amber-500/30 text-white resize-none" 
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-[10px] font-mono uppercase text-slate-400">Cover Topic Visual URL (Unsplash ready)</label>
                <input 
                  id="modal-proj-cover"
                  type="text" 
                  value={newProjCover} 
                  onChange={(e) => setNewProjCover(e.target.value)}
                  placeholder="https://images.unsplash.com/..." 
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded font-sans text-xs focus:outline-none focus:border-amber-500/30 text-white font-mono" 
                />
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  id="modal-proj-cancel"
                  type="button"
                  onClick={() => setShowAddProjModal(false)}
                  className="flex-1 py-1.5 border border-slate-800 hover:bg-slate-950 text-slate-400 font-mono text-[10px] uppercase rounded transition"
                >
                  Cancel
                </button>
                <button
                  id="modal-proj-submit"
                  type="submit"
                  className="flex-1 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans text-[10px] uppercase font-bold rounded transition"
                >
                  Create Portfolio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
