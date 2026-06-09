import { useEffect, useRef, useState } from 'react';

const PROJECTS_ROW1 = [
  { src: '/projects/Coffee Shop.jpg', label: 'Coffee Shop' },
  { src: '/projects/Keto hotel.jpg', label: 'Keto Hotel' },
  { src: '/projects/Kabayan Sync app.jpg', label: 'Kabayan Sync App' },
  { src: '/projects/StyleSync.jpg', label: 'StyleSync' },
];
const PROJECTS_ROW2 = [
  { src: '/projects/KabayanSync promotional website.jpg', label: 'KabayanSync Website' },
  { src: '/projects/TerraSpec.jpg', label: 'TerraSpec' },
  { src: '/projects/Heartfelt.jpg', label: 'Heartfelt' },
  { src: '/projects/CleanUpDrive.jpg', label: 'CleanUpDrive' },
  { src: '/projects/First Logo Animation.gif', label: 'Logo Animation' },
];

const triple = <T,>(arr: T[]) => [...arr, ...arr, ...arr];

function ProjectTile({ src, label }: { src: string; label: string }) {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-[160px] sm:h-[200px] md:h-[240px] object-cover"
        loading="lazy"
      />
      <p className="px-4 py-3 text-[#D7E2EA] font-semibold uppercase tracking-widest text-xs sm:text-sm bg-white/[0.04]">
        {label}
      </p>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const val = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setOffset(val);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-20 md:pt-28 pb-10 overflow-hidden"
    >
      {/* Label */}
      <p className="text-center text-[#D7E2EA] opacity-30 uppercase tracking-[0.4em] text-xs font-medium mb-8">
        Projects
      </p>

      <div className="flex flex-col gap-4">
        {/* Row 1 — moves right */}
        <div
          className="flex gap-4"
          style={{ transform: `translateX(${offset - 300}px)`, willChange: 'transform' }}
        >
          {triple(PROJECTS_ROW1).map((project, i) => (
            <ProjectTile key={i} src={project.src} label={project.label} />
          ))}
        </div>

        {/* Row 2 — moves left */}
        <div
          className="flex gap-4"
          style={{ transform: `translateX(${-(offset - 300)}px)`, willChange: 'transform' }}
        >
          {triple(PROJECTS_ROW2).map((project, i) => (
            <ProjectTile key={i} src={project.src} label={project.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
