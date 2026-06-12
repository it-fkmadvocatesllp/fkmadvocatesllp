import { Link } from 'react-router-dom';
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
import { practiceAreas } from '../data/practiceAreas';
import '../styles/pages/home.css';

const HomePage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <section className="home-hero">
        <HeroScene />
        <div className="home-hero__content">
          <div className="home-hero__text reveal" data-reveal-delay="0.15">
            <span className="kicker">FKM Advocates LLP</span>
            <h1 className="stacked-headline">
              <span>Counsel</span>
              <span>you can</span>
              <span>trust</span>
            </h1>
            <p className="home-hero__subtitle">
              Tailored legal solutions for businesses, families, and individuals across Kenya and East Africa.
            </p>
            <div className="home-hero__actions">
              <Link to="/consultation" className="btn btn--primary clickable" data-cursor-label="View">Book Consultation</Link>
              <Link to="/practice-areas" className="btn btn--outline-light clickable" data-cursor-label="View">Practice Areas</Link>
            </div>
          </div>
          <div className="home-hero__visual" aria-hidden="true" />
        </div>
        <nav className="home-hero__rail" aria-label="Featured practice areas">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/practice-areas/${area.slug}`}
              className="home-hero__rail-link clickable"
              data-cursor-label="View"
            >
              {area.shortTitle}
            </Link>
          ))}
        </nav>
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
