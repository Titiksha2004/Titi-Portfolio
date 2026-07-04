import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection: React.FC = () => {
  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="relative flex flex-col justify-center items-center min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 3D Decorative Corner Elements */}
      {/* Top Left: Moon Icon */}
      <FadeIn 
        delay={0.1} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none select-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="3D Moon Icon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-80" 
        />
      </FadeIn>

      {/* Bottom Left: 3D Object */}
      <FadeIn 
        delay={0.25} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none select-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D Object" 
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain opacity-80" 
        />
      </FadeIn>

      {/* Top Right: Lego Icon */}
      <FadeIn 
        delay={0.15} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none select-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="3D Lego Icon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-80" 
        />
      </FadeIn>

      {/* Bottom Right: 3D Group */}
      <FadeIn 
        delay={0.3} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none select-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D Group Object" 
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain opacity-80" 
        />
      </FadeIn>

      {/* Content Block */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center" 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>
        
        {/* Animated Paragraph */}
        <div className="mt-10 sm:mt-14 md:mt-16 max-w-[560px]">
          <AnimatedText 
            text="With more than three years of experience in building stuff, i focus on electronics, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium leading-relaxed text-center"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as any}
          />
        </div>

        {/* Button */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.1} y={20}>
            <ContactButton onClick={handleContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
