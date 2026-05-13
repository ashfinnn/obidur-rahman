'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { useState } from 'react';
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCopy,
  FiCheck,
} from 'react-icons/fi';
import { SiResearchgate } from 'react-icons/si';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Ashfinnn',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/obidur-rahman-shawal',
    icon: FiLinkedin,
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Obidur-Rahman-3',
    icon: SiResearchgate,
  },
];

export default function ContactSection() {
  const email = 'obidur.shawal@gmail.com';

  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    damping: 28,
    stiffness: 180,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    damping: 28,
    stiffness: 180,
    mass: 0.5,
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden bg-[#050505] text-white">
      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full w-full flex-col">
        {/* TOP GRID */}
        <div className="grid flex-1 min-h-0 grid-cols-1 lg:grid-cols-12">
          {/* LEFT PANEL: THE VAULT + LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between border-r border-white/5 bg-[#0A0A0A] p-8 sm:p-12 md:p-16 lg:col-span-4"
          >
            <div 
              onClick={() => scrollTo('projects')}
              className="group cursor-pointer"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 sm:text-xs">
                  Portfolio
                </span>

                <FiArrowUpRight
                  size={24}
                  className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl">
                Return to
                <br />
                The Vault.
              </h3>
            </div>

            {/* INTEGRATED SOCIAL LINKS */}
            <div className="mt-12 flex flex-col gap-8">
              <p className="max-w-[200px] font-mono text-[10px] uppercase tracking-widest opacity-30 leading-relaxed">
                View all selected works and research projects.
              </p>
              
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-20">Find Me Online</span>
                <div className="flex gap-6">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center transition-opacity hover:opacity-100 opacity-40"
                      title={link.name}
                    >
                      <link.icon size={20} className="transition-colors group-hover/link:text-[#FF4D00]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-20">
                  © {new Date().getFullYear()} Obidur Rahman
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL: CONTACT ACTIONS */}
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mouseX.set(e.clientX - rect.left - 100);
              mouseY.set(e.clientY - rect.top - 40);
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`relative overflow-hidden transition-colors duration-500 lg:col-span-8 ${
              isHovered ? 'bg-[#FF4D00]' : 'bg-[#6344E8]'
            }`}
          >
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex h-full w-full flex-col justify-between p-8 sm:p-12 md:p-16"
                >
                  <div>
                    <span className="mb-10 block font-mono text-[10px] font-bold uppercase tracking-[0.5em] opacity-60 sm:text-xs">
                      Get In Touch
                    </span>

                    <h3 className="mb-8 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl tracking-tight">
                      Let&apos;s get to it.
                      <br />
                      together.
                    </h3>
                  </div>

                  <div className="text-6xl font-black uppercase leading-[0.8] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
                    Start a
                    <br />
                    Project
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="options"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex h-full w-full flex-col"
                >
                  <div className="p-8 sm:p-12 md:p-16 pb-6 sm:pb-8">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-white/90 sm:text-xs">
                      Choose Method
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <a
                      href={`mailto:${email}`}
                      className="group/opt flex flex-1 items-center border-y border-white/20 px-8 sm:px-12 md:px-16 transition-colors hover:bg-black/10"
                    >
                      <div className="flex flex-col">
                        <span className="text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
                          Send Email
                        </span>

                        <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                          Direct Communication
                        </span>
                      </div>

                      <FiArrowRight
                        size={32}
                        className="ml-auto transition-transform group-hover/opt:translate-x-2"
                      />
                    </a>

                    <button
                      onClick={handleCopy}
                      className="group/opt flex flex-1 items-center px-8 sm:px-12 md:px-16 text-left transition-colors hover:bg-black/10"
                    >
                      <div className="flex flex-col">
                        <span className="text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
                          {copied ? 'Address Copied' : 'Copy Address'}
                        </span>

                        <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                          To Clipboard
                        </span>
                      </div>

                      <div className="ml-auto">
                        {copied ? (
                          <FiCheck size={32} />
                        ) : (
                          <FiCopy
                            size={32}
                            className="transition-transform group-hover/opt:scale-110"
                          />
                        )}
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* FLOATING CURSOR */}
            <motion.div
              style={{
                x: springX,
                y: springY,
              }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              className="pointer-events-none absolute left-0 top-0 z-50 hidden items-center gap-4 bg-white px-6 py-3 font-mono text-[10px] font-black uppercase tracking-widest text-[#FF4D00] shadow-2xl xl:flex"
            >
              <FiMail />

              <span>Select Communication</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
