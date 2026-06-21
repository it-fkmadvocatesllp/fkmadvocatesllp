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
            <h1 className="home-hero__title">Strategic Legal Representation for Individuals, Businesses, and Institutions Across Kenya</h1>
            <p className="home-hero__subtitle">
              FKM Advocates LLP provides practical, results-oriented legal solutions in litigation, employment law, commercial transactions, family law, property law, and dispute resolution. Our advocates combine legal expertise with a client-focused approach to protect your interests and achieve favorable outcomes.
            </p>
            <div className="home-hero__actions">
              <Link to="/consultation" className="btn btn--hero-outline clickable" data-cursor-label="View">
                Book a Consultation
              </Link>
              <Link to="/practice-areas" className="btn btn--hero-ghost clickable" data-cursor-label="View">
                Explore Our Practice Areas
              </Link>
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
