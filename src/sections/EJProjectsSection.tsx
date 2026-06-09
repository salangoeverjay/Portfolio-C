import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Image } from 'lucide-react';

const PROJECTS = [
  {
    num: '01',
    title: 'Cyber Security Project',
    desc: 'A web application focused on cybersecurity awareness, vulnerability detection, and security best practices. Implements threat analysis tools and security reporting features for educational purposes.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
    repo: 'https://github.com/salangoeverjay/cybersecurityproject',
    color: '#F87171',
  },
  {
    num: '02',
    title: 'KBSync',
    desc: 'A knowledge base synchronization platform that enables seamless content management and real-time data synchronization across multiple channels. Designed for teams to collaboratively manage structured information.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    repo: 'https://github.com/salangoeverjay/kbsync',
    color: '#58A6FF',
  },
  {
    num: '03',
    title: 'TerraSpec',
    desc: 'A GIS-powered terrain specification and analysis tool for environmental mapping and land assessment. Integrates spatial data processing with intuitive visualization dashboards for geospatial insights.',
    tags: ['Python', 'QGIS', 'JavaScript', 'PostgreSQL'],
    repo: 'https://github.com/salangoeverjay/TerraSpec',
    color: '#10B981',
  },
  {
    num: '04',
    title: 'StyleSync',
    desc: 'A fashion-focused web application that helps users discover, organize, and synchronize their style preferences and wardrobe. Features outfit recommendation algorithms and social sharing capabilities.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    repo: 'https://github.com/salangoeverjay/Stylesync',
    color: '#F472B6',
  },
  {
    num: '05',
    title: 'HCI Advertisement',
    desc: 'An interactive digital advertisement platform built on Human-Computer Interaction principles. Focuses on user engagement, intuitive interaction design, and accessibility-first UI/UX patterns.',
    tags: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'PHP'],
    repo: 'https://github.com/salangoeverjay/HCI-Advertisement',
    color: '#FB923C',
  },
  {
    num: '06',
    title: 'CleanupSD',
    desc: 'A community-driven waste management and cleanup coordination platform. Enables users to report, track, and organize cleanup activities in their locality with real-time mapping and volunteer management.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    repo: 'https://github.com/salangoeverjay/Cleanupsd',
    color: '#34D399',
  },
  {
    num: '07',
    title: 'CoffeeShop',
    desc: 'A full-featured coffee shop management and ordering system with menu management, inventory tracking, POS capabilities, and customer order history. Built for real-world deployment in local cafés.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    repo: 'https://github.com/salangoeverjay/CoffeeShop',
    color: '#D97706',
  },
  {
    num: '08',
    title: 'Hotel Management',
    desc: 'A comprehensive hotel management system handling room reservations, guest management, billing, staff scheduling, and analytics dashboard. Streamlines hotel operations end-to-end.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    repo: 'https://github.com/everjay08/Hotelmanagement',
    color: '#8B5CF6',
  },
  {
    num: '09',
    title: 'Reserve Rendezvous',
    desc: 'A restaurant and venue reservation platform with real-time table availability, automated booking confirmations, guest notifications, and an admin dashboard for managing reservations.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    repo: 'https://github.com/everjay08/Reserverendezvouzs',
    color: '#60A5FA',
  },
  {
    num: '10',
    title: 'Hotel Project',
    desc: 'A hotel booking and management web platform featuring integrated payment processing, real-time room availability, guest profile management, and detailed reporting tools for hotel administrators.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    repo: 'https://github.com/everjay08/hotel_project',
    color: '#A78BFA',
  },
];

export default function EJProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-3 block">
            What I've built
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }} />
          <p className="mt-5 text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base">
            A collection of projects that demonstrate my skills across web development,
            system design, and data-driven applications.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: '0 0 0 0 transparent',
              }}
              whileHover={{ boxShadow: `0 8px 30px rgba(0,0,0,0.3)` }}
            >
              {/* Image placeholder */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ background: `${p.color}12` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${p.color}18 0%, transparent 100%)` }} />
                <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
                  <Image size={36} strokeWidth={1} style={{ color: `${p.color}80` }} />
                  <span className="text-xs font-medium opacity-60">Project Preview</span>
                </div>
                {/* Number badge */}
                <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md"
                  style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30` }}>
                  {p.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-bold text-[var(--text)] text-base mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md font-medium"
                      style={{ background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  >
                    <GitBranch size={13} /> View on GitHub
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all hover:scale-110"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/salangoeverjay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'var(--surface)' }}
          >
            <GitBranch size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
