import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroScene from '../components/hero/HeroScene';
import InsightsCarousel from '../components/sections/InsightsCarousel';
import '../styles/pages/home.css';

const HomePage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <SEO
        title="FKM Advocates LLP | Agile Legal Solutions"
        description="FKM Advocates LLP is a specialist corporate and disputes firm based in Kenya, designed for high-stakes litigation and commercial advisory."
        canonical="/"
      />

      {/* 1. HERO */}
      <section className="home-hero" data-cursor-theme="dark">
        <HeroScene />
        <div className="home-hero__content reveal">
          <div className="home-hero__headline">
            <h1>Your Legal Advantage in Kenya.</h1>
          </div>
          <div className="home-hero__actions">
            <Link to="/consultation" className="btn btn--primary clickable">Consult With Us</Link>
          </div>
        </div>
      </section>

      {/* 2. ADRA-STYLE BRIEF INTRO */}
      <section className="section intro-split">
        <div className="container">
          <div className="intro-split__grid reveal">
            <div className="intro-split__left">
              <h2>Strategic Legal,<br/>Counsel.</h2>
            </div>
            <div className="intro-split__right">
              <p>
                <span className="drop-cap">F</span>KM Advocates LLP is a specialist corporate and disputes firm based in Kenya. We are designed for high-stakes matters such as complex commercial litigation, estate planning, and real estate conveyancing at the highest levels. "Superior Solutions, Swiftly" is the standard we operate by, not a slogan.
              </p>
              <p>
                Our practice spans high-value commercial conflicts, regulatory showdowns, and property claims. We move with speed and precision, and remain relentlessly focused on securing positive, enforceable outcomes for our clients. Rooted in Kenya, connected globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LATEST NEWS */}
      <InsightsCarousel />
    </div>
  );
};

export default HomePage;