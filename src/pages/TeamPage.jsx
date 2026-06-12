import { useState, useMemo } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FilterBar from '../components/ui/FilterBar';
import { teamMembers, teamFilters } from '../data/team';

const TeamPage = () => {
  const [filters, setFilters] = useState({ strategy: '', role: '', office: '' });
  const containerRef = useScrollReveal('.reveal');

  const filtered = useMemo(() => teamMembers.filter((member) => {
    if (filters.strategy && !member.strategy.includes(filters.strategy)) return false;
    if (filters.role && member.role !== filters.role) return false;
    if (filters.office && member.office !== filters.office) return false;
    return true;
  }), [filters]);

  return (
    <div ref={containerRef}>
      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">Our Team</span>
          <h1 className="stacked-headline">
            <span>Behind</span>
            <span>FKM</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0' }}>
            Our team has extensive experience in private practice and legal advisory across all practice areas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FilterBar
            filters={teamFilters}
            activeFilters={filters}
            onFilterChange={(key, value) => setFilters((f) => ({ ...f, [key]: value }))}
            onClear={() => setFilters({ strategy: '', role: '', office: '' })}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((member) => (
                <Motion.article
                  key={member.id}
                  className="glass-card reveal clickable"
                  style={{ padding: '2rem', textAlign: 'center' }}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div style={{ width: '4rem', height: '4rem', margin: '0 auto 1rem', display: 'grid', placeItems: 'center', background: 'var(--color-bg-dark)', color: 'var(--color-accent)', fontFamily: 'var(--font-display)', fontWeight: 600, borderRadius: '50%' }}>
                    {member.initials}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p style={{ color: 'var(--color-accent)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{member.title}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{member.office}</p>
                </Motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
