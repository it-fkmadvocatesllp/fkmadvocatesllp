// src/pages/InsightsPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { insights, insightCategories } from '../data/insights';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../components/sections/InsightsCarousel.css';

const InsightsPage = () => {
  const containerRef = useScrollReveal('.reveal');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredInsights = activeCategory === 'All' 
    ? insights 
    : insights.filter(item => item.category === activeCategory);

  return (
    <div ref={containerRef} className="bg-light" style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
      <SEO
        title="Legal Insights & Updates | FKM Advocates LLP"
        description="Discover the latest legal updates, firm news, and corporate governance insights from FKM Advocates LLP."
        canonical="/insights"
      />

      {/* DARK HERO */}
      <section className="page-hero bg-dark" style={{ backgroundColor: '#121212' }}>
        <div className="container reveal">
          <span className="kicker">Knowledge Hub</span>
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Legal Insights.
            </h1>
          </div>
          <p className="hero-subtitle text-muted-on-dark" style={{ margin: '1.5rem auto 0', maxWidth: '600px' }}>
            Discover the latest news, regulatory updates, and thought leadership from FKM Advocates.
          </p>
        </div>
      </section>

      <div className="container reveal" style={{ marginTop: '4rem' }}>
        
        {/* FILTER NAVIGATION */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
          <button 
            onClick={() => setActiveCategory('All')}
            className="clickable"
            style={{ 
              background: 'none', border: 'none', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em',
              color: activeCategory === 'All' ? 'var(--color-accent)' : 'var(--color-text-muted)',
              borderBottom: activeCategory === 'All' ? '2px solid var(--color-accent)' : '2px solid transparent',
              paddingBottom: '0.5rem', marginBottom: '-1rem'
            }}
          >
            All
          </button>
          {insightCategories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className="clickable"
              style={{ 
                background: 'none', border: 'none', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em',
                color: activeCategory === category ? 'var(--color-accent)' : 'var(--color-text-muted)',
                borderBottom: activeCategory === category ? '2px solid var(--color-accent)' : '2px solid transparent',
                paddingBottom: '0.5rem', marginBottom: '-1rem'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 4-COLUMN GRID (Reusing the Homepage component classes) */}
        <div className="insights-grid">
          {filteredInsights.map((post) => (
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

      </div>
    </div>
  );
};

export default InsightsPage;