"use client";

import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiGrid, FiMail, FiActivity } from "react-icons/fi";

const navItems = [
  { id: "hero", icon: FiHome, label: "HOME" },
  { id: "about", icon: FiUser, label: "PROFILE" },
  { id: "experience", icon: FiBriefcase, label: "EXP" },
  { id: "research", icon: FiActivity, label: "R&D" }, // NEW LINK
  { id: "projects", icon: FiGrid, label: "BUILD" },
  { id: "contact", icon: FiMail, label: "CONTACT" },
];

export default function DynamicNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-auto max-w-[90vw]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100 }}
        className="flex items-center gap-1 p-1 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-x-auto no-scrollbar"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative group flex items-center gap-2 px-3 md:px-4 py-2 hover:bg-[#050505] transition-colors duration-200 shrink-0"
          >
            <item.icon
              className="text-[#050505] group-hover:text-white transition-colors duration-200"
              size={14}
            />
            <span className="hidden md:block font-mono text-[10px] font-bold tracking-widest text-[#050505] group-hover:text-white transition-colors duration-200">
              {item.label}
            </span>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </motion.div>
    </div>
  );
}