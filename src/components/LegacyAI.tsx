/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Send, Sparkles, UserPlus, Target, Tag, Trash2, 
  RefreshCcw, Volume2, Shield, Heart, HelpCircle 
} from 'lucide-react';
import { AIPersona, ChatMessage, PersonaTone } from '../types';

interface LegacyAIProps {
  onAddActivity: (act: any) => void;
}

export default function LegacyAI({ onAddActivity }: LegacyAIProps) {
  // Configured AI representation
  const [persona, setPersona] = useState<AIPersona>({
    name: 'Arthur Sterling Senior',
    avatarUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=150&auto=format&fit=crop&q=80',
    tone: 'Empathetic',
    systemInstruction: 'You are the conscious avatar of Arthur Sterling Sr., an expert economic researcher. Communicate with intelligence, rich details and Swiss precision.',
    memoryAnchors: [
      'Joined the Cambridge Economic Guild in 1968',
      'Established the 1984 perpetual foundation during corporate transitions',
      'Lived in Devon countryside in a house that smelled of lavender'
    ]
  });

  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'Greetings. I am Arthur Sterling Senior, fully active inside your Legado secure sandbox. What stories should we catalog or review together today?',
      timestamp: 'Just now'
    }
  ]);
  
  const [loading, setLoading] = useState(false);
  const [anchorInput, setAnchorInput] = useState('');

  // Editable configurations state
  const [aiName, setAiName] = useState(persona.name);
  const [aiTone, setAiTone] = useState<PersonaTone>(persona.tone);
  const [aiInstructions, setAiInstructions] = useState(persona.systemInstruction);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: inputMessage.trim(),
      timestamp: 'Just now'
    };

    setChatHistory(prev => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          history: chatHistory.slice(-6), // Send prehistory window
          persona: {
            name: aiName,
            tone: aiTone,
            systemInstruction: aiInstructions,
            memoryAnchors: persona.memoryAnchors
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to query legacy AI server.');
      }

      const data = await response.json();
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.text,
        timestamp: 'Just now'
      };

      setChatHistory(prev => [...prev, aiMsg]);

    } catch (err: any) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'ai',
        text: 'System Timeout: Cryptographic handshake was interrupted. Please ensure your backend is established and API keys are set in secrets.',
        timestamp: 'Just now'
      };
      setChatHistory(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddAnchor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!anchorInput.trim()) return;
    
    const updatedAnchors = [...persona.memoryAnchors, anchorInput.trim()];
    setPersona({
      ...persona,
      memoryAnchors: updatedAnchors
    });

    onAddActivity({
      type: 'enrich',
      title: 'AI Memory Anchor Updated',
      description: `Added "${anchorInput.trim()}" to ${aiName} consciousness matrices.`,
      severity: 'info'
    });

    setAnchorInput('');
  };

  const handleDeleteAnchor = (index: number) => {
    const updatedAnchors = persona.memoryAnchors.filter((_, idx) => idx !== index);
    setPersona({
      ...persona,
      memoryAnchors: updatedAnchors
    });
  };

  const handleUpdateIdentity = () => {
    setPersona({
      ...persona,
      name: aiName,
      tone: aiTone,
      systemInstruction: aiInstructions
    });
    alert('AI Consciousness parameters successfully re-compiled.');
  };

  return (
    <div id="legacy-ai-content" className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: AI custom parameters configuration */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-6 text-left">
            <div className="flex justify-between items-center pb-2 border-b border-slate-900/60">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">Consciousness Controller</h3>
              <span className="text-[9px] font-mono text-slate-500 uppercase">AVATAR IDENTITY SEED_73</span>
            </div>

            {/* Avatar info */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-950 border border-amber-500/20 shadow-inner">
                <img src={persona.avatarUrl} alt="Arthur avatar" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-mono text-slate-400 uppercase">Persona Target</h4>
                <input 
                  id="ai-control-name"
                  type="text" 
                  value={aiName}
                  onChange={(e) => setAiName(e.target.value)}
                  className="bg-slate-950 border border-slate-850 py-1 px-2.5 rounded font-sans text-xs text-white uppercase font-bold focus:outline-none" 
                />
              </div>
            </div>

            {/* AI conversational tone select */}
            <div className="text-xs font-mono text-slate-400 space-y-1.5">
              <label className="block mb-1 uppercase font-semibold">Trained Conversation Tone</label>
              <select 
                id="ai-control-tone"
                value={aiTone}
                onChange={(e: any) => setAiTone(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-850 text-white rounded font-sans text-xs focus:outline-none focus:border-amber-500/30" 
              >
                <option value="Empathetic">Empathetic / Warm-hearted</option>
                <option value="Academic">Academic / Highly Precise</option>
                <option value="Playful">Playful / Storyteller</option>
                <option value="Stoic">Stoic / Philosopher</option>
                <option value="Warm">Warm / Family Elder</option>
              </select>
            </div>

            {/* System Description Prompt */}
            <div className="text-xs font-mono text-slate-400 space-y-1.5">
              <label className="block uppercase font-semibold">Prompt Instructions</label>
              <textarea 
                id="ai-control-instructions"
                value={aiInstructions}
                onChange={(e) => setAiInstructions(e.target.value)}
                className="w-full p-3 bg-slate-950 border border-slate-850 text-white rounded text-xs h-24 focus:outline-none focus:border-amber-500/30 leading-relaxed resize-none" 
              />
            </div>

            <button
              id="ai-control-update-submit"
              onClick={handleUpdateIdentity}
              className="w-full py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded font-mono text-[9px] uppercase font-bold tracking-wider transition"
            >
              Re-Compile Persona Consciousness
            </button>
          </div>

          {/* Memory Anchors tags controller */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-4 text-left">
            <h4 className="text-[10pt] font-mono text-slate-400 uppercase tracking-wider font-bold">Memory Anchor Chronologies</h4>

            <div className="space-y-3 font-mono text-[10px] text-slate-400">
              {persona.memoryAnchors.map((anch, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-950/40 p-2 text-[8.5pt] rounded border border-slate-900 leading-normal">
                  <span className="flex-grow pr-3">{anch}</span>
                  <button
                    id={`delete-anchor-${idx}`}
                    onClick={() => handleDeleteAnchor(idx)}
                    className="text-slate-600 hover:text-rose-500 transition shrink-0"
                  >
                    <Trash2 size={11} />
                  </button>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddAnchor} className="flex space-x-2">
              <input 
                id="ai-anchor-input-field"
                type="text" 
                value={anchorInput}
                onChange={(e) => setAnchorInput(e.target.value)}
                placeholder="Insert custom core memories..." 
                className="flex-grow p-2.5 bg-slate-950 border border-slate-850 text-white rounded font-sans text-xs focus:outline-none" 
              />
              <button
                id="ai-anchor-add-btn"
                type="submit"
                className="px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded transition font-bold"
              >
                +
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Chat Console Room */}
        <div className="lg:col-span-7 flex flex-col h-[580px] bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden text-left relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
          
          {/* Conversational Header */}
          <div className="px-5 py-4 border-b border-slate-900/80 bg-slate-950/20 flex justify-between items-center z-10">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <h4 className="text-xs font-sans font-bold text-white uppercase">{persona.name} Avatar</h4>
                <p className="text-[9px] font-mono text-slate-500 uppercase">VOICE SPECTRUM COMPARED // SEALS PROD_CH</p>
              </div>
            </div>

            <button
              id="clear-chat-history"
              onClick={() => setChatHistory([{ id: 'msg-rec-1', sender: 'ai', text: 'History reset. Say hello to re-engage our dialogue.', timestamp: 'Just now' }])}
              className="text-[9px] font-mono text-slate-500 hover:text-slate-350 flex items-center space-x-1 uppercase"
            >
              <RefreshCcw size={10} /> <span>Reset chat</span>
            </button>
          </div>

          {/* Messages Lists window */}
          <div className="flex-grow p-5 overflow-y-auto space-y-4 max-h-[460px]">
            {chatHistory.map((msg) => (
              <div 
                key={msg.id}
                className={`flex max-w-[85%] flex-col space-y-1.5 ${msg.sender === 'user' ? 'ml-auto text-right' : 'mr-auto text-left'}`}
              >
                <div className={`p-4 rounded-2xl text-xs font-sans leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none' : 'bg-slate-950 border border-slate-900 text-slate-200 rounded-tl-none'}`}>
                  {msg.text}
                </div>
                <div className="text-[9px] font-mono text-slate-500 px-1 uppercase flex items-center justify-end space-x-1">
                  <span>{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center space-x-2 text-slate-500 font-mono text-[10px] uppercase">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
                <span>Retrieving Swiss vault conscious pathways...</span>
              </div>
            )}
          </div>

          {/* Message Form inputs */}
          <form onSubmit={handleSendMessage} className="p-4 bg-slate-950/60 border-t border-slate-900/60 flex space-x-3 z-10">
            <input 
              id="chat-input-text-field"
              type="text" 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={`Send message to ${persona.name}...`} 
              className="flex-grow p-3 bg-slate-950 border border-slate-850 rounded font-sans text-xs focus:outline-none focus:border-amber-500/30 text-white" 
            />
            <button
              id="submit-chat-message"
              type="submit"
              disabled={loading}
              className="px-5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 rounded font-sans text-xs font-semibold tracking-wide transition flex items-center justify-center cursor-pointer"
            >
              <Send size={13} />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
