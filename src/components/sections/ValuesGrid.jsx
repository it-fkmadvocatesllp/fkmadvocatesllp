import { motion as Motion } from 'framer-motion';
import './ValuesGrid.css';

const ValuesGrid = ({ values }) => (
  <div className="values-grid">
    {values.map((value, i) => (
      <Motion.article
        key={value.title}
        className="values-grid__card reveal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        <h3>{value.title}</h3>
        <p>{value.description}</p>
        <span className="values-grid__metaphor">{value.metaphor}</span>
      </Motion.article>
    ))}
  </div>
);

export default ValuesGrid;
