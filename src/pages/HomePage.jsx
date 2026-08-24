// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroScene from '../components/hero/HeroScene';
import StatsRow from '../components/sections/StatsRow';
import PracticeAreaCards from '../components/sections/PracticeAreaCards';
import TeamCarousel from '../components/sections/TeamCarousel';
import ContactCTA from '../components/sections/ContactCTA';
import { firmStats } from '../data/firmStats';
import '../styles/pages/home.css';

const HomePage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <SEO
        title="Nairobi Law Firm | Agile Legal Solutions in East Africa"
        description="FKM Advocates LLP delivers strategic corporate, commercial, and litigation counsel across Kenya and East Africa. Modern, tech-enabled legal services."
        canonical="/"
      />

      {/* SECTION 1: THE HERO (Dark Mode) */}
      <section className="home-hero" data-cursor-theme="dark">
        <HeroScene />
        <div className="home-hero__content reveal">
          <nav className="home-hero__nav-tag">
            <span>Corporate & Commercial Law</span>
          </nav>
          <div className="home-hero__headline">
            <h1>Agile Legal Solutions for Modern Business.</h1>
          </div>
          <p className="home-hero__subheadline">
            FKM Advocates LLP delivers strategic corporate, commercial, and litigation counsel across East Africa.
          </p>
          <div className="home-hero__actions">
            <Link to="/consultation" className="btn btn--primary clickable">Consult With Us</Link>
            <Link to="/practice-areas" className="btn btn--outline-light clickable">Explore Practice Areas</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TRUST STRIP (Light Mode) */}
      <section className="home-trust-strip">
        <div className="container">
          <StatsRow stats={firmStats.slice(0, 3)} dark={false} />
        </div>
      </section>

      {/* SECTION 3: PRACTICE AREAS GRID */}
      <PracticeAreaCards />

      {/* SECTION 4: THE AGILE APPROACH (50/50 Split) */}
      <section className="section agile-approach">
        <div className="container">
          <div className="agile-approach__grid reveal">
            <div className="agile-approach__image-col">
               {/* Sleek CSS Placeholder for a grayscale Nairobi skyline or office image */}
               <div className="agile-approach__image-placeholder"></div>
            </div>
            <div className="agile-approach__text-col">
              <span className="kicker">Our Approach</span>
              <h2 className="section-title">Tech-Enabled, Fast, and Reliable</h2>
              <p className="section-subtitle">
                We move away from traditional legal bottlenecks. By integrating modern methodologies, we provide our clients with rapid, precise, and commercial-focused legal solutions.
              </p>
              <ul className="agile-approach__list">
                <li><strong>Rapid Response:</strong> Direct access to senior counsel when you need it most.</li>
                <li><strong>Commercial Acumen:</strong> Legal strategies that protect and grow your bottom line.</li>
                <li><strong>Data-Driven:</strong> Rigorous due diligence and risk assessment for complex transactions.</li>
              </ul>
              <Link to="/about" className="btn btn--outline clickable" style={{ marginTop: '2.5rem' }}>Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TEAM CAROUSEL */}
      <TeamCarousel />

      {/* SECTION 6: FOOTER CTA */}
      <ContactCTA />
    </div>
  );
};

export default HomePage;