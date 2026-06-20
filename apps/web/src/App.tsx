import { useEffect } from 'react';
import './index.css';

export default function App() {
  useEffect(() => {
    // Basic font loading
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    link1.rel = 'stylesheet';
    
    const link2 = document.createElement('link');
    link2.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;500;600;700&display=swap';
    link2.rel = 'stylesheet';

    document.head.appendChild(link1);
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <div className="bg-paper-surface text-ink-text antialiased min-h-screen">
      {/* TopNavBar Component */}
      <nav className="sticky bg-background dark:bg-tertiary w-full top-0 border-b border-border-subtle dark:border-outline-variant z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-ink-text dark:text-on-primary tracking-tight">
            Legado
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a className="font-label-sm text-label-sm text-ink-text dark:text-on-primary font-bold border-b-2 border-heritage-gold pb-1 opacity-80 transition-opacity" href="#">
              Human Vault
            </a>
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-surface-variant hover:text-ink-text dark:hover:text-on-primary transition-colors duration-200" href="#">
              Legacy AI
            </a>
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-surface-variant hover:text-ink-text dark:hover:text-on-primary transition-colors duration-200" href="#">
              The Archive
            </a>
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-surface-variant hover:text-ink-text dark:hover:text-on-primary transition-colors duration-200" href="#">
              Editorial
            </a>
          </div>
          <div className="flex items-center">
            <button className="bg-ink-text text-on-primary px-6 py-2 rounded-DEFAULT font-label-sm text-label-sm hover:opacity-90 transition-opacity uppercase tracking-wider cursor-pointer">
              Comenzar
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="w-full max-w-container-max mx-auto px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[819px]">
          <div className="md:col-span-7 flex flex-col space-y-8 z-10">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-px bg-heritage-gold"></span>
              <span className="font-label-sm text-label-sm text-heritage-gold uppercase tracking-widest">
                Digital Permanence
              </span>
            </div>
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-ink-text leading-tight">
              Preserva tu historia.<br />Construye tu legado.
            </h1>
            <p className="font-body-lg text-body-lg text-muted-ink max-w-2xl">
              Una bóveda editorial y plataforma de inteligencia artificial diseñada para capturar, estructurar y asegurar el conocimiento humano de alto valor para las generaciones futuras.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <button className="bg-ink-text text-on-primary px-8 py-4 rounded-DEFAULT font-label-sm text-label-sm hover:opacity-90 transition-opacity uppercase tracking-wider cursor-pointer">
                Comenzar Archivo
              </button>
              <button className="border border-border-subtle bg-transparent text-ink-text px-8 py-4 rounded-DEFAULT font-label-sm text-label-sm hover:bg-surface-container-low transition-colors uppercase tracking-wider cursor-pointer">
                Explorar Bóveda
              </button>
            </div>
          </div>
          <div className="md:col-span-5 relative h-[500px] w-full mt-12 md:mt-0">
            <div className="absolute inset-0 bg-surface-container-low border border-border-subtle rounded-lg overflow-hidden shadow-sm">
              <img
                className="object-cover w-full h-full opacity-90"
                alt="Legado Digital Vault"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSX0FtE3TUoDSlCP2FKwOYUjMJ0W_qzAQ4YFOURWoj03tYsJvLoZS2W-0aGJ2zUUNt_qAQjXWEolWuYrr6Q6X_1pRgumMTd8oebdsK1LRYhX068_PbuiPJYe8lWkQXWIobXHU0m1HLKcq725KuIe_BhzfH6dDZimgYrb6lYiCmXP6YyJ7QYxTVs2mLAg4YT1WH8YVs3Ozb2C1DdHZ4os7Gyvq7XCrkfJdHPh3rqTgIELdD8zDola8GR5bYLlNHPGmMkhHg4XCnztg"
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-surface-container-low border-y border-border-subtle py-24 w-full">
          <div className="max-w-3xl mx-auto px-8 text-center flex flex-col items-center space-y-8">
            <span
              className="material-symbols-outlined text-heritage-gold text-4xl"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              hourglass_empty
            </span>
            <h2 className="font-headline-lg text-headline-lg text-ink-text">
              La fragilidad de la memoria
            </h2>
            <p className="font-body-lg text-body-lg text-muted-ink">
              El conocimiento y las historias humanas se dispersan en plataformas efímeras y memorias frágiles. Sin una arquitectura dedicada, las narrativas de mayor valor se pierden en el tiempo. Legado proporciona el rigor estructural de un archivo institucional con la accesibilidad de la tecnología moderna.
            </p>
          </div>
        </section>

        {/* How it Works */}
        <section className="max-w-container-max mx-auto px-8 py-32">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-ink-text mb-4">
              El proceso curatorial
            </h2>
            <p className="font-body-md text-body-md text-muted-ink max-w-xl">
              Una metodología estructurada para asegurar la permanencia digital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border-subtle p-8 bg-paper-surface flex flex-col space-y-6">
              <div className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-ink-text font-headline-md">
                1
              </div>
              <h3 className="font-headline-md text-headline-md text-ink-text">
                Captura
              </h3>
              <p className="font-body-md text-body-md text-muted-ink">
                Recolección de memorias, documentos y narrativas a través de interfaces conversacionales y cargas seguras.
              </p>
            </div>
            <div className="border border-border-subtle p-8 bg-paper-surface flex flex-col space-y-6">
              <div className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-ink-text font-headline-md">
                2
              </div>
              <h3 className="font-headline-md text-headline-md text-ink-text">
                Estructura
              </h3>
              <p className="font-body-md text-body-md text-muted-ink">
                Clasificación inteligente mediante Legacy AI, creando conexiones semánticas y jerarquías documentales.
              </p>
            </div>
            <div className="border border-border-subtle p-8 bg-paper-surface flex flex-col space-y-6">
              <div className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-heritage-gold font-headline-md bg-ink-text">
                3
              </div>
              <h3 className="font-headline-md text-headline-md text-ink-text">
                Preserva
              </h3>
              <p className="font-body-md text-body-md text-muted-ink">
                Almacenamiento inmutable a largo plazo con protocolos de seguridad criptográfica y redundancia global.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-ink-text text-on-primary py-32 border-t border-border-subtle">
          <div className="max-w-2xl mx-auto px-8 text-center flex flex-col items-center space-y-8">
            <h2 className="font-headline-lg text-headline-lg">
              El tiempo es el único recurso no renovable.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container">
              Comienza a documentar tu legado hoy con la precisión que merece tu historia.
            </p>
            <button className="mt-8 bg-heritage-gold text-ink-text px-10 py-4 rounded-DEFAULT font-label-sm text-label-sm font-bold hover:bg-secondary-container transition-colors uppercase tracking-wider cursor-pointer">
              Iniciar Archivo
            </button>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-low dark:bg-tertiary-container w-full border-t border-border-subtle dark:border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md px-8 py-stack-lg max-w-container-max mx-auto">
          <div className="flex flex-col space-y-4">
            <div className="font-headline-md text-headline-md text-ink-text dark:text-on-primary">
              Legado
            </div>
            <p className="font-body-md text-body-md text-muted-ink dark:text-on-tertiary-fixed-variant">
              © 2026 Legado. Preserving the human narrative for eternity.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 md:justify-end items-start">
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-tertiary-fixed-variant hover:text-heritage-gold transition-colors duration-300 uppercase tracking-wider" href="#">Manifesto</a>
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-tertiary-fixed-variant hover:text-heritage-gold transition-colors duration-300 uppercase tracking-wider" href="#">Privacy</a>
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-tertiary-fixed-variant hover:text-heritage-gold transition-colors duration-300 uppercase tracking-wider" href="#">Archives</a>
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-tertiary-fixed-variant hover:text-heritage-gold transition-colors duration-300 uppercase tracking-wider" href="#">Terms</a>
            <a className="font-label-sm text-label-sm text-muted-ink dark:text-on-tertiary-fixed-variant hover:text-heritage-gold transition-colors duration-300 uppercase tracking-wider" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
