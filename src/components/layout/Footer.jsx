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
            <p><strong>Nairobi HQ</strong><br />{firmInfo.address}<br />{firmInfo.addressDetail}</p>
            <p style={{ marginTop: '1rem' }}><strong>Thika Branch</strong><br />{firmInfo.branch}</p>
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
  </footer>
);

export default Footer;