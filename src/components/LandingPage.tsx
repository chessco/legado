/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, BookOpen, Mic, Cpu, Lock, Compass, ArrowRight, Globe } from 'lucide-react';
import { ActiveView } from '../types';

interface LandingPageProps {
  onNavigate: (view: ActiveView) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const content = {
    es: {
      tagline: "Preserva tu historia. Construye tu legado.",
      description: "La plataforma institucional de custodia digital para salvaguardar tu patrimonio de vida, relatos orales y patrimonio documental con seguridad cuántica e inteligencia adaptativa.",
      getStarted: "Asegurar Mi Identidad",
      login: "Acceso Institucional Tier",
      stat1: "Vínculos Protegidos",
      stat1Val: "100K+",
      stat2: "Relatos Custodiados",
      stat2Val: "8.5Mh",
      stat3: "Score de Preservación Promedio",
      stat3Val: "94.2%",
      featureTitle: "Mapeando Dimensiones de Legado",
      feat1Title: "Bóveda Humana",
      feat1Desc: "Encriptación de grado militar para tus documentos importantes, actas y correspondencia.",
      feat2Title: "Estudio de Entrevistas",
      feat2Desc: "Captura relatos orales y memorias mediante sesiones interactivas estructuradas.",
      feat3Title: "Generador de Historias",
      feat3Desc: "Compila tus memorias y correspondencia en bellas antologías cronológicas.",
      feat4Title: "Avatar IA de Legado",
      feat4Desc: "Crea una versión interactiva con tu voz y conocimiento para responder a las generaciones futuras.",
      footer: "Legado Custodial S.A. Múnich & Zúrich. Con el respaldo de sistemas de seguridad criptográfica de Vauld."
    },
    en: {
      tagline: "Preserve your history. Build your legacy.",
      description: "The premier institutional digital custody platform to safeguard your life stories, oral history, and archival documents using quantum-immune cryptography and adaptive AI.",
      getStarted: "Secure My Identity",
      login: "Institutional Tier Sign In",
      stat1: "Protected Legacies",
      stat1Val: "100K+",
      stat2: "Hours Custodied",
      stat2Val: "8.5Mh",
      stat3: "Average Preservation Score",
      stat3Val: "94.2%",
      featureTitle: "Mapping Your Legacy Dimensions",
      feat1Title: "The Human Vault",
      feat1Desc: "Military-grade multi-signature vault for personal deeds, trusts, and heritage records.",
      feat2Title: "Interview Studio",
      feat2Desc: "Capture pristine oral histories guided by custom templates and professional curators.",
      feat3Title: "Story Builder",
      feat3Desc: "Compile memoirs and historical archives into publication-ready chronological volumes.",
      feat4Title: "Legacy AI Persona",
      feat4Desc: "Train an interactive AI persona with your style and wisdom to counsel future generations.",
      footer: "Legado Custodial S.A. Munich & Zurich. Powered by secure cryptographic Vauld seals."
    }
  }[lang];

