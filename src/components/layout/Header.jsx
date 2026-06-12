import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <Link to="/" className="site-logo clickable" aria-label="FKM Advocates LLP home">
            <span className="site-logo__mark">FKM</span>
            <span className="site-logo__text">
              <span className="site-logo__name">Advocates LLP</span>
              <span className="site-logo__tagline">Legal Excellence</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="site-nav__dropdown">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `site-nav__link clickable ${isActive ? 'is-active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                  <div className="site-nav__dropdown-menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="site-nav__dropdown-item clickable"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `site-nav__link clickable ${isActive ? 'is-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <Link to="/consultation" className="header-cta clickable">
            Book Consultation
          </Link>

          <button
            type="button"
            className={`mobile-menu-btn ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <div key={item.label}>
            <Link
              to={item.to}
              className="mobile-menu__link clickable"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="mobile-menu__sub">
                {item.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    className="mobile-menu__link clickable"
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          to="/consultation"
          className="btn btn--primary clickable"
          style={{ marginTop: '2rem', width: '100%' }}
          onClick={() => setMenuOpen(false)}
        >
          Book Consultation
        </Link>
      </nav>
    </>
  );
};

export default Header;
