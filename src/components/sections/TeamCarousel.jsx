import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { teamMembers } from '../../data/team';
import './TeamCarousel.css';

const preview = teamMembers.slice(0, 6);

const TeamCarousel = () => (
  <section className="section team-carousel">
    <div className="container">
      <div className="team-carousel__header reveal">
        <div>
          <span className="kicker">Our Team</span>
          <h2 className="section-title">Experienced professionals dedicated to your success</h2>
        </div>
        <Link to="/team" className="btn btn--outline clickable">View all</Link>
      </div>

      <div className="team-carousel__grid">
        {preview.map((member, i) => (
          <Motion.div
            key={member.id}
            className="team-carousel__card reveal clickable"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="team-carousel__avatar">{member.initials}</div>
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </Motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamCarousel;
