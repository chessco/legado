/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VaultItem, LegacyProject, VaultActivity, InterviewPrompt, MarketplaceItem } from './types';

// Initial Vault Items (The Human Vault Archive)
export const INITIAL_VAULT_ITEMS: VaultItem[] = [
  {
    id: 'vf-1',
    name: '1984 Foundation Log.pdf',
    type: 'document',
    category: 'Family History',
    size: '14.2 MB',
    updatedAt: '2026-05-12 14:32',
    isLocked: false,
    notes: 'Primary digital scan of the original charter log. Contains genealogy notes dating back to 1912.'
  },
  {
    id: 'vf-2',
    name: 'Ancestral Lineage Tree.png',
    type: 'image',
    category: 'Family History',
    size: '8.4 MB',
    updatedAt: '2026-06-01 09:15',
    isLocked: false,
    notes: 'Visual representation of the Sterling lineage, validated by professional genealogists.'
  },
  {
    id: 'vf-3',
    name: 'Healthcare Proxy & Directive.pdf',
    type: 'document',
    category: 'Medical Directives',
    size: '2.1 MB',
    updatedAt: '2026-04-20 11:00',
    isLocked: true,
    notes: 'Encrypted storage of living will and medical proxy of Arthur Sterling.'
  },
  {
    id: 'vf-4',
    name: 'Academic Lore - Cambridge Years.mp3',
    type: 'audio',
    category: 'Academic Lore',
    size: '48.5 MB',
    updatedAt: '2026-06-12 16:45',
    isLocked: false,
    notes: 'Oral history interview narrating Arthur Sterling’s work as a senior fellow at King’s College.'
  },
  {
    id: 'vf-5',
    name: 'Trust fund agreement draft.pdf',
    type: 'document',
    category: 'Financial Archival',
    size: '3.8 MB',
    updatedAt: '2026-02-18 10:30',
    isLocked: true,
    notes: 'Locked draft agreement for the family perpetual foundation.'
  },
  {
    id: 'vf-6',
    name: 'Letter to My Children in 2050.pdf',
    type: 'document',
    category: 'Family History',
    size: '1.2 MB',
    updatedAt: '2026-06-15 17:00',
    isLocked: false,
    notes: 'Personal legacy letter sealed and prepared for the chronological story builder.'
  }
];

// Initial Legacy Projects
export const INITIAL_LEGACY_PROJECTS: LegacyProject[] = [
  {
    id: 'proj-1',
    title: 'The 1984 Foundation',
    description: 'A comprehensive curation of the early commercial roots and legal milestones of the Sterling Enterprise.',
    progress: 88,
    storiesCount: 42,
    hoursRecorded: 18.5,
    documentsStored: 110,
    coverUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    curatorName: 'Dr. Elena Rossi',
    status: 'active'
  },
  {
    id: 'proj-2',
    title: 'Ancestral Lineage Vol. 1',
    description: 'Tracing back five generations of migratory records, authentic portraits, and translated wartime correspondence.',
    progress: 65,
    storiesCount: 28,
    hoursRecorded: 14.0,
    documentsStored: 95,
    coverUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
    curatorName: 'Sarah Jenkins',
    status: 'active'
  },
  {
    id: 'proj-3',
    title: 'Oxford Senior Fellowship Memoirs',
    description: 'Preserving academic papers, guest lectures, and intellectual correspondence with colleagues in global economics.',
    progress: 32,
    storiesCount: 15,
    hoursRecorded: 6.2,
    documentsStored: 35,
    coverUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80',
    status: 'active'
  }
];

// Recent Vault Activity timeline
export const INITIAL_VAULT_ACTIVITY: VaultActivity[] = [
  {
    id: 'act-1',
    type: 'interview',
    title: 'New Interview Uploaded',
    description: 'Audio session "Early Cambridge Lore" verified and meta-tagged.',
    timestamp: '2 hours ago',
    user: 'Arthur Sterling',
    severity: 'info'
  },
  {
    id: 'act-2',
    type: 'enrich',
    title: 'Metadata Enhanced',
    description: 'Legacy AI auto-transcribed and extracted 14 timeline events.',
    timestamp: '5 hours ago',
    user: 'Legacy AI Agent',
    severity: 'info'
  },
  {
    id: 'act-3',
    type: 'security',
    title: 'Vault Security Audit',
    description: 'Completed 2048-bit vault signing. All assets encrypted.',
    timestamp: '1 day ago',
    user: 'Vauld Cryptographic System',
    severity: 'info'
  },
  {
    id: 'act-4',
    type: 'upload',
    title: 'Critical Asset Offline Seal',
    description: 'Medical directive directive-seal-109 locked in offline storage tier.',
    timestamp: '2 days ago',
    user: 'Sarah Jenkins (Curator)',
    severity: 'critical'
  }
];

// Professional Curators and Marketplace Listings
export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: 'market-1',
    title: 'Dr. Elena Rossi - Master Curator Session',
    description: 'Elite personal curation sessions focusing on chronological narrative structure, oral storytelling, and historic cataloging.',
    price: 3500,
    category: 'curator',
    rating: 4.9,
    curatorDetails: {
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=facearea&facepad=2&q=80',
      specialty: 'Oral Historian & Cultural Archivist',
      exp: '14+ years at Swiss Legacy Council'
    }
  },
  {
    id: 'market-2',
    title: 'Sarah Jenkins - Senior Oral Historian',
    description: 'Dedicated biography writing and interview sessions. Specializes in family lineages and family business transitions.',
    price: 2200,
    category: 'curator',
    rating: 4.8,
    curatorDetails: {
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=facearea&facepad=2&q=80',
      specialty: 'Lineage Scholar & Author',
      exp: '8+ years as Oxford Archives lead'
    }
  },
  {
    id: 'market-3',
    title: 'Offline Cryogenic Drive (Institutional Tier)',
    description: 'Secure, physical offline hardware drive backed by high-tier military encryption. Sealed and stored in a cold vault in Zurich.',
    price: 1500,
    category: 'storage',
    rating: 5.0
  },
  {
    id: 'market-4',
    title: 'Cryptographic Vauld Multi-Key Upgrade',
    description: 'Deploy hardware keys (YubiKey integration ready) and multi-signature security checks on Swiss custody level.',
    price: 850,
    category: 'security',
    rating: 4.9
  },
  {
    id: 'market-5',
    title: 'Family Philanthropy Ledger Template',
    description: 'Structured smart formatting template configured to auto-compile charity work, donor milestones, and mission charters.',
    price: 450,
    category: 'template',
    rating: 4.7
  }
];

// Structured interview template prompts
export const INTERVIEW_PROMPTS: InterviewPrompt[] = [
  {
    id: 'p-1',
    question: 'What are your earliest memories of your grandparents’ home, and the sights or smells associated with it?',
    category: 'Childhood & Roots'
  },
  {
    id: 'p-2',
    question: 'What was the first significant risk you took, and what did that experience teach you about handling crisis?',
    category: 'Values & Lore'
  },
  {
    id: 'p-3',
    question: 'Tell the story of how you first entered your primary field, and the mentor who changed your trajectory.',
    category: 'Career & Calling'
  },
  {
    id: 'p-4',
    question: 'If your family or children remember just one core principle of Yours in 100 years, what should that principle be?',
    category: 'Life Lessons'
  },
  {
    id: 'p-5',
    question: 'Describe the values you hope the family foundation prioritizes over the centuries to come.',
    category: 'Values & Lore'
  }
];
