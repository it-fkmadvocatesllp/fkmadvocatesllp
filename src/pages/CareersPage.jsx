// src/pages/CareersPage.jsx
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/pages/careers.css';

const CareersPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <SEO
        title="Careers | FKM Advocates LLP"
        description="Join an agile, tech-enabled law firm. View open positions at FKM Advocates LLP."
        canonical="/careers"
      />

      {/* DARK HERO */}
      <section 
        className="page-hero"
        style={{
          background: `linear-gradient(rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.9)), url('/hero_image.jpeg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container reveal">
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Build the Future<br />of Law.
            </h1>
          </div>
          <p className="hero-subtitle text-muted-on-dark" style={{ margin: '1.5rem auto 0', maxWidth: '600px' }}>
            We are building a new standard for legal excellence in East Africa. Join us.
          </p>
        </div>
      </section>

      {/* SAAS-STYLE JOB BOARD */}
      <section className="section bg-light" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="careers-layout reveal">
            
            {/* Left: Intro & Culture */}
            <div className="careers-intro">
              <h2 className="section-title">Join Our Team</h2>
              <p className="careers-intro__text">
                We are always looking for driven, commercially-minded legal professionals who thrive in an agile, high-performance environment. At FKM Advocates LLP, we value continuous learning, tech-enabled workflows, and a relentless focus on client outcomes.
              </p>
              <p className="careers-intro__text">
                If you believe your skills align with our firm's vision, we want to hear from you.
              </p>
              <a href="mailto:office@fkmadvocatesllp.com" className="btn btn--primary clickable" style={{ marginTop: '1.5rem' }}>
                Submit Your CV
              </a>
            </div>

            {/* Right: Open Positions Board */}
            <div className="careers-board">
              <h3 className="careers-board__title">Open Positions</h3>
              
              <div className="careers-board__list">
                
                {/* Empty State Card */}
                <div className="job-card job-card--empty">
                  <p>There are no specific openings at this moment, but we accept spontaneous applications year-round.</p>
                </div>
                
                {/* Example of an Active Job Listing (Uncomment when needed) 
                <a href="mailto:careers@fkmadvocatesllp.com?subject=Application:%20Commercial%20Associate" className="job-card clickable">
                  <div className="job-card__info">
                    <h4>Corporate & Commercial Associate</h4>
                    <span>Nairobi, Kenya • Full-time</span>
                  </div>
                  <div className="job-card__arrow" aria-hidden="true">→</div>
                </a>
                */}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;