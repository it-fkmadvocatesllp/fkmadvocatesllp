// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { firmInfo } from '../../data/firmStats';
import { footerLinks } from '../../data/navigation';

const Footer = () => (
  <footer className="site-footer" data-cursor-theme="dark">
    <div className="container">
      <div className="site-footer__grid">
        {/* Column 1: Brand & Logo */}
        <div className="site-footer__brand">
          <Link to="/" className="site-logo clickable">
            <span className="site-logo__fkm">FKM</span>
            <span className="site-logo__divider" aria-hidden="true" />
            <span className="site-logo__text">
              <span className="site-logo__name">Advocates LLP</span>
              <span className="site-logo__tagline">{firmInfo.tagline}</span>
            </span>
          </Link>
        </div>

        {/* Column 2: Visit Our Offices */}
        <div>
          <h4 className="site-footer__heading">Visit Our Offices</h4>
          <div className="site-footer__text-block">
            <p>
              <strong>Nairobi HQ</strong><br />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Kenrail+Towers,+Off+Parklands+Rd,+Nairobi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="clickable"
                style={{ color: 'var(--color-text-on-dark)', borderBottom: 'none' }}
              >
                {firmInfo.address}<br />{firmInfo.addressDetail}
              </a>
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <strong>Thika Branch</strong><br />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Thika+Business+Center,+Commercial+Street,+Nairobi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="clickable"
                style={{ color: 'var(--color-text-on-dark)', borderBottom: 'none' }}
              >
                {firmInfo.branch}
              </a>
            </p>
          </div>
        </div>

      {/* Bottom Legal Bar */}
      <div className="site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} {firmInfo.name}. All rights reserved.</span>
        <div className="site-footer__legal">
          {footerLinks.legal.map((link) => (
            <Link key={link.to} to={link.to} className="clickable">{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;