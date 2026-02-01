"use client";

import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { 
  FiCheck, 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiArrowUpRight, 
  FiCopy, 
  FiArrowRight 
} from "react-icons/fi";
import { SiX } from "react-icons/si";

const fast = { duration: 0.3, ease: easeInOut };

const SOCIAL_LINKS = [
  { 
    name: "GitHub", 
    handle: "@Ashfinn",
    url: "https://github.com/Ashfinn", 
    icon: FiGithub,
    desc: "Open source projects"
  },
  { 
    name: "LinkedIn", 
    handle: "/in/obidur-rahman-shawal",
    url: "https://linkedin.com/in/obidur-rahman-shawal", 
    icon: FiLinkedin,
    desc: "Professional network"
  },
  { 
    name: "X (Twitter)", 
    handle: "@ashaboredaf",
    url: "https://x.com/ashaboredaf", 
    icon: SiX,
    desc: "Thoughts & updates"
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "obidur.shawal@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="bg-[#F4F4F5] text-[#050505] w-full py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={fast}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-4 sm:mb-6">
            Get In<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Touch</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[2px] bg-[#050505] origin-left" 
          />
        </motion.div>

        {/* Main Grid Container */}
        <div className="border border-[#050505] bg-white shadow-xl">
          
          {/* Row 1: Email Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#050505]">
            
            {/* Email Display */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={fast}
              onClick={handleCopy}
              className="lg:col-span-8 p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#050505] cursor-pointer group hover:bg-[#050505] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#050505] group-hover:bg-white transition-colors duration-300">
                    <FiMail className="text-white group-hover:text-[#050505] transition-colors duration-300" size={16} />
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    Email Address
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 text-green-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest"
                    >
                      <FiCheck size={14} /> Copied
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 text-gray-400 group-hover:text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-colors duration-300"
                    >
                      <FiCopy size={12} /> Copy
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight group-hover:text-white transition-colors duration-300 break-all leading-tight">
                {email}
              </p>
              
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                Click to copy or use the button to open your email client
              </p>
            </motion.div>

            {/* Send Email CTA */}
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...fast, delay: 0.1 }}
              href={`mailto:${email}`}
              className="lg:col-span-4 p-6 sm:p-8 md:p-12 flex flex-col justify-between min-h-[200px] lg:min-h-0 group hover:bg-[#050505] transition-colors duration-300"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  Preferred Method
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mt-2 group-hover:text-white transition-colors duration-300">
                  Send Email
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 mt-2 transition-colors duration-300">
                  Opens your default email client
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                  Compose
                </span>
                <FiArrowUpRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={16} />
              </div>
            </motion.a>
          </div>

          {/* Row 2: Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...fast, delay: index * 0.05 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] group hover:bg-[#050505] transition-colors duration-300 ${
                    index < 2 ? 'border-b sm:border-b-0 sm:border-r border-[#050505]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <Icon 
                      size={24} 
                      className="text-[#050505] group-hover:text-white transition-colors duration-300" 
                    />
                    <FiArrowUpRight 
                      className="text-gray-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                      size={18} 
                    />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-1 group-hover:text-gray-400 transition-colors duration-300">
                      {social.desc}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-[#050505] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Obidur Rahman
            </span>
            <span className="hidden sm:block w-px h-4 bg-gray-300" />
            <span className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              Designed with precision
            </span>
          </div>
          <motion.a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 hover:text-[#050505] transition-colors"
          >
            Back to top
            <FiArrowRight className="rotate-[-90deg] group-hover:-translate-y-1 transition-transform duration-300" size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}