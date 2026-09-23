// src/pages/TeamMemberPage.jsx
import { useParams, Navigate, Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getTeamMemberBySlug } from '../data/team';
import SEO from '../components/SEO';
import '../styles/pages/team.css'; // Reusing the same CSS file for ease

const TeamMemberPage = () => {
  const { slug } = useParams();
  const member = getTeamMemberBySlug(slug);
  const containerRef = useScrollReveal('.reveal');

  if (!member) return <Navigate to="/team" replace />;

  return (
    <div ref={containerRef}>
      <SEO
        title={`${member.name} - ${member.role} | FKM Advocates LLP`}
        description={`Profile of ${member.name}, ${member.role} at FKM Advocates LLP.`}
        canonical={`/team/${member.slug}`}
      />

      <section 
        className="page-hero"
        style={{
          background: `linear-gradient(rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.9)), url('/hero_image.jpeg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container reveal">
          <div className="hero-headline-wrapper">
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {member.name}
            </h1>
          </div>
          <p className="hero-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1rem' }}>
            {member.role}
          </p>
        </div>
      </section>

      <section className="section bg-light" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="team-member-layout reveal">
            
            {/* LEFT: Pinned Image & Quick Contact */}
            <aside className="team-member__sidebar">
              <div className="team-member__portrait">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-member__contact-card">
                <a href={`mailto:${member.email}`} className="btn btn--outline clickable" style={{ width: '100%', marginBottom: '1rem' }}>
                  Email {member.name.split(' ')[0]}
                </a>
                <div className="team-member__social">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="clickable">
                    LinkedIn Profile →
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT: Biography & Credentials */}
            <div className="team-member__content">
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Biography</h2>
              <div className="team-member__bio">
                {member.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="team-member__credentials-grid">
                {/* Admissions */}
                <div className="credentials-box">
                  <h3>Admissions</h3>
                  <ul>
                    {member.admissions?.map((item, idx) => (
                      <li key={idx}>→ {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div className="credentials-box">
                  <h3>Education</h3>
                  <ul>
                    {member.education?.map((item, idx) => (
                      <li key={idx}>→ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/team" className="btn btn--primary clickable" style={{ marginTop: '3rem' }}>
                Back to Team Directory
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberPage;