"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiCpu,
  FiCode,
  FiGlobe,
} from "react-icons/fi";

// --- 1. ENHANCED SCRAMBLE TEXT COMPONENT (With Hover Support) ---
const ScrambleText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

  const scramble = () => {
    let iteration = 0;

    // Clear existing interval to prevent glitches if hovered quickly
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            // Reveal logic: if iteration passed index, show real letter
            if (index < iteration) {
              return text[index];
            }
            // Otherwise show random char
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3; // Speed of reveal (lower denominator = faster)
    }, 30);
  };

  // Scramble once on mount
  useEffect(() => {
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={`${className} cursor-crosshair inline-block`}
      onMouseEnter={scramble} // <--- TRIGGER EFFECT ON HOVER
    >
      {displayText}
    </span>
  );
};

// --- 2. HERO COMPONENT ---
const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // --- Mouse Motion Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transformations for the 3D Card (Desktop Only)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Spotlight Gradient (Desktop Only)
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const backgroundGradient = useMotionTemplate`radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(6, 182, 212, 0.10), transparent 80%)`;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || window.innerWidth < 1024) return;
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Calculate normalized mouse position (-0.5 to 0.5)
      const xPct = (e.clientX - rect.left) / width - 0.5;
      const yPct = (e.clientY - rect.top) / height - 0.5;

      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center bg-[#050505] text-white selection:bg-cyan-500 selection:text-black"
    >
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* 2. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 3. Spotlight (Hidden on Mobile) */}
      <motion.div
        className="hidden lg:block absolute inset-0 pointer-events-none z-0"
        style={{ background: backgroundGradient }}
      />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center h-full pt-24 pb-12 lg:py-0">
        {/* LEFT: Meta Info (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex lg:col-span-2 flex-col justify-center h-full space-y-10 border-l border-white/5 pl-8 relative"
        >
          {/* Decorative scanning line */}
          <motion.div
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 w-[1px] h-24 bg-cyan-500 blur-[1px]"
          />

          <div className="space-y-2">
            <p className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-xs font-bold text-gray-300">ONLINE</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">
              Socials
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-xs font-mono text-gray-500 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <FiGithub className="group-hover:text-cyan-400 transition-colors" />{" "}
                /GITHUB
              </a>
              <a
                href="#"
                className="text-xs font-mono text-gray-500 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <FiLinkedin className="group-hover:text-cyan-400 transition-colors" />{" "}
                /LINKEDIN
              </a>
            </div>
          </div>
        </motion.div>

        {/* CENTER: Main Hero Text */}
        <motion.div className="col-span-1 lg:col-span-6 flex flex-col justify-center z-20">
          {/* Mobile Tag */}
          <div className="lg:hidden mb-6 flex items-center gap-2">
            <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-cyan-400 flex items-center gap-2">
              <FiGlobe /> CHITTAGONG, BD
            </div>
          </div>

          {/* THE MAIN TITLE WITH SCRAMBLE TEXT */}
          <h1 className="flex flex-col font-black leading-[0.9] tracking-tighter uppercase select-none group">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-6xl sm:text-8xl lg:text-[7.5rem] xl:text-[9rem] text-white block"
              >
                {/* Scramble on hover enabled via component */}
                <ScrambleText text="OBIDUR" />
              </motion.div>
            </div>

            <div className="flex items-baseline overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-6xl sm:text-8xl lg:text-[7.5rem] xl:text-[9rem] text-gray-600 block group-hover:text-white transition-colors duration-500"
              >
                <ScrambleText text="RAHMAN" />
              </motion.div>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-6xl sm:text-8xl lg:text-[7.5rem] xl:text-[9rem] text-cyan-500"
              >
                .
              </motion.span>
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 lg:mt-12 max-w-xl"
          >
            <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
              Architecting high-performance digital solutions.{" "}
              <br className="hidden md:block" />
              Focusing on{" "}
              <span className="text-white font-bold">
                React Ecosystems
              </span> and{" "}
              <span className="text-cyan-400 font-bold">
                Artificial Intelligence
              </span>
              .
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black font-bold font-mono text-sm w-full sm:w-auto text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative group-hover:text-black transition-colors z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
                  View Projects{" "}
                  <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border border-white/20 text-white font-mono text-sm hover:border-white/50 hover:bg-white/5 transition-all w-full sm:w-auto text-center uppercase tracking-wider"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: 3D Interactive Card (Desktop Only) */}
        <div className="hidden lg:flex col-span-4 h-full items-center justify-center perspective-1000 pl-12">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[3.5/5] bg-gradient-to-br from-white/5 to-black border border-white/10 rounded-2xl backdrop-blur-md p-8 shadow-2xl shadow-cyan-900/20"
          >
            {/* Inner Floating Elements */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

            {/* Tech Stack Float */}
            <motion.div
              style={{ translateZ: 40 }}
              className="flex justify-between items-start"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <FiCpu className="text-xl text-white" />
              </div>
              <div className="px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[10px] font-mono text-gray-300">
                v2.0.4
              </div>
            </motion.div>

            <motion.div style={{ translateZ: 20 }} className="mt-12 space-y-8">
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                  Core Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Node", "Tailwind", "Framer"].map(
                    (tech, i) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-[11px] font-mono text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                  Recent Activity
                </div>
                <div className="p-4 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] text-gray-400 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-green-500" />
                  <div className="flex items-center gap-2 text-green-400 mb-1">
                    <FiCode /> <span>Commit: 8f3a2c</span>
                  </div>
                  <p className="text-gray-300">
                    Refactored 3D logic for mobile.
                  </p>
                  <p className="opacity-50 mt-1">12 mins ago</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- MOBILE FOOTER --- */}
      <div className="lg:hidden absolute bottom-8 left-6 right-6 flex justify-between items-end border-t border-white/10 pt-4">
        <div>
          <p className="text-[10px] text-gray-500 font-mono mb-1">STATUS</p>
          <p className="text-xs text-green-400 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>{" "}
            ONLINE
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FiGithub size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>

      {/* --- DESKTOP FOOTER BAR --- */}
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full px-12 py-6 border-t border-white/5 flex justify-between items-end bg-[#050505]/80 backdrop-blur-sm z-20">
        <div className="flex gap-12">
          <div>
            <p className="text-[10px] text-gray-500 font-mono">SYSTEM</p>
            <p className="text-xs text-gray-300 font-mono">REACT / THREE.JS</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-mono">TIME</p>
            <p className="text-xs text-gray-300 font-mono">GMT+6</p>
          </div>
        </div>
        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
};

export default Hero;
