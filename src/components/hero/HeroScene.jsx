import { Suspense, lazy } from 'react';
import { useIsMobile, usePrefersReducedMotion } from '../../hooks/useMediaQuery';
import supremecourtImg from '../../assets/supremecourt.jpg';
import './HeroScene.css';

const Scales3D = lazy(() => import('./Scales3D'));

const HeroScene = () => {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const show3D = !isMobile && !reducedMotion;

  if (!show3D) {
    return (
      <div className="hero-scene hero-scene--fallback">
        <img src={supremecourtImg} alt="" className="hero-scene__fallback-img" />
        <div className="hero-scene__overlay" />
      </div>
    );
  }

  return (
    <div className="hero-scene">
      <Suspense fallback={
        <div className="hero-scene hero-scene--fallback">
          <img src={supremecourtImg} alt="" className="hero-scene__fallback-img" />
        </div>
      }>
        <Scales3D />
      </Suspense>
    </div>
  );
};

export default HeroScene;
