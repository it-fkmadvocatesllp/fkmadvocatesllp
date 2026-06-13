import { useEffect, useState } from 'react';
import { motion as Motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDarkZone, setIsDarkZone] = useState(false);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const baseCursorColor = isDarkZone ? '#c9a227' : '#111111';
  const baseCursorGlow = isDarkZone ? 'rgba(201, 162, 39, 0.9)' : 'rgba(17, 17, 17, 0.45)';
  const ringBorder = isDarkZone ? 'rgba(201, 162, 39, 0.7)' : 'rgba(17, 17, 17, 0.55)';

  useEffect(() => {
    const updateZoneTheme = (target) => {
      setIsDarkZone(!!target?.closest?.('[data-cursor-theme="dark"]'));
    };

    const mouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      updateZoneTheme(e.target);
    };

    const handleHover = (e) => {
      const target = e.target;
      updateZoneTheme(target);
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable');
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2147483647,
        display: isVisible ? 'block' : 'none',
      }}
    >
      <Motion.div
        style={{
          position: 'absolute',
          width: 8,
          height: 8,
          backgroundColor: baseCursorColor,
          borderRadius: '50%',
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: `0 0 15px ${baseCursorGlow}`,
        }}
      />
      <Motion.div
        animate={{
          width: isHovering ? 48 : 30,
          height: isHovering ? 48 : 30,
          opacity: isHovering ? 1 : 0.8,
          scale: isClicking ? 0.8 : 1,
          borderColor: isDarkZone ? '#c9a227' : (isHovering ? 'var(--color-accent)' : ringBorder),
          boxShadow: isHovering ? '0 0 25px var(--color-accent-glow)' : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        style={{
          position: 'absolute',
          border: `1.5px solid ${baseCursorColor}`,
          borderRadius: '50%',
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};

export default Cursor;
