import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [legacyType, setLegacyType] = useState<string | null>(null);
  const [language, setLanguage] = useState('es-MX');
  const navigate = useNavigate();

  const handleSelectType = (type: string) => {
    setLegacyType(type);
    setStep(2);
  };

  const handleFinish = () => {
    // Save to backend logic goes here
    navigate('/inicio');
  };

  return (
    <div className="bg-paper-surface min-h-screen flex flex-col font-body-md text-body-md text-on-surface selection:bg-heritage-gold selection:text-white">
      <nav className="bg-background flex justify-center items-center py-8 w-full max-w-container-max mx-auto px-gutter sticky top-0 z-50">
        <span className="font-headline-md text-headline-md text-ink-text tracking-tight">Legado</span>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center px-gutter py-stack-lg">
        {step === 1 && (
          <div className="w-full max-w-3xl flex flex-col items-center text-center fade-in">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-stack-sm">
              ¿Qué deseas preservar?
            </h1>
            <p className="font-body-lg text-body-lg text-muted-ink mb-stack-lg max-w-2xl">
              Comienza a estructurar tu legado seleccionando el área que deseas documentar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <button onClick={() => handleSelectType('personal')} className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
                <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="edit">edit</span>
                <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Historia personal</span>
              </button>
              <button onClick={() => handleSelectType('familiar')} className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
                <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="family_home">family_home</span>
                <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Historia familiar</span>
              </button>
              <button onClick={() => handleSelectType('empresarial')} className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
                <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="domain">domain</span>
                <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Historia empresarial</span>
              </button>
              <button onClick={() => handleSelectType('profesional')} className="group bg-surface-container-lowest border border-border-subtle rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:border-heritage-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-heritage-gold focus:border-heritage-gold">
                <span className="material-symbols-outlined text-[32px] text-surface-tint group-hover:text-heritage-gold transition-colors duration-300" data-icon="menu_book">menu_book</span>
                <span className="font-label-md text-label-md text-ink-text tracking-wide uppercase">Conocimiento profesional</span>
              </button>
            </div>
            <button className="mt-12 font-label-md text-label-md text-muted-ink hover:text-ink-text transition-colors duration-200 underline focus:outline-none">
              Otro
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="w-full max-w-xl flex flex-col items-center text-center fade-in">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text mb-stack-sm">
              Idioma Principal del Legado
            </h1>
            <p className="font-body-lg text-body-lg text-muted-ink mb-2 max-w-2xl">
              ¿En qué idioma deseas preservar este legado?
            </p>
            <p className="font-body-sm text-body-sm text-surface-tint mb-8 bg-surface-container-low p-4 rounded-lg border border-border-subtle">
              Este idioma será utilizado de manera predeterminada para entrevistas, generación de contenido, libros y agentes de IA asociados a este proyecto.
            </p>
            
            <div className="w-full text-left flex flex-col gap-4">
              <label className="font-label-md text-label-md text-ink-text uppercase tracking-wider">Selecciona el idioma:</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-4 border border-border-subtle rounded-lg bg-surface focus:outline-none focus:border-heritage-gold focus:ring-1 focus:ring-heritage-gold text-body-lg font-body-lg appearance-none cursor-pointer"
              >
                <option value="es-MX">🇲🇽 Español (México)</option>
                <option value="es-ES">🇪🇸 Español (España)</option>
                <option value="en-US">🇺🇸 English</option>
                <option value="pt-BR">🇧🇷 Português</option>
                <option value="fr-FR">🇫🇷 Français</option>
              </select>
            </div>

            <div className="flex gap-4 mt-12 w-full">
              <button 
                onClick={() => setStep(1)}
                className="flex-1 py-4 font-label-lg text-label-lg text-muted-ink hover:text-ink-text transition-colors duration-200 border border-border-subtle rounded-lg"
              >
                Volver
              </button>
              <button 
                onClick={handleFinish}
                className="flex-1 bg-ink-text text-white py-4 font-label-lg text-label-lg hover:bg-opacity-90 transition-colors duration-200 rounded-lg flex items-center justify-center gap-2"
              >
                Comenzar Legado <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-background flex flex-col md:flex-row justify-between items-center py-stack-md w-full max-w-container-max mx-auto px-gutter mt-stack-lg border-t border-border-subtle">
        <span className="font-headline-md text-headline-md text-ink-text mb-4 md:mb-0">Legado</span>
        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Privacy</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Terms</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Archive</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-ink-text transition-colors duration-200" href="#">Contact</a>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-right">
          © 2024 Legado. Preserving the essence of human thought.
        </p>
      </footer>
    </div>
  );
};

