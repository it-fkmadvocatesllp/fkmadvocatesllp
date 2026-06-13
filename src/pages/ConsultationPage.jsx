import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import SEO from '../components/SEO';
import './ConsultationPage.css';

const ConsultationPage = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const maintenanceErrorMessage =
    'We are currently having a server maintenance, Call our customer care form now. Sorry for the inconvinience.';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    legalIssue: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const legalIssueOptions = [
    'Select a legal issue type...',
    'Civil Defense',
    'Litigation Strategy',
    'Contract Disputes',
    'Business Law',
    'Estate Planning & Probate',
    'Real Estate Law',
    'Criminal Matters',
    'Family Matters',
    'Employment Law',
    'Intellectual Property',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitStatus(null);
    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      legalIssue: formData.legalIssue,
      message: formData.message,
      time: new Date().toISOString(),
    };

    try {
      const timeoutMs = 12000;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const apiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const endpointCandidates = apiBase
        ? [`${apiBase}/api/send-consultation`, `${apiBase}/api/send-consultation.js`]
        : import.meta.env.DEV
          ? [
              'http://localhost:3000/api/send-consultation',
              'http://localhost:3000/api/send-consultation.js',
              '/api/send-consultation',
              '/api/send-consultation.js',
            ]
          : ['/api/send-consultation', '/api/send-consultation.js'];

      let response;
      let data = {};

      for (const endpoint of endpointCandidates) {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        const contentType = response.headers.get('content-type') || '';
        data = await response.json().catch(() => ({}));

        if (response.status === 404 || !contentType.includes('application/json')) {
          continue;
        }
        break;
      }

      clearTimeout(timeoutId);
      if (!response || !response.ok || !data?.success) {
        throw new Error(data?.error || `Request failed with status ${response.status}`);
      }

      setFormData({ fullName: '', email: '', phone: '', legalIssue: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Resend send failed:', error);
      setSubmitStatus('error');
      setSubmitError(maintenanceErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation-page">
      <SEO
        title="Book a Legal Consultation in Nairobi"
        description="Schedule a confidential legal consultation with FKM Advocates LLP. Our expert advocates in Nairobi are ready to advise on corporate law, litigation, estate planning, and real estate matters."
        canonical="/consultation"
      />
      <section className="consultation-hero">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="consultation-hero__inner"
        >
          <span className="kicker">Consultation</span>
          <h1 className="stacked-headline">
            <span>Secure your</span>
            <span>future</span>
          </h1>
          <p className="section-subtitle">
            Schedule a confidential dialogue with our lead counsel. Precision starts with the first conversation.
          </p>
        </Motion.div>
      </section>

      <div className="consultation-form-wrapper">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="consultation-form-card glass-card"
        >
          {submitStatus === 'success' ? (
            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="consultation-success"
            >
              <div className="consultation-success__icon">✓</div>
              <h2>Request Received</h2>
              <p>Our team will contact you within 24 hours to finalize your consultation.</p>
            </Motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className={`consultation-form__row ${isMobile ? 'consultation-form__row--stack' : ''}`}>
                <div className="consultation-form__field">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="consultation-form__field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className={`consultation-form__row ${isMobile ? 'consultation-form__row--stack' : ''}`}>
                <div className="consultation-form__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="consultation-form__field">
                  <label htmlFor="legalIssue">Legal Matter</label>
                  <select id="legalIssue" name="legalIssue" value={formData.legalIssue} onChange={handleChange} required>
                    {legalIssueOptions.map((opt) => (
                      <option key={opt} value={opt === 'Select a legal issue type...' ? '' : opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="consultation-form__field">
                <label htmlFor="message">Brief Description</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" />
              </div>

              <div className="consultation-form__submit">
                <button type="submit" disabled={isSubmitting} className="btn-premium">
                  {isSubmitting ? 'Processing...' : 'Request Consultation'}
                </button>
                {submitStatus === 'error' && (
                  <p className="consultation-form__error">{submitError || 'Failed to send request. Please try again.'}</p>
                )}
              </div>
            </form>
          )}
        </Motion.div>

        <div className={`consultation-features ${isMobile ? 'consultation-features--stack' : ''}`}>
          {[
            { title: 'Response Time', desc: 'Guaranteed contact within 24 business hours.' },
            { title: 'Privilege', desc: 'All communications are protected by attorney-client privilege.' },
            { title: 'Precision', desc: 'Expert guidance tailored to your specific objectives.' },
          ].map((item, i) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="consultation-features__item"
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
