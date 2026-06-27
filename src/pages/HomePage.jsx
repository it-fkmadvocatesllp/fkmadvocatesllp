import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroScene from '../components/hero/HeroScene';
// import StatsRow from '../components/sections/StatsRow';
// import PracticeAreaCards from '../components/sections/PracticeAreaCards';
// import RegionalReach from '../components/sections/RegionalReach';
// import LocationCarousel from '../components/sections/LocationCarousel';
// import TeamCarousel from '../components/sections/TeamCarousel';
import ContactCTA from '../components/sections/ContactCTA';
// import { firmStats, firmInfo } from '../data/firmStats';
import '../styles/pages/home.css';

const faqs = [
  {
    q: 'Do I need an appointment?',
    a: 'While appointments are recommended, we accommodate urgent consultations whenever possible.',
  },
  {
    q: 'How much does a consultation cost?',
    a: 'Consultation fees vary depending on the complexity of the matter. Contact us for details.',
  },
  {
    q: 'Can disputes be resolved without going to court?',
    a: 'Many disputes can be resolved through negotiation, mediation, or arbitration, which may save time and costs.',
  },
];

const HomePage = () => {
  const containerRef = useScrollReveal('.reveal');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div ref={containerRef}>
      <SEO
        title="Nairobi Law Firm | Expert Legal Services in Kenya & East Africa"
        description="FKM Advocates LLP is a premier Nairobi law firm offering corporate law, litigation, estate planning, and real estate legal services. 10+ years serving clients across Kenya and East Africa."
        canonical="/"
      />
      <section className="home-hero" data-cursor-theme="dark">
        <HeroScene />
        <div className="home-hero__overlay" aria-hidden="true" />
        <div className="home-hero__content">
          <nav className="home-hero__nav-tag">
            <span>Law Office</span>
          </nav>
          <h1 className="home-hero__headline">Your Legal Advantage in Kenya.</h1>
        </div>
      </section>

      <section className="section hero-intro">
        <div className="container">
          <div className="hero-intro__why">WHY US?</div>
          <div className="hero-intro__grid">
            <div className="hero-intro__col">
              <p className="hero-intro__sub">We offer strategic legal counsel for businesses, investors, property owners, and individuals navigating Kenya&apos;s legal landscape.</p>
              <p className="hero-intro__body">At FKM Advocates LLP we combine sharp legal expertise with a results-first approach. Our advocates handle litigation, commercial transactions, employment law, property law, family law, and dispute resolution — with a track record of protecting what matters most to our clients.</p>
            </div>
            <div className="hero-intro__col">
              <div className="hero-intro__actions">
                <Link to="/consultation" className="btn btn--primary clickable">Book a Consultation</Link>
                <Link to="/practice-areas" className="hero-intro__link clickable">See How We Can Help You →</Link>
              </div>
            </div>
            <div className="hero-intro__col hero-intro__col--cta">
              <div className="hero-intro__call">
                <span className="hero-intro__call-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
                  </svg>
                </span>
                <p className="hero-intro__call-text">
                  Make the call,{' '}
                  <em>we</em>{' '}will{' '}
                  <em>deliver</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-fkm">
        <div className="container">
          <div className="why-fkm__inner reveal">
            <div className="why-fkm__intro">
              <span className="kicker">Our Difference</span>
              <h2 className="section-title">Why Clients Choose FKM Advocates LLP</h2>
              <p className="section-subtitle">
                At FKM Advocates LLP, we understand that legal challenges often involve significant financial, personal,
                and business interests. Our approach combines technical legal excellence with clear communication,
                strategic thinking, and dedicated client service.
              </p>
            </div>
            <div className="why-fkm__points">
              <p className="why-fkm__points-heading">What Sets Us Apart</p>
              <ul className="why-fkm__list">
                <li>Personalized legal strategies tailored to your circumstances</li>
                <li>Prompt and transparent communication</li>
                <li>Practical solutions focused on achieving results</li>
                <li>Strong advocacy in negotiations and court proceedings</li>
                <li>Commitment to professionalism, integrity, and confidentiality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="faq-section__inner reveal">
            <div className="faq-section__heading">
              <span className="kicker">FAQ</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <ul className="faq-list">
              {faqs.map((item, i) => (
                <li key={i} className={`faq-item ${openFaq === i ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item__question clickable"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{item.q}</span>
                    <span className="faq-item__icon" aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <p className="faq-item__answer">{item.a}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default HomePage;
