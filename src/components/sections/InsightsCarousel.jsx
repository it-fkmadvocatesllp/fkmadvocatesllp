import { Link } from 'react-router-dom';
// Ensure this path points to your actual insights data file
import { insights } from '../../data/insights.js'; 
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../components/sections/InsightsCarousel.css';

const InsightsCarousel = () => {
  const containerRef = useScrollReveal('.reveal');
  const scrollRef = useRef(null);

  // We feed all insights into the carousel so the user can scroll through them
  const recentInsights = insights;

  // Handle the left/right arrow clicks
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Calculate the width of one card + the 1.5rem (24px) gap
      const scrollAmount = scrollRef.current.firstElementChild.offsetWidth + 24; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={containerRef} className="section insights-section">
      <div className="container reveal">
        <h2 className="section-title">Latest News and Updates</h2>
        
        <div className="carousel-wrapper">
          {/* LEFT ARROW */}
          <button 
            className="carousel-arrow carousel-arrow--left clickable" 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            &#10094;
          </button>

          {/* SCROLLABLE TRACK */}
          <div className="carousel-track" ref={scrollRef}>
            {recentInsights.map((post) => (
              <Link key={post.slug} to={`/insights/${post.slug}`} className="insight-card clickable">
                <div className="insight-card__image-wrapper">
                  <img src={post.image || '/hero_image.jpeg'} alt={post.title} loading="lazy" />
                </div>
                <div className="insight-card__content">
                  <span className="insight-card__category">{post.category || 'Articles'}</span>
                  <h3 className="insight-card__title">{post.title}</h3>
                  <span className="insight-card__link">Read Article &rarr;</span>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button 
            className="carousel-arrow carousel-arrow--right clickable" 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            &#10095;
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default InsightsCarousel;