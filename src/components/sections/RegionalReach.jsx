import './RegionalReach.css';

const regions = [
  { name: 'Kenya', x: 48, y: 64 },
  { name: 'Uganda', x: 38, y: 47 },
  { name: 'Tanzania', x: 55, y: 78 },
  { name: 'Rwanda', x: 32, y: 57 },
  { name: 'Ethiopia', x: 62, y: 32 },
  { name: 'South Sudan', x: 42, y: 28 },
];

const RegionalReach = () => (
  <section className="section section--dark regional-reach" data-cursor-theme="dark">
    <div className="container">
      <div className="regional-reach__grid">
        <div className="reveal">
          <span className="kicker">Our Reach</span>
          <h2 className="section-title">Serving clients across East Africa</h2>
          <p className="section-subtitle">
            From our Nairobi headquarters, we advise clients on matters spanning Kenya and the broader East African region.
          </p>
        </div>
        <div className="regional-reach__map reveal" data-cursor-label="View">
          <div className="regional-reach__pulse" aria-hidden="true" />
          <div className="regional-reach__regions">
            {regions.map((region) => (
              <span
                key={region.name}
                className="regional-reach__tag clickable"
                style={{ '--x': `${region.x}%`, '--y': `${region.y}%` }}
                data-cursor-label="View"
              >
                {region.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RegionalReach;
