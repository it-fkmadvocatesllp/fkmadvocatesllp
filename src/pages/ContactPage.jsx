import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { firmInfo } from '../data/firmStats';
import officeImg from '../assets/Photo-2-1.webp';

const ContactPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">Contact</span>
          <h1 className="stacked-headline">
            <span>Contact</span>
            <span>with FKM</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card reveal" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Nairobi HQ</h2>
              <p style={{ marginBottom: '0.5rem' }}>{firmInfo.address}</p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{firmInfo.addressDetail}</p>
              <p><a href={`tel:${firmInfo.phone.replace(/\s/g, '')}`} className="clickable">{firmInfo.phone}</a></p>
              <p style={{ marginTop: '0.5rem' }}><a href={`mailto:${firmInfo.email}`} className="clickable">{firmInfo.email}</a></p>
            </div>

            <div className="glass-card reveal" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Thika Branch</h2>
              <p style={{ marginBottom: '0.5rem' }}>Thika Business Center, 5th Floor</p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Suite 5-07, Commercial Street, Nairobi</p>
              <p><a href={`tel:${firmInfo.phone.replace(/\s/g, '')}`} className="clickable">{firmInfo.phone}</a></p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <img src={officeImg} alt="FKM Advocates office" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p className="section-subtitle" style={{ margin: '0 auto 1.5rem' }}>
              Ready to discuss your legal matter? Schedule a confidential consultation with our team.
            </p>
            <Link to="/consultation" className="btn btn--primary clickable">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
