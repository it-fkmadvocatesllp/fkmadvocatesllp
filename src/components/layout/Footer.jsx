import { Link } from 'react-router-dom';
import { firmInfo } from '../../data/firmStats';
import { footerLinks, practiceAreaLinks } from '../../data/navigation';

const Footer = () => (
  <footer className="site-footer" data-cursor-theme="dark">
    <div className="container">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="site-logo clickable">
            <span className="site-logo__fkm">FKM</span>
            <span className="site-logo__divider" aria-hidden="true" />
            <span className="site-logo__text">
              <span className="site-logo__name">Advocates LLP</span>
              <span className="site-logo__tagline">{firmInfo.tagline}</span>
            </span>
          </Link>
          <p>{firmInfo.description}</p>
        </div>

        <div>
          <h4 className="site-footer__heading">Firm</h4>
          <ul className="site-footer__links">
            {footerLinks.firm.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="clickable">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Practice Areas</h4>
          <ul className="site-footer__links">
            {practiceAreaLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="clickable">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Contact</h4>
          <ul className="site-footer__links">
            <li>{firmInfo.address}</li>
            <li>{firmInfo.addressDetail}</li>
            <li><a href={`tel:${firmInfo.phone.replace(/\s/g, '')}`} className="clickable">{firmInfo.phone}</a></li>
            <li><a href={`mailto:${firmInfo.email}`} className="clickable">{firmInfo.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {firmInfo.name}. All rights reserved.</span>
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
