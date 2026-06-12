import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { insights, insightCategories } from '../data/insights';

const InsightsPage = () => {
  const [category, setCategory] = useState('');
  const containerRef = useScrollReveal('.reveal');

  const filtered = category
    ? insights.filter((item) => item.category === category)
    : insights;

  return (
    <div ref={containerRef}>
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">Insights</span>
          <h1 className="stacked-headline">
            <span>Legal</span>
            <span>insights</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0' }}>
            Discover the latest news and legal updates from FKM Advocates.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <button type="button" className={`btn clickable ${!category ? 'btn--primary' : 'btn--outline'}`} onClick={() => setCategory('')}>All</button>
            {insightCategories.map((cat) => (
              <button key={cat} type="button" className={`btn clickable ${category === cat ? 'btn--primary' : 'btn--outline'}`} onClick={() => setCategory(cat)}>{cat}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {filtered.map((item) => (
              <Link key={item.slug} to={`/insights/${item.slug}`} className="glass-card reveal clickable" style={{ padding: '2rem', display: 'block' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.75rem', background: 'var(--color-bg)', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
