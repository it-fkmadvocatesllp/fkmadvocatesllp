// src/pages/ConsultationPage.jsx
import { useState } from 'react';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { practiceAreas } from '../data/practiceAreas';
import './ConsultationPage.css';

const ConsultationPage = () => {
  const containerRef = useScrollReveal('.reveal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Calls your existing Vercel Serverless Function from Phase 1
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="consultation-page">
      <SEO
        title="Request a Consultation | FKM Advocates LLP"
        description="Request a strategic legal consultation with FKM Advocates LLP."
        canonical="/consultation"
      />

      {/* DARK HERO */}
      <section className="page-hero bg-dark">
        <div className="container reveal">
          <span className="kicker">Get Started</span>
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Request a Consultation.
            </h1>
          </div>
          <p className="hero-subtitle text-muted-on-dark" style={{ margin: '1.5rem auto 0', maxWidth: '600px' }}>
            Provide us with a brief overview of your legal requirements. Our team will review your request to ensure no conflicts of interest and confirm your scheduling.
          </p>
        </div>
      </section>

      {/* NATIVE FORM SECTION */}
      <section className="section bg-light" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="consultation-wrapper reveal">
            <div className="consultation-form-card">
              
              {submitStatus === 'success' ? (
                <div className="form-success-message">
                  <div className="success-icon">✓</div>
                  <h3>Request Received</h3>
                  <p>Your consultation request has been securely transmitted to our team. We will contact you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="native-form">
                  <div className="form-grid">
                    <div className="input-group">
                      <label htmlFor="fullName">Full Name / Company Name</label>
                      <input type="text" id="fullName" name="fullName" required placeholder="Enter your name" />
                    </div>
                    
                    <div className="input-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" required placeholder="name@company.com" />
                    </div>

                    <div className="input-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" required placeholder="+254 ..." />
                    </div>

                    <div className="input-group">
                      <label htmlFor="practiceArea">Primary Legal Issue</label>
                      <select id="practiceArea" name="practiceArea" required defaultValue="">
                        <option value="" disabled>Select an area of practice...</option>
                        {practiceAreas.map(area => (
                          <option key={area.slug} value={area.title}>{area.title}</option>
                        ))}
                        <option value="Other">Other / Unsure</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <label htmlFor="preferredTime">Preferred Consultation Timeframe</label>
                    <select id="preferredTime" name="preferredTime" required defaultValue="">
                      <option value="" disabled>Select your availability...</option>
                      <option value="As soon as possible">As soon as possible (Urgent)</option>
                      <option value="This week">This week</option>
                      <option value="Next week">Next week</option>
                    </select>
                  </div>

                  <div className="input-group full-width">
                    <label htmlFor="description">Brief Description of the Matter</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      rows="4" 
                      required 
                      placeholder="Please provide a brief, high-level overview. Do not include highly sensitive confidential data in this initial intake form."
                    ></textarea>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="form-error-message">
                      There was an issue submitting your request. Please try again or contact us directly at office@fkmadvocatesllp.com.
                    </div>
                  )}

                  <button type="submit" className="btn btn-premium submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Transmitting...' : 'Submit Request'}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;