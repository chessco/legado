import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { MainLayout } from './components/MainLayout';
import { HomeDashboard } from './pages/HomeDashboard';
import { VaultDashboard } from './pages/VaultDashboard';
import { StoriesPage } from './pages/StoriesPage';
import { PersonsPage } from './pages/PersonsPage';
import { TimelinePage } from './pages/TimelinePage';
import { InterviewsPage } from './pages/InterviewsPage';
import { StoryBuilder } from './pages/StoryBuilder';
import { AgentsPage } from './pages/AgentsPage';
import { CommunityPage } from './pages/CommunityPage';
import { CuratorsPage } from './pages/CuratorsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';
import { PublicProfile } from './pages/PublicProfile';
import { KnowledgeMapPage } from './pages/KnowledgeMapPage';
import { Onboarding } from './pages/Onboarding';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public / Landing routes (no sidebar) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<PublicProfile />} />

        {/* App routes — all wrapped in MainLayout for unified vertical sidebar */}
        <Route path="/inicio" element={
          <MainLayout><HomeDashboard /></MainLayout>
        } />
        <Route path="/boveda" element={
          <MainLayout><VaultDashboard /></MainLayout>
        } />
        <Route path="/historias" element={
          <MainLayout><StoriesPage /></MainLayout>
        } />
        <Route path="/personas" element={
          <MainLayout><PersonsPage /></MainLayout>
        } />
        <Route path="/linea-de-tiempo" element={
          <MainLayout><TimelinePage /></MainLayout>
        } />
        <Route path="/entrevistas" element={
          <MainLayout><InterviewsPage /></MainLayout>
        } />
        <Route path="/constructor" element={
          <MainLayout><StoryBuilder /></MainLayout>
        } />
        <Route path="/agentes" element={
          <MainLayout><AgentsPage /></MainLayout>
        } />
        <Route path="/comunidad" element={
          <MainLayout><CommunityPage /></MainLayout>
        } />
        <Route path="/curadores" element={
          <MainLayout><CuratorsPage /></MainLayout>
        } />
        <Route path="/analitica" element={
          <MainLayout><AnalyticsPage /></MainLayout>
        } />
        <Route path="/configuracion" element={
          <MainLayout><SettingsPage /></MainLayout>
        } />
        <Route path="/mapa-conocimiento" element={
          <MainLayout><KnowledgeMapPage /></MainLayout>
        } />

        {/* 404 */}
        <Route path="*" element={
          <MainLayout>
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <span className="material-symbols-outlined text-6xl text-muted-ink">search_off</span>
              <h1 className="text-headline-xl font-headline-xl text-ink-text">404 — Página no encontrada</h1>
              <p className="text-muted-ink font-body-md">La página que buscas no existe en el archivo histórico.</p>
            </div>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}
