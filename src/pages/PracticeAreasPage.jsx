// src/pages/PracticeAreasPage.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { practiceAreas } from '../data/practiceAreas';
import '../styles/pages/practice-areas.css'; // We will create this next

const PracticeAreasPage = () => {
  const [active, setActive] = useState(practiceAreas[0].slug);
  const containerRef = useScrollReveal('.reveal');
  const current = practiceAreas.find((a) => a.slug === active);

  return (
    <div ref={containerRef}>
      <SEO
        title="Practice Areas | FKM Advocates LLP"
        description="FKM Advocates LLP offers specialized legal services across Corporate & Commercial, Litigation, Estate & Probate, and Real Estate in Kenya."
        canonical="/practice-areas"
      />

      {/* 1. MINIMALIST HERO */}
      <section 
      className="page-hero"
      style={{
          background: `linear-gradient(rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.9)), url('/hero_image.jpeg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container reveal">
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white">
              Specialized Legal<br />Expertise.
            </h1>
          </div>
        </div>
      </section>

      {/* 2. SAAS-STYLE TABBED LAYOUT */}
      <section className="section bg-light">
        <div className="container">
          <div className="practice-tabs-layout reveal">
            
            {/* Sidebar Navigation */}
            <div className="practice-sidebar">
              {practiceAreas.map((area) => (
                <button
                  key={area.slug}
                  type="button"
                  className={`practice-tab-btn ${active === area.slug ? 'is-active' : ''}`}
                  onClick={() => setActive(area.slug)}
                >
                  {area.shortTitle}
                </button>
              ))}
            </div>

            {/* Dynamic Content Area */}
            <div className="practice-content-wrapper">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={active}
                  className="practice-content-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <h2 className="practice-content__title">{current.title}</h2>
                  <p className="practice-content__desc">
                    {current.description}
                  </p>
                  
                  <div className="practice-content__features">
                    <h3>Key Services</h3>
                    <ul>
                      {current.features.map((f) => (
                        <li key={f}>
                          <span className="feature-bullet">→</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="practice-content__approach">
                    {current.approach}
                  </p>

                  <div className="practice-content__actions">
                    <Link to={`/practice-areas/${current.slug}`} className="btn btn--outline clickable">
                      View Full Details
                    </Link>
                    <Link to="/consultation" className="btn btn--primary clickable">
                      Consult With Us
                    </Link>
                  </div>
                </Motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;