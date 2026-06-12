import { Link } from 'react-router-dom';
import './ContactCTA.css';

const ContactCTA = () => (
  <section className="section section--dark contact-cta" data-cursor-theme="dark">
    <div className="container contact-cta__inner reveal">
      <h2 className="section-title">The opportunity to protect, grow, and look ahead</h2>
      <p className="section-subtitle">
        Contact us to discuss how FKM Advocates can support your legal objectives with precision and integrity.
      </p>
      <div className="contact-cta__actions">
        <Link to="/consultation" className="btn btn--primary clickable">Book a Consultation</Link>
        <Link to="/contact" className="btn btn--outline-light clickable">Contact Us</Link>
      </div>
    </div>
  </section>
);

export default ContactCTA;
