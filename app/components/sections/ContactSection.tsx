"use client";

import { useState, useEffect } from "react";
import { FiCopy } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("obidur.shawal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0a0a0a] text-white min-h-screen flex flex-col justify-between pt-32 pb-10 border-t border-white/5"
    >
      {/* ... (Backgrounds remain same) ... */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* Top Content (Same as before) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:pl-32 relative z-10">
        {/* ... (Headline & Socials remain same) ... */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-green-500 tracking-widest uppercase">
                Open for Work
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Ready to <br /> <span className="text-gray-500">Execute?</span>
            </h2>
          </div>
          {/* ... (Right column same as before) ... */}
        </div>
      </div>

      {/* Giant Link (Mobile Fix) */}
      <a
        href="mailto:obidur.shawal@gmail.com"
        className="group w-full flex-1 flex items-center justify-center overflow-hidden relative my-12"
      >
        <div
          className={`absolute inset-0 bg-cyan-600 transition-transform duration-500 origin-bottom ${isMobile ? "scale-y-100 opacity-20" : "scale-y-0 group-hover:scale-y-100"}`}
        />
        <span
          className={`relative z-10 text-[12vw] font-black tracking-tighter leading-none transition-colors duration-500 ${isMobile ? "text-white" : "text-white/20 group-hover:text-white"}`}
        >
          LET'S TALK
        </span>
      </a>

      {/* Footer (Same as before) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between text-xs font-mono text-gray-500 uppercase">
        <span>© {new Date().getFullYear()} Obidur Rahman</span>
        <span>Dhaka, Bangladesh</span>
      </div>
    </section>
  );
};

export default ContactSection;
