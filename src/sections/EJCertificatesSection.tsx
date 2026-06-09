import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Calendar, Building2, Image } from 'lucide-react';

interface Cert {
  title: string;
  org: string;
  year: string;
  color: string;
  image?: string;
}

// Placeholder certificates — replace with real data
const CERTIFICATES: Cert[] = [
  {
    title: 'Certificate Placeholder 1',
    org: 'Issuing Organization',
    year: '2024',
    color: '#58A6FF',
  },
  {
    title: 'Certificate Placeholder 2',
    org: 'Issuing Organization',
    year: '2024',
    color: '#8B5CF6',
  },
  {
    title: 'Certificate Placeholder 3',
    org: 'Issuing Organization',
    year: '2023',
    color: '#10B981',
  },
  {
    title: 'Certificate Placeholder 4',
    org: 'Issuing Organization',
    year: '2023',
    color: '#F59E0B',
  },
];

export default function EJCertificatesSection() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <section id="certificates" className="py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg,rgba(22,27,34,0.4) 0%,var(--bg) 100%)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-3 block">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Certificates &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[var(--text-muted)] max-w-2xl mx-auto mb-14 text-sm sm:text-base leading-relaxed"
        >
          I continuously invest in learning new technologies and improving my technical
          skills through professional certifications, training programs, and
          industry-recognized courses.
        </motion.p>

        {/* Certificate grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              onClick={() => setActive(cert)}
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              whileHover={{ boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${cert.color}40` }}
            >
              {/* Thumbnail */}
              <div className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{ background: `${cert.color}10` }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg,${cert.color}20,transparent)` }} />
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
                    <Image size={32} strokeWidth={1} style={{ color: `${cert.color}80` }} />
                    <span className="text-xs opacity-50">Certificate Preview</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${cert.color}15` }}>
                  <Award size={16} style={{ color: cert.color }} />
                </div>
                <h3 className="font-bold text-sm text-[var(--text)] mb-1 line-clamp-2 leading-snug group-hover:text-[var(--primary)] transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
                  <Building2 size={11} /> {cert.org}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-4">
                  <Calendar size={11} /> {cert.year}
                </div>
                <button
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                  style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}25` }}
                >
                  <ExternalLink size={11} /> View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state notice */}
        {CERTIFICATES.every(c => !c.image) && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-[var(--text-muted)] mt-8 opacity-50"
          >
            * Certificate images will be added soon
          </motion.p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-lg w-full rounded-2xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                style={{ background: 'var(--surface-2)' }}
                onClick={() => setActive(null)}
              >
                <X size={16} />
              </button>

              <div className="h-56 flex items-center justify-center"
                style={{ background: `${active.color}10` }}>
                {active.image ? (
                  <img src={active.image} alt={active.title} className="w-full h-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-[var(--text-muted)]">
                    <Award size={48} strokeWidth={1} style={{ color: `${active.color}60` }} />
                    <span className="text-sm opacity-50">Certificate Preview</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-bold text-[var(--text)] text-lg mb-2">{active.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5"><Building2 size={13} />{active.org}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={13} />{active.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
