"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiMail, FiGithub, FiLinkedin, FiMapPin, FiClock, FiSend, FiCopy } from "react-icons/fi";

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-4 sm:mb-6">
            Let&apos;s<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Connect</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto h-[2px] bg-[#050505] origin-center" 
          />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          
          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={handleCopy}
            className="bg-white border border-[#E5E5E5] hover:border-[#050505] p-6 sm:p-8 md:p-10 cursor-pointer group transition-all mb-4 sm:mb-6"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">Email Address</span>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1 text-green-600 font-mono text-[9px] sm:text-[10px] uppercase"
                  >
                    <FiCheck size={12} /> Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1 text-gray-400 group-hover:text-[#FF4D00] font-mono text-[9px] sm:text-[10px] uppercase transition-colors"
                  >
                    <FiCopy size={12} /> Click to copy
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-[#FF4D00] transition-colors break-all"
              whileHover={{ x: 5 }}
            >
              {email}
            </motion.p>
          </motion.div>

          {/* Direct Email Button */}
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href={`mailto:${email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#050505] text-white font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-[#FF4D00] transition-colors mb-6 sm:mb-8"
          >
            <FiSend size={16} />
            Send Email Directly
          </motion.a>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            <motion.a
              href="https://github.com/Ashfinn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white border border-[#E5E5E5] hover:border-[#050505] transition-all group"
            >
              <FiGithub size={18} className="group-hover:text-[#FF4D00] transition-colors" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/obidur-rahman-shawal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white border border-[#E5E5E5] hover:border-[#050505] transition-all group"
            >
              <FiLinkedin size={18} className="group-hover:text-[#FF4D00] transition-colors" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest">LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Info Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="bg-white border border-[#E5E5E5] p-4 sm:p-5 text-center">
              <FiMapPin className="mx-auto mb-2 text-[#FF4D00]" size={18} />
              <p className="text-sm sm:text-base font-medium">Chittagong, BD</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Remote Available</p>
            </div>
            <div className="bg-white border border-[#E5E5E5] p-4 sm:p-5 text-center">
              <FiClock className="mx-auto mb-2 text-[#FF4D00]" size={18} />
              <p className="text-sm sm:text-base font-medium">24-48 Hours</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Response Time</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-[#050505] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono text-gray-500"
        >
          <span>© {new Date().getFullYear()} Obidur Rahman</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>
      </div>
    </section>
  );
}