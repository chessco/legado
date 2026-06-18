/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShoppingBag, Shield, Star, DollarSign, Wallet, Check, 
  ArrowRight, Users, Box, HardDrive, ShieldCheck, ListOrdered 
} from 'lucide-react';
import { MarketplaceItem } from '../types';
import { MARKETPLACE_ITEMS } from '../data';

interface MarketplaceProps {
  balance: number;
  onDeductBalance: (amount: number) => boolean;
  onAddActivity: (act: any) => void;
  onAssignCurator: (name: string) => void;
}

export default function Marketplace({
  balance,
  onDeductBalance,
  onAddActivity,
  onAssignCurator
}: MarketplaceProps) {
  // Purchased inventory tracker
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);
  const [purchasingId, setPurchasingId] = useState<string | null>(null);

  const handlePurchase = (item: MarketplaceItem) => {
    if (purchasedItems.includes(item.id)) {
      alert("This secure service tier is already provisioned for your vault.");
      return;
    }

    if (balance < item.price) {
      alert("Insufficient institutional ledgers inside your Switzerland safety tier.");
      return;
    }

    setPurchasingId(item.id);

    setTimeout(() => {
      // Execute payment
      const success = onDeductBalance(item.price);
      setPurchasingId(null);

      if (success) {
        setPurchasedItems(prev => [...prev, item.id]);
        
        // If it's a curator, automatically tag!
        if (item.category === 'curator') {
          const cleanName = item.title.split(' - ')[0]; // Dr. Elena Rossi / Sarah Jenkins
          onAssignCurator(cleanName);
        }

        // Add activity
        onAddActivity({
          type: 'security',
          title: 'Secure Asset Purchased',
          description: `Acquired and signed cryptographic seal for: "${item.title}".`,
          user: 'Arthur Sterling',
          severity: 'info'
        });

        alert(`Provision successful! "${item.title}" is now officially active inside your Swiss vault node.`);
      }
    }, 900);
  };

  const getCatBadge = (cat: string) => {
    switch (cat) {
      case 'curator': return <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase">Heritage Curator</span>;
      case 'security': return <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase">Security Seal</span>;
      case 'storage': return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase">Off-Grid Drive</span>;
      default: return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase">Curation Layout</span>;
    }
  };

  return (
    <div id="marketplace-content" className="space-y-8">
      
      {/* Portfolio Balance Showcase */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/20 p-6 rounded-2xl border border-slate-900">
        <div className="space-y-1">
          <h2 className="text-xl font-serif text-white">Institutional Heritage Marketplace</h2>
          <p className="text-xs text-slate-400">Deploy luxury swiss legal kits, upgrade physical hardware, or secure certified curators.</p>
        </div>

        {/* Ledger balance box widget */}
        <div className="mt-4 sm:mt-0 bg-slate-950 border border-slate-900 px-5 py-3 rounded-xl flex items-center space-x-3.5 shadow-inner">
          <div className="bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 text-amber-500">
            <Wallet size={16} />
          </div>
          <div>
            <span className="text-[9px] block font-mono text-slate-500 uppercase">Vault Balance Ledger</span>
            <span id="market-balance-display" className="text-xl font-serif text-white font-extrabold">${balance.toLocaleString()} USD</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column: Products grid */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 pl-1">Available Acquisitions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MARKETPLACE_ITEMS.map((item) => {
              const isOwned = purchasedItems.includes(item.id);
              const isBuying = purchasingId === item.id;

              return (
                <div 
                  key={item.id}
                  className="bg-slate-900/30 border border-slate-900 hover:border-slate-805 rounded-xl p-5 flex flex-col justify-between transition text-left relative"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      {getCatBadge(item.category)}
                      <div className="flex items-center space-x-1 font-mono text-[10px] text-amber-500">
                        <Star size={11} className="fill-amber-500 text-amber-500" />
                        <span>{item.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-sm font-sans font-extrabold text-white leading-snug">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-normal">{item.description}</p>
                    </div>

                    {/* Curator details card */}
                    {item.curatorDetails && (
                      <div className="flex items-center space-x-3 bg-slate-950/50 p-2.5 rounded-lg border border-slate-900">
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                          <img src={item.curatorDetails.avatar} alt="Curator photo placeholder" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <span className="text-[9px] block font-mono uppercase font-bold text-slate-300">{item.curatorDetails.specialty}</span>
                          <span className="text-[8px] block font-mono text-slate-500">{item.curatorDetails.exp}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-905 pt-4 mt-6 flex justify-between items-center">
                    <span className="text-base font-serif font-bold text-white">
                      ${item.price.toLocaleString()}
                    </span>

                    <button
                      id={`buy-service-${item.id}`}
                      onClick={() => handlePurchase(item)}
                      disabled={isOwned || isBuying}
                      className={`px-4 py-2 font-sans text-[10px] uppercase font-bold rounded tracking-wide transition flex items-center space-x-1.5 cursor-pointer ${isOwned ? 'bg-slate-950 border border-slate-850 text-slate-500' : 'bg-amber-500 text-slate-950 hover:bg-amber-600'}`}
                    >
                      {isBuying ? (
                        <span>SIGNING CONTRACT...</span>
                      ) : isOwned ? (
                        <>
                          <Check size={11} />
                          <span>PROVISIONED</span>
                        </>
                      ) : (
                        <span>Procure System</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Secure procurement history logs */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-4 text-left">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Secured Swiss Provisions</h4>
            
            {purchasedItems.length === 0 ? (
              <p className="text-xs text-slate-500 font-mono italic">
                No custom services purchased in this session yet. Upgrade security or assign certified curators above.
              </p>
            ) : (
              <div className="space-y-3 font-mono text-[9px] text-slate-500">
                {purchasedItems.map((item_id) => {
                  const product = MARKETPLACE_ITEMS.find(m => m.id === item_id);
                  return (
                    <div key={item_id} className="bg-slate-950/40 p-3 rounded-lg border border-slate-905 flex items-start space-x-2.5">
                      <ShieldCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white block font-sans font-bold leading-none">{product?.title}</span>
                        <span className="text-[8px] block text-slate-500 uppercase mt-1">PROVISION_STAMP: CH_OK_2026</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Secure compliance guidelines card */}
          <div className="bg-slate-950 border border-slate-900 rounded-xl p-5 text-left space-y-3 leading-relaxed">
            <div className="flex items-center space-x-2 text-amber-500">
              <ShieldCheck size={16} />
              <h5 className="text-[10px] font-mono uppercase font-bold tracking-wider">SWISS GUARDIANS SECURITIES</h5>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">
              All acquisitions deduct from your Vault Balance ledger instantly. Curators assigned to your profile will coordinate directly inside Swiss Interview nodes to review transcripts and catalog memory timelines.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
