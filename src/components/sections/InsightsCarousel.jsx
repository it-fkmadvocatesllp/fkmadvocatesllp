import { Link } from 'react-router-dom';
// Ensure this path points to your actual insights data file
import { insights } from '../../data/insights'; 
import { useScrollReveal } from '../../hooks/useScrollReveal';
import 'src/components/sections/InsightsCarousel.css';

const InsightsCarousel = () => {
  const containerRef = useScrollReveal('.reveal');
  const recentInsights = insights.slice(0, 3);

  return (
    <section ref={containerRef} className="section bg-light insights-section">
      <div className="container reveal">
        <h2 className="section-title">Latest News and Updates</h2>
        
        <div className="insights-grid">
          {recentInsights.map((post) => (
            <Link key={post.slug} to={`/insights/${post.slug}`} className="insight-card clickable">
              {/* IMAGE HEADER */}
              <div className="insight-card__image-wrapper">
                {/* Falls back to your hero image if the specific post doesn't have an image mapped yet */}
                <img src={post.image || '/hero_image.jpeg'} alt={post.title} loading="lazy" />
              </div>
              
              {/* CONTENT BODY */}
              <div className="insight-card__content">
                <span className="insight-card__category">{post.category || 'Articles'}</span>
                <h3 className="insight-card__title">{post.title}</h3>
                <span className="insight-card__link">Read Article &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default InsightsCarousel;