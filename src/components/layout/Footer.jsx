// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { firmInfo } from '../../data/firmStats';
import { footerLinks } from '../../data/navigation';

const Footer = () => (
  <footer className="site-footer" data-cursor-theme="dark">
    <div className="container">
      <div className="site-footer__grid">
        
        {/* Column 1: Brand & Logo (With Text Restored) */}
        <div className="site-footer__brand">
          <Link to="/" className="site-logo clickable" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/fkm-logo-light.png" /* Ensure this matches your logo filename */
              alt="FKM Logo" 
              style={{ height: '36px', width: 'auto', marginRight: '15px' }} 
            />
            <span style={{ borderLeft: '1px solid var(--color-border-dark)', paddingLeft: '15px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--color-text-on-dark)', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
                FKM Advocates LLP
              </span>
              <span style={{ color: 'var(--color-text-muted-on-dark)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '2px' }}>
                Legal Excellence
              </span>
            </span>
          </Link>
        </div>

        {/* Column 2: Visit Our Offices */}
        <div>
          <h4 className="site-footer__heading">Visit Our Offices</h4>
          <div className="site-footer__text-block">
            <p>
              <strong>Nairobi HQ</strong><br />
              <a href="https://www.google.com/maps/search/?api=1&query=Kenrail+Towers,+Off+Parklands+Rd,+Nairobi" target="_blank" rel="noopener noreferrer" className="clickable" style={{ borderBottom: 'none' }}>
                {firmInfo.address}<br />{firmInfo.addressDetail}
              </a>
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <strong>Thika Branch</strong><br />
              <a href="https://www.google.com/maps/search/?api=1&query=Thika+Business+Center,+Commercial+Street,+Nairobi" target="_blank" rel="noopener noreferrer" className="clickable" style={{ borderBottom: 'none' }}>
                {firmInfo.branch}
              </a>
            </p>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h4 className="site-footer__heading">Contact Us</h4>
          <div className="site-footer__text-block">
            <p>
              <a href={`mailto:${firmInfo.email}`} className="clickable">{firmInfo.email}</a>
            </p>
            <p>
              <a href={`tel:${firmInfo.phone.replace(/\s/g, '')}`} className="clickable">{firmInfo.phone}</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar - MOVED OUTSIDE THE GRID TO SPAN FULL WIDTH */}
      <div className="site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} {firmInfo.name}. All rights reserved.</span>
        <div className="site-footer__legal">
          {footerLinks.legal.map((link) => (
            <Link key={link.to} to={link.to} className="clickable">{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;