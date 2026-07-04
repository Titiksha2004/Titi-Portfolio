import { useState, useEffect, useRef, type ReactNode, type FC } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Check distance from element edge including padding
      const isInside = 
        clientX >= rect.left - padding &&
        clientX <= rect.right + padding &&
        clientY >= rect.top - padding &&
        clientY <= rect.bottom + padding;

      if (isInside) {
        setIsHovered(true);
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = clientX - centerX;
        const dy = clientY - centerY;
        setTransform({
          x: dx / strength,
          y: dy / strength
        });
      } else {
        setIsHovered(false);
        setTransform({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const style = {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition: isHovered ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div ref={ref} className={`inline-block ${className}`} style={style}>
      {children}
    </div>
  );
};
