"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- STABLE "GHOST" SCRAMBLE (No Layout Shift) ---
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
  const chars = "XYZ0123456789!@#";

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

        if (iteration >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
        iteration += 1;
      }, 20);
    };

    const timer = setTimeout(startScramble, delay);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="opacity-0">{text}</span>
      <span className="absolute inset-0">{displayText}</span>
    </span>
  );
};

const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeouts: NodeJS.Timeout[] = [];

    const advanceProgress = (current: number) => {
      if (current >= 100) {
        setIsComplete(true);
        setTimeout(() => {
          document.body.style.overflow = "";
          onLoaded();
        }, 800);
        return;
      }

      // Realistic non-linear loading
      const jump =
        current < 30
          ? Math.random() * 10 + 5
          : current < 80
            ? Math.random() * 5
            : Math.random() * 15 + 5;
      const delay =
        current < 30
          ? Math.random() * 100
          : current < 80
            ? Math.random() * 300 + 50
            : Math.random() * 50;

      const next = Math.min(current + jump, 100);

      timeouts.push(
        setTimeout(() => {
          setProgress(next);
          advanceProgress(next);
        }, delay),
      );
    };

    advanceProgress(0);
    return () => timeouts.forEach(clearTimeout);
  }, [onLoaded]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#050505] text-white overflow-hidden flex flex-col justify-between p-6 md:p-12"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* --- Background Elements --- */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
          {/* Subtle Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />

          {/* --- TOP BAR --- */}
          <div className="flex justify-between items-start relative z-10">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest text-cyan-500">
                  <ScrambleText text="SYSTEM BOOT" />
                </span>
              </div>
              <span className="font-mono text-[10px] text-gray-500 mt-1">
                <ScrambleText text="INITIALIZING KERNEL..." delay={200} />
              </span>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-gray-500">
              EST. {new Date().getFullYear()}
            </div>
          </div>

          {/* --- CENTER CONTENT --- */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative flex items-center gap-6 md:gap-10">
              {/* Decorative Progress Bar (Vertical) */}
              <div className="h-32 md:h-48 w-[2px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                  initial={{ height: "0%" }}
                  animate={{ height: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>

              {/* The Big Number */}
              <div className="relative">
                <h1 className="text-8xl md:text-[12rem] font-black leading-none tracking-tighter text-white tabular-nums">
                  {Math.floor(progress)}
                </h1>
                {/* Decorative Brackets */}
                <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-cyan-500/50" />
                <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-cyan-500/50" />
              </div>

              {/* Percentage Symbol */}
              <span className="self-start mt-4 md:mt-8 font-mono text-xl text-gray-500">
                %
              </span>
            </div>
          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="flex justify-between items-end relative z-10">
            <div className="font-mono text-[10px] text-gray-500">
              <ScrambleText text="LOADING ASSETS..." delay={400} />
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono text-[10px] text-gray-500 uppercase">
                Obidur Rahman
              </span>
              <span className="font-mono text-[10px] text-cyan-500">
                v2.0.4
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
