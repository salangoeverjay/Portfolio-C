import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Heart, Download } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Learning', value: '4+' },
  { label: 'Commits', value: '100+' },
];

const highlights = [
  { icon: MapPin, label: 'Location', value: 'Philippines' },
  { icon: GraduationCap, label: 'Degree', value: 'BS Information Technology' },
  { icon: Briefcase, label: 'Focus', value: 'Full Stack Web Development' },
  { icon: Heart, label: 'Passion', value: 'Building impactful digital products' },
];

export default function EJAboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-3 block">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text)]">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[var(--text-muted)] leading-relaxed mb-5 text-base sm:text-lg">
              I'm <strong className="text-[var(--text)]">Ever Jay Salango</strong>, a passionate
              Full Stack Developer from the Philippines. I specialize in building modern,
              scalable web applications that deliver real value to users and businesses alike.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-5 text-base sm:text-lg">
              My expertise spans both frontend and backend development — from crafting pixel-perfect
              user interfaces with <strong className="text-[var(--text)]">React</strong>,{' '}
              <strong className="text-[var(--text)]">Tailwind CSS</strong>, and{' '}
              <strong className="text-[var(--text)]">Flutter</strong>, to architecting robust
              server-side systems with <strong className="text-[var(--text)]">Laravel</strong>,{' '}
              <strong className="text-[var(--text)]">PHP</strong>, and{' '}
              <strong className="text-[var(--text)]">MySQL</strong>.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8 text-base sm:text-lg">
              I'm driven by clean code, intuitive UX, and the challenge of solving real-world
              problems through technology. Whether it's a reservation system, GIS application,
              or a full e-commerce platform — I bring dedication and craftsmanship to every project.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(88,166,255,0.1)' }}>
                    <Icon size={16} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">{label}</p>
                    <p className="text-sm font-medium text-[var(--text)]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)', boxShadow: '0 4px 20px rgba(88,166,255,0.2)' }}
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-6 rounded-2xl text-center"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <p className="text-3xl font-extrabold gradient-text mb-1">{value}</p>
                  <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Visual card */}
            <div className="p-6 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <p className="text-sm text-[var(--text-muted)] mb-4 font-medium">What I bring to the table</p>
              {[
                { label: 'Problem Solving', pct: 90 },
                { label: 'Team Collaboration', pct: 85 },
                { label: 'Code Quality', pct: 88 },
                { label: 'Continuous Learning', pct: 95 },
              ].map(({ label, pct }) => (
                <div key={label} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[var(--text)]">{label}</span>
                    <span className="text-[var(--primary)]">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface-2)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg,#58A6FF,#8B5CF6)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
