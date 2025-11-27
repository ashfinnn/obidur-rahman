"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCopy, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const contactLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/obidur-rahman-shawal/",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Ashfinn" },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/obidur__rahman",
  },
];

const ContactSection = () => {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("obidur.shawal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full bg-[#050505] text-white min-h-screen flex flex-col justify-between pt-20 pb-10 z-20 overflow-hidden border-t border-white/10"
    >
      {/* Background Textures */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- TOP CONTENT --- */}
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Headline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-green-500 tracking-widest uppercase">
                Open for Work
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                Collaborate?
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              I'm currently looking for new opportunities in Data Science and
              Engineering. Drop a message or connect socially.
            </p>
          </div>

          {/* Right: Contact Actions */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Email Box */}
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm group hover:bg-white/[0.05] transition-colors">
              <div className="font-mono text-xs text-cyan-500 mb-2 uppercase tracking-widest">
                Direct Line
              </div>
              <div className="flex items-center justify-between gap-4">
                <a
                  href="mailto:obidur.shawal@gmail.com"
                  className="text-xl md:text-2xl font-bold text-white font-mono truncate"
                >
                  obidur.shawal@gmail.com
                </a>
                <button
                  onClick={handleCopy}
                  className="p-2 text-gray-400 hover:text-white transition-colors relative"
                >
                  <FiCopy size={20} />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-cyan-500 text-black px-2 py-1 rounded">
                      COPIED
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 border border-white/10 bg-white/[0.02] hover:bg-cyan-900/20 hover:border-cyan-500/50 transition-all rounded-sm group"
                >
                  <link.icon className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-xs font-mono text-gray-300 uppercase tracking-wider group-hover:text-white">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MIDDLE: GIANT LINK --- */}
      <div className="flex-1 flex items-center justify-center w-full border-y border-white/5 my-12 group relative overflow-hidden cursor-pointer">
        <a
          href="mailto:obidur.shawal@gmail.com"
          className="block w-full text-center relative z-10"
        >
          <span className="text-[12vw] leading-none font-black tracking-tighter text-white/10 group-hover:text-white transition-colors duration-500 block">
            LET'S TALK
          </span>
        </a>

        {/* Background Hover Fill */}
        <div className="absolute inset-0 bg-cyan-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      </div>

      {/* --- BOTTOM: FOOTER --- */}
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <div className="flex gap-8">
            <span className="text-white">Obidur Rahman</span>
            <span>Data Scientist & ML Engineer</span>
          </div>

          <div className="flex gap-8">
            <a href="#about" className="hover:text-cyan-500 transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-500 transition-colors"
            >
              Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="hover:text-cyan-500 transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="text-right">
            <span className="block text-cyan-500 mb-1">{time}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
