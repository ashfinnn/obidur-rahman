"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative z-20 w-full py-4 sm:py-6 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-[#FF4D00] via-white/20 to-transparent origin-left"
        />
      </div>
    </div>
  );
}