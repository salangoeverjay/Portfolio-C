import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Mail, ExternalLink, User } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeInOut' as const },
});

export default function EJHeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88,166,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,166,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — text */}
          <div className="flex-1 max-w-2xl">
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-sm text-[var(--accent)] font-medium tracking-wider uppercase">
                Available for work
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="font-extrabold leading-tight mb-2"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Ever Jay Salango.</span>
            </motion.h1>

            <motion.h2 {...fadeUp(0.3)} className="font-semibold text-[var(--text-muted)] mb-6"
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}>
              Full Stack Developer
            </motion.h2>

            <motion.p {...fadeUp(0.4)}
              className="text-[var(--text-muted)] leading-relaxed mb-8 max-w-xl"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
              I design and develop modern web applications that combine functionality,
              performance, and user-centered design. I am passionate about turning ideas
              into digital experiences that make a meaningful impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm"
                style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)', boxShadow: '0 4px 20px rgba(88,166,255,0.25)' }}
              >
                <ExternalLink size={16} /> View My Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 text-sm"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  background: 'var(--surface)',
                }}
              >
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="flex items-center gap-5">
              <a href="https://github.com/salangoeverjay" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm font-medium">
                <GitBranch size={18} /> salangoeverjay
              </a>
              <span className="text-[var(--border)]">|</span>
              <a href="mailto:everjay.salango08@gmail.com"
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm font-medium">
                <Mail size={18} /> everjay.salango08@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' as const }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #58A6FF, #8B5CF6, #10B981, #58A6FF)',
                  animation: 'spin 8s linear infinite',
                  opacity: 0.4,
                }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

              {/* Photo container */}
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)',
                  border: '3px solid var(--border)',
                }}
              >
                <div className="flex flex-col items-center gap-3 text-[var(--text-muted)]">
                  <User size={64} strokeWidth={1} />
                  <span className="text-xs font-medium tracking-wide">Profile Photo</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)', boxShadow: '0 4px 12px rgba(88,166,255,0.3)' }}
              >
                Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--accent)' }}
              >
                Open to Work ✦
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
