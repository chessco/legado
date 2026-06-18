/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, Square, Play, Pause, RotateCcw, Volume2, Sparkles, 
  HelpCircle, Check, Clock, Plus, Tag, HelpCircle as HelpIcon 
} from 'lucide-react';
import { InterviewPrompt, InterviewRecording } from '../types';
import { INTERVIEW_PROMPTS } from '../data';

interface InterviewStudioProps {
  onSaveRecording: (rec: InterviewRecording) => void;
  onAddActivity: (act: any) => void;
}

export default function InterviewStudio({
  onSaveRecording,
  onAddActivity
}: InterviewStudioProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<InterviewPrompt>(INTERVIEW_PROMPTS[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Recording State Machine
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [waveHeights, setWaveHeights] = useState<number[]>(Array(30).fill(4));
  
  // Post-recording stage
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [generatedTranscript, setGeneratedTranscript] = useState('');
  const [isLoadingGemini, setIsLoadingGemini] = useState(false);
  const [geminiTags, setGeminiTags] = useState<string[]>([]);
  const [saveTitle, setSaveTitle] = useState('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter prompts
  const filteredPrompts = INTERVIEW_PROMPTS.filter(p => activeCategory === 'All' || p.category === activeCategory);

  // Simulation of waveform animation
  useEffect(() => {
    let animId: NodeJS.Timeout;
    if (isRecording && !isPaused) {
      animId = setInterval(() => {
        setWaveHeights(prev => prev.map(() => Math.floor(Math.random() * 40) + 4));
      }, 100);
    } else {
      setWaveHeights(Array(30).fill(4));
    }
    return () => clearInterval(animId);
  }, [isRecording, isPaused]);

  // Recording Timer
  useEffect(() => {
    if (isRecording && !isPaused) {
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording, isPaused]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    setSeconds(0);
    setSessionCompleted(false);
    setGeneratedTranscript('');
    setGeminiTags([]);
    setSaveTitle(`Oral History - ${selectedPrompt.category}`);
  };

  const handlePauseRecording = () => {
    setIsPaused(!isPaused);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    
    // Generate simulated high-fidelity transcripts based on the picked prompt
    const defaultTranscripts: Record<string, string> = {
      'p-1': "My grandfather’s home in Devon always smelled of lavender, roasted almonds, and aged tea leaves. There was this heavy oak cabinet in the corner of his library, and he would tell stories of family roots dating back to the wartime migrations. That cabinet became my visual compass of inheritance...",
      'p-2': "In the summer of 1984, when our primary manufacturing enterprise faced liquidity shortfalls, many argued that we should liquidate the core family archives. I decided to pledge personal assets instead. It taught me that real legacy means bearing personal risk to preserve structural principles...",
      'p-3': "I entered the Cambridge Economics Guild as a junior fellow. My mentor, Professor Arthur Sterling Sr., taught me to look past short-term quarterly indexes. He’d say, 'If you construct a business model that cannot out-endure your children, you haven't built an enterprise, you have built a sandbox.'",
      'p-4': "If my lineage remembers just one principle of mine, it should be the absolute value of intellectual modesty. Material vaults decay, digital repositories are subject to solar flares, but structured cultural values which are taught to children remain perpetual anchors.",
      'p-5': "The primary family foundation must never prioritize raw corporate volume over human capital. We serve Swiss and global heritage. We focus on cataloging the oral, literary and historical records of communities that shaped our ancestors."
    };

    setGeneratedTranscript(
      defaultTranscripts[selectedPrompt.id] || 
      "I recall the early years of my profession, starting structured dialogues with our Swiss curators. The lessons acquired were priceless, centering around lineage integrity and securing of documents..."
    );

    setSessionCompleted(true);
  };

  const handleTriggerGeminiAIEnrich = () => {
    setIsLoadingGemini(true);
    setTimeout(() => {
      setIsLoadingGemini(false);
      // Generate amazing tags
      const tagsMap: Record<string, string[]> = {
        'p-1': ['#RootsAndChrono', '#GrandfatherLibrary', '#DevonMemoirs'],
        'p-2': ['#FinancialCrisis1984', '#SterlingLineage', '#RiskManagement'],
        'p-3': ['#CambridgeEconomics', '#SeniorFellowship', '#ArthurSterlingSr'],
        'p-4': ['#IntellectualModesty', '#LineageAnchors', '#ChronologicalLessons'],
        'p-5': ['#PhilanthropyLedger', '#SwissHeritage', '#ZurichVaults']
      };
      setGeminiTags(tagsMap[selectedPrompt.id] || ['#GenealogyChronicle', '#VaultOracle', '#OralCuration']);
    }, 1100);
  };

  const handleSaveToVault = () => {
    const newRec: InterviewRecording = {
      id: `rec-${Date.now()}`,
      promptId: selectedPrompt.id,
      question: selectedPrompt.question,
      audioDuration: seconds,
      transcript: generatedTranscript,
      timestamp: new Date().toISOString().replace(/T/, ' ').substring(0, 16)
    };

    onSaveRecording(newRec);

    // Add activity logger
    onAddActivity({
      type: 'interview',
      title: 'New Interview Audio Saved',
      description: `"${saveTitle}" oral chronicle sealed. Audio: ${(seconds / 60).toFixed(1)} mins.`,
      severity: 'info'
    });

    // Reset everything
    setSessionCompleted(false);
    setSeconds(0);
    alert('Congratulations! This oral story recording is officially decrypted and sealed into your Human Vault archives.');
  };

  // Human friendly timer string
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  return (
    <div id="interview-content" className="space-y-6">
      
      {/* Recording session visual state bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Recording panel & Transcriber */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-yellow-500 font-bold">Studio Active Node</span>
                <h3 className="text-sm font-sans font-extrabold text-white mt-1.5 uppercase tracking-wide">Historical Voice Recording Module</h3>
              </div>
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500">
                <Clock size={11} />
                <span>CH_HQ_WAV</span>
              </div>
            </div>

            {/* Prompt details spotlight */}
            <div className="mt-6 bg-slate-950/60 p-4 border border-slate-900 rounded-xl">
              <span className="text-[8px] font-mono uppercase text-slate-500">Active Prompt Target</span>
              <p className="text-xs text-slate-200 mt-1 font-serif leading-relaxed">
                "{selectedPrompt.question}"
              </p>
            </div>

            {/* Visualizer and controls */}
            <div className="my-8 py-6 flex flex-col items-center justify-center space-y-6">
              <div className="w-full max-w-xs h-16 flex items-center justify-center space-x-1">
                {waveHeights.map((h, i) => (
                  <div 
                    key={i} 
                    className={`w-1 bg-amber-500 rounded-full transition-all duration-100 ${isRecording && !isPaused ? 'opacity-90' : 'opacity-30'}`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              {/* Time displays */}
              <div className="text-center font-mono text-xl tracking-widest text-white">
                {formatTime(seconds)}
              </div>

              {/* Rec Buttons state controller */}
              <div className="flex items-center space-x-4">
                {!isRecording ? (
                  <button
                    id="rec-start-btn"
                    onClick={handleStartRecording}
                    className="w-14 h-14 rounded-full bg-rose-600 hover:bg-rose-500 flex items-center justify-center text-white transition transform hover:scale-105 shadow-[0_4px_15px_rgba(224,242,254,0.1)] cursor-pointer"
                  >
                    <Mic size={24} />
                  </button>
                ) : (
                  <>
                    <button
                      id="rec-pause-btn"
                      onClick={handlePauseRecording}
                      className="w-10 h-10 rounded-full bg-slate-850 hover:bg-slate-800 flex items-center justify-center text-slate-300 transition cursor-pointer"
                      title={isPaused ? "Resume Session" : "Pause Session"}
                    >
                      {isPaused ? <Play size={16} /> : <Pause size={16} />}
                    </button>
                    
                    <button
                      id="rec-stop-btn"
                      onClick={handleStopRecording}
                      className="w-14 h-14 rounded-full bg-slate-100 hover:bg-white flex items-center justify-center text-slate-950 transition transform hover:scale-105 shadow-[0_4px_15px_rgba(255,255,255,0.1)] cursor-pointer"
                      title="Seal Audio Session"
                    >
                      <Square size={20} className="fill-slate-950" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Transcript Enrichment workspace */}
          {sessionCompleted && (
            <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-6 animate-fade-in text-left">
              <div className="space-y-1">
                <span className="text-[9px] font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-emerald-500 font-bold uppercase">Chronicle Transcribed</span>
                <h4 className="text-sm font-sans font-bold text-white mt-1">Review Voice Transcript</h4>
                <p className="text-[10px] text-slate-500 font-mono">EDIT DETAILS BEFORE SEALING INTO THE HUMAN VAULT</p>
              </div>

              {/* Editable transcript box */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400">
                  <label className="block mb-1.5 uppercase font-semibold">Decrypted Archive Name</label>
                  <input 
                    id="save-transcript-title"
                    type="text" 
                    value={saveTitle} 
                    onChange={(e) => setSaveTitle(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-850 text-white rounded focus:outline-none" 
                  />
                </div>

                <div className="text-xs font-mono text-slate-400">
                  <label className="block mb-1.5 uppercase font-semibold">Narrative Body Log</label>
                  <textarea 
                    id="save-transcript-body"
                    value={generatedTranscript} 
                    onChange={(e) => setGeneratedTranscript(e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-850 text-white rounded h-36 font-serif text-sm leading-relaxed focus:outline-none" 
                  />
                </div>
              </div>

              {/* Gemini Enrichment block */}
              <div className="bg-slate-950/60 p-4 border border-slate-900 rounded-xl space-y-4">
                <div className="flex justify-between items-center">
                  <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Aesthetic Gemini Meta-Tags</h5>
                  <button
                    id="enrich-gemini-studio-btn"
                    onClick={handleTriggerGeminiAIEnrich}
                    disabled={isLoadingGemini}
                    className="flex items-center space-x-1.5 px-3 py-1 bg-amber-500/15 hover:bg-amber-500/20 text-amber-500 border border-amber-500/25 rounded font-mono text-[9px] uppercase transition"
                  >
                    <Sparkles size={11} />
                    <span>{isLoadingGemini ? 'PREDICTING...' : 'AI Auto-Tag'}</span>
                  </button>
                </div>

                {geminiTags.length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {geminiTags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono text-amber-500 uppercase font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-[10px] text-slate-500 font-mono">Use Swiss Legacy AI to analyze raw transcript files and predict history keywords.</p>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  id="cancel-recording-btn"
                  onClick={() => setSessionCompleted(false)}
                  className="flex-1 py-3 border border-slate-850 hover:bg-slate-950 font-mono text-[10px] uppercase text-slate-400 rounded transition"
                >
                  Discard Session
                </button>
                <button
                  id="save-recording-vault-btn"
                  onClick={handleSaveToVault}
                  className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 font-sans text-[10px] uppercase font-extrabold text-slate-950 rounded transition shadow-md"
                >
                  Seal into Bóveda Humana
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Prompts catalog */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-900/60">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300">Interview Prompt Pool</h3>
              <span className="text-[9px] font-mono text-slate-500">CHRONO-CATALOGED</span>
            </div>

            {/* Prompt Tag filter */}
            <div className="flex flex-wrap gap-1.5 pb-2">
              {['All', 'Childhood & Roots', 'Career & Calling', 'Values & Lore', 'Life Lessons'].map((cat) => (
                <button
                  id={`prompt-filter-${cat.replace(/\s+/g, '')}`}
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2 py-1 rounded text-[9px] font-mono border transition uppercase ${activeCategory === cat ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Prompts list items */}
            <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
              {filteredPrompts.map((p) => (
                <div 
                  key={p.id}
                  onClick={() => setSelectedPrompt(p)}
                  className={`text-left p-3.5 rounded-xl border transition cursor-pointer flex flex-col justify-between space-y-2.5 ${selectedPrompt.id === p.id ? 'border-amber-550 bg-amber-550/5' : 'border-slate-950 bg-slate-950/40 hover:border-slate-800'}`}
                >
                  <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                    {p.category}
                  </span>
                  <p className="text-xs text-slate-200 leading-normal font-sans">
                    {p.question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
