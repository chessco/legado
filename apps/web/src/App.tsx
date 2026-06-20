import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { MainLayout } from './components/MainLayout';
import { HomeDashboard } from './pages/HomeDashboard';
import { VaultDashboard } from './pages/VaultDashboard';
import { ArchivePage } from './pages/ArchivePage';
import { InterviewsPage } from './pages/InterviewsPage';
import { SettingsPage } from './pages/SettingsPage';
import { Marketplace } from './pages/Marketplace';
import { PublicProfile } from './pages/PublicProfile';
import { StoryBuilder } from './pages/StoryBuilder';
import { AIBuilder } from './pages/AIBuilder';
import { AIStudio } from './pages/AIStudio';
import { Onboarding } from './pages/Onboarding';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* App Routes wrapped in MainLayout */}
        <Route path="/home" element={
          <MainLayout>
            <HomeDashboard />
          </MainLayout>
        } />
        <Route path="/vault" element={
          <MainLayout>
            <VaultDashboard />
          </MainLayout>
        } />
        <Route path="/archive" element={
          <MainLayout>
            <ArchivePage />
          </MainLayout>
        } />
        <Route path="/interviews" element={
          <MainLayout>
            <InterviewsPage />
          </MainLayout>
        } />
        <Route path="/settings" element={
          <MainLayout>
            <SettingsPage />
          </MainLayout>
        } />
        
        {/* Independent Routes */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<PublicProfile />} />
        <Route path="/story-builder" element={<StoryBuilder />} />
        <Route path="/ai-builder" element={<AIBuilder />} />
        <Route path="/ai-studio" element={<AIStudio />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* We will add more routes here for AI, etc. */}
        <Route path="*" element={
          <div className="flex items-center justify-center min-h-screen bg-paper-surface">
            <h1 className="text-headline-lg font-headline-lg">404 - Not Found</h1>
          </div>
        } />
      </Routes>
    </Router>
  );
}
