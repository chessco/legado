/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, Plus, Sparkles, FileText, Calendar, 
  Settings, Check, Send, LayoutList, RefreshCcw, Eye 
} from 'lucide-react';
import { StoryDraft } from '../types';

interface StoryBuilderProps {
  onAddActivity: (act: any) => void;
}

export default function StoryBuilder({ onAddActivity }: StoryBuilderProps) {
  // Hardcoded initial story drafts
  const [drafts, setDrafts] = useState<StoryDraft[]>([
    {
      id: 'story-1',
      title: 'Our Cambridge Years',
      synopsis: 'Notes about the economics guild and intellectual inheritance from Arthur Sr.',
      content: 'I spent our Cambridge years in the shadow of the old King\'s College towers. Arthur Sr. would host economic seminars on Sunday afternoons. He\'d sit by the fire with an old pipe, drawing diagrams of generational wealth transfer models. It transformed how we understood our primary enterprise: not as a ledger of cash flow, but as a cultural contract that must out-endure the physical structures...',
      layoutStyle: 'Memoir',
      dateCreated: '2026-06-10',
      isPublished: true,
      sections: []
    },
    {
      id: 'story-2',
      title: 'The Great Swiss Transition of 1912',
      synopsis: 'Accounts translated from French describing the establishing of the central Swiss ledger.',
      content: 'The old ledger details that our family roots migrated from Geneve to Zurich. We carried leather-bound documents signed by CHF clerks. The transition took three weeks over muddy passes. My grandmother often recounted that the legal deeds were packed in oilskin bags to preserve them from the mountain rain. This exact preservation instinct became our institutional foundation...',
      layoutStyle: 'Chronological',
      dateCreated: '2026-05-18',
      isPublished: false,
      sections: []
    }
  ]);

  const [selectedDraft, setSelectedDraft] = useState<StoryDraft>(drafts[0]);
  
  // Editorial inputs for draft modifications
  const [title, setTitle] = useState(drafts[0].title);
  const [synopsis, setSynopsis] = useState(drafts[0].synopsis);
  const [content, setContent] = useState(drafts[0].content);
  const [style, setStyle] = useState<StoryDraft['layoutStyle']>(drafts[0].layoutStyle);

  // Gemini evaluation output state
  const [geminiAnalysis, setGeminiAnalysis] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleSelectDraft = (draft: StoryDraft) => {
    setSelectedDraft(draft);
    setTitle(draft.title);
    setSynopsis(draft.synopsis);
    setContent(draft.content);
    setStyle(draft.layoutStyle);
    setGeminiAnalysis('');
  };

  const handleCreateNewStory = () => {
    const newDraft: StoryDraft = {
      id: `story-${Date.now()}`,
      title: 'Untitled Legacy Letter',
      synopsis: 'A brand new chronicle of family memories.',
      content: 'Write your story here. Combine personal milestones, names, and lessons.',
      layoutStyle: 'Legacy Letter',
      dateCreated: new Date().toISOString().substring(0, 10),
      isPublished: false,
      sections: []
    };

    setDrafts([newDraft, ...drafts]);
    handleSelectDraft(newDraft);

    onAddActivity({
      type: 'enrich',
      title: 'New Legacy Memoir Started',
      description: `Draft "${newDraft.title}" created. Ready for AI curation review.`,
      severity: 'info'
    });
  };

  const handleSaveDraft = () => {
    const updatedDrafts = drafts.map(d => {
      if (d.id === selectedDraft.id) {
        return {
          ...d,
          title,
          synopsis,
          content,
          layoutStyle: style
        };
      }
      return d;
    });

    setDrafts(updatedDrafts);
    alert('Memoir draft successfully sealed locally.');
  };

  // Functional POST API call to /api/gemini/summarize for live assessments!
  const handleTriggerAIReview = async () => {
    setIsEvaluating(true);
    setGeminiAnalysis('');

    try {
      const response = await fetch('/api/gemini/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          synopsis,
          content,
          style
        })
      });

      if (!response.ok) {
        throw new Error('Failed to query legacy AI server proxy.');
      }

      const data = await response.json();
      setGeminiAnalysis(data.analysis || 'Unable to load evaluation review.');
      
      onAddActivity({
        type: 'enrich',
        title: 'Document Deep AI Analysis',
        description: `Legacy AI completed structural review of story "${title}".`,
        severity: 'info'
      });
    } catch (error: any) {
      console.error(error);
      setGeminiAnalysis('Error: Failed to process critique. Please ensure server backend and secrets are valid.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div id="storybuilder-content" className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Draft list */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-900/60">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-350 font-bold">Memoirs Collection</h3>
              <button
                id="create-new-memoir-btn"
                onClick={handleCreateNewStory}
                className="p-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/25 rounded uppercase font-mono text-[9px]"
                title="Create New Story"
              >
                <Plus size={11} />
              </button>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {drafts.map((d) => (
                <div 
                  key={d.id}
                  onClick={() => handleSelectDraft(d)}
                  className={`text-left p-3.5 rounded-xl border transition cursor-pointer flex flex-col justify-between space-y-2.5 ${selectedDraft.id === d.id ? 'border-amber-500 bg-amber-500/5' : 'border-slate-950 bg-slate-950/40 hover:border-slate-800'}`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                      {d.layoutStyle}
                    </span>
                    <span className="text-[9px] text-slate-600 font-mono flex items-center space-x-1">
                      <Calendar size={10} />
                      <span>{d.dateCreated}</span>
                    </span>
                  </div>

                  <h4 className="text-xs font-sans font-bold text-white leading-snug line-clamp-1">{d.title}</h4>
                  <p className="text-[10px] text-slate-400 line-clamp-1.5 leading-normal">{d.synopsis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Editor and AI Evaluation */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-6 text-left">
            
            {/* Title & Layout inputs */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8 text-xs font-mono text-slate-400">
                <label className="block mb-1.5 uppercase font-semibold">Story Title</label>
                <input 
                  id="editor-story-title"
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-850 text-white rounded font-sans text-xs focus:outline-none focus:border-amber-500/30 font-bold" 
                />
              </div>

              <div className="md:col-span-4 text-xs font-mono text-slate-400">
                <label className="block mb-1.5 uppercase font-semibold">Story Format Style</label>
                <select 
                  id="editor-story-style"
                  value={style}
                  onChange={(e: any) => setStyle(e.target.value)}
                  className="w-full p-2.5 bg-slate-950 border border-slate-850 text-white rounded font-sans text-xs focus:outline-none focus:border-amber-500/30" 
                >
                  <option value="Memoir">Memoir Format</option>
                  <option value="Chronological">Chronological Chronicles</option>
                  <option value="Anthology">Anthology Anthology</option>
                  <option value="Legacy Letter">Legacy Sealed Letter</option>
                </select>
              </div>
            </div>

            {/* Synopsis Input */}
            <div className="text-xs font-mono text-slate-400">
              <label className="block mb-1.5 uppercase font-semibold">Short Historical Synopsis</label>
              <input 
                id="editor-story-synopsis"
                type="text" 
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-850 text-white rounded font-sans text-xs focus:outline-none focus:border-amber-500/30" 
              />
            </div>

            {/* Content Input */}
            <div className="text-xs font-mono text-slate-400">
              <label className="block mb-1.5 uppercase font-semibold">Memoir Chronicle Content Body</label>
              <textarea 
                id="editor-story-body"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Compose the details of your chronicle..."
                className="w-full p-3 bg-slate-950 border border-slate-850 text-white rounded h-48 font-serif text-sm leading-relaxed focus:outline-none focus:border-amber-500/30" 
              />
            </div>

            {/* Save Button */}
            <div className="flex space-x-3 pt-2">
              <button
                id="editor-save-draft"
                onClick={handleSaveDraft}
                className="flex-grow py-2 border border-slate-800 hover:bg-slate-950 text-slate-400 font-mono text-[10px] uppercase rounded transition"
              >
                Save Draft
              </button>
              <button
                id="editor-trigger-critique"
                onClick={handleTriggerAIReview}
                disabled={isEvaluating}
                className="flex-grow py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 hover:border-amber-500/40 rounded font-mono text-[10px] uppercase font-bold tracking-wider transition flex items-center justify-center space-x-2"
              >
                <Sparkles size={11} />
                <span>{isEvaluating ? 'COMPILING REVIEW...' : 'Institutional AI Review'}</span>
              </button>
            </div>

          </div>

          {/* AI Assessment analysis panel */}
          {geminiAnalysis && (
            <div className="bg-slate-900/45 border border-slate-900 rounded-2xl p-6 text-left animate-fade-in space-y-4">
              <div className="flex items-center space-x-2 text-amber-500 pb-2 border-b border-slate-900/60">
                <Sparkles size={16} />
                <h4 className="text-xs font-mono uppercase tracking-widest font-bold">SWISS LEGACY COOPER AI ARCHIVIST REPORT</h4>
              </div>

              <div className="prose prose-invert text-xs text-slate-400 font-mono leading-relaxed space-y-4 whitespace-pre-line">
                {geminiAnalysis}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
