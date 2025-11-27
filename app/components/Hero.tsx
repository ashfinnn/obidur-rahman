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
  FiDatabase,
} from "react-icons/fi";

// --- 1. STABLE "GHOST" SCRAMBLE (Zero Layout Shift) ---
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
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

  useEffect(() => {
    const startScramble = () => {
      let iteration = 0;
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (letter === " ") return " ";
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );
        if (iteration >= text.length) clearInterval(intervalRef.current!);
        iteration += 1 / 2;
      }, 30);
    };
    const timer = setTimeout(startScramble, delay);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* The Ghost: Reserves exact space, invisible */}
      <span className="opacity-0">{text}</span>
      {/* The Animation: Overlays the ghost */}
      <span className="absolute inset-0">{displayText}</span>
    </span>
  );
};

// --- 2. HERO COMPONENT ---
const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse Motion Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const backgroundGradient = useMotionTemplate`radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(6, 182, 212, 0.10), transparent 80%)`;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || window.innerWidth < 1024) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
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
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <motion.div
        className="hidden lg:block absolute inset-0 pointer-events-none z-0"
        style={{ background: backgroundGradient }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center h-full pt-24 pb-12 lg:py-0">
        {/* LEFT: Meta Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex lg:col-span-2 flex-col justify-center h-full space-y-10 border-l border-white/5 pl-8 relative"
        >
          <motion.div
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 w-[1px] h-24 bg-cyan-500 blur-[1px]"
          />
          <div className="space-y-2">
            <p className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">
              Role
            </p>
            <p className="text-xs font-bold text-gray-300">
              DATA SCIENTIST &<br />
              ML ENGINEER
            </p>
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
          <div className="mb-6 flex items-center gap-2">
            <div className="px-2 py-1 bg-cyan-900/20 border border-cyan-500/20 rounded text-[10px] font-mono text-cyan-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />{" "}
              DATA SCIENTIST
            </div>
            <div className="lg:hidden px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400">
              CHITTAGONG, BD
            </div>
          </div>

          <h1 className="flex flex-col font-black leading-[0.9] tracking-tighter uppercase select-none group">
            {/* NAME ROW 1 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] text-white block"
              >
                <ScrambleText text="OBIDUR" />
              </motion.div>
            </div>
            {/* NAME ROW 2 */}
            <div className="flex items-baseline overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] text-gray-600 block group-hover:text-white transition-colors duration-500"
              >
                <ScrambleText text="RAHMAN" />
              </motion.div>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] text-cyan-500"
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
              Transforming complex data into actionable intelligence.{" "}
              <br className="hidden md:block" />
              Specializing in{" "}
              <span className="text-white font-bold">
                Python, PyTorch
              </span> and{" "}
              <span className="text-cyan-400 font-bold">
                Scalable ML Models
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
                  View Models{" "}
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

        {/* RIGHT: 3D Interactive Card */}
        <div className="hidden lg:flex col-span-4 h-full items-center justify-center perspective-1000 pl-12">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[3.5/5] bg-gradient-to-br from-white/5 to-black border border-white/10 rounded-2xl backdrop-blur-md p-8 shadow-2xl shadow-cyan-900/20"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

            <motion.div
              style={{ translateZ: 40 }}
              className="flex justify-between items-start"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <FiDatabase className="text-xl text-white" />
              </div>
              <div className="px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[10px] font-mono text-gray-300">
                ACTIVE
              </div>
            </motion.div>

            <motion.div style={{ translateZ: 20 }} className="mt-12 space-y-8">
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                  Toolkit
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "PyTorch", "TensorFlow", "SQL", "AWS"].map(
                    (tech) => (
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
                  Latest Model
                </div>
                <div className="p-4 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] text-gray-400 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-green-500" />
                  <div className="flex items-center gap-2 text-green-400 mb-1">
                    <FiCode /> <span>Accuracy: 98.4%</span>
                  </div>
                  <p className="text-gray-300">
                    Optimized geometric dilution model.
                  </p>
                  <p className="opacity-50 mt-1">Deployed on Edge</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Footer Status */}
      <div className="lg:hidden absolute bottom-8 left-6 right-6 flex justify-between items-end border-t border-white/10 pt-4">
        <div>
          <p className="text-[10px] text-gray-500 font-mono mb-1">STATUS</p>
          <p className="text-xs text-green-400 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>{" "}
            ONLINE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
