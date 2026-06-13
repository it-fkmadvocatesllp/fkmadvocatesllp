import { Link, useParams, Navigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getPracticeAreaBySlug, practiceAreas } from '../data/practiceAreas';
import SEO from '../components/SEO';

const PracticeAreaDetailPage = () => {
  const { slug } = useParams();
  const area = getPracticeAreaBySlug(slug);
  const containerRef = useScrollReveal('.reveal');

  if (!area) return <Navigate to="/practice-areas" replace />;

  const others = practiceAreas.filter((a) => a.slug !== slug);

  return (
    <div ref={containerRef}>
      <SEO
        title={`${area.title} Lawyers in Nairobi, Kenya`}
        description={`${area.description} FKM Advocates LLP delivers expert ${area.title} legal services in Nairobi and across Kenya.`}
        canonical={`/practice-areas/${area.slug}`}
      />
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">Practice Area</span>
          <h1 className="stacked-headline">
            <span>{area.title.split(' ')[0]}</span>
            <span>{area.title.split(' ').slice(1).join(' ') || 'Law'}</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0' }}>{area.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <strong style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>{area.metrics.matters}</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Matters Handled</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <strong style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>{area.metrics.ticket}</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Client Scope</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <strong style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>{area.metrics.team}</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Team Members</p>
            </div>
          </div>

          <div className="reveal">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>{area.approach}</p>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Services</h3>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: '3rem' }}>
              {area.features.map((feature) => (
                <li key={feature} style={{ padding: '0.75rem 1rem', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  {feature}
                </li>
              ))}
            </ul>

            <Link to="/consultation" className="btn btn--primary clickable">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="section section--dark" data-cursor-theme="dark">
        <div className="container reveal">
          <h2 className="section-title">Other Practice Areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {others.map((other) => (
              <Link key={other.slug} to={`/practice-areas/${other.slug}`} className="glass-card clickable" style={{ padding: '1.5rem', display: 'block' }}>
                <strong>{other.title}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaDetailPage;
