import { useLocation } from 'react-router-dom';

const legalContent = {
  '/privacy': {
    title: 'Privacy Policy',
    content: `
      <p>FKM Advocates LLP provides this privacy policy to inform you how we process your personal data and protect your privacy.</p>
      <h3>Data Controller</h3>
      <p>FKM Advocates LLP, Kenrail Towers, 3rd Floor, Southern Wing, Suite SW-3.3A, Nairobi, Kenya. Email: office@fkmadvocatesllp.com</p>
      <h3>Purposes of Processing</h3>
      <p>We collect and process personal information to manage client relationships, handle consultation requests, respond to inquiries, and improve our website experience.</p>
      <h3>Your Rights</h3>
      <p>You may request access, rectification, or deletion of your personal data by contacting us at office@fkmadvocatesllp.com.</p>
    `,
  },
  '/legal': {
    title: 'Legal Notice',
    content: `
      <p>This Legal Notice regulates access and use of the website fkmadvocatesllp.com, operated by FKM Advocates LLP.</p>
      <h3>Intellectual Property</h3>
      <p>All content displayed on this portal, including texts, graphics, and design elements, is the intellectual property of FKM Advocates LLP or third parties with authorization.</p>
      <h3>Terms of Use</h3>
      <p>Users agree to use this portal properly and only for lawful purposes. The portal must not be used for purposes detrimental to FKM Advocates LLP or third parties.</p>
      <h3>Liability</h3>
      <p>FKM Advocates LLP does not guarantee that the site will be free of errors or viruses. Users are responsible for having adequate security tools on their devices.</p>
    `,
  },
  '/cookies': {
    title: 'Cookie Policy',
    content: `
      <p>FKM Advocates LLP uses cookies to provide a better browsing experience and analyze site traffic.</p>
      <h3>Types of Cookies</h3>
      <ul>
        <li><strong>Technical cookies:</strong> Essential for website functionality.</li>
        <li><strong>Preference cookies:</strong> Remember your settings and preferences.</li>
        <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site.</li>
      </ul>
      <h3>Managing Cookies</h3>
      <p>You can allow, block, or delete cookies through your browser settings. Disabling cookies may affect some site functionality.</p>
    `,
  },
};

const LegalPage = () => {
  const { pathname } = useLocation();
  const page = legalContent[pathname];

  if (!page) return null;

  return (
    <article>
      <section className="page-hero">
        <div className="container reveal">
          <h1 className="section-title">{page.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div
            className="reveal legal-content"
            style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>
    </article>
  );
};

export default LegalPage;
