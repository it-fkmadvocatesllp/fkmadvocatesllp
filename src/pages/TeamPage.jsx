// src/pages/TeamPage.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { teamMembers } from '../data/team';
import '../styles/pages/team.css';

const TeamPage = () => {
  const containerRef = useScrollReveal('.reveal');

  return (
    <div ref={containerRef}>
      <SEO
        title="Your Team | FKM Advocates LLP"
        description="Meet the agile, experienced legal professionals driving success for modern businesses in Kenya."
        canonical="/team"
      />

      {/* DARK HERO */}
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
            <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Legal Excellence,<br />Delivered.
            </h1>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="section bg-light" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="team-grid reveal">
            {teamMembers.map((member) => (
              <Link key={member.slug} to={`/team/${member.slug}`} className="team-card clickable">
                <div className="team-card__image-wrapper">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="team-card__overlay"></div>
                </div>
                <div className="team-card__info">
                  <h3>{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;