import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import InsightsCarousel from '../components/sections/InsightsCarousel';
import '../styles/pages/home.css';

const HomePage = () => {
  // 1. Initialize the missing scroll reveal ref
  const containerRef = useScrollReveal('.reveal');

  // 2. Hero images array
  const heroImages = [
    '/hero_image.jpeg', 
    '/nairobi.jpeg', 
    '/jungle.jpg',
    '/sunset.jpg',
    '/tree.jpg',
  ];
  
  const [currentImg, setCurrentImg] = useState(0);

  // Automatically cycle the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div ref={containerRef}>
      <SEO
        title="FKM Advocates LLP | Agile Legal Solutions"
        description="FKM Advocates LLP is a specialist corporate and disputes firm based in Kenya, designed for high-stakes litigation and commercial advisory."
        canonical="/"
      />

      {/* 1. HERO SECTION */}
      <section 
        className="home-hero" 
        data-cursor-theme="dark"
        style={{
          background: `linear-gradient(rgba(18, 18, 18, 0.45), rgba(18, 18, 18, 0.85)), url('${heroImages[currentImg]}')`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transition: 'background 1.2s ease-in-out'
        }}
      >
        <div className="container reveal">
          <div className="home-hero__actions">
            <Link to="/consultation" className="btn btn--primary clickable">
              Consult With Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRO SPLIT */}
      <section className="section intro-split">
        <div className="container">
          <div className="intro-split__grid reveal">
            <div className="intro-split__left">
              <h2>Strategic Legal<br/>Counsel.</h2>
            </div>
            <div className="intro-split__right">
              <p>
                <span className="drop-cap">F</span> KM Advocates LLP is a specialist corporate and disputes firm based in Kenya. We are designed for high-stakes matters such as complex commercial litigation, estate planning, and real estate conveyancing at the highest levels.
              </p>
              <p>
                Our practice spans high-value commercial conflicts, regulatory showdowns, and property claims. We move with speed and precision, and remain relentlessly focused on securing positive, enforceable outcomes for our clients. Rooted in Kenya, connected globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LATEST NEWS */}
      <InsightsCarousel />
    </div>
  );
};

export default HomePage;