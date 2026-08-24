// src/components/sections/InsightsCarousel.jsx
import { Link } from 'react-router-dom';
import { insights } from '../../data/insights';
import './InsightsCarousel.css';

const InsightsCarousel = () => {
  // Grab the 4 most recent insights
  const recentInsights = insights.slice(0, 4);

  return (
    <section className="section insights-section">
      <div className="container">
        <h2 className="insights-section__title reveal">Latest News and Updates</h2>
        <div className="insights-grid reveal">
          {recentInsights.map(insight => (
            <div key={insight.slug} className="insights-card">
              <span className="insights-card__category">{insight.category}</span>
              <h4 className="insights-card__title">{insight.title}</h4>
              <Link to={`/insights/${insight.slug}`} className="insights-card__link clickable">
                Read Article <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsCarousel;