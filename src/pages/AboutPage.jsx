import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { firmInfo } from '../data/firmStats';

const AboutPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef} className="bg-light" style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
      <SEO
        title="About Us | FKM Advocates LLP"
        description="FKM Advocates LLP is a client-focused law firm providing reliable, efficient, and innovative legal services in Kenya."
        canonical="/about"
      />

      {/* DARK HERO */}
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
          <span className="kicker" style={{ color: 'var(--color-accent)' }}>Advocacy with Integrity. Legal Excellence.</span>
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Who We Are.
            </h1>
          </div>
        </div>
      </section>

      {/* FIRM PROFILE & HISTORY */}
      <section className="section" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container reveal">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-bg-dark)', float: 'left', lineHeight: '0.8', paddingRight: '0.5rem' }}>F</span>KM Advocates LLP is a client-focused law firm that provides reliable, efficient, and innovative legal services to individuals and businesses. Guided by professionalism, integrity, and excellence, the Firm delivers practical legal solutions tailored to the evolving needs of its clients. We are committed to high ethical standards, quality service delivery, and timely legal advice. Through strategic collaborations and professional networks, the Firm is well-positioned to support clients in local and cross-border legal matters.
            </p>

            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-bg-dark)' }}>Our History</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
              Established in 2024 as a professional law firm dedicated to delivering high-quality legal services grounded in integrity and professionalism, the Firm has steadily developed a strong practice focused on practical, effective, and client-oriented solutions. Driven by a client-centered philosophy, the Firm has built trusted relationships with individuals, businesses, and institutions across various sectors. Today, FKM Advocates LLP stands as a forward-looking law firm committed to excellence and the highest standards of legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div className="container reveal">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-bg-dark)', fontWeight: '500' }}>
                To be a trusted legal partner delivering excellence with integrity.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '3rem 2.5rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-bg-dark)', fontWeight: '500' }}>
                To provide efficient, client-centered legal solutions grounded in professionalism and ethical practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES & APPROACH */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container reveal">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-bg-dark)' }}>Core Values</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '4rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Integrity:</strong> Upholding honesty, transparency, and ethical conduct in all engagements.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Professional Excellence:</strong> Delivering high-quality legal services through competence, diligence, and continuous improvement.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Client Commitment:</strong> Placing clients’ interests at the center of our practice through practical and timely legal solutions.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Confidentiality:</strong> Safeguarding client information with strict discretion and professionalism.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Accountability & Professionalism:</strong> Maintaining responsibility, respect, and the dignity of the legal profession.</li>
              <li><strong style={{ color: 'var(--color-bg-dark)' }}>Efficiency & Innovation:</strong> Adopting modern, efficient approaches to legal service delivery.</li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-bg-dark)' }}>Our Approach</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              Our methodology is guided by professionalism, integrity, confidentiality, and efficiency. Each matter is handled on its own merits, with a consistent commitment to delivering high-quality legal services tailored to our clients’ needs.
            </p>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Client Engagement & Consultation:</strong> We begin with an initial consultation to understand needs and objectives, reviewing relevant documentation to assess legal issues.</li>
              <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Legal Assessment & Strategy Development:</strong> Our Advocates conduct thorough legal research and analysis to develop a clear, practical strategy tailored to the specific circumstances.</li>
              <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Planning, Documentation & Communication:</strong> We prepare and review all necessary legal documents ensuring accuracy and compliance, keeping clients informed with regular updates.</li>
              <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'var(--color-bg-dark)' }}>Representation & Dispute Resolution:</strong> We act diligently on behalf of clients in negotiations, mediation, arbitration, and court proceedings.</li>
              <li><strong style={{ color: 'var(--color-bg-dark)' }}>Review, Outcome & Client Feedback:</strong> We continuously monitor progress, review outcomes upon conclusion, address follow-up needs, and seek feedback to enhance service delivery.</li>
            </ol>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;