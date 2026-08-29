// src/pages/PracticeAreaDetailPage.jsx
import { Link, useParams, Navigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getPracticeAreaBySlug, practiceAreas } from '../data/practiceAreas';
import SEO from '../components/SEO';
import '../styles/pages/practice-detail.css';

const PracticeAreaDetailPage = () => {
  const { slug } = useParams();
  const area = getPracticeAreaBySlug(slug);
  const containerRef = useScrollReveal('.reveal');

  if (!area) return <Navigate to="/practice-areas" replace />;

  const others = practiceAreas.filter((a) => a.slug !== slug);

  return (
    <div ref={containerRef}>
      <SEO
        title={`${area.title} | FKM Advocates LLP`}
        description={`${area.description} FKM Advocates LLP delivers expert ${area.title} legal services in Nairobi and across East Africa.`}
        canonical={`/practice-areas/${area.slug}`}
      />

      {/* 1. DARK MINIMALIST HERO */}
      <section className="page-hero bg-dark">
        <div className="container reveal">
          <span className="kicker">Practice Area</span>
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              {area.title}
            </h1>
          </div>
          <p className="hero-subtitle text-muted-on-dark">
            {area.description}
          </p>
        </div>
      </section>

      {/* 2. TWO-COLUMN CONTENT AREA */}
      <section className="section bg-light">
        <div className="container">
          <div className="practice-detail-layout reveal">
            
            {/* Left: Main Content */}
            <div className="practice-detail-main">
              <h2 className="section-title">Our Approach</h2>
              <p className="practice-detail-text">{area.approach}</p>
              
              <div className="practice-detail-actions">
                <Link to="/consultation" className="btn btn--primary clickable">
                  Consult With Us
                </Link>
                <Link to="/practice-areas" className="btn btn--outline clickable">
                  View All Areas
                </Link>
              </div>
            </div>

            {/* Right: Services Card */}
            <aside className="practice-detail-sidebar">
              <div className="services-card">
                <h3 className="services-card__title">Scope of Services</h3>
                <ul className="services-card__list">
                  {area.features.map((feature) => (
                    <li key={feature} className="service-tag">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* 3. OTHER AREAS (Dark Strip) */}
      <section className="section section--dark" data-cursor-theme="dark">
        <div className="container reveal">
          <span className="kicker">Explore More</span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Other Practice Areas</h2>
          
          <div className="other-areas-grid">
            {others.map((other) => (
              <Link key={other.slug} to={`/practice-areas/${other.slug}`} className="other-area-card clickable">
                <strong>{other.title}</strong>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaDetailPage;