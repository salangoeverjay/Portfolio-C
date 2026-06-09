import { useEffect, useRef, useState } from 'react';

interface Eye {
  xPct: number; // % from left of image
  yPct: number; // % from top of image
}

// Eye center positions as % of the rendered image dimensions
// Left eye (viewer's left), Right eye (viewer's right)
const EYES: Eye[] = [
  { xPct: 35.5, yPct: 47.5 },
  { xPct: 63.5, yPct: 47.5 },
];

const MAX_MOVE = 5; // max px the pupil travels from center
const PUPIL_SIZE_PCT = 4.2; // pupil diameter as % of image width

interface PupilOffset {
  x: number;
  y: number;
}

export default function EyeTracker({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<PupilOffset[]>(EYES.map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();

      const newOffsets = EYES.map((eye) => {
        // Eye center in screen coords
        const ex = rect.left + (eye.xPct / 100) * rect.width;
        const ey = rect.top + (eye.yPct / 100) * rect.height;

        const dx = e.clientX - ex;
        const dy = e.clientY - ey;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist === 0) return { x: 0, y: 0 };

        // Clamp movement to MAX_MOVE
        const scale = Math.min(dist, MAX_MOVE) / dist;
        return { x: dx * scale, y: dy * scale };
      });

      setOffsets(newOffsets);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <img src={src} alt={alt} style={{ display: 'block', width: '100%' }} />

      {EYES.map((eye, i) => {
        const pupilPx = `${PUPIL_SIZE_PCT}%`;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${eye.xPct}%`,
              top: `${eye.yPct}%`,
              width: pupilPx,
              height: pupilPx,
              borderRadius: '50%',
              background: 'rgba(30, 14, 4, 0.82)',
              transform: `translate(-50%, -50%) translate(${offsets[i].x}px, ${offsets[i].y}px)`,
              transition: 'transform 0.08s ease-out',
              pointerEvents: 'none',
              mixBlendMode: 'multiply',
            }}
          />
        );
      })}
    </div>
  );
}
