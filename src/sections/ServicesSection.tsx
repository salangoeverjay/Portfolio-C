import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import photo3 from '../../img/Photo 3.jpg';
import photo4 from '../../img/Photo 4.jpg';

const SKILL_GROUPS = [
  {
    num: '01',
    name: 'Programming Languages',
    skills: ['PHP', 'JavaScript', 'Python', 'SQL', 'Java', 'Dart'],
    desc: 'Proficient in building server-side logic, scripting, data querying, and cross-platform mobile applications.',
  },
  {
    num: '02',
    name: 'Frameworks & Technologies',
    skills: ['Laravel', 'Flutter', 'Tailwind CSS', 'Bootstrap'],
    desc: 'Experienced in full-stack frameworks and utility-first CSS for building modern, responsive, and scalable applications.',
  },
  {
    num: '03',
    name: 'Databases',
    skills: ['MySQL', 'Firebase', 'PostgreSQL'],
    desc: 'Skilled in relational and NoSQL database design, querying, and real-time data management across multiple platforms.',
  },
  {
    num: '04',
    name: 'Tools & Platforms',
    skills: ['Git & GitHub', 'XAMPP', 'Figma', 'QGIS', 'Laragon'],
    desc: 'Comfortable with version control, local development environments, UI design tools, and geospatial analysis platforms.',
  },
  {
    num: '05',
    name: 'Creative',
    skills: ['Photography'],
    desc: 'Capturing moments through the lens — composition, lighting, and visual storytelling alongside my development work.',
  },
];

const PHOTOS = [
  { src: '/projects/Photo 1.jpg', label: 'Photo 1' },
  { src: '/projects/Photo 2.jpg', label: 'Photo 2' },
  { src: photo3 as unknown as string, label: 'Photo 3' },
  { src: photo4 as unknown as string, label: 'Photo 4' },
];

const LEVELS: Record<string, number> = {
  PHP: 85, JavaScript: 90, Python: 75, SQL: 80, Java: 70, Dart: 65,
  Laravel: 85, Flutter: 70, 'Tailwind CSS': 92, Bootstrap: 88,
  MySQL: 88, Firebase: 75, PostgreSQL: 72,
  'Git & GitHub': 88, XAMPP: 83, Figma: 75, QGIS: 65, Laragon: 82,
  Photography: 80,
};

function SkillPill({ label, inView, delay }: { label: string; inView: boolean; delay: number }) {
  const pct = LEVELS[label] ?? 75;
  return (
    <div className="flex items-center gap-3 mb-2.5 last:mb-0">
      <span
        className="font-medium text-[#0C0C0C] shrink-0"
        style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)', minWidth: 130 }}
      >
        {label}
      </span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(12,12,12,0.12)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg,#0C0C0C80,#0C0C0C)' }}
        />
      </div>
      <span className="text-xs font-semibold text-[#0C0C0C] opacity-50 w-8 text-right shrink-0">{pct}%</span>
    </div>
  );
}

function SkillItem({ group, i, openPhoto }: { group: typeof SKILL_GROUPS[0]; i: number; openPhoto?: (p: { src: string; label: string }) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <FadeIn delay={i * 0.1} y={30}>
      <div
        ref={ref}
        className="flex items-start gap-6 py-8 sm:py-10 md:py-12"
        style={{
          borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
          borderBottom: '1px solid rgba(12,12,12,0.15)',
        }}
      >
        <span
          className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
          style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
        >
          {group.num}
        </span>
        <div className="flex flex-col justify-center pt-2 flex-1">
          <span
            className="font-medium uppercase text-[#0C0C0C] mb-1"
            style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
          >
            {group.name}
          </span>
          <span
            className="font-light leading-relaxed text-[#0C0C0C] mb-4"
            style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)', opacity: 0.55 }}
          >
            {group.desc}
          </span>
          <div className="max-w-lg">
            {group.skills.map((s, si) => (
              <SkillPill key={s} label={s} inView={inView} delay={0.2 + si * 0.07} />
            ))}
          </div>
          {group.name === 'Creative' && (
            <div className="flex gap-3 sm:gap-4 mt-5 max-w-lg">
              {PHOTOS.map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.label}
                  onClick={() => openPhoto?.(photo)}
                  role="button"
                  className="w-1/2 h-[140px] sm:h-[180px] object-cover rounded-2xl cursor-pointer"
                  style={{ border: '1px solid rgba(12,12,12,0.12)' }}
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function ServicesSection() {
  const [activePhoto, setActivePhoto] = useState<{ src: string; label: string } | null>(null);
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SKILL_GROUPS.map((group, i) => (
          <SkillItem key={group.num} group={group} i={i} openPhoto={setActivePhoto} />
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.8)' }}
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 text-white opacity-80 hover:opacity-100 text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>

              <img
                src={activePhoto.src}
                alt={activePhoto.label}
                className="w-full h-[70vh] object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
