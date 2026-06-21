import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin by understanding your legal issue, objectives, and concerns.',
  },
  {
    number: '02',
    title: 'Case Assessment',
    description: 'Our advocates analyze the facts, applicable laws, risks, and available options.',
  },
  {
    number: '03',
    title: 'Strategy Development',
    description: 'We develop a legal strategy tailored to your specific circumstances.',
  },
  {
    number: '04',
    title: 'Representation & Resolution',
    description:
      'Whether through negotiation, mediation, or litigation, we work diligently to achieve the best possible outcome.',
  },
];

const OurProcessPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <SEO
        title="Our Client Process | FKM Advocates LLP"
        description="Understand how FKM Advocates LLP works with clients — from initial consultation through case assessment, strategy development, and resolution."
        canonical="/our-process"
      />
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">How We Work</span>
          <h1 className="stacked-headline">
            <span>Our Client</span>
            <span>Process</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0' }}>
            Clients often don&apos;t know what happens after contacting a law firm. Here is exactly what to expect when you work with us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="process-steps reveal">
            {steps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="process-step__number">{step.number}</div>
                <div className="process-step__body">
                  <h3 className="process-step__title">Step {parseInt(step.number, 10)} – {step.title}</h3>
                  <p className="process-step__desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcessPage;
