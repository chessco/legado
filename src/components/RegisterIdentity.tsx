/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, Key, Check, ArrowRight, Book, User, Mail, Globe, Users, Server, Lock } from 'lucide-react';
import { ActiveView } from '../types';

interface RegisterIdentityProps {
  onNavigate: (view: ActiveView) => void;
  onRegisterSuccess: (userName: string, email: string) => void;
}

export default function RegisterIdentity({ onNavigate, onRegisterSuccess }: RegisterIdentityProps) {
  const [step, setStep] = useState<number>(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('Switzerland (Zurich Server Node)');
  const [securityTier, setSecurityTier] = useState<'standard' | 'quantum_swiss'>('quantum_swiss');
  const [customPhrase, setCustomPhrase] = useState('anchor justice liberty Cambridge 1984');
  const [agreed, setAgreed] = useState(true);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      alert('Veuillez remplir votre nom complet de signature et votre adresse e-mail.');
      return;
    }
    setStep(2);
  };

  const handleStep2 = () => {
    setStep(3);
  };

  const handleFinalize = () => {
    const finalName = fullName.trim() || "Arthur Sterling";
    const finalEmail = email.trim() || 'arthur.sterling@vauld.ch';
    onRegisterSuccess(finalName, finalEmail);
  };

  return (
    <div id="register-screen" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      {/* Header */}
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
          id="register-cancel-btn"
          onClick={() => onNavigate('landing')} 
          className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 hover:text-slate-300 transition cursor-pointer"
        >
          Cancel
        </button>
      </header>

      {/* Main Form Area */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg bg-slate-900/40 border border-slate-900 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
          
          {/* Step Indicators */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-900">
            <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-amber-500' : 'text-slate-600'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs border ${step >= 1 ? 'border-amber-500 font-extrabold bg-amber-500/10' : 'border-slate-800'}`}>
                1
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider font-medium">Identity</span>
            </div>
            
            <div className="flex-grow h-[1px] bg-slate-800 mx-4"></div>

            <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-amber-500' : 'text-slate-600'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs border ${step >= 2 ? 'border-amber-500 font-extrabold bg-amber-500/10' : 'border-slate-800'}`}>
                2
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider font-medium">Security Matrix</span>
            </div>

            <div className="flex-grow h-[1px] bg-slate-800 mx-4"></div>

            <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-amber-500' : 'text-slate-600'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs border ${step >= 3 ? 'border-amber-500 font-extrabold bg-amber-500/10' : 'border-slate-800'}`}>
                3
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider font-medium">Established</span>
            </div>
          </div>

          {/* STEP 1: Secure Identity Details */}
          {step === 1 && (
            <form onSubmit={handleStep1} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-white">Secure Your Identity</h3>
                <p className="text-xs text-slate-400">Specify your civil coordinates to configure the Swiss digital ledger seals.</p>
              </div>

              {/* Legal Name */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400">
                  Full Legal Signature Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User size={14} />
                  </div>
                  <input
                    id="reg-fullname-input"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Arthur Sterling"
                    className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition"
                  />
                </div>
              </div>

              {/* Email address */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400">
                  Secure Secondary Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail size={14} />
                  </div>
                  <input
                    id="reg-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. arthur.sterling@gmail.com"
                    className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition"
                  />
                </div>
              </div>

              {/* Server custody region Selection */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400">
                  Physical Storage Node Node Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Globe size={14} />
                  </div>
                  <select
                    id="reg-region-select"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded font-sans text-sm text-white focus:outline-none focus:border-amber-500/50 transition"
                  >
                    <option value="Switzerland (Zurich Server Node)">Switzerland (Zurich Server Node) - RECOMMENDED</option>
                    <option value="Austria (Vienna Mountain Repository)">Austria (Vienna Mountain Repository)</option>
                    <option value="Norway (Arctic World Archive Tier)">Norway (Arctic World Archive Tier)</option>
                  </select>
                </div>
              </div>

              {/* Legal checkbox */}
              <label className="flex items-start space-x-3 cursor-pointer">
                <input 
                  id="reg-terms-chk"
                  type="checkbox" 
                  checked={agreed} 
                  onChange={() => setAgreed(!agreed)}
                  className="mt-1 rounded border-slate-800 text-amber-500 focus:ring-0 bg-slate-950" 
                />
                <span className="text-[11px] text-slate-500 leading-normal font-mono">
                  I consent under CHF heritage parameters to seal my records offline with a certified notary.
                </span>
              </label>

              <button
                id="reg-continue-step2-btn"
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-amber-500 hover:bg-amber-600 font-sans text-xs font-semibold tracking-widest text-slate-950 uppercase rounded transition cursor-pointer"
              >
                <span>Continue to Security</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          {/* STEP 2: Secure Master Key generation details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-white">Generate Cryptographic Master Key</h3>
                <p className="text-xs text-slate-400">Generate local seed credentials to lock your personal vaults securely offline.</p>
              </div>

              {/* Security Level Setup */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  id="reg-tier-std"
                  type="button"
                  onClick={() => setSecurityTier('standard')}
                  className={`p-4 rounded-xl border text-left transition ${securityTier === 'standard' ? 'border-amber-500 bg-amber-500/5' : 'border-slate-800 bg-slate-900/10 hover:border-slate-700'}`}
                >
                  <Lock size={16} className={securityTier === 'standard' ? 'text-amber-500' : 'text-slate-500'} />
                  <h4 className="text-xs font-sans font-bold text-white mt-3">Level 3 Standard</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-mono">Double SHA256 security seals. Multi-factor email alerts.</p>
                </button>

                <button
                  id="reg-tier-quantum"
                  type="button"
                  onClick={() => setSecurityTier('quantum_swiss')}
                  className={`p-4 rounded-xl border text-left transition ${securityTier === 'quantum_swiss' ? 'border-amber-500 bg-amber-500/5' : 'border-slate-800 bg-slate-900/10 hover:border-slate-700'}`}
                >
                  <Shield size={16} className={securityTier === 'quantum_swiss' ? 'text-amber-500 animate-pulse' : 'text-slate-500'} />
                  <h4 className="text-xs font-sans font-bold text-white mt-3">Swiss Vault (Quantum)</h4>
                  <p className="text-[10px] text-slate-500 mt-1 font-mono">Hardware offline-key authorization. Swiss central backups.</p>
                </button>
              </div>

              {/* Seed phrase display */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400">
                  Your Offline Cryptographic Seed Phrase
                </label>
                <div className="bg-slate-950 border border-slate-900 p-4 rounded font-mono text-xs text-amber-500/90 leading-relaxed text-center shadow-inner tracking-wider select-all cursor-pointer">
                  {customPhrase}
                </div>
                <span className="text-[9px] block text-slate-500 font-mono text-center">
                  Click text to copy. Treat this phrase like a master key. Never lose it.
                </span>
              </div>

              <div className="bg-amber-500/5 border border-amber-500/10 text-amber-500/80 rounded-lg p-3 text-[10px] font-mono leading-relaxed">
                <strong>🛡️ Guard Guarantee:</strong> Legado central servers never record your master key phrase. Your family archives are sealed cryptographically on your client's machine.
              </div>

              <button
                id="reg-finalize-step2-btn"
                type="button"
                onClick={handleStep2}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-amber-500 hover:bg-amber-600 font-sans text-xs font-semibold tracking-widest text-slate-950 uppercase rounded transition cursor-pointer"
              >
                <span>Initialize Key Matrices</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

          {/* STEP 3: Established! */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto text-amber-500">
                <Check size={32} className="animate-bounce" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-white">Legacy Established</h3>
                <p className="text-xs text-slate-400">Your Swiss digital vault is now securely provisioned.</p>
              </div>

              {/* Credentials card overview */}
              <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl text-left space-y-4 font-mono text-xs text-slate-400">
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span>VAULT GUARDIAN:</span>
                  <span className="text-white font-bold">{fullName || 'Arthur Sterling'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span>SECURE VAULT EMAIL:</span>
                  <span className="text-white font-bold">{email || 'arthur.sterling@vauld.ch'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span>SWISS SERVER REGION:</span>
                  <span className="text-white font-bold">CH_ZURICH_04</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>SECURITY ENVELOPE:</span>
                  <span className="text-emerald-500 font-bold uppercase">{securityTier === 'quantum_swiss' ? 'QUANTUM_VAULD_CH' : 'LEVEL_3_STANDARD'}</span>
                </div>
              </div>

              <button
                id="reg-access-core-vault-btn"
                type="button"
                onClick={handleFinalize}
                className="w-full flex items-center justify-center space-x-2 py-4 bg-amber-500 hover:bg-amber-600 font-sans text-xs font-bold tracking-widest text-slate-950 uppercase rounded transition cursor-pointer shadow-lg"
              >
                <span>Access Core Digital Vault</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}

          {/* Bottom redirection */}
          <div className="mt-8 pt-6 border-t border-slate-900/60 text-center text-[11px] font-mono text-slate-500">
            Already registered?{' '}
            <button
              id="reg-signin-redirect-btn"
              onClick={() => onNavigate('login')}
              className="text-amber-500/80 hover:text-amber-500 font-bold transition focus:outline-none cursor-pointer"
            >
              Sign In to Session
            </button>
          </div>
        </div>
      </main>

      {/* Footer policy */}
      <footer className="py-6 text-center text-slate-700 font-mono text-[9px] border-t border-slate-900/60">
        CHF CUSTODIAL ACCREDITATION COMPLIANCE ACT // SWISS SECURE CRYP_DEEDS
      </footer>
    </div>
  );
}
