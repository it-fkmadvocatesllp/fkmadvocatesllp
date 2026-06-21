import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

const roles = [
  'Advocates',
  'Associate Advocates',
  'Legal Researchers',
  'Pupils',
  'Interns',
];

const CareersPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <SEO
        title="Careers | FKM Advocates LLP"
        description="Join FKM Advocates LLP. We welcome applications from advocates, associates, legal researchers, pupils, and interns committed to excellence and integrity."
        canonical="/careers"
      />

      <section className="page-hero">
        <div className="container">
          <span className="kicker">Careers</span>
          <h1 className="stacked-headline">
            <span>Build Your Legal</span>
            <span>Career with FKM</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="careers-layout">
            <div className="careers-intro">
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                At FKM Advocates LLP, we are committed to developing legal professionals who demonstrate excellence, integrity, and innovation.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '2.5rem' }}>
                Even when vacancies are unavailable, qualified candidates may submit their CVs for future consideration.
              </p>
              <a
                href="mailto:info@fkmadvocates.com?subject=CV Submission – FKM Advocates LLP"
                className="btn btn--primary clickable"
              >
                Submit Your CV
              </a>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-purple)', marginBottom: '1.5rem' }}>
                We Welcome Applications From
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {roles.map((role) => (
                  <li key={role} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--color-text)' }}>
                    <span style={{ color: 'var(--color-purple)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
