import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Timeline from '../components/sections/Timeline';
import ValuesGrid from '../components/sections/ValuesGrid';
import { timeline, values } from '../data/about';

const AboutPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">About Us</span>
          <h1 className="stacked-headline">
            <span>Our journey</span>
            <span>so far</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0' }}>
            Founded in 2014, FKM Advocates LLP has grown into a trusted legal partner for clients across Kenya.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Timeline events={timeline} />
        </div>
      </section>

      <section className="section section--dark" data-cursor-theme="dark">
        <div className="container">
          <div className="reveal">
            <span className="kicker">Our Values</span>
            <h2 className="section-title">What guides our practice</h2>
          </div>
          <ValuesGrid values={values} />
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <span className="kicker">Your Best Partner</span>
          <h2 className="section-title">Legal counsel tailored to your needs</h2>
          <p className="section-subtitle">
            At FKM Advocates, we view legal counsel as a tool tailored to the needs of each client, with flexible
            strategies designed for every situation. Our support goes beyond mere representation — we take a
            long-term view of your objectives and sector trends.
          </p>
          <Link to="/consultation" className="btn btn--primary clickable" style={{ marginTop: '2rem' }}>
            Book a Consultation
          </Link>
        </div>
      </section>

      <section className="section section--dark" data-cursor-theme="dark">
        <div className="container reveal">
          <span className="kicker">Responsible Practice</span>
          <h2 className="section-title">We integrate ethical standards to create lasting value</h2>
          <p className="section-subtitle">
            We take professional responsibility into account in every matter, managing cases under prudent
            ethical criteria. We aim to promote responsible practices, enhance operational efficiency, and
            strengthen corporate governance for our clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
