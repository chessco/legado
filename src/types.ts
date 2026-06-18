/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Application View State
export type ActiveView = 'landing' | 'login' | 'register' | 'dashboard';

// Dashboard Internal Tabs
export type DashboardTab = 
  | 'overview' 
  | 'human-vault' 
  | 'interview-studio' 
  | 'story-builder' 
  | 'legacy-ai' 
  | 'marketplace';

// Vault Entry Schema
export interface VaultItem {
  id: string;
  name: string;
  type: 'folder' | 'file' | 'audio' | 'document' | 'image';
  category: 'Family History' | 'Medical Directives' | 'Academic Lore' | 'Financial Archival' | 'General';
  size: string;
  updatedAt: string;
  contentUrl?: string; // or content preview
  notes?: string;
  isLocked: boolean;
}

// Legacy Project Schema
export interface LegacyProject {
  id: string;
  title: string;
  description: string;
  progress: number;
  storiesCount: number;
  hoursRecorded: number;
  documentsStored: number;
  coverUrl: string;
  curatorName?: string;
  status: 'active' | 'completed' | 'paused';
}

// Timeline Activity Schema
export interface VaultActivity {
  id: string;
  type: 'upload' | 'enrich' | 'audit' | 'interview' | 'security';
  title: string;
  description: string;
  timestamp: string;
  user: string;
  severity: 'info' | 'warning' | 'critical';
}

// Interview Session Schema
export interface InterviewPrompt {
  id: string;
  question: string;
  category: 'Childhood & Roots' | 'Career & Calling' | 'Values & Lore' | 'Life Lessons';
}

export interface InterviewRecording {
  id: string;
  promptId: string;
  question: string;
  audioDuration: number; // in seconds
  transcript: string;
  audioUrl?: string;
  timestamp: string;
}

// Story Builder Schema
export interface StoryDraft {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  layoutStyle: 'Chronological' | 'Anthology' | 'Memoir' | 'Legacy Letter';
  dateCreated: string;
  isPublished: boolean;
  sections: Array<{ id: string; subtitle: string; body: string; imageId?: string }>;
}

// Legacy AI Persona Schema
export type PersonaTone = 'Empathetic' | 'Academic' | 'Playful' | 'Stoic' | 'Warm';

export interface AIPersona {
  name: string;
  avatarUrl: string;
  tone: PersonaTone;
  systemInstruction: string;
  memoryAnchors: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

// Marketplace Item Schema
export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'curator' | 'storage' | 'security' | 'template';
  rating: number;
  curatorDetails?: {
    avatar: string;
    specialty: string;
    exp: string;
  };
}
