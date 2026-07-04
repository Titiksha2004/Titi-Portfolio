import { useRef, type CSSProperties, type FC } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export const AnimatedText: FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const words = text.split(" ");
  const totalChars = text.length;
  
  let charIndex = 0;

  return (
    <p 
      ref={containerRef} 
      className={`relative flex flex-wrap justify-center row-gap-2 ${className}`}
      style={style}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char) => {
              const currentIdx = charIndex;
              charIndex++; // Increment overall index
              
              const start = currentIdx / totalChars;
              const end = Math.min(1, (currentIdx + 2) / totalChars); // slight overlap for smoothness

              return (
                <Character
                  key={currentIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 pointer-events-none"
      >
        {char}
      </motion.span>
    </span>
  );
};
