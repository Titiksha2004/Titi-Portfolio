import { type FC } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { ChromaKeyImage } from '../components/ChromaKeyImage';

export const HeroSection: FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col justify-between h-screen w-full overflow-hidden min-h-[600px] select-none bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <a 
          href="#about" 
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          About
        </a>
        <a 
          href="#services" 
          onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Niches
        </a>
        <a 
          href="#projects" 
          onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
        >
          Contact
        </a>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden text-center z-0 relative flex items-center justify-center flex-1 md:flex-initial">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            i&apos;m Titiksha
          </h1>
        </FadeIn>
      </div>

      {/* Absolutely Centered Portrait */}
      <FadeIn 
        delay={0.6} 
        y={30} 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] top-[45%] sm:top-auto sm:bottom-0 -translate-y-1/2 sm:translate-y-0"
      >
        <Magnet 
          padding={150} 
          strength={3} 
          activeTransition="transform 0.3s ease-out" 
          inactiveTransition="transform 0.6s ease-in-out" 
          className="w-full flex justify-center"
        >
          <ChromaKeyImage 
            src="/ChatGPT Image Jul 4, 2026, 12_33_56 AM.png"
            alt="Titiksha Portrait" 
            className="w-full h-auto object-cover pointer-events-none select-none rounded-2xl shadow-2xl shadow-black/50" 
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full z-20 mt-auto">
        <FadeIn delay={0.35} y={20}>
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an Engineer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};
