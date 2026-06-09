import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const FEATURED = [
  {
    num: '01',
    category: 'Productivity',
    name: 'KabayanSync',
    desc: 'Knowledge base synchronization platform with a companion app and promotional website for real-time content management.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    repo: 'https://github.com/salangoeverjay/kbsync',
    live: 'https://hci-advertisement.vercel.app/',
    images: ['/projects/Kabayan Sync app.jpg', '/projects/KabayanSync promotional website.jpg', '/projects/KabayanSync promotional website.jpg'],
  },
  {
    num: '02',
    category: 'POS / Retail',
    name: 'CoffeeShop',
    desc: 'Full-featured coffee shop management & POS system with admin dashboard and inventory tracking.',
    tags: ['PHP', 'MySQL'],
    repo: 'https://github.com/salangoeverjay/CoffeeShop',
    live: null,
    images: ['/projects/Coffee Shop Admin Dashboard.png', '/projects/Coffee Shop Dashboard.jpg.png', '/projects/Coffee Shop.jpg'],
  },
  {
    num: '03',
    category: 'Web Security',
    name: 'Cyber Security Project',
    desc: 'Cybersecurity awareness & vulnerability detection platform with threat analysis dashboards.',
    tags: ['PHP', 'JavaScript', 'MySQL'],
    repo: 'https://github.com/salangoeverjay/cybersecurityproject',
    live: 'https://cybersecurityproject-production-9439.up.railway.app/login',
    images: ['/projects/Cybersecurity loginpage.png', '/projects/Cybersecurity landingpage.png', '/projects/Cybersecurity dashboard.png'],
  },
];

const MORE_PROJECTS = [
  { num: '04', name: 'StyleSync', category: 'Fashion', desc: 'Wardrobe & style management app with outfit recommendations and social sharing.', tags: ['Laravel', 'Bootstrap'], repo: 'https://github.com/salangoeverjay/Stylesync', color: '#F472B6' },
  { num: '05', name: 'HCI Advertisement', category: 'UI/UX', desc: 'Interactive ad platform built on HCI principles for intuitive user engagement.', tags: ['JavaScript', 'Bootstrap'], repo: 'https://github.com/salangoeverjay/HCI-Advertisement', color: '#FB923C' },
  { num: '06', name: 'CleanupSD', category: 'Community', desc: 'Waste management & cleanup coordination platform with real-time mapping.', tags: ['Laravel', 'Tailwind CSS'], repo: 'https://github.com/salangoeverjay/Cleanupsd', color: '#34D399' },
  { num: '07', name: 'Reserve Rendezvous', category: 'Reservations', desc: 'Restaurant & venue booking system with real-time availability and guest notifications.', tags: ['PHP', 'Tailwind CSS'], repo: 'https://github.com/everjay08/Reserverendezvouzs', color: '#60A5FA' },
  { num: '08', name: 'Hotel Project', category: 'Hospitality', desc: 'Hotel booking platform with payment processing and room availability management.', tags: ['Laravel', 'Bootstrap'], repo: 'https://github.com/everjay08/hotel_project', color: '#A78BFA' },
];

const TOTAL = FEATURED.length;

function FeaturedCard({ project, index, onLiveClick }: { project: typeof FEATURED[0]; index: number; onLiveClick: (project: typeof FEATURED[0]) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const borderRadius = 'clamp(40px, 5vw, 60px)';

  return (
      <div ref={cardRef} className="h-[85vh] flex items-start justify-center" style={{ paddingTop: `${index * 48}px` }}>
      <motion.div
        className="sticky top-24 md:top-32 w-full border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
        style={{ scale, borderRadius, transformOrigin: 'top center' }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-3">
          <div className="flex items-baseline gap-4">
            <span className="font-black text-[#D7E2EA] leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest opacity-50" style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}>
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase tracking-wide" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}>
                {project.name}
              </span>
              <span className="text-[#D7E2EA] font-light opacity-50 mt-1" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}>
                {project.desc}
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map(t => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-medium text-[#D7E2EA] border border-[#D7E2EA]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <LiveProjectButton />
            </a>
          ) : (
            <LiveProjectButton onClick={() => onLiveClick(project)} />
          )}
        </div>

        {/* Image grid — real project screenshots */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.images[0]}
              alt={`${project.name} screenshot 1`}
              className="w-full object-cover rounded-[clamp(20px,3vw,40px)]"
              style={{ height: 'clamp(130px,16vw,230px)' }}
            />
            <img
              src={project.images[1]}
              alt={`${project.name} screenshot 2`}
              className="w-full object-cover rounded-[clamp(20px,3vw,40px)]"
              style={{ height: 'clamp(160px,22vw,340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.images[2]}
              alt={`${project.name} screenshot 3`}
              className="w-full object-cover rounded-[clamp(20px,3vw,40px)]"
              style={{ height: 'clamp(310px,40vw,590px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [modalProject, setModalProject] = useState<typeof FEATURED[0] | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Featured sticky cards */}
      <div
        className="flex flex-col"
        style={{
          // Reserve vertical space for the stacked featured cards but subtract
          // the sticky offset (top-24 = 6rem) so following content doesn't
          // get pushed too far down and overflow.
          // For responsive breakpoints (md:top-32) this is an approximation;
          // adjust if you need pixel-perfect alignment on larger screens.
          marginBottom: `calc(85vh + ${48 * (FEATURED.length - 1)}px - 6rem)`,
        }}
      >
        {FEATURED.map((project, index) => (
          <FeaturedCard key={project.num} project={project} index={index} onLiveClick={setModalProject} />
        ))}
      </div>

      {/* More projects grid */}
      <FadeIn y={30}>
        <p className="text-[#D7E2EA] font-light uppercase tracking-widest text-center opacity-50 mb-10" style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)' }}>
          More Projects
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {MORE_PROJECTS.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.07} y={25}>
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-5 rounded-2xl border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ background: 'rgba(215,226,234,0.03)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium uppercase tracking-widest opacity-40 text-[#D7E2EA]">{p.category}</span>
                <span className="text-xs font-black text-[#D7E2EA] opacity-20">{p.num}</span>
              </div>
              <div className="w-8 h-1 rounded-full mb-3" style={{ background: p.color }} />
              <h3 className="font-semibold text-[#D7E2EA] mb-2 group-hover:opacity-80 transition-opacity" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
                {p.name}
              </h3>
              <p className="text-xs text-[#D7E2EA] opacity-40 leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-full text-xs text-[#D7E2EA] opacity-50 border border-[#D7E2EA]/15">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Live demo unavailable modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{ background: 'rgba(0,0,0,0.7)' }}
          onClick={() => setModalProject(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-[#D7E2EA]/15 p-6 sm:p-8"
            style={{ background: '#16181A' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 text-[#D7E2EA] opacity-50 hover:opacity-100 transition-opacity text-xl leading-none cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={modalProject.images[2]}
              alt={`${modalProject.name} preview`}
              className="w-full h-[180px] object-cover rounded-2xl mb-5"
            />
            <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-lg mb-2">
              {modalProject.name}
            </h3>
            <p className="text-[#D7E2EA] opacity-60 text-sm leading-relaxed mb-6">
              No live demo is hosted for this project yet — check out the source code on GitHub instead.
            </p>
            <a
              href={modalProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 text-sm hover:bg-[#D7E2EA]/10 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
