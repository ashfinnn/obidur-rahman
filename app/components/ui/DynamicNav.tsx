'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { SiResearchgate } from 'react-icons/si';

const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'research', label: 'RESEARCH' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

const SOCIAL_LINKS = [
  { name: 'GH', url: 'https://github.com/Ashfinnn', icon: FiGithub },
  { name: 'LI', url: 'https://linkedin.com/in/obidur-rahman-shawal', icon: FiLinkedin },
  { name: 'RG', url: 'https://www.researchgate.net/profile/Obidur-Rahman-3', icon: SiResearchgate },
];

export default function DynamicNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setMounted(true);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    
    // For the contact section, we need to scroll to the very bottom because it's revealed
    if (id === 'contact') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;
    
    const yOffset = -20;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Menu Toggle Button */}
      <div className="fixed top-6 right-6 md:top-10 md:right-10 z-[1000]">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-white border border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} color="black" /> : <FiMenu size={24} color="black" />}
        </motion.button>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-[#050505] text-white z-[999] border-l border-white/10 flex flex-col p-10 md:p-16 overflow-hidden shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center relative z-10 mb-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40">Navigation</span>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col relative z-10 gap-2">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.id;
                  return (
                    <div key={item.id} className="flex flex-col">
                      <motion.button
                        onClick={() => scrollTo(item.id)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                        className="group py-4 flex items-center justify-between text-left border-b border-white/5 last:border-0"
                      >
                        <span 
                          className={`text-4xl md:text-5xl tracking-tight transition-all duration-300 ${
                            isActive ? 'text-[#FF4D00] italic pl-4' : 'text-white/70 group-hover:text-white group-hover:pl-2'
                          }`}
                          style={{ fontFamily: "'Georgia', serif" }}
                        >
                          {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                        </span>
                        
                        <div className={`transition-all duration-300 ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}>
                          <FiArrowRight size={20} className={isActive ? 'text-[#FF4D00]' : 'text-white'} />
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </nav>

              {/* Sidebar Footer */}
              <div className="mt-auto relative z-10 pt-10 flex flex-col gap-10">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social) => (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"
                      >
                        <social.icon size={16} />
                      </a>
                    ))}
                  </div>
                  <button 
                    onClick={() => scrollTo('contact')}
                    className="group flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.4em] text-white opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Contact <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className="flex justify-between items-center font-mono text-[8px] uppercase tracking-[0.4em] text-white opacity-30">
                  <span>© {new Date().getFullYear()}</span>
                  <span>Obidur Rahman</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
