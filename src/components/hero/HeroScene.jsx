import heroBg from '../../assets/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg';
import './HeroScene.css';

const HeroScene = () => (
  <div className="hero-scene">
    <img src={heroBg} alt="" className="hero-scene__photo" aria-hidden="true" />
    <div className="hero-scene__overlay" aria-hidden="true" />
    <div className="hero-scene__grid" aria-hidden="true" />
  </div>
);

export default HeroScene;
