// src/App.jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import ScrollToTop from './components/ScrollToTop';
import { useLenis } from './hooks/useLenis';

// Lazy load pages for optimal performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PracticeAreasPage = lazy(() => import('./pages/PracticeAreasPage'));
const PracticeAreaDetailPage = lazy(() => import('./pages/PracticeAreaDetailPage'));
const OurProcessPage = lazy(() => import('./pages/CaseStudiesPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));
const InsightDetailPage = lazy(() => import('./pages/InsightDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ConsultationPage = lazy(() => import('./pages/ConsultationPage'));
const TeamMemberPage = lazy(() => import('./pages/TeamMemberPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

const PageLoader = () => (
  <div style={{ minHeight: '50vh', display: 'grid', placeItems: 'center' }}>
    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Loading...</span>
  </div>
);

const AppRoutes = () => {
  useLenis(); // Keeps smooth scrolling active

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Core Primary Routes */}
        <Route path="/" element={<Suspense fallback={<PageLoader />}><HomePage /></Suspense>} />
        <Route path="/practice-areas" element={<Suspense fallback={<PageLoader />}><PracticeAreasPage /></Suspense>} />
        <Route path="/practice-areas/:slug" element={<Suspense fallback={<PageLoader />}><PracticeAreaDetailPage /></Suspense>} />
        <Route path="/team" element={<Suspense fallback={<PageLoader />}><TeamPage /></Suspense>} />
        <Route path="/team/:slug" element={<Suspense fallback={<PageLoader />}><TeamMemberPage /></Suspense>} />
        <Route path="/careers" element={<Suspense fallback={<PageLoader />}><CareersPage /></Suspense>} />
        <Route path="/insights" element={<Suspense fallback={<PageLoader />}><InsightsPage /></Suspense>} />
        <Route path="/insights/:slug" element={<Suspense fallback={<PageLoader />}><InsightDetailPage /></Suspense>} />
        <Route path="/consultation" element={<Suspense fallback={<PageLoader />}><ConsultationPage /></Suspense>} />
        
        {/* Legal & Compliance Routes (All mapped to the new Legal Hub) */}
        <Route path="/privacy" element={<Suspense fallback={<PageLoader />}><LegalPage /></Suspense>} />
        <Route path="/legal" element={<Suspense fallback={<PageLoader />}><LegalPage /></Suspense>} />
        <Route path="/cookies" element={<Suspense fallback={<PageLoader />}><LegalPage /></Suspense>} />

        {/* Legacy routes kept active to prevent 404s if users have old bookmarks */}
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
        <Route path="/our-process" element={<Suspense fallback={<PageLoader />}><OurProcessPage /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
      </Route>
    </Routes>
  );
};

const AppContent = () => {
  return (
    <div className="app-wrapper">
      <div className="app-bg" aria-hidden="true" />
      <ScrollToTop />
      <AppRoutes />
      {/* Custom Cursor completely removed for zero-latency UI */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;