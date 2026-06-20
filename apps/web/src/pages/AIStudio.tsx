import React from 'react';

export const AIStudio: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
      <style>{`
        .pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
        .blinking-cursor {
            font-weight: 100;
            font-size: 1.2em;
            color: #2E3D48;
            -webkit-animation: 1s blink step-end infinite;
            -moz-animation: 1s blink step-end infinite;
            -ms-animation: 1s blink step-end infinite;
            -o-animation: 1s blink step-end infinite;
            animation: 1s blink step-end infinite;
        }
        @keyframes blink {
            from, to { color: transparent; }
            50% { color: #0A192F; }
        }
      `}</style>
      
      {/* SideNavBar */}
      <nav className="bg-paper-surface dark:bg-surface-container-lowest text-ink-text dark:text-on-surface font-body-md text-body-md h-full w-64 fixed left-0 top-0 border-r border-border-subtle dark:border-outline-variant flat no shadows flex flex-col py-8 z-20">
        <div className="px-8 mb-12">
          <h1 className="font-headline-md text-headline-md font-semibold text-ink-text dark:text-on-surface">Legado</h1>
          <p className="font-label-sm text-label-sm text-muted-ink mt-1">Studio Edition</p>
        </div>
        <button className="mx-6 mb-8 bg-ink-text text-on-primary font-label-md text-label-md py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-primary-container transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
          New Session
        </button>
        <ul className="flex-1 px-4 space-y-2">
          <li>
            <a className="flex items-center gap-4 px-4 py-3 rounded-DEFAULT hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors text-muted-ink dark:text-on-surface-variant" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 px-4 py-3 rounded-DEFAULT hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors border-l-4 border-heritage-gold text-ink-text font-bold dark:text-on-surface bg-surface-container-low" href="#">
              <span className="material-symbols-outlined">mic_external_on</span>
              <span>Interviews</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 px-4 py-3 rounded-DEFAULT hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors text-muted-ink dark:text-on-surface-variant" href="#">
              <span className="material-symbols-outlined">auto_stories</span>
              <span>Archives</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 px-4 py-3 rounded-DEFAULT hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors text-muted-ink dark:text-on-surface-variant" href="#">
              <span className="material-symbols-outlined">psychology</span>
              <span>Memories</span>
            </a>
          </li>
          <li className="mt-auto">
            <a className="flex items-center gap-4 px-4 py-3 rounded-DEFAULT hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors text-muted-ink dark:text-on-surface-variant" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </a>
          </li>
        </ul>
        <div className="px-6 mt-auto pt-6 border-t border-border-subtle flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-dim overflow-hidden">
            <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ATJNQw5nu-EA1qSyH9EAKd140GlBWNZAjbnEr_3c3W2shCJGzNjHzlnlWor7MXcZbb85R3Tx3_BVsQ0Kqbe5M_ZHTDSn5mjGxKc5PCBLYKpb-n-9wNMVDwqmTqChtuHl4nUa1BhkHy4VX6YnoSHGu9IdtEw2yqdwf5mSHwUUjpn7OO2gkgBqpTn9KTrTLQ7x-UNrz0E6685rx0A0uAvuIS9KrMd5gV_3TF44rg6Ajjs9aTFQybnc3GjWe5laOzaPD_vhNZtKO5Y" />
          </div>
          <div>
            <p className="font-label-md text-label-md text-ink-text">Elena R.</p>
            <p className="font-label-sm text-label-sm text-muted-ink">Historian</p>
          </div>
        </div>
      </nav>
      {/* Main Workspace */}
      <div className="flex-1 ml-64 flex flex-col h-full bg-background relative z-10">
        {/* TopAppBar */}
        <header className="bg-surface dark:bg-surface-dim text-ink-text dark:text-on-surface font-label-md text-label-md border-b border-border-subtle dark:border-outline-variant flat no shadows flex justify-between items-center w-full px-gutter h-16 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <span className="font-headline-md text-headline-md font-bold text-ink-text dark:text-on-surface">Interview Studio</span>
            <span className="text-muted-ink text-sm">|</span>
            <span className="font-label-md text-label-md text-heritage-gold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              Sesión en curso
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-ink-text font-label-md bg-surface-container px-3 py-1.5 rounded">
              <span className="material-symbols-outlined text-muted-ink text-sm">timer</span>
              <span>14:22</span>
            </div>
            <div className="flex items-center gap-2 text-muted-ink">
              <button className="p-2 hover:bg-surface-container dark:hover:bg-surface-container-high rounded-full transition-all text-muted-ink dark:text-on-surface-variant"><span className="material-symbols-outlined">videocam</span></button>
              <button className="p-2 hover:bg-surface-container dark:hover:bg-surface-container-high rounded-full transition-all text-error"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fiber_manual_record</span></button>
              <button className="p-2 hover:bg-surface-container dark:hover:bg-surface-container-high rounded-full transition-all text-muted-ink dark:text-on-surface-variant"><span className="material-symbols-outlined">more_vert</span></button>
            </div>
            <button className="bg-surface border border-border-subtle text-ink-text font-label-md text-label-md px-4 py-2 rounded hover:bg-surface-container transition-colors">
              End Session
            </button>
          </div>
        </header>
        {/* Split Pane Content */}
        <main className="flex-1 flex overflow-hidden">
          {/* Left Pane: Conversational Chat */}
          <section className="flex-1 flex flex-col bg-paper-surface border-r border-border-subtle relative">
            <div className="flex-1 overflow-y-auto p-12 space-y-10 pb-32">
              {/* AI Message */}
              <div className="max-w-2xl mx-auto flex gap-6">
                <div className="w-8 h-8 rounded-full bg-ink-text flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-on-primary text-sm">psychology</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-ink-text mb-4">Empecemos por el principio. Mencionaste que creciste en Veracruz. ¿Cómo recuerdas tu hogar de la infancia?</h3>
                  <p className="font-body-md text-body-md text-muted-ink">Me gustaría saber sobre los olores, los sonidos o quizás esa vieja radio que tu abuelo solía escuchar.</p>
                </div>
              </div>
              {/* User Response */}
              <div className="max-w-2xl mx-auto flex gap-6 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-surface-dim overflow-hidden shrink-0 mt-1">
                  <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs4x0WvszKidy0hRoTk8hJ8PNHICj0u8ZXvgIjbMvPzQO23owvOBppYLVV5A_PTInzd4CueEoIXLi6249Qw_-WBgtY6itS5_dV6O1NbQr6X-c_nMoYhu4aLSrIqf-QK5D6SnqQkjlu29-GYKodFt_Y4CU8p6ry-1Tg8pTA3PREw3WeULGgxauGjTZUBYAE-OQwNY3kxFCcyHZK5NQ-BesrQfM8KmGDejQNCA28do-7-hBGV6VBg9iQZRb-8whSWKlgEE3DeuH906c" />
                </div>
                <div className="text-right">
                  <p className="font-body-lg text-body-lg text-ink-text leading-relaxed">
                    Era una casa grande, de techos muy altos. Lo que más recuerdo es el olor a café por las mañanas. Mi abuelo siempre se levantaba antes que el sol, preparaba café en una olla de barro y encendía esa radio vieja. Sintonizaba una estación que tocaba boleros. 
                  </p>
                  <span className="font-label-sm text-label-sm text-muted-ink mt-2 inline-block">14:15</span>
                </div>
              </div>
              {/* AI Message */}
              <div className="max-w-2xl mx-auto flex gap-6">
                <div className="w-8 h-8 rounded-full bg-ink-text flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-on-primary text-sm">psychology</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-ink-text mb-4">Esos boleros y el café en la olla de barro suenan como un ritual hermoso. ¿Crees que esos momentos con tu abuelo influyeron en tu decisión de estudiar historia?</h3>
                </div>
              </div>
            </div>
            {/* Input Area / Bottom Action */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-paper-surface via-paper-surface to-transparent flex justify-center pb-12">
              <button className="pulse-ring bg-heritage-gold text-on-primary rounded-full w-20 h-20 flex flex-col items-center justify-center gap-1 shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                <span className="font-label-sm text-label-sm">Hablar</span>
              </button>
            </div>
          </section>
          {/* Right Pane: Real-time Intel */}
          <section className="w-[450px] bg-surface-container-lowest flex flex-col h-full overflow-y-auto">
            <div className="p-8 space-y-8">
              {/* Section 1: Transcript */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-border-subtle pb-2">
                  <span className="material-symbols-outlined text-muted-ink text-sm">notes</span>
                  <h4 className="font-label-sm text-label-sm uppercase text-muted-ink tracking-wider">Transcripción en tiempo real</h4>
                </div>
                <div className="bg-surface-container-low p-4 rounded border border-border-subtle font-body-md text-body-md text-ink-text max-h-48 overflow-y-auto">
                  <p className="text-muted-ink text-sm mb-2 opacity-70">...siempre se levantaba antes que el sol, preparaba café en una olla de barro y encendía esa radio vieja.</p>
                  <p>Sintonizaba una estación que tocaba boleros. Yo me sentaba en la escalera a escucharlo cantar bajito<span className="blinking-cursor">|</span></p>
                </div>
              </div>
              {/* Section 2: AI Suggestions */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-border-subtle pb-2">
                  <span className="material-symbols-outlined text-heritage-gold text-sm">lightbulb</span>
                  <h4 className="font-label-sm text-label-sm uppercase text-heritage-gold tracking-wider">Sugerencias de la IA</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-4 border border-border-subtle rounded-DEFAULT bg-surface hover:bg-surface-container-low cursor-pointer transition-colors group">
                    <p className="font-body-md text-body-md text-ink-text group-hover:text-heritage-gold transition-colors">¿Podrías darnos más detalles sobre el nombre o la marca de esa radio vieja?</p>
                  </div>
                  <div className="p-4 border border-border-subtle rounded-DEFAULT bg-surface hover:bg-surface-container-low cursor-pointer transition-colors group">
                    <p className="font-body-md text-body-md text-ink-text group-hover:text-heritage-gold transition-colors">¿Cómo influyó ese evento en tu carrera como historiadora?</p>
                  </div>
                </div>
              </div>
              {/* Section 3: Extracted Memories */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-border-subtle pb-2">
                  <span className="material-symbols-outlined text-muted-ink text-sm">bookmark</span>
                  <h4 className="font-label-sm text-label-sm uppercase text-muted-ink tracking-wider">Memorias extraídas</h4>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {/* Memory Card 1 */}
                  <div className="bg-surface border border-border-subtle p-4 rounded flex gap-4 items-start">
                    <div className="w-12 h-12 bg-surface-container rounded shrink-0 flex items-center justify-center text-muted-ink">
                      <span className="material-symbols-outlined">location_city</span>
                    </div>
                    <div>
                      <h5 className="font-label-md text-label-md text-ink-text mb-1">Infancia en Veracruz</h5>
                      <p className="font-body-md text-body-md text-muted-ink text-sm">Casa grande, techos altos, café matutino.</p>
                    </div>
                  </div>
                  {/* Memory Card 2 */}
                  <div className="bg-surface border border-border-subtle p-4 rounded flex gap-4 items-start relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-heritage-gold"></div>
                    <div className="w-12 h-12 bg-primary-fixed-dim rounded shrink-0 flex items-center justify-center text-ink-text">
                      <span className="material-symbols-outlined">family_history</span>
                    </div>
                    <div>
                      <h5 className="font-label-md text-label-md text-ink-text mb-1">Influencia del Abuelo</h5>
                      <p className="font-body-md text-body-md text-muted-ink text-sm">Rituales matutinos, boleros, conexión temprana con el pasado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
