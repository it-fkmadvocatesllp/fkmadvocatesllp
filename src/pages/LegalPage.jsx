// src/pages/LegalPage.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/pages/practice-areas.css'; // We can reuse the SaaS Tabs CSS!

const LegalPage = () => {
  const containerRef = useScrollReveal('.reveal');
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('privacy');

  // Auto-select tab based on the URL path (e.g., /privacy, /legal, /cookies)
  useEffect(() => {
    if (location.pathname.includes('privacy')) setActiveTab('privacy');
    if (location.pathname.includes('legal')) setActiveTab('legal');
    if (location.pathname.includes('cookies')) setActiveTab('cookies');
  }, [location.pathname]);

  return (
    <div ref={containerRef}>
      <SEO
        title="Legal & Privacy | FKM Advocates LLP"
        description="Legal notices, privacy policy, and cookie information for FKM Advocates LLP."
        canonical="/privacy"
      />

      {/* DARK HERO */}
      <section className="page-hero bg-dark">
        <div className="container reveal">
          <span className="kicker">Compliance</span>
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Legal & Privacy
            </h1>
          </div>
        </div>
      </section>

      {/* SAAS TABBED LAYOUT (Reusing Practice Areas CSS) */}
      <section className="section bg-light" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="practice-tabs-layout reveal">
            
            {/* Sidebar Navigation */}
            <div className="practice-sidebar">
              <button
                className={`practice-tab-btn ${activeTab === 'privacy' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('privacy')}
              >
                Privacy Policy
              </button>
              <button
                className={`practice-tab-btn ${activeTab === 'legal' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('legal')}
              >
                Legal Notice
              </button>
              <button
                className={`practice-tab-btn ${activeTab === 'cookies' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('cookies')}
              >
                Cookie Policy
              </button>
            </div>

            {/* Dynamic Content Area */}
            <div className="practice-content-wrapper">
              <div className="practice-content-card">
                
                {activeTab === 'privacy' && (
                  <div className="legal-content">
                    <h2 className="practice-content__title">Privacy Policy</h2>
                    <p className="practice-content__desc">Last updated: August 2026</p>
                    <p>FKM Advocates LLP respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website or use our legal services.</p>
                    <h3>1. The Data We Collect</h3>
                    <p>We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (first name, last name), Contact Data (email address, telephone numbers), and Usage Data.</p>
                    <h3>2. How We Use Your Data</h3>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, or to comply with a legal obligation.</p>
                  </div>
                )}

                {activeTab === 'legal' && (
                  <div className="legal-content">
                    <h2 className="practice-content__title">Legal Notice</h2>
                    <p className="practice-content__desc">Important Information</p>
                    <p>The materials on this website are intended for general informational purposes only and do not constitute legal advice. The content of this website may not reflect the most current legal developments.</p>
                    <h3>No Advocate-Client Relationship</h3>
                    <p>Transmission of information from this website does not create an advocate-client relationship between you and FKM Advocates LLP, nor is it intended to do so. The transmission of the website, in part or in whole, and/or any communication with us via Internet e-mail through this site does not constitute or create an advocate-client relationship.</p>
                  </div>
                )}

                {activeTab === 'cookies' && (
                  <div className="legal-content">
                    <h2 className="practice-content__title">Cookie Policy</h2>
                    <p className="practice-content__desc">How we use cookies</p>
                    <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
                    <h3>What are cookies?</h3>
                    <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. We use essential cookies required for the operation of our site, and analytical/performance cookies to recognize and count the number of visitors.</p>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;