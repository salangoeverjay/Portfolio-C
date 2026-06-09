import { useRef, useState, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'translate3d(0,0,0)',
    transition: inactiveTransition,
    willChange: 'transform',
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setStyle({
      transform: `translate3d(${dx / strength}px, ${dy / strength}px, 0)`,
      transition: activeTransition,
      willChange: 'transform',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'translate3d(0,0,0)',
      transition: inactiveTransition,
      willChange: 'transform',
    });
  };

  const isNear = (e: React.MouseEvent) => {
    if (!ref.current) return false;
    const rect = ref.current.getBoundingClientRect();
    return (
      e.clientX >= rect.left - padding &&
      e.clientX <= rect.right + padding &&
      e.clientY >= rect.top - padding &&
      e.clientY <= rect.bottom + padding
    );
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={(e) => isNear(e) && handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
