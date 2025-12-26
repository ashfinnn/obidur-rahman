"use client";
import { motion } from "framer-motion";

export default function SectionDivider({ text = "SYSTEM CHECK" }: { text?: string }) {
  return (
    <div className="relative z-30 w-full overflow-hidden bg-[#06b6d4] text-black py-2 border-y border-black/20">
      <motion.div 
        className="flex whitespace-nowrap font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {Array(20).fill(text).map((t, i) => (
           <span key={i} className="mx-8 flex items-center gap-4">
              {t} <span className="w-1.5 h-1.5 bg-black rounded-full" />
           </span>
        ))}
      </motion.div>
    </div>
  );
}