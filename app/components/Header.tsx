"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. STABLE "GHOST" SCRAMBLE TEXT ---
const ScrambleText = ({
  text,
  hover = false,
}: {
  text: string;
  hover?: boolean;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "XYZ0123456789!@#";

  const scramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (iteration >= text.length) clearInterval(intervalRef.current!);
      iteration += 1;
    }, 20);
  };

  useEffect(() => {
    if (!hover) scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      onMouseEnter={hover ? scramble : undefined}
      className="relative inline-block whitespace-nowrap"
    >
      <span className="opacity-0">{text}</span>
      <span className="absolute left-0 top-0">{displayText}</span>
    </span>
  );
};

// --- DATA ---
const navItems = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXP" }, // Added Experience
  { id: "contact", label: "CONTACT" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Ashfinn", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/obidur-rahman-shawal",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState<string | null>(null); // Null initial state for hydration

  // Handle Scroll & Active Section
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -20% 0px", threshold: 0.2 },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    // Clock Logic (Client-side only)
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  // Lock Body Scroll on Mobile Menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* --- DESKTOP SIDEBAR (Fixed Left) --- */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-24 flex-col justify-between py-10 z-50 border-r border-white/5 bg-[#050505] backdrop-blur-md"
      >
        {/* Logo Area */}
        <div className="flex flex-col items-center gap-6">
          <Link
            href="#hero"
            className="font-black text-xl tracking-tighter text-white hover:text-cyan-500 transition-colors"
          >
            OR.
          </Link>
          {/* Vertical Line Decor */}
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* Vertical Navigation */}
        <nav className="flex flex-col w-full items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="group relative flex items-center justify-center w-full py-2"
              >
                {/* Tooltip Label (Rotated) */}
                <div className="absolute left-full ml-6 px-2 py-1 bg-black border border-white/10 text-[10px] font-mono text-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50">
                  <ScrambleText text={item.label} />
                </div>

                {/* Visual Indicator */}
                <div className="relative flex items-center justify-center w-full">
                  {/* Active Glow Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute right-0 w-[2px] h-8 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {/* Dot */}
                  <div
                    className={`w-1.5 h-1.5 rotate-45 transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500 scale-125"
                        : "bg-white/20 group-hover:bg-white/60"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-6">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors relative group"
            >
              <social.icon size={16} />
            </a>
          ))}
          <div className="text-[10px] font-mono text-gray-700 vertical-text tracking-widest opacity-50 select-none">
            EST. 2024
          </div>
        </div>
      </motion.aside>

      {/* --- MOBILE HEADER (Top Bar) --- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 px-6 flex justify-between items-center transition-all duration-300 border-b ${
          scrolled
            ? "py-4 bg-[#050505]/90 border-white/10 backdrop-blur-xl"
            : "py-6 bg-transparent border-transparent"
        }`}
      >
        <Link
          href="#hero"
          className="font-black text-xl tracking-tighter text-white z-50 mix-blend-difference"
        >
          OR.
        </Link>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-white hover:text-cyan-500 transition-colors z-50 mix-blend-difference"
        >
          <FiMenu size={24} />
        </button>
      </motion.header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-[#050505] flex flex-col"
          >
            {/* Background Textures */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-gray-500">
                  SYSTEM // NAV
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-red-500 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <span
                      className={`text-4xl md:text-6xl font-black uppercase tracking-tight transition-colors ${
                        activeSection === item.id
                          ? "text-cyan-500"
                          : "text-white group-hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </span>
                    <FiArrowUpRight
                      className={`text-2xl transition-all ${
                        activeSection === item.id
                          ? "text-cyan-500 opacity-100"
                          : "text-gray-500 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Info */}
            <div className="px-8 py-8 border-t border-white/10 flex justify-between items-end">
              <div className="flex flex-col gap-4">
                <div className="flex gap-6">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-gray-600">
                  © 2024 OBIDUR RAHMAN
                </div>
              </div>
              <div className="text-right">
                {time && (
                  <div className="text-xl font-mono text-white font-bold">
                    {time}
                  </div>
                )}
                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                  Dhaka, BD
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
