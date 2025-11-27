"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiPytorch,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiAwslambda,
} from "react-icons/si";

// --- 1. SCRAMBLE TEXT COMPONENT ---
const ScrambleText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  const scramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  // Trigger on view (with optional delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      scramble();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`${className} cursor-default inline-block`}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
};

// --- 2. TECH STACK DATA ---
const techStack = [
  { icon: SiPython, name: "Python", color: "group-hover:text-[#3776AB]" },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "group-hover:text-[#3178C6]",
  },
  { icon: SiNextdotjs, name: "Next.js", color: "group-hover:text-black" },
  { icon: SiPytorch, name: "PyTorch", color: "group-hover:text-[#EE4C2C]" },
  { icon: SiCplusplus, name: "C++", color: "group-hover:text-[#00599C]" },
  { icon: SiPostgresql, name: "Postgres", color: "group-hover:text-[#4169E1]" },
  { icon: SiDocker, name: "Docker", color: "group-hover:text-[#2496ED]" },
  { icon: SiAwslambda, name: "AWS", color: "group-hover:text-[#FF9900]" },
];

// --- 3. BACKGROUND ANIMATION ---
const MovingGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
    <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite]">
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
  </div>
);

// --- 4. MAIN COMPONENT ---
const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Animation Variants for Staggered Entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      data-theme="light"
      // lg:h-screen ensures it fits one screen on desktop. min-h-screen handles mobile.
      className="relative bg-[#f4f4f0] min-h-screen lg:h-screen overflow-hidden flex items-center py-20 lg:py-0"
    >
      <MovingGrid />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 md:pl-32 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* --- LEFT: NARRATIVE (Span 7) --- */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-block px-3 py-1 border border-black/10 rounded-full bg-white shadow-sm">
                <span className="font-mono text-xs text-cyan-600 tracking-widest uppercase">
                  <ScrambleText text="01 // The Story" delay={500} />
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-[0.9] tracking-tighter uppercase"
            >
              <ScrambleText text="BUILDING" className="block" delay={800} />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                WHAT MATTERS
              </span>
            </motion.h2>

            {/* Enhanced, Natural Bio */}
            <div className="space-y-5 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-light max-w-2xl">
              <motion.p variants={itemVariants}>
                My journey into tech started with a simple fascination: watching
                patterns emerge from chaos. Growing up in Bangladesh, I'd spend
                hours thinking about how tiny decisions compound into massive
                systems—how a single line of code could ripple into something
                that touches millions.
              </motion.p>
              <motion.p variants={itemVariants}>
                These days, I'm deep in the trenches of machine learning and
                full-stack development. I love that moment when theory clicks
                into practice—when an algorithm finally converges, or a UI just{" "}
                <span className="italic text-black font-medium">
                  feels right
                </span>
                . For me, great software sits at the intersection of elegant
                code and genuine human needs.
              </motion.p>
              <motion.p variants={itemVariants}>
                Outside of coding, I'm usually reading{" "}
                <span className="text-black font-semibold underline decoration-cyan-400 underline-offset-4 cursor-pointer hover:bg-cyan-100 transition-colors">
                  research papers
                </span>{" "}
                over coffee, or experimenting with edge AI models.
              </motion.p>
            </div>

            {/* --- INTEGRATED SKILLS ROW --- */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-black/10"
            >
              <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">
                CURRENT STACK
              </span>
              <div className="flex flex-wrap gap-6">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center gap-2 cursor-help relative"
                  >
                    <tech.icon
                      className={`text-2xl text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${tech.color}`}
                    />
                    {/* Tooltip */}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 text-[10px] font-mono bg-black text-white px-2 py-0.5 rounded whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: IMAGE (Span 5) --- */}
          <div className="lg:col-span-5 relative hidden lg:block h-full">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-md ml-auto"
            >
              <div className="relative aspect-[4/5] w-full rotate-2 hover:rotate-0 transition-transform duration-700 ease-out group">
                {/* Image Frame */}
                <div className="absolute inset-0 border-2 border-black translate-x-3 translate-y-3 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-200 shadow-2xl">
                  <Image
                    src="/me.jpg" // Ensure this path is correct in your public folder
                    alt="Obidur Rahman"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    priority
                  />

                  {/* Overlay Noise for texture */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Floating Stats Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-8 bg-black text-white p-6 shadow-2xl max-w-[200px] border-l-4 border-cyan-500"
                >
                  <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                    3<span className="text-cyan-500">+</span>
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 tracking-widest mt-1 uppercase leading-tight">
                    Years of <br /> Innovation
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Ambient Glow Behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-200/40 to-blue-200/40 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
