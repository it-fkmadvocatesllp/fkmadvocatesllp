import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { practiceAreas } from '../data/practiceAreas';

const PracticeAreasPage = () => {
  const [active, setActive] = useState(practiceAreas[0].slug);
  const containerRef = useScrollReveal('.reveal');
  const current = practiceAreas.find((a) => a.slug === active);

  return (
    <div ref={containerRef}>
      <SEO
        title="Practice Areas | Corporate, Litigation, Estate & Real Estate Law"
        description="FKM Advocates LLP offers specialised legal services across four practice areas: Corporate & Commercial, Litigation & Dispute Resolution, Estate & Probate, and Real Estate & Conveyancing in Kenya."
        canonical="/practice-areas"
      />
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">Practice Areas</span>
          <h1 className="stacked-headline">
            <span>Tailored legal</span>
            <span>solutions</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0' }}>
            We operate through four practice areas, combining deep expertise and flexible strategies to drive client success.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Our approach to legal counsel</h2>
            <p className="section-subtitle">
              Whether supporting growing businesses or individuals with complex legal needs, we design customized
              solutions, anticipating the evolution of each matter and adapting to its particularities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '2rem' }} className="practice-tabs-layout reveal">
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {practiceAreas.map((area) => (
                <button
                  key={area.slug}
                  type="button"
                  className={`clickable ${active === area.slug ? 'btn btn--primary' : 'btn btn--outline'}`}
                  style={{ textAlign: 'left', justifyContent: 'flex-start' }}
                  onClick={() => setActive(area.slug)}
                >
                  {area.shortTitle}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <Motion.div
                key={active}
                className="glass-card reveal"
                style={{ padding: '2.5rem' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{current.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {current.description}
                </p>
                <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {current.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--color-purple)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {current.approach}
                </p>
                <Link to={`/practice-areas/${current.slug}`} className="btn btn--primary clickable">
                  Know more
                </Link>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;
