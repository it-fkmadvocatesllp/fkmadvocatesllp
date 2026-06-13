import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import { useScrolled } from '../../hooks/useScrolled';

const Header = ({ isHome = false }) => {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedItem(null);
  };

  const toggleExpanded = (label) =>
    setExpandedItem((prev) => (prev === label ? null : label));

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${isHome ? 'is-home' : ''}`}>
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
            className={`mobile-menu-btn ${menuOpen ? 'is-open' : ''} ${isHome && !scrolled ? 'is-light' : ''}`}
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
                    ▼
                  </span>
                </button>
                {expandedItem === item.label && (
                  <div className="mobile-menu__sub">
                    <Link
                      to={item.to}
                      className="mobile-menu__link mobile-menu__sub-link clickable"
                      onClick={closeMenu}
                    >
                      All Practice Areas
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="mobile-menu__link mobile-menu__sub-link clickable"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.to}
                className="mobile-menu__link clickable"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <Link
          to="/consultation"
          className="btn btn--primary clickable"
          style={{ marginTop: '2rem', width: '100%', textAlign: 'center' }}
          onClick={closeMenu}
        >
          Book Consultation
        </Link>
      </nav>
    </>
  );
};

export default Header;
