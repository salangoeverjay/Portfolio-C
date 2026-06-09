import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { X, Award, ExternalLink } from 'lucide-react';

const CERTS = [
  {
    title: 'CCNA: Switching, Routing & Wireless Essentials',
    org: 'Cisco / DNSC',
    year: '2025',
    file: '/cert-ccna.pdf',
    image: '/certificates/ccna.jpg',
    color: '#58A6FF',
  },
  {
    title: 'Professional Certificate',
    org: 'DNSC',
    year: '2025',
    file: '/cert-2.pdf',
    image: '/certificates/professional.jpg',
    color: '#8B5CF6',
  },
  {
    title: 'Java Programming Certificate',
    org: 'Sololearn',
    year: '2024',
    file: '/certificates/java_cropped.jpg',
    image: '/certificates/java_cropped.jpg',
    color: '#F87171',
  },
  {
    title: 'Sololearn Certificate',
    org: 'Sololearn',
    year: '2024',
    file: '/certificates/sololearn.png',
    image: '/certificates/sololearn.png',
    color: '#34D399',
  },
];

export default function CertificatesSection() {
  const [active, setActive] = useState<typeof CERTS[0] | null>(null);

  return (
    <section
      id="certificates"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Certificates
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-[#D7E2EA] font-light text-center leading-relaxed mx-auto mt-8 mb-16 sm:mb-20 opacity-60"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)', maxWidth: 560 }}
        >
          I continuously invest in learning new technologies and improving my technical skills
          through professional certifications, training programs, and industry-recognized courses.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {CERTS.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <motion.div
              className="group relative flex flex-col rounded-[32px] border overflow-hidden cursor-pointer"
              style={{ background: 'rgba(215,226,234,0.03)', borderColor: `${cert.color}30` }}
              whileHover={{ borderColor: `${cert.color}70`, y: -6 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActive(cert)}
            >
              {/* Top accent */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${cert.color},transparent)` }} />

              {/* Cert preview area */}
              <div
                className="relative h-40 sm:h-48 flex items-center justify-center overflow-hidden"
                style={{ background: `${cert.color}08` }}
              >
                {cert.image ? (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(12,12,12,0.6)' }}
                    >
                      <span className="text-[#D7E2EA] text-xs uppercase tracking-widest">Click to view</span>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <Award size={40} strokeWidth={1} style={{ color: `${cert.color}80` }} />
                    <span className="text-[#D7E2EA] text-xs opacity-30 uppercase tracking-widest">Click to view</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-[#D7E2EA] font-semibold leading-snug mb-2" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>
                  {cert.title}
                </p>
                <p className="text-[#D7E2EA] opacity-40 text-xs font-medium uppercase tracking-wider mb-1">{cert.org}</p>
                <p className="text-[#D7E2EA] opacity-30 text-xs">{cert.year}</p>

                <button
                  onClick={e => { e.stopPropagation(); window.open(cert.file, '_blank'); }}
                  className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full border transition-all hover:opacity-80"
                  style={{ borderColor: `${cert.color}40`, color: cert.color }}
                >
                  <ExternalLink size={11} /> View Certificate
                </button>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-[32px] overflow-hidden border"
              style={{ background: '#0C0C0C', borderColor: `${active.color}40` }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-[#D7E2EA] hover:opacity-70 transition-opacity"
                style={{ background: 'rgba(215,226,234,0.1)' }}
                onClick={() => setActive(null)}
              >
                <X size={16} />
              </button>

              {active.file.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={`${active.file}#view=FitH`}
                  className="w-full"
                  style={{ height: '70vh', border: 'none' }}
                  title={active.title}
                />
              ) : (
                <img
                  src={active.file}
                  alt={active.title}
                  className="w-full object-contain"
                  style={{ maxHeight: '70vh', background: '#000' }}
                />
              )}

              <div className="p-6 border-t" style={{ borderColor: `${active.color}20` }}>
                <p className="text-[#D7E2EA] font-semibold mb-1">{active.title}</p>
                <p className="text-[#D7E2EA] opacity-40 text-xs uppercase tracking-widest">{active.org} · {active.year}</p>
                <a
                  href={active.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full border transition-all hover:opacity-80"
                  style={{ borderColor: `${active.color}40`, color: active.color }}
                >
                  <ExternalLink size={11} /> Open Full PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
