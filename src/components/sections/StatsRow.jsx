import { motion as Motion } from 'framer-motion';
import './StatsRow.css';

const StatsRow = ({ stats, dark = false }) => (
  <div className={`stats-row ${dark ? 'stats-row--dark' : ''}`}>
    {stats.map((stat, i) => (
      <Motion.div
        key={stat.label}
        className="stats-row__item reveal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.6 }}
      >
        <span className="stats-row__value">{stat.value}</span>
        <span className="stats-row__label">{stat.label}</span>
      </Motion.div>
    ))}
  </div>
);

export default StatsRow;
