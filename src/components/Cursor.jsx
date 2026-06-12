import { useEffect, useState } from 'react';
import { motion as Motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDarkZone, setIsDarkZone] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const baseCursorColor = isDarkZone ? '#ffffff' : '#111111';
  const baseCursorGlow = isDarkZone ? 'rgba(255, 255, 255, 0.9)' : 'rgba(17, 17, 17, 0.45)';
  const ringBorder = isDarkZone ? 'rgba(255, 255, 255, 0.7)' : 'rgba(17, 17, 17, 0.55)';

  useEffect(() => {
    const updateZoneTheme = (target) => {
      if (target?.closest?.('[data-cursor-theme="dark"]')) {
        setIsDarkZone(true);
      } else {
        setIsDarkZone(false);
      }
    };

    const mouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      updateZoneTheme(e.target);
    };

    const handleHover = (e) => {
      const target = e.target;
      const labelledTarget = target.closest?.('[data-cursor-label]');
      updateZoneTheme(target);
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable') ||
        labelledTarget
      ) {
        setIsHovering(true);
        setCursorLabel(labelledTarget?.dataset.cursorLabel || 'View');
      } else {
        setIsHovering(false);
        setCursorLabel('');
      }
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
          width: isHovering ? 72 : 30,
          height: isHovering ? 72 : 30,
          opacity: isHovering ? 1 : 0.8,
          scale: isClicking ? 0.8 : 1,
          borderColor: isDarkZone ? '#ffffff' : (isHovering ? 'var(--color-accent)' : ringBorder),
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
          display: 'grid',
          placeItems: 'center',
          color: isDarkZone ? '#ffffff' : 'var(--color-text)',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {isHovering && cursorLabel}
      </Motion.div>
    </div>
  );
};

export default Cursor;
