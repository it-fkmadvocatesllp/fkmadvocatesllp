// src/pages/AboutPage.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { firmInfo } from '../data/firmStats';

const AboutPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef} className="bg-light" style={{ minHeight: '100vh' }}>
      <SEO
        title="About Us | FKM Advocates LLP"
        description="Discover the history, vision, and mission of FKM Advocates LLP, Kenya's premier agile corporate and disputes law firm."
        canonical="/about"
      />

      {/* DARK HERO */}
      <section className="page-hero bg-dark" style={{ backgroundColor: '#121212', paddingBottom: '6rem' }}>
        <div className="container reveal">
          <span className="kicker">Who We Are</span>
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Built for the<br />Modern Enterprise.
            </h1>
          </div>
        </div>
      </section>

      {/* FIRM HISTORY & PROFILE */}
      <section className="section" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container reveal">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-bg-dark)' }}>Our History</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              FKM Advocates LLP was established to bridge the gap between traditional legal practice and the dynamic, high-velocity needs of modern business. Recognizing that corporate conflicts and complex regulatory frameworks require more than just standard legal advice, we built a firm dedicated to strategic agility and precision.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
              Today, we stand as a specialist corporate and disputes practice, trusted by innovators, SMEs, and established corporations to navigate high-stakes litigation, secure complex real estate transactions, and engineer bulletproof corporate governance structures. We are rooted in Kenya, yet structured to operate with global standards of legal excellence.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION (GLASS CARDS) */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container reveal">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            
            {/* Vision Card */}
            <div className="glass-card" style={{ padding: '3rem 2rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-bg-dark)', fontWeight: '500' }}>
                To be the premier agile legal partner for modern enterprises, innovators, and visionary leaders across East Africa.
              </p>
            </div>

            {/* Mission Card */}
            <div className="glass-card" style={{ padding: '3rem 2rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-bg-dark)', fontWeight: '500' }}>
                To deliver strategic, precise, and enforceable legal solutions that safeguard our clients' interests and empower their growth within a complex, evolving regulatory landscape.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section bg-dark" style={{ backgroundColor: '#121212', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container reveal">
          <h2 style={{ color: '#FFF', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Ready to Partner With Us?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            Visit us at {firmInfo.addressLine1}, {firmInfo.addressLine3}.
          </p>
          <Link to="/consultation" className="btn-premium clickable">
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;