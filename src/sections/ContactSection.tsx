import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Mail, Linkedin, Github, Send, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "kamanatitiksha@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-10 py-24 border-t border-[#D7E2EA]/10 relative z-20 flex flex-col items-center select-none"
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Title */}
        <FadeIn delay={0} y={30}>
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Let&apos;s build something together
          </span>
        </FadeIn>
        
        <FadeIn delay={0.15} y={45} className="mt-4">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center" 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
          >
            Start a project
          </h2>
        </FadeIn>

        {/* Email Copy Card */}
        <FadeIn delay={0.3} y={30} className="w-full max-w-lg mt-12 sm:mt-16">
          <div 
            onClick={copyEmail}
            className="group relative flex items-center justify-between bg-[#131313] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-300 rounded-3xl p-6 cursor-pointer"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="p-3.5 bg-white/5 rounded-2xl text-[#D7E2EA] group-hover:scale-105 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs text-[#D7E2EA]/50 uppercase tracking-wider">Email Me</span>
                <span className="text-sm sm:text-lg font-medium select-all">{email}</span>
              </div>
            </div>
            
            <button className="p-3 bg-white/5 group-hover:bg-[#B600A8]/20 transition-all duration-300 rounded-xl text-[#D7E2EA]/60 group-hover:text-white">
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>
          </div>
        </FadeIn>

        {/* Social Links Row */}
        <FadeIn delay={0.45} y={20} className="mt-16 sm:mt-20">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Titiksha2004" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-[#131313] border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 hover:bg-[#B600A8]/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl text-[#D7E2EA]/80 hover:text-white"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://github.com/Titiksha2004" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-[#131313] border border-[#D7E2EA]/10 hover:border-[#7621B0]/50 hover:bg-[#7621B0]/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl text-[#D7E2EA]/80 hover:text-white"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://github.com/Titiksha2004" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-[#131313] border border-[#D7E2EA]/10 hover:border-[#BE4C00]/50 hover:bg-[#BE4C00]/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl text-[#D7E2EA]/80 hover:text-white"
            >
              <Send size={22} />
            </a>
          </div>
        </FadeIn>

        {/* Footer Text */}
        <div className="mt-24 w-full border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#D7E2EA]/40 gap-4">
          <p>© {new Date().getFullYear()} Titiksha. All rights reserved.</p>
          <p>Crafted for premium experience</p>
        </div>
      </div>
    </section>
  );
};
