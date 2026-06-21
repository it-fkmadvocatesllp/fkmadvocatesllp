import { useParams, Navigate, Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { teamMembers } from '../data/team';
import SEO from '../components/SEO';

const TeamMemberPage = () => {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);
  const containerRef = useScrollReveal('.reveal');

  if (!member) return <Navigate to="/team" replace />;

  return (
    <div ref={containerRef}>
      <SEO
        title={`${member.name} | ${member.title} – FKM Advocates LLP`}
        description={member.bio}
        canonical={`/team/${member.slug}`}
      />

      <section className="page-hero">
        <div className="container reveal">
          <span className="kicker">Our Team</span>
          <h1 className="stacked-headline">
            <span>{member.name.split(' ')[0]}</span>
            <span>{member.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p style={{ marginTop: '1rem', color: 'var(--color-accent)', fontSize: '1.1rem', fontWeight: 500 }}>
            {member.title}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-member-layout reveal">

            <div className="team-member__bio-col">
              <div style={{ width: '5rem', height: '5rem', display: 'grid', placeItems: 'center', background: 'var(--color-bg-dark)', color: 'var(--color-accent)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.5rem', borderRadius: '50%', marginBottom: '2rem' }}>
                {member.initials}
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2.5rem' }}>
                {member.bio}
              </p>
              <Link to="/team" className="btn btn--outline clickable" style={{ fontSize: '0.8rem' }}>
                ← Back to Team
              </Link>
            </div>

            <div className="team-member__details-col">
              <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-purple)', marginBottom: '1.25rem' }}>
                  Areas of Practice
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {member.practiceAreas.map((area) => (
                    <li key={area} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-purple)', fontWeight: 700 }}>✓</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-purple)', marginBottom: '1.25rem' }}>
                  Education
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {member.education.map((edu) => (
                    <li key={edu} style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberPage;
