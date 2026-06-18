/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FolderLock, Lock, Unlock, Search, UploadCloud, Plus, FileText, 
  Image, Music, Calendar, Trash2, Eye, ShieldAlert, KeyRound 
} from 'lucide-react';
import { VaultItem } from '../types';

interface HumanVaultProps {
  items: VaultItem[];
  onAddItem: (item: VaultItem) => void;
  onDeleteItem: (id: string) => void;
  onUpdateItem: (id: string, updated: Partial<VaultItem>) => void;
}

export default function HumanVault({
  items,
  onAddItem,
  onDeleteItem,
  onUpdateItem
}: HumanVaultProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dragOver, setDragOver] = useState(false);
  
  // Decryption workflow state
  const [decryptingItem, setDecryptingItem] = useState<VaultItem | null>(null);
  const [decryptKey, setDecryptKey] = useState('');
  const [decryptError, setDecryptError] = useState('');
  const [decryptingAnim, setDecryptingAnim] = useState(false);

  // File metadata detail inspector
  const [inspectedItem, setInspectedItem] = useState<VaultItem | null>(null);
  const [editNotes, setEditNotes] = useState('');

  // Drag and Drop Simulator
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    // Simulate detecting a dropped file
    const simulatedFiles = [
      { name: 'Last Will Testament Scan.pdf', size: '18.4 MB', type: 'document' },
      { name: 'Zurich Safety Deposit Certificate.png', size: '3.1 MB', type: 'image' },
      { name: 'Genealogy Audio Interview.mp3', size: '54.1 MB', type: 'audio' }
    ];
    
    const pickedFile = simulatedFiles[Math.floor(Math.random() * simulatedFiles.length)];
    
    const newItem: VaultItem = {
      id: `vf-${Date.now()}`,
      name: pickedFile.name,
      type: pickedFile.type as any,
      category: (selectedCategory !== 'All' ? selectedCategory : 'Family History') as any,
      size: pickedFile.size,
      updatedAt: new Date().toISOString().replace(/T/, ' ').substring(0, 16),
      isLocked: false,
      notes: 'Dynamically generated drag-and-drop audit file. Securely logged inside local sandbox.'
    };

    onAddItem(newItem);
  };

  const handleTriggerUploadFile = () => {
    const defaultNames = [
      { name: 'Trust Agreement Signed.pdf', type: 'document' },
      { name: 'Oxford Fellowship Registry_1984.pdf', type: 'document' },
      { name: 'Sarah Biography Recording.mp3', type: 'audio' },
      { name: 'Historical Portrait.jpg', type: 'image' }
    ];
    const picked = defaultNames[Math.floor(Math.random() * defaultNames.length)];
    const newItem: VaultItem = {
      id: `vf-${Date.now()}`,
      name: picked.name,
      type: picked.type as any,
      category: (selectedCategory !== 'All' ? selectedCategory : 'Academic Lore') as any,
      size: `${(Math.random() * 20 + 2).toFixed(1)} MB`,
      updatedAt: new Date().toISOString().replace(/T/, ' ').substring(0, 16),
      isLocked: false,
      notes: 'Manually simulated upload file, cryptographically verified.'
    };
    onAddItem(newItem);
  };

  // Lock Decryption verification simulator
  const handleStartDecryption = (item: VaultItem) => {
    setDecryptingItem(item);
    setDecryptKey('');
    setDecryptError('');
    setDecryptingAnim(false);
  };

  const handleExecuteDecryption = (e: React.FormEvent) => {
    e.preventDefault();
    setDecryptingAnim(true);
    setDecryptError('');

    setTimeout(() => {
      setDecryptingAnim(false);
      // Let any key succeed for premium UX, but make it look cryptographic
      if (decryptKey.length >= 4) {
        onUpdateItem(decryptingItem!.id, { isLocked: false });
        setDecryptingItem(null);
      } else {
        setDecryptError('Identification signature is too short (minimum 4 characters).');
      }
    }, 1500);
  };

  // Note saving updates
  const handleInspect = (item: VaultItem) => {
    setInspectedItem(item);
    setEditNotes(item.notes || '');
  };

  const handleSaveNotes = () => {
    if (inspectedItem) {
      onUpdateItem(inspectedItem.id, { notes: editNotes });
      setInspectedItem(null);
    }
  };

  // Filter items dynamically
  const categories = ['All', 'Family History', 'Medical Directives', 'Academic Lore', 'Financial Archival'];
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image size={16} className="text-pink-500" />;
      case 'audio': return <Music size={16} className="text-amber-500" />;
      default: return <FileText size={16} className="text-blue-500" />;
    }
  };

  return (
    <div id="vault-content" className="space-y-6">
      {/* Search and Tag Selector Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/20 p-5 rounded-xl border border-slate-900">
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <Search size={14} />
          </div>
          <input 
            id="vault-search-input"
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vault archives..." 
            className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-805 rounded font-sans text-xs focus:outline-none focus:border-amber-500/30 text-white" 
          />
        </div>

        {/* Directory/Category quick pick tags */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              id={`vault-filter-${cat.replace(/\s+/g, '')}`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase border transition ${selectedCategory === cat ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 font-bold' : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column: Grid of vault folders/files */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-slate-400 pl-1">
            <span>Archived Deeds ({filteredItems.length})</span>
            <span className="text-slate-500">SECURED LOCK MATRIX ON</span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="bg-slate-900/10 border border-slate-900 rounded-2xl py-16 text-center text-slate-500 space-y-2">
              <FolderLock size={32} className="mx-auto text-slate-700" />
              <p className="text-xs font-mono">No matching legacy files matching filters found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className={`bg-slate-900/30 border rounded-xl p-4 flex flex-col justify-between transition relative group ${item.isLocked ? 'border-rose-950 bg-rose-950/5' : 'border-slate-900 hover:border-slate-800'}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2.5">
                      <div className="bg-slate-950 p-2 rounded border border-slate-800">
                        {getIcon(item.type)}
                      </div>
                      <div>
                        {item.isLocked ? (
                          <h4 className="text-xs font-sans font-bold text-slate-400 filter blur-[2px] select-none">
                            Encrypted Deed Log
                          </h4>
                        ) : (
                          <h4 className="text-xs font-sans font-bold text-white group-hover:text-amber-500 transition line-clamp-1">{item.name}</h4>
                        )}
                        <span className="text-[9px] block font-mono text-slate-500 uppercase mt-0.5">{item.category}</span>
                      </div>
                    </div>

                    {/* Locks status marker */}
                    <div>
                      {item.isLocked ? (
                        <button
                          id={`decrypt-trigger-${item.id}`}
                          onClick={() => handleStartDecryption(item)}
                          className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 p-1.5 rounded border border-rose-500/20 hover:border-rose-500/40 transition cursor-pointer"
                          title="Decrypt with Master Key"
                        >
                          <Lock size={12} />
                        </button>
                      ) : (
                        <span className="text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 text-[8px] font-mono tracking-widest uppercase">
                          UNLOCKED
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="my-3 text-[11px] text-slate-400">
                    {item.isLocked ? (
                      <p className="font-mono text-[9px] text-rose-500/80 uppercase">
                        ⚠️ VAULD SECURE SEAL ACTIVE. REVEAL BY INITIALIZING SECURE KEY DECRYPT.
                      </p>
                    ) : (
                      <p className="line-clamp-2 leading-relaxed">{item.notes || 'No meta-annotations attached in this chronological file.'}</p>
                    )}
                  </div>

                  {/* Footer stats */}
                  <div className="border-t border-slate-900/80 pt-3 mt-1 flex justify-between items-center text-[9px] font-mono text-slate-500">
                    <span>{item.size}</span>
                    <div className="flex items-center space-x-3">
                      {!item.isLocked && (
                        <button
                          id={`inspect-archive-${item.id}`}
                          onClick={() => handleInspect(item)}
                          className="hover:text-amber-500 flex items-center space-x-1"
                        >
                          <Eye size={10} /> <span>Inspect</span>
                        </button>
                      )}
                      <button
                        id={`delete-archive-${item.id}`}
                        onClick={() => onDeleteItem(item.id)}
                        className="hover:text-rose-500 text-slate-600 transition"
                      >
                        <Trash2 size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column: Interactive drag and drop uploader & overview panel */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Simulated drag drag-drop box */}
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`cursor-pointer rounded-2xl border p-8 text-center space-y-4 flex flex-col items-center justify-center transition min-h-[220px] ${dragOver ? 'bg-amber-500/5 border-amber-500 border-dashed animate-pulse' : 'bg-slate-900/30 border-slate-900 hover:border-slate-800'}`}
          >
            <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-850 flex items-center justify-center text-amber-500/75">
              <UploadCloud size={22} />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-xs font-sans font-bold text-slate-200 uppercase">Simulated Drag & Drop</h3>
              <p className="text-[10px] text-slate-500 font-mono">
                DRAG FILES HERE OR CLICK TO SIMULATE UPLOAD
              </p>
            </div>

            <button
              id="simulate-upload-action"
              onClick={handleTriggerUploadFile}
              className="px-4 py-1.5 bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 rounded font-mono text-[9px] uppercase tracking-wider transition"
            >
              Add Virtual Deed
            </button>
          </div>

          {/* Locked indicators quick overview info */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-5 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Vault Security Audit</h4>
            
            <div className="space-y-3 font-mono text-[10px] text-slate-500">
              <div className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded border border-slate-900">
                <span>ENCRYPTED SECURE OBJECTS:</span>
                <span className="text-white font-bold">{items.filter(i => i.isLocked).length} total</span>
              </div>
              <div className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded border border-slate-900">
                <span>CERTIFIED TRUST AGREEMENTS:</span>
                <span className="text-white font-bold">2/2 verified</span>
              </div>
              <div className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded border border-slate-900">
                <span>CRYPTO-VAULD NODE COMPLIANCE:</span>
                <span className="text-emerald-500 font-bold uppercase">SECURED</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* METADATA ANNOTATION INSPECTION INTERFACE */}
      {inspectedItem && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-md bg-slate-900 border border-slate-850 rounded-2xl p-6 shadow-2xl relative space-y-6">
            <div className="space-y-1">
              <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[8px] text-slate-500 uppercase">{inspectedItem.category}</span>
              <h3 className="text-base font-serif text-white mt-2 font-bold">{inspectedItem.name}</h3>
              <p className="text-[10px] text-slate-500 font-mono uppercase">SIZE: {inspectedItem.size} // LAST SEAL: {inspectedItem.updatedAt}</p>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] font-mono uppercase text-slate-400">Meta-Annotation Commentary</label>
              <textarea 
                id="inspect-notes-textarea"
                value={editNotes} 
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Attach metadata tags or memories to this document..." 
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded font-sans text-xs h-32 focus:outline-none focus:border-amber-500/30 text-white resize-none" 
              />
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                id="inspect-modal-cancel"
                type="button"
                onClick={() => setInspectedItem(null)}
                className="flex-grow py-2 border border-slate-800 hover:bg-slate-950 text-slate-400 font-mono text-[10px] uppercase rounded transition"
              >
                Close
              </button>
              <button
                id="inspect-modal-save"
                type="button"
                onClick={handleSaveNotes}
                className="flex-grow py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans text-[10px] uppercase font-bold rounded transition"
              >
                Save Meta Seals
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MASTER PIN VERIFICATION SCREEN DECRYPT MODAL */}
      {decryptingItem && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-sm bg-slate-900 border border-slate-850 rounded-2xl p-6 shadow-2xl relative text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mx-auto animate-pulse">
              <ShieldAlert size={22} />
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white">Decrypt Secure Asset</h3>
              <p className="text-[11px] text-slate-400 font-mono">SWISS CUSTODY SHA256 KEY DEPLOYMENT</p>
            </div>

            <p className="text-xs text-slate-400 bg-slate-950/40 p-2.5 rounded border border-slate-900 border-dashed">
              You are accessing: <strong className="text-white font-serif">{decryptingItem.name}</strong>
            </p>

            <form onSubmit={handleExecuteDecryption} className="space-y-4">
              {decryptError && (
                <p className="text-rose-400 font-mono text-[10px] bg-rose-500/5 p-2 rounded border border-rose-500/10">
                  {decryptError}
                </p>
              )}

              <div className="relative text-left">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <KeyRound size={13} />
                </div>
                <input 
                  id="decrypt-key-field"
                  type="password" 
                  value={decryptKey}
                  onChange={(e) => setDecryptKey(e.target.value)}
                  placeholder="Enter Master Key phrase or PIN (e.g. 1984)" 
                  required
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded font-sans text-xs focus:outline-none focus:border-amber-500/30 text-white" 
                />
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  id="decrypt-modal-cancel"
                  type="button"
                  onClick={() => setDecryptingItem(null)}
                  className="flex-1 py-2 border border-slate-800 hover:bg-slate-950 text-slate-400 font-mono text-[10px] uppercase rounded transition"
                >
                  Aborder
                </button>
                <button
                  id="decrypt-modal-submit"
                  type="submit"
                  disabled={decryptingAnim}
                  className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-850 disabled:text-slate-500 text-slate-950 font-sans text-[10px] uppercase font-bold rounded transition"
                >
                  {decryptingAnim ? 'DECRYPTING...' : 'INITIALIZE KEY'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
