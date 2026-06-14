import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroScene from '../components/hero/HeroScene';
import ScrollIndicator from '../components/hero/ScrollIndicator';
import StatsRow from '../components/sections/StatsRow';
import PracticeAreaCards from '../components/sections/PracticeAreaCards';
import RegionalReach from '../components/sections/RegionalReach';
import LocationCarousel from '../components/sections/LocationCarousel';
import TeamCarousel from '../components/sections/TeamCarousel';
import ContactCTA from '../components/sections/ContactCTA';
import { firmStats, firmInfo } from '../data/firmStats';
import '../styles/pages/home.css';

const HomePage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <SEO
        title="Nairobi Law Firm | Expert Legal Services in Kenya & East Africa"
        description="FKM Advocates LLP is a premier Nairobi law firm offering corporate law, litigation, estate planning, and real estate legal services. 10+ years serving clients across Kenya and East Africa."
        canonical="/"
      />
      <section className="home-hero" data-cursor-theme="dark">
        <HeroScene />
        <div className="home-hero__content">
          <div className="home-hero__visual" aria-hidden="true" />
          <div className="home-hero__text reveal" data-reveal-delay="0.15">
            <div className="home-hero__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 3 19 6v5c0 5-3.4 8.6-7 10-3.6-1.4-7-5-7-10V6l7-3Z" fill="currentColor" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 7h16v14H4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="home-hero__kicker">Law Office</span>
            <h1 className="home-hero__title">Expert Legal Solutions</h1>
            <p className="home-hero__subtitle">
              We are committed to excellence and have a deep understanding of the law.
              Our aim is to provide you with real-world solutions across Kenya and East Africa.
            </p>
            <div className="home-hero__actions">
              <Link to="/about" className="btn btn--hero-outline clickable" data-cursor-label="View">
                Learn More
              </Link>
              <Link to="/practice-areas" className="btn btn--hero-ghost clickable" data-cursor-label="View">
                Practice Areas
              </Link>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      <section className="section about-preview">
        <div className="container">
          <div className="about-preview__grid">
            <div className="reveal">
              <span className="kicker">About FKM</span>
              <h2 className="section-title">A Nairobi law firm focused on driving client success</h2>
              <p className="section-subtitle">
                {firmInfo.description}
              </p>
              <Link to="/about" className="about-preview__link clickable">
                Discover our history →
              </Link>
            </div>
            <StatsRow stats={firmStats} />
          </div>
        </div>
      </section>

      <PracticeAreaCards />
      <RegionalReach />
      <LocationCarousel />
      <TeamCarousel />
      <ContactCTA />
    </div>
  );
};

export default HomePage;
