"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Scramble Text Helper ---
const ScrambleNumber = ({ value }: { value: number }) => {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    // Simple visual scramble when number changes drastically
    // Since the parent controls the number increment smoothly,
    // we just render it. For a true scramble effect on numbers,
    // we usually just let the rapid state updates handle the visual "chaos".
    setDisplay(Math.floor(value));
  }, [value]);

  return <span className="tabular-nums">{display}</span>;
};

const ScrambleText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );

        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(startScramble, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    document.body.style.overflow = "hidden";

    const timeouts: NodeJS.Timeout[] = [];

    const advanceProgress = (current: number) => {
      if (current >= 100) {
        setIsComplete(true);
        setTimeout(() => {
          document.body.style.overflow = "";
          onLoaded();
        }, 1000); // Wait for exit animation
        return;
      }

      // Non-linear loading logic
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
          className="fixed inset-0 z-[9999] bg-[#050505] text-white overflow-hidden flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Noise & Grid Backgrounds */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="relative w-full max-w-[90vw] md:max-w-3xl h-[60vh] flex items-center justify-center">
            {/* LEFT COLUMN */}
            <div className="absolute left-0 h-full flex flex-col justify-between py-4 hidden md:flex">
              <div className="text-[10px] font-mono text-gray-500 tracking-widest">
                <ScrambleText text="SYSTEM CHECK" />
                <br />
                <ScrambleText text="INITIALIZING..." delay={300} />
              </div>
              <div className="text-[10px] font-mono text-gray-500 tracking-widest">
                {dimension.width} x {dimension.height}
              </div>
            </div>

            {/* CENTER: Progress */}
            <div className="flex items-center gap-8 md:gap-12">
              <div className="h-[300px] w-[1px] bg-gray-800 relative overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  initial={{ height: "0%" }}
                  animate={{ height: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>

              <div className="relative">
                <h1 className="text-8xl md:text-[10rem] font-bold leading-none tracking-tighter tabular-nums">
                  <ScrambleNumber value={progress} />
                </h1>
                <span className="absolute -top-4 -right-4 md:top-4 md:-right-8 text-sm md:text-xl font-mono text-gray-500">
                  %
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="absolute right-0 h-full flex flex-col justify-between py-4 items-end hidden md:flex">
              <div className="text-[10px] font-mono text-gray-500 tracking-widest text-right">
                EST. {new Date().getFullYear()}
                <br />
                <ScrambleText text="CHITTAGONG, BD" delay={500} />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-gray-500 tracking-widest">
                  <ScrambleText text="ONLINE" delay={800} />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
