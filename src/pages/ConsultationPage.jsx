// src/pages/ConsultationPage.jsx
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/pages/consultation.css';

const ConsultationPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef} className="consultation-page">
      <SEO
        title="Book a Consultation | FKM Advocates LLP"
        description="Schedule a strategic legal consultation with FKM Advocates LLP. Select a time that works for you."
        canonical="/consultation"
      />

      {/* DARK HERO */}
      <section className="page-hero bg-dark">
        <div className="container reveal">
          <span className="kicker">Get Started</span>
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Book a Consultation.
            </h1>
          </div>
          <p className="hero-subtitle text-muted-on-dark" style={{ margin: '1.5rem auto 0', maxWidth: '600px' }}>
            Select an available time on our calendar below to schedule a secure, confidential meeting with our legal team.
          </p>
        </div>
      </section>

      {/* BOOKINGS EMBED SECTION */}
      <section className="section bg-light" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="bookings-wrapper reveal">
            <div className="bookings-container">
              {/* 
                IMPORTANT: Replace the 'src' below with your actual Microsoft Bookings URL.
              */}
              <iframe 
                src="https://outlook.office365.com/owa/calendar/FKMAdvocatesConsultations@fkmadvocatesllp.com/bookings/" 
                width="100%" 
                height="850" 
                scrolling="yes" 
                className="bookings-iframe"
                title="FKM Advocates Consultation Booking"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;