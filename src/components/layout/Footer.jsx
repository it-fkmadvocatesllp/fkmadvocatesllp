// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { firmInfo } from '../../data/firmStats';
import { footerLinks } from '../../data/navigation';
import "src/styles/global.css";

const Footer = () => {
  return (
    <footer className="section--dark" style={{ backgroundColor: '#0A0A0A', padding: '4rem 0 2rem', borderTop: '4px solid var(--color-accent)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        {/* Brand */}
        <div>
          <img src="/fkm-logo-light.svg" alt="FKM Advocates LLP" style={{ width: '140px', marginBottom: '1rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Advocacy with Integrity.<br/>Legal Excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#FFF', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Navigation</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/team" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Your Team</Link></li>
            <li><Link to="/practice-areas" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Practice Areas</Link></li>
            <li><Link to="/insights" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Insights & News</Link></li>
          </ul>
        </div>

        {/* Location Fix */}
        <div>
          <h4 style={{ color: '#FFF', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Visit Our Office</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            <strong>Nairobi HQ</strong><br />
            {firmInfo.addressLine1}<br />
            {firmInfo.addressLine2}<br />
            {firmInfo.addressLine3}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: '#FFF', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Contact Us</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            {firmInfo.email}<br />
            {firmInfo.phone}
          </p>
        </div>

      </div>
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} {firmInfo.name}. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Legal Notice</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;