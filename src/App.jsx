import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import ScrollToTop from './components/ScrollToTop';
import Cursor from './components/Cursor';
import { useLenis } from './hooks/useLenis';
import { useIsDesktop } from './hooks/useMediaQuery';

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
    <span style={{ color: 'var(--color-text-muted)' }}>Loading...</span>
  </div>
);

const AppRoutes = () => {
  useLenis();

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Suspense fallback={<PageLoader />}><HomePage /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
        <Route path="/practice-areas" element={<Suspense fallback={<PageLoader />}><PracticeAreasPage /></Suspense>} />
        <Route path="/practice-areas/:slug" element={<Suspense fallback={<PageLoader />}><PracticeAreaDetailPage /></Suspense>} />
        <Route path="/our-process" element={<Suspense fallback={<PageLoader />}><OurProcessPage /></Suspense>} />
        <Route path="/team" element={<Suspense fallback={<PageLoader />}><TeamPage /></Suspense>} />
        <Route path="/team/:slug" element={<Suspense fallback={<PageLoader />}><TeamMemberPage /></Suspense>} />
        <Route path="/insights" element={<Suspense fallback={<PageLoader />}><InsightsPage /></Suspense>} />
        <Route path="/insights/:slug" element={<Suspense fallback={<PageLoader />}><InsightDetailPage /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
        <Route path="/consultation" element={<Suspense fallback={<PageLoader />}><ConsultationPage /></Suspense>} />
        <Route path="/careers" element={<Suspense fallback={<PageLoader />}><CareersPage /></Suspense>} />
        <Route path="/privacy" element={<Suspense fallback={<PageLoader />}><LegalPage /></Suspense>} />
        <Route path="/legal" element={<Suspense fallback={<PageLoader />}><LegalPage /></Suspense>} />
        <Route path="/cookies" element={<Suspense fallback={<PageLoader />}><LegalPage /></Suspense>} />
      </Route>
    </Routes>
  );
};

const AppContent = () => {
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isDesktop) {
      document.documentElement.classList.add('has-custom-cursor');
    } else {
      document.documentElement.classList.remove('has-custom-cursor');
    }
    return () => document.documentElement.classList.remove('has-custom-cursor');
  }, [isDesktop]);

  return (
    <div className="app-wrapper">
      <div className="app-bg" aria-hidden="true" />
      <ScrollToTop />
      <AppRoutes />
      {isDesktop && <Cursor />}
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
