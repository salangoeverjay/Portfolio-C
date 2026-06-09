import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layers, Database, Wrench } from 'lucide-react';

const CATEGORIES = [
  {
    icon: Code,
    title: 'Programming Languages',
    color: '#58A6FF',
    skills: [
      { name: 'JavaScript', pct: 90 },
      { name: 'PHP', pct: 85 },
      { name: 'Python', pct: 75 },
      { name: 'SQL', pct: 80 },
      { name: 'Java', pct: 70 },
      { name: 'Dart', pct: 65 },
    ],
  },
  {
    icon: Layers,
    title: 'Frameworks & Technologies',
    color: '#8B5CF6',
    skills: [
      { name: 'Laravel', pct: 85 },
      { name: 'Tailwind CSS', pct: 92 },
      { name: 'Bootstrap', pct: 88 },
      { name: 'Flutter', pct: 70 },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    color: '#10B981',
    skills: [
      { name: 'MySQL', pct: 88 },
      { name: 'Firebase', pct: 75 },
      { name: 'PostgreSQL', pct: 72 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    color: '#F59E0B',
    skills: [
      { name: 'Git & GitHub', pct: 88 },
      { name: 'Figma', pct: 75 },
      { name: 'XAMPP / Laragon', pct: 85 },
      { name: 'QGIS', pct: 65 },
    ],
  },
];

function SkillBar({ name, pct, color, delay }: { name: string; pct: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[var(--text)]">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface-2)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function EJSkillsSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="skills" className="py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, rgba(22,27,34,0.5) 100%)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-3 block">
            What I work with
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }} />
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map(({ icon: Icon, title, color, skills }, ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="p-6 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-bold text-[var(--text)] text-base">{title}</h3>
              </div>

              {/* Skill bars */}
              {skills.map(({ name, pct }, si) => (
                <SkillBar key={name} name={name} pct={pct} color={color} delay={0.1 + si * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            'PHP','JavaScript','Python','SQL','Java','Dart',
            'Laravel','Flutter','Tailwind CSS','Bootstrap',
            'MySQL','Firebase','PostgreSQL','Git','GitHub',
            'XAMPP','Figma','QGIS','Laragon','REST APIs',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
