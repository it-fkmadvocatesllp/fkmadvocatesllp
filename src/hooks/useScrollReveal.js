import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (selector = '.reveal') => {
  const containerRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return undefined;

    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(elements, {
        opacity: 0,
        y: 56,
        willChange: 'opacity, transform',
      });

      elements.forEach((el, index) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.95,
          delay: Number(el.dataset.revealDelay || 0) + (index % 3) * 0.04,
          ease: 'power3.out',
          clearProps: 'willChange',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [selector, reducedMotion]);

  return containerRef;
};
