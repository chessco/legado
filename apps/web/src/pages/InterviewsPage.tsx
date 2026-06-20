import React, { useState } from 'react';

interface TranscriptSegment {
  time: string;
  speaker: string;
  text: string;
}

interface Interview {
  id: string;
  title: string;
  date: string;
  duration: string;
  interviewer: string;
  interviewee: string;
  isPlaying: boolean;
  transcripts: TranscriptSegment[];
}

export const InterviewsPage: React.FC = () => {
  const [activeId, setActiveId] = useState('1');
  const [playingState, setPlayingState] = useState(false);

  const interviews: Interview[] = [
    {
      id: '1',
      title: 'Entrevista con Abuelo Juan: Los años de la Finca',
      date: '12 Oct 2021',
      duration: '45:20',
      interviewer: 'Mateo García',
      interviewee: 'Juan García',
      isPlaying: false,
      transcripts: [
        { time: '00:12', speaker: 'Mateo', text: 'Abuelo, cuéntame de la finca en 1950. ¿Cómo eran los veranos en aquel entonces?' },
        { time: '00:34', speaker: 'Abuelo Juan', text: 'Ah, hijo mío... los veranos eran calurosos pero llenos de vida. Pasábamos el día bajo el viejo roble, antes de que todo el conflicto comenzara y tuviéramos que migrar.' },
        { time: '01:05', speaker: 'Mateo', text: '¿Fue entonces cuando decidieron empacar las cartas y los títulos de propiedad?' },
        { time: '01:22', speaker: 'Abuelo Juan', text: 'Sí, tuvimos que meter todo en la vieja caja fuerte y emprender el viaje hacia Veracruz. Fueron tiempos difíciles, pero logramos mantener a la familia unida.' }
      ]
    },
    {
      id: '2',
      title: 'Historia Oral: Tía Luisa y la escuela de Veracruz',
      date: '04 Nov 2022',
      duration: '28:15',
      interviewer: 'Mateo García',
      interviewee: 'Luisa García',
      isPlaying: false,
      transcripts: [
        { time: '00:05', speaker: 'Mateo', text: 'Tía Luisa, ¿cómo recuerdas tu primer día de clases en Veracruz?' },
        { time: '00:25', speaker: 'Tía Luisa', text: 'Veracruz era tan diferente del campo... la humedad, la gente. La escuela era enorme, con muros de piedra blanca que daban al puerto. Recuerdo el sonido de los barcos por las tardes.' }
      ]
    }
  ];

  const activeInterview = interviews.find(i => i.id === activeId) || interviews[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Left Column: Interview List */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-ink-text mb-2">Interviews</h1>
          <p className="font-body-lg text-body-lg text-muted-ink">
            Oral history recordings, voice logs, and automated transcript generations.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          {interviews.map((interview) => {
            const isActive = interview.id === activeId;
            return (
              <div
                key={interview.id}
                onClick={() => {
                  setActiveId(interview.id);
                  setPlayingState(false);
                }}
                className={`p-5 border rounded-lg cursor-pointer transition-all duration-200 flex flex-col gap-2 ${
                  isActive
                    ? 'bg-paper-surface border-outline shadow-sm'
                    : 'bg-surface border-border-subtle hover:bg-surface-container-low'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    isActive ? 'bg-heritage-gold/20 text-heritage-gold' : 'bg-surface-container text-muted-ink'
                  }`}>
                    {interview.duration}
                  </span>
                  <span className="text-label-sm font-label-sm text-muted-ink">{interview.date}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-ink-text">{interview.title}</h3>
                <div className="flex items-center gap-4 text-label-sm font-label-sm text-muted-ink mt-2">
                  <span>Por: {interview.interviewer}</span>
                  <span>•</span>
                  <span>Sujeto: {interview.interviewee}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Console Details */}
      <div className="lg:col-span-7 bg-paper-surface border border-border-subtle rounded-lg p-6 flex flex-col gap-6 h-[calc(100vh-180px)] overflow-hidden shadow-sm">
        {/* Playback Controls */}
        <div className="border-b border-border-subtle pb-6 flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-ink-text">{activeInterview.title}</h2>
          
          <div className="flex items-center gap-4 bg-surface-container-low border border-border-subtle p-4 rounded-lg">
            <button
              onClick={() => setPlayingState(!playingState)}
              className="w-12 h-12 rounded-full bg-ink-text text-white flex items-center justify-center hover:bg-surface-tint transition-colors"
            >
              <span className="material-symbols-outlined ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                {playingState ? 'pause' : 'play_arrow'}
              </span>
            </button>
            
            {/* Visualizer Waveform */}
            <div className="flex-1 flex items-center gap-1 h-8 px-2 overflow-hidden">
              {[6, 12, 24, 8, 16, 28, 10, 18, 6, 22, 14, 8, 20, 26, 12, 18, 8, 10, 6, 14, 28, 12, 24].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    playingState ? 'bg-heritage-gold animate-pulse' : 'bg-muted-ink/30'
                  }`}
                  style={{ height: `${h}px` }}
                ></div>
              ))}
            </div>

            <span className="font-mono text-sm text-muted-ink">
              {playingState ? '00:15' : '00:00'} / {activeInterview.duration}
            </span>
          </div>
        </div>

        {/* Transcripts Area */}
        <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
          <h3 className="font-label-sm text-label-sm text-muted-ink uppercase tracking-wider">Automated Transcript</h3>
          <div className="flex flex-col gap-4">
            {activeInterview.transcripts.map((t, idx) => (
              <div key={idx} className="flex gap-4 border-l-2 border-border-subtle pl-4 py-1 hover:border-heritage-gold transition-colors">
                <span className="font-mono text-sm text-muted-ink shrink-0 w-12">{t.time}</span>
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-bold text-ink-text">{t.speaker}</span>
                  <p className="font-body-md text-body-md text-ink-text leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
