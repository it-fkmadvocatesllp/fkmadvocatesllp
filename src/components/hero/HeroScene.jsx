import heroBg from '../../assets/hero-bg.webp';
import './HeroScene.css';

const HeroScene = () => (
  <div className="hero-scene">
    <img src={heroBg} alt="" className="hero-scene__photo" aria-hidden="true" />
    <div className="hero-scene__overlay" aria-hidden="true" />
    <div className="hero-scene__grid" aria-hidden="true" />
  </div>
);

export default HeroScene;
