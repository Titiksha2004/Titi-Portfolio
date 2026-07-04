import { useRef, type FC, type RefObject } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

interface ProjectData {
  num: string;
  category: string;
  name: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  url: string;
}

const projects: ProjectData[] = [
  {
    num: "01",
    category: "Personal",
    name: "BareMetal X",
    // col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Img1: "ChatGPT Image Jul 4, 2026, 01_23_42 AM.png",
    // col1Img2: "Screenshot 2026-07-04 012858.png",
    col1Img2: "Screenshot 2026-07-04 013030.png",
    // col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    col2Img: "ChatGPT Image Jul 4, 2026, 01_26_38 AM.png",
    url: "https://github.com/Titiksha2004/My-x86-Kernel-in-C.git"
  },
  {
    num: "02",
    category: "Personal",
    name: "HeapForge",
    col1Img1: "Malloc2.png",
    col1Img2: "Malloc3.png",
    col2Img: "Malloc1.png",
    url: "https://github.com/Titiksha2004/Built-Malloc.git"
  },
  {
    num: "03",
    category: "Personal",
    name: "XCore Emulator",
    col1Img1: "Emu1.png",
    col1Img2: "Emu2.png",
    col2Img: "Emu3.png",
    url: "https://github.com/Titiksha2004/Chip-8-Emulator.git"
  }
];

export const ProjectsSection: FC = () => {
  // Define references for each card target
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  // Track the scroll entry of card 1 and card 2
  const scroll1 = useScroll({
    target: ref1,
    offset: ["start end", "start start"]
  });

  const scroll2 = useScroll({
    target: ref2,
    offset: ["start end", "start start"]
  });

  // Card 0 scales down as Card 1 scrolls up
  const scale0 = useTransform(scroll1.scrollYProgress, [0, 1], [1, 0.94]);
  // Card 1 scales down as Card 2 scrolls up
  const scale1 = useTransform(scroll2.scrollYProgress, [0, 1], [1, 0.97]);
  // Card 2 remains at full scale
  const scale2 = 1;

  return (
    <section 
      id="projects" 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-10 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center" 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="w-full relative mt-10 space-y-16 sm:space-y-24">
          <ProjectCard 
            project={projects[0]} 
            index={0} 
            scale={scale0} 
            cardRef={ref0} 
          />
          <ProjectCard 
            project={projects[1]} 
            index={1} 
            scale={scale1} 
            cardRef={ref1} 
          />
          <ProjectCard 
            project={projects[2]} 
            index={2} 
            scale={scale2} 
            cardRef={ref2} 
          />
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  scale: MotionValue<number> | number;
  cardRef: RefObject<HTMLDivElement>;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index, scale, cardRef }) => {
  return (
    <div 
      ref={cardRef} 
      className="w-full h-[80vh] min-h-[580px] md:min-h-[700px] sticky flex items-start justify-center"
      style={{ 
        top: `calc(96px + ${index * 28}px)` // Offset card stack positions
      }}
    >
      <motion.div 
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-black/80"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center w-full border-b border-[#D7E2EA]/15 pb-4 md:pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <div 
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)' }}
            >
              {project.num}
            </div>
            {/* Project Stack */}
            <div className="flex flex-col text-left">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-xs font-semibold">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-bold uppercase text-lg sm:text-2xl md:text-3xl leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          {/* Live Project Button */}
          <LiveProjectButton href={project.url} className="scale-75 sm:scale-90 md:scale-100 origin-right" />
        </div>

        {/* Bottom Row: Image Grid */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8 overflow-hidden h-[calc(100%-100px)]">
          {/* Column 1: Stacked Images (40% width) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6 h-full justify-between">
            <img 
              src={project.col1Img1} 
              alt={`${project.name} Details 1`}
              className="w-full h-[clamp(130px,16vw,230px)] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-md shadow-black/40" 
            />
            <img 
              src={project.col1Img2} 
              alt={`${project.name} Details 2`}
              className="w-full h-[clamp(160px,22vw,340px)] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-md shadow-black/40" 
            />
          </div>

          {/* Column 2: Tall Image (60% width) */}
          <div className="w-full md:w-[60%] h-full">
            <img 
              src={project.col2Img} 
              alt={`${project.name} Overview`}
              className="w-full h-full min-h-[220px] md:min-h-0 object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-md shadow-black/40" 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
