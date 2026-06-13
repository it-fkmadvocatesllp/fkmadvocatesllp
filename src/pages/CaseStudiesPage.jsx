import { useState, useMemo } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FilterBar from '../components/ui/FilterBar';
import { caseStudies, caseStudyFilters } from '../data/caseStudies';
import SEO from '../components/SEO';

const CaseStudiesPage = () => {
  const [filters, setFilters] = useState({ strategy: '', status: '', geography: '' });
  const containerRef = useScrollReveal('.reveal');

  const filtered = useMemo(() => caseStudies.filter((item) => {
    if (filters.strategy && item.strategy !== filters.strategy) return false;
    if (filters.status && item.status !== filters.status) return false;
    if (filters.geography && item.geography !== filters.geography) return false;
    return true;
  }), [filters]);

  return (
    <div ref={containerRef}>
      <SEO
        title="Case Studies | Notable Legal Matters in Kenya"
        description="Explore notable matters handled by FKM Advocates LLP across corporate law, litigation, estate planning, and real estate in Kenya. See how we deliver results for our clients."
        canonical="/case-studies"
      />
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">Case Studies</span>
          <h1 className="stacked-headline">
            <span>Notable</span>
            <span>matters</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0' }}>
            We deliver bespoke legal strategies designed to meet evolving client demands.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FilterBar
            filters={caseStudyFilters}
            activeFilters={filters}
            onFilterChange={(key, value) => setFilters((f) => ({ ...f, [key]: value }))}
            onClear={() => setFilters({ strategy: '', status: '', geography: '' })}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <Motion.article
                  key={item.id}
                  className="glass-card reveal"
                  style={{ padding: '2rem' }}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.75rem', background: 'var(--color-bg)', borderRadius: '999px' }}>{item.strategy}</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.75rem', background: item.status === 'Resolved' ? 'rgba(34,197,94,0.1)' : 'rgba(201,162,39,0.1)', borderRadius: '999px', color: item.status === 'Resolved' ? '#16a34a' : 'var(--color-accent)' }}>{item.status}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>{item.clientType} · {item.geography} · {item.year}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>{item.description}</p>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent)' }}>{item.outcome}</p>
                </Motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '3rem' }}>No case studies match your filters.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
