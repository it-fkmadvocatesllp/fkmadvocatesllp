import { useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { firmInfo } from '../../data/firmStats';
import officeImg from '../../assets/Photo-2-1.webp';
import highCourtImg from '../../assets/High-COurt-of-Kenya-1-scaled.jpg';
import './LocationCarousel.css';

const locations = [
  {
    name: 'Nairobi HQ',
    address: firmInfo.address,
    detail: firmInfo.addressDetail,
    phone: firmInfo.phone,
    image: officeImg,
  },
  {
    name: 'Thika Branch',
    address: 'Thika Business Center, 5th Floor',
    detail: 'Suite 5-07, Commercial Street, Nairobi',
    phone: firmInfo.phone,
    image: highCourtImg,
  },
];

const LocationCarousel = () => {
  const [active, setActive] = useState(0);
  const dragStartRef = useRef(null);
  const loc = locations[active];
  const goToLocation = (direction) => {
    setActive((current) => (current + direction + locations.length) % locations.length);
  };

  const handlePointerDown = (event) => {
    dragStartRef.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (dragStartRef.current === null) return;
    const distance = event.clientX - dragStartRef.current;
    dragStartRef.current = null;

    if (Math.abs(distance) < 48) return;
    goToLocation(distance < 0 ? 1 : -1);
  };

  return (
    <section className="section location-carousel">
      <div className="container">
        <div className="reveal">
          <span className="kicker">Our Offices</span>
          <h2 className="section-title">Where to find us</h2>
        </div>

        <div className="location-carousel__wrapper reveal" data-cursor-label="Drag">
          <div
            className="location-carousel__image clickable"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { dragStartRef.current = null; }}
            data-cursor-label="Drag"
          >
            <AnimatePresence mode="wait">
              <Motion.img
                key={loc.name}
                src={loc.image}
                alt={loc.name}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                draggable="false"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <Motion.div
                key={`${loc.name}-card`}
                className="location-carousel__card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
                <p className="location-carousel__detail">{loc.detail}</p>
                <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="clickable" data-cursor-label="View">{loc.phone}</a>
              </Motion.div>
            </AnimatePresence>
          </div>
          <div className="location-carousel__controls" aria-label="Office carousel controls">
            <button type="button" className="location-carousel__arrow clickable" onClick={() => goToLocation(-1)} data-cursor-label="View" aria-label="Previous office">←</button>
            <button type="button" className="location-carousel__arrow clickable" onClick={() => goToLocation(1)} data-cursor-label="View" aria-label="Next office">→</button>
          </div>
          <div className="location-carousel__tabs">
            {locations.map((l, i) => (
              <button
                key={l.name}
                type="button"
                className={`location-carousel__tab clickable ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                data-cursor-label="View"
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCarousel;
