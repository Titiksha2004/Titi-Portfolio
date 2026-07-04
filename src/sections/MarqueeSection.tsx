import { useEffect, useRef } from 'react';

const row1Images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif"
];

const row2Images = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

// Triple for seamless scroll wrap-around
const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate section top relative to absolute page top
      const sectionTop = rect.top + window.scrollY;
      
      // Calculate offset based on scroll position relative to section
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      
      row1Ref.current.style.transform = `translate3d(${offset - 200}px, 0px, 0px)`;
      row2Ref.current.style.transform = `translate3d(${-(offset - 200)}px, 0px, 0px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set positions
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] w-full overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves Right on Scroll */}
        <div className="overflow-hidden w-full">
          <div 
            ref={row1Ref} 
            className="flex gap-3 w-max will-change-transform"
            style={{ transform: 'translate3d(-200px, 0px, 0px)' }}
          >
            {tripledRow1.map((url, i) => (
              <img
                key={`r1-${i}`}
                src={url}
                alt="Marquee Item Row 1"
                loading="lazy"
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 shadow-lg shadow-black/30"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Left on Scroll */}
        <div className="overflow-hidden w-full">
          <div 
            ref={row2Ref} 
            className="flex gap-3 w-max will-change-transform"
            style={{ transform: 'translate3d(200px, 0px, 0px)' }}
          >
            {tripledRow2.map((url, i) => (
              <img
                key={`r2-${i}`}
                src={url}
                alt="Marquee Item Row 2"
                loading="lazy"
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 shadow-lg shadow-black/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
