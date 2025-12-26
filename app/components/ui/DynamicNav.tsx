"use client";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiGrid, FiMail } from "react-icons/fi";

const navItems = [
  { id: "hero", icon: FiHome, label: "HOME" },
  { id: "about", icon: FiUser, label: "PROFILE" },
  { id: "projects", icon: FiGrid, label: "INDEX" },
  { id: "contact", icon: FiMail, label: "CONTACT" },
];

export default function DynamicNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-auto">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100 }}
        // Brutalist / Swiss Styling: White bg, Black border, Hard Shadow
        className="flex items-center gap-1 p-1 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative group flex items-center gap-2 px-4 py-2 hover:bg-[#050505] transition-colors duration-200"
          >
            {/* Icon */}
            <item.icon 
              className="text-[#050505] group-hover:text-white transition-colors duration-200" 
              size={14} 
            />
            
            {/* Label (Hidden on small mobile, visible on desktop) */}
            <span className="hidden md:block font-mono text-[10px] font-bold tracking-widest text-[#050505] group-hover:text-white transition-colors duration-200">
              {item.label}
            </span>

            {/* Active Indicator (Optional - simplistic dot) */}
            <div className="absolute top-1 right-1 w-1 h-1 bg-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </motion.div>
    </div>
  );
}