import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { practiceAreas } from '../../data/practiceAreas';
import './PracticeAreaCards.css';

const PracticeAreaCards = () => (
  <section className="section practice-cards">
    <div className="container">
      <div className="reveal">
        <span className="kicker">Practice Areas</span>
        <h2 className="section-title">Tailored legal solutions across every practice area</h2>
        <p className="section-subtitle">
          Our four practice areas are client-oriented, providing comprehensive legal counsel across the entire spectrum of business and personal law.
        </p>
      </div>

      <div className="practice-cards__grid">
        {practiceAreas.map((area, i) => (
          <Motion.article
            key={area.slug}
            className="practice-cards__card reveal clickable"
            data-cursor-label="View"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="practice-cards__title">{area.title}</h3>
            <p className="practice-cards__desc">{area.description}</p>
            <div className="practice-cards__metrics">
              <div><span>{area.metrics.matters}</span><small>Matters</small></div>
              <div><span>{area.metrics.ticket}</span><small>Scope</small></div>
              <div><span>{area.metrics.team}</span><small>Team</small></div>
            </div>
            <Link to={`/practice-areas/${area.slug}`} className="practice-cards__link clickable" data-cursor-label="View">
              Know more →
            </Link>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreaCards;
