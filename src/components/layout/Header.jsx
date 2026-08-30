// src/components/layout/Header.jsx
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
          <Link to="/" className="site-logo clickable" onClick={typeof closeMenu !== 'undefined' ? closeMenu : undefined}>
            {/* Update the src to match the exact filename of the logo you put in your public folder */}
            <img 
              src="/fkm-logo-light.png" 
              alt="FKM Advocates LLP" 
              style={{ height: '40px', width: 'auto', display: 'block' }} 
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="site-nav desktop-only" aria-label="Primary navigation">
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

          <div className="desktop-only">
            <Link to="/consultation" className="header-cta clickable">
              Consult With Us
            </Link>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            type="button"
            className={`mobile-menu-btn clickable ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* MOBILE BACKDROP */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* MOBILE DRAWER */}
      <nav
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        aria-modal={menuOpen}
        role="dialog"
      >
        <div className="mobile-menu__header">
          <Link to="/" className="site-logo clickable" onClick={typeof closeMenu !== 'undefined' ? closeMenu : undefined}>
            {/* Update the src to match the exact filename of the logo you put in your public folder */}
            <img 
              src="public/fkm-logo-light.png" 
              alt="FKM Advocates LLP" 
              style={{ height: '40px', width: 'auto', display: 'block' }} 
            />
          </Link>
          
          {/* THE FIX: Add the Close Button back in */}
          <button
            type="button"
            className="mobile-menu__close clickable"
            onClick={closeMenu}
            aria-label="Close menu"
            style={{ 
              background: 'none', border: 'none', color: 'var(--color-text-on-dark)', 
              fontSize: '2.5rem', cursor: 'pointer', lineHeight: '1', padding: '0 0.5rem' 
            }}
          >
            ×
          </button>
        </div>

        <div className="mobile-menu__body">
          {navItems.map((item) => (
            <div key={item.label} className="mobile-menu__item">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className={`mobile-menu__link mobile-menu__accordion-btn clickable ${expandedItem === item.label ? 'is-active' : ''}`}
                    onClick={() => toggleExpanded(item.label)}
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <span className={`mobile-menu__chevron ${expandedItem === item.label ? 'is-open' : ''}`}>
                      ↓
                    </span>
                  </button>
                  <div className={`mobile-menu__sub ${expandedItem === item.label ? 'is-open' : ''}`}>
                    <Link to={item.to} className="mobile-menu__sub-link clickable" onClick={closeMenu}>
                      View All {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to} className="mobile-menu__sub-link clickable" onClick={closeMenu}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `mobile-menu__link clickable ${isActive ? 'is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        <div className="mobile-menu__footer">
          <Link to="/consultation" className="btn btn--primary clickable mobile-menu__cta" onClick={closeMenu}>
            Consult With Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;