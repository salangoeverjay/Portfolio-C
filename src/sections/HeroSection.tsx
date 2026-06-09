import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const VIDEO_SRC = '/3d4c9745e09a4d24ae8e3d3b151d477a.webm';

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col"
      style={{ overflowX: 'clip', position: 'relative' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden w-full">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[9vw] mt-10 sm:mt-8 md:mt-6 lg:mt-4"
        >
          ever jay salango
        </h1>
      </FadeIn>

      {/* Video Portrait — centered absolutely with Magnet */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <FadeIn delay={0.6} y={30}>
            <video
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            />
          </FadeIn>
        </Magnet>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-3 max-w-[180px] sm:max-w-[240px] md:max-w-[300px]">
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              Full Stack Developer building modern web apps &amp; digital experiences
            </p>
            <a
              href="#projects"
              className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm border-b border-[#D7E2EA]/40 pb-0.5 w-fit hover:opacity-70 transition-opacity"
            >
              View My Projects →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
