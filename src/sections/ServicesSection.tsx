import { type FC } from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  num: string;
  name: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    name: "System Design and Programming",
    desc: "Developing software that operates close to the hardware, including operating system kernels, memory management, runtime components, and processor-level abstractions. Passionate about understanding how computing systems work from the ground up and building efficient system software."
  },
  {
    num: "02",
    name: "Embedded Intelligence",
    desc: "Designing intelligent edge systems by integrating embedded hardware, sensors, and real-time software. Experienced in developing end-to-end solutions that combine microcontrollers, embedded computing, and AI-driven decision making for autonomous applications."
  },
  {
    num: "03",
    name: "Computer Vision and Machine Learning",
    desc: "Building computer vision & machine learning applications that leverage deep learning to interpret visual data in real time. Worked on projects involving object detection, pose estimation, interaction recognition, and edge AI deployment to solve practical real-world problems."
  },
  {
    num: "04",
    name: "Performance Engineering",
    desc: "Engineering software with a focus on efficiency, scalability, and optimized resource utilization. Interested in performance tuning across system software, embedded platforms, and AI inference to deliver reliable, high-performance applications."
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export const ServicesSection: FC = () => {
  return (
    <section 
      id="services" 
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-black z-10 relative"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            className="text-[#0C0C0C] font-black uppercase centered leading-none tracking-tight mb-16 sm:mb-20 md:mb-28" 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Spectrum
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {services.map((service, index) => (
            <FadeIn 
              key={service.num} 
              delay={index * 0.1} 
              y={30}
              className="w-full border-t border-[#0C0C0C]/15 last:border-b"
            >
              <div className="flex items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 text-left">
                {/* Number */}
                <div 
                  className="font-black text-[#0C0C0C] leading-none min-w-[70px] sm:min-w-[120px] md:min-w-[180px] select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.num}
                </div>

                {/* Name + Description Stack */}
                <div className="flex flex-col flex-1">
                  <h3 
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p 
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60 mt-2 max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
