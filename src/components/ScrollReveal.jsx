import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal — smoothly animates children into view when scrolled into viewport.
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' | 'scale'
 * @param {number} delay - animation delay in ms
 * @param {number} threshold - intersection threshold (0–1)
 */
export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.12,
  distance = 48,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = () => {
    if (visible) return 'translate3d(0,0,0) scale(1)';
    switch (direction) {
      case 'down':   return `translate3d(0,-${distance}px,0)`;
      case 'left':   return `translate3d(-${distance}px,0,0)`;
      case 'right':  return `translate3d(${distance}px,0,0)`;
      case 'scale':  return 'translate3d(0,0,0) scale(0.88)';
      default:       return `translate3d(0,${distance}px,0)`; // up
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
