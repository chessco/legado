/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Lock, Shield, KeyRound, Loader, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { ActiveView } from '../types';

interface SignInProps {
  onNavigate: (view: ActiveView) => void;
  onLoginSuccess: (userName: string, email: string) => void;
}

export default function SignIn({ onNavigate, onLoginSuccess }: SignInProps) {
  const [vauldId, setVauldId] = useState('Arthur Sterling');
  const [securityKey, setSecurityKey] = useState('••••••••');
  const [showKey, setShowKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vauldId.trim()) {
      setError('Veuillez entrer un identifiant Vauld valide.');
      return;
    }
    setError('');
    setLoading(true);

    // Simulate cryptographic key verification
    setTimeout(() => {
      setLoading(false);
      // Auto tag email based on identification entry
      const email = vauldId.toLowerCase().includes('sterling') 
        ? 'arthur.sterling@vauld.ch' 
        : `${vauldId.toLowerCase().replace(/\s+/g, '')}@vauld.ch`;
      onLoginSuccess(vauldId, email);
    }, 1200);
  };

  return (
    <div id="signin-screen" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      {/* Header link */}
      <header className="px-6 py-5 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-slate-900/60">
        <div 
          onClick={() => onNavigate('landing')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="bg-amber-500/10 p-2 rounded border border-amber-500/20 group-hover:border-amber-500/50 transition">
            <span className="font-mono text-xl tracking-widest text-amber-500 font-extrabold">L</span>
          </div>
          <div>
            <span className="font-sans text-xl uppercase font-semibold tracking-widest text-slate-200 group-hover:text-white transition">LEGADO</span>
            <span className="text-[9px] block font-mono text-slate-500 tracking-wider">CUSTODIAL PLATFORM</span>
          </div>
        </div>

        <button 
          id="signin-cancel-btn"
          onClick={() => onNavigate('landing')} 
          className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 hover:text-slate-300 transition cursor-pointer"
        >
          Cancel
        </button>
      </header>

      {/* Main card box */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-slate-900/40 border border-slate-900 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 border border-slate-900 w-12 h-12 rounded-full flex items-center justify-center text-amber-500">
            <Shield size={20} />
          </div>

          <div className="text-center mt-2 mb-8">
            <h2 className="text-sm font-mono uppercase tracking-widest text-amber-500 font-bold block mb-1">
              Legado Vault Tier Access
            </h2>
            <p className="text-[11px] font-mono text-slate-500">
              CRYPTOGRAPHIC HANDSHAKE REQUIRED
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-3 rounded-lg flex items-start space-x-2 text-xs">
                <AlertCircle size={14} className="mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Input 1: Vauld Identifier */}
            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400">
                Vauld Identifier (Name or Code)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Shield size={14} />
                </div>
                <input
                  id="vauld-id-input"
                  type="text"
                  value={vauldId}
                  onChange={(e) => setVauldId(e.target.value)}
                  placeholder="e.g. Arthur Sterling"
                  required
                  className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition"
                />
              </div>
            </div>

            {/* Input 2: Security Pin Key */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400">
                  Secure Master Key / PIN
                </label>
                <button
                  id="toggle-pass-visibility"
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="text-[10px] font-mono text-slate-500 hover:text-slate-300 focus:outline-none"
                >
                  {showKey ? <span className="flex items-center space-x-1"><EyeOff size={10} /> <span>Hide</span></span> : <span className="flex items-center space-x-1"><Eye size={10} /> <span>Show</span></span>}
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <KeyRound size={14} />
                </div>
                <input
                  id="security-key-input"
                  type={showKey ? "text" : "password"}
                  value={securityKey}
                  onChange={(e) => setSecurityKey(e.target.value)}
                  placeholder="Enter custom PIN/signature key"
                  required
                  className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition"
                />
              </div>
            </div>

            {/* Custom info alert box */}
            <div className="bg-amber-500/5 border border-amber-500/10 text-amber-500/80 rounded-lg p-3 text-[10px] font-mono leading-relaxed">
              <strong>🔒 Institutional Protocol:</strong> You can enter any identification name to establish your digital workspace. The system loads our flagship Swiss-curated dataset on submission.
            </div>

            <button
              id="signin-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-800 disabled:text-slate-500 hover:shadow-[0_4px_15px_rgba(245,158,11,0.15)] font-sans text-xs font-semibold tracking-widest text-slate-950 uppercase rounded transition cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader size={14} className="animate-spin" />
                  <span>NEGOTIATING HANDSHAKE...</span>
                </>
              ) : (
                <span>Initialize Vault Session</span>
              )}
            </button>
          </form>

          {/* Nav links */}
          <div className="mt-8 pt-6 border-t border-slate-900 flex justify-between items-center text-[11px] font-mono text-slate-500">
            <button 
              id="reset-vault-btn"
              onClick={() => alert("Establishing secure restore request with Swiss Heritage Curator. Please check email.")} 
              className="hover:text-slate-300 transition"
            >
              Reset Vault PIN
            </button>
            <button 
              id="register-redirect-btn"
              onClick={() => onNavigate('register')} 
              className="text-amber-500/80 hover:text-amber-500 font-semibold transition"
            >
              Secure Identity
            </button>
          </div>
        </div>
      </main>

      {/* Footer support */}
      <footer className="py-6 text-center text-slate-700 font-mono text-[9px] border-t border-slate-900/60">
        LEGADO INSTITUTIONAL SECURE NODE // SSL SEAL 4096-AES // REGULATION: CHF-7A
      </footer>
    </div>
  );
}