  return (
    <div id="landing-screen" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      {/* Header */}
      <header className="px-6 py-5 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-slate-900">
        <div className="flex items-center space-x-3">
          <div className="bg-amber-500/10 p-2 rounded border border-amber-500/20">
            <span className="font-mono text-xl tracking-widest text-amber-500 font-extrabold">L</span>
          </div>
          <div>
            <span className="font-sans text-xl uppercase font-semibold letter tracking-widest text-slate-200">LEGADO</span>
            <span className="text-[9px] block font-mono text-slate-500 tracking-wider">CUSTODIAL PLATFORM</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center space-x-2 text-xs font-mono px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition"
          >
            <Globe size={13} className="text-amber-500/70" />
            <span>{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>
          
          <button
            id="nav-login-btn"
            onClick={() => onNavigate('login')}
            className="text-xs uppercase font-mono tracking-wider font-medium text-slate-400 hover:text-amber-500 transition cursor-pointer"
          >
            {lang === 'es' ? 'Acceso Tier' : 'Institutional Access'}
          </button>
        </div>
      </header>

      {/* Main Hero */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-amber-500/5 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              <Shield size={14} className="text-amber-500 animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-semibold">
                {lang === 'es' ? 'CUSTODIA DE PATRIMONIO DE VIDA' : 'LIFE ASSET CUSTODY SECURITY'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-white leading-[1.1]">
              {content.tagline}
            </h1>

            <p className="text-base text-slate-400 max-w-xl leading-relaxed font-sans">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="hero-register-btn"
                onClick={() => onNavigate('register')}
                className="flex items-center justify-center space-x-2 px-6 py-4 rounded bg-amber-500 hover:bg-amber-600 font-sans text-sm font-semibold tracking-wide text-slate-950 transition hover:shadow-[0_4px_20px_rgba(245,158,11,0.2)] cursor-pointer"
              >
                <span>{content.getStarted}</span>
                <ArrowRight size={16} />
              </button>

              <button
                id="hero-login-btn"
                onClick={() => onNavigate('login')}
                className="px-6 py-4 rounded border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 font-sans text-sm font-medium tracking-wide text-slate-200 transition cursor-pointer"
              >
                {content.login}
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-900 max-w-lg">
              <div>
                <span className="block text-xl md:text-2xl font-mono text-white font-bold">{content.stat1Val}</span>
                <span className="text-[10px] block font-mono uppercase text-slate-500 tracking-wider mt-1">{content.stat1}</span>
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-mono text-white font-bold">{content.stat2Val}</span>
                <span className="text-[10px] block font-mono uppercase text-slate-500 tracking-wider mt-1">{content.stat2}</span>
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-mono text-amber-500 font-bold">{content.stat3Val}</span>
                <span className="text-[10px] block font-mono uppercase text-slate-500 tracking-wider mt-1">{content.stat3}</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800/80 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
              
              <div className="flex justify-between items-start">
                <div className="text-slate-500 font-mono text-[9px] tracking-wider">
                  SECURE VAULD CERTIFICATE<br />
                  ZURICH CENTRAL STORAGE
                </div>
                <div className="rounded border border-amber-500/30 px-2 py-1 text-[9px] uppercase font-mono text-amber-500 bg-amber-500/5">
                  LEVEL 4 SECURE
                </div>
              </div>

              {/* Graphical illustration */}
              <div className="my-6 py-6 flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border border-amber-500/20 blur pointer-events-none scale-125 animate-ping"></div>
                  <div className="w-24 h-24 rounded-full bg-slate-950 border border-amber-500/20 flex items-center justify-center shadow-inner">
                    <Shield size={38} className="text-amber-500" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-sans font-medium text-slate-200">Sterling Preserves Vault #024</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">2048-BIT SIGNATURE MATRIX ACTIVE</div>
                </div>
              </div>

              <div className="border-t border-slate-900/80 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>IDENTITY SEALS: 4/4 APPROVED</span>
                <span className="text-emerald-500">SYS_STATUS: CRYPTO_VAULD_SAFE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Overview Section */}
        <div className="py-16 mt-16 border-t border-slate-900">
          <h2 className="text-xl uppercase tracking-widest text-slate-500 font-mono text-center mb-12">
            {content.featureTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/25 border border-slate-900 rounded-xl p-6 hover:border-amber-500/30 transition group">
              <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 w-fit text-amber-500 mb-5 group-hover:bg-amber-500/20 transition">
                <Lock size={18} />
              </div>
              <h3 className="text-base font-sans font-bold text-white mb-2">{content.feat1Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{content.feat1Desc}</p>
            </div>

            <div className="bg-slate-900/25 border border-slate-900 rounded-xl p-6 hover:border-amber-500/30 transition group">
              <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 w-fit text-amber-500 mb-5 group-hover:bg-amber-500/20 transition">
                <Mic size={18} />
              </div>
              <h3 className="text-base font-sans font-bold text-white mb-2">{content.feat2Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{content.feat2Desc}</p>
            </div>

            <div className="bg-slate-900/25 border border-slate-900 rounded-xl p-6 hover:border-amber-500/30 transition group">
              <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 w-fit text-amber-500 mb-5 group-hover:bg-amber-500/20 transition">
                <BookOpen size={18} />
              </div>
              <h3 className="text-base font-sans font-bold text-white mb-2">{content.feat3Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{content.feat3Desc}</p>
            </div>

            <div className="bg-slate-900/25 border border-slate-900 rounded-xl p-6 hover:border-amber-500/30 transition group">
              <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 w-fit text-amber-500 mb-5 group-hover:bg-amber-500/20 transition">
                <Cpu size={18} />
              </div>
              <h3 className="text-base font-sans font-bold text-white mb-2">{content.feat4Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{content.feat4Desc}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 px-6 text-center text-slate-600 font-mono text-[10px]">
        {content.footer}
      </footer>
    </div>
  );
}
