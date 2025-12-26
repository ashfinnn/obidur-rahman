"use client";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiGrid, FiMail } from "react-icons/fi";

const navItems = [
  { id: "hero", icon: FiHome, label: "Home" },
  { id: "about", icon: FiUser, label: "About" },
  { id: "projects", icon: FiGrid, label: "Work" },
  { id: "contact", icon: FiMail, label: "Contact" },
];

export default function DynamicNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999]">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex items-center gap-2 p-2 bg-[#050505]/80 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative group p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label={item.label}
          >
            <item.icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-mono font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}