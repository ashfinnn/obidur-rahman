'use client';
import { motion } from 'framer-motion';

export const GlitchText = ({ text, size = "large" }: { text: string, size?: "large" | "small" }) => {
  const fontSize = size === "large" ? "text-8xl md:text-9xl lg:text-[11rem]" : "text-4xl md:text-6xl";
  
  return (
    <div className={`relative group inline-block font-black tracking-tighter ${fontSize} leading-none select-none`}>
      {/* The Cyan Channel (Left Shift) */}
      <span className="absolute top-0 left-0 -ml-1 opacity-0 group-hover:opacity-70 group-hover:-translate-x-2 transition-all duration-100 text-cyan-500 mix-blend-multiply">
        {text}
      </span>
      
      {/* The Red Channel (Right Shift) */}
      <span className="absolute top-0 left-0 -ml-1 opacity-0 group-hover:opacity-70 group-hover:translate-x-2 transition-all duration-100 text-red-500 mix-blend-multiply">
        {text}
      </span>

      {/* Main Text */}
      <span className="relative z-10 text-black">
        {text}
      </span>
    </div>
  );
};