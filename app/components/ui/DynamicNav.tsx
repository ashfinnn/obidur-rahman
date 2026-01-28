"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiGrid, FiMail, FiBookOpen } from "react-icons/fi";

const navItems = [
  { id: "hero", icon: FiHome, label: "HOME" },
  { id: "about", icon: FiUser, label: "ABOUT" },
  { id: "experience", icon: FiBriefcase, label: "EXP" },
  { id: "research", icon: FiBookOpen, label: "RESEARCH" },
  { id: "projects", icon: FiGrid, label: "PROJECTS" },
  { id: "contact", icon: FiMail, label: "CONTACT" },
];

export default function DynamicNav() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[999] w-auto max-w-[95vw]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100 }}
        className="flex items-center gap-0.5 p-1 bg-white/95 backdrop-blur-sm border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-x-auto no-scrollbar"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 transition-all duration-200 shrink-0 ${
                isActive 
                  ? 'bg-[#050505] text-white' 
                  : 'hover:bg-gray-100 text-[#050505]'
              }`}
              aria-label={item.label}
            >
              <item.icon size={14} />
              <span className="hidden sm:block font-mono text-[9px] md:text-[10px] font-bold tracking-widest">
                {item.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4D00]" 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}