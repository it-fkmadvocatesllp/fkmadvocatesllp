import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import { useScrolled } from '../../hooks/useScrolled';

const Header = ({ isHome = false }) => {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setExpandedItem(null);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => e.key === 'Escape' && closeMenu();
      document.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen, closeMenu]);

  const toggleExpanded = (label) =>
    setExpandedItem((prev) => (prev === label ? null : label));

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${isHome ? 'is-home' : ''}`}>
        <div className="site-header__inner">
          <Link to="/" className="site-logo clickable" aria-label="FKM Advocates LLP home">
            <span className="site-logo__fkm">FKM</span>
            <span className="site-logo__divider" aria-hidden="true" />
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
            className={`mobile-menu-btn ${menuOpen ? 'is-open' : ''} ${isHome && !scrolled ? 'is-light' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        aria-modal={menuOpen}
        role="dialog"
      >
        {/* Drawer header */}
        <div className="mobile-menu__header">
          <Link to="/" className="site-logo clickable" aria-label="FKM Advocates LLP home" onClick={closeMenu}>
            <span className="site-logo__fkm">FKM</span>
            <span className="site-logo__divider" aria-hidden="true" />
            <span className="site-logo__text">
              <span className="site-logo__name" style={{ color: 'var(--color-text)' }}>Advocates LLP</span>
              <span className="site-logo__tagline">Legal Excellence</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-menu__close clickable"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Nav items */}
        <div className="mobile-menu__body">
          {navItems.map((item, i) => (
            <div key={item.label} className="mobile-menu__item" style={{ '--i': i }}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="mobile-menu__link mobile-menu__accordion-btn clickable"
                    onClick={() => toggleExpanded(item.label)}
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <span className={`mobile-menu__chevron ${expandedItem === item.label ? 'is-open' : ''}`}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <div className={`mobile-menu__sub ${expandedItem === item.label ? 'is-open' : ''}`}>
                    <Link
                      to={item.to}
                      className="mobile-menu__sub-link clickable"
                      onClick={closeMenu}
                    >
                      All Practice Areas
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="mobile-menu__sub-link clickable"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `mobile-menu__link clickable${isActive ? ' is-active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mobile-menu__footer">
          <Link
            to="/consultation"
            className="btn btn--primary clickable mobile-menu__cta"
            onClick={closeMenu}
          >
            Book a Consultation
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
