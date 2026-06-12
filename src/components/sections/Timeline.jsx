import { useState } from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  const [active, setActive] = useState(0);
  const event = events[active];

  return (
    <div className="timeline">
      <div className="timeline__years">
        {events.map((e, i) => (
          <button
            key={e.year}
            type="button"
            className={`timeline__year clickable ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {e.year}
          </button>
        ))}
      </div>
      <div className="timeline__content reveal">
        <span className="timeline__year-display">{event.year}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default Timeline;
