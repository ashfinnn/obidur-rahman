"use client";

import { useState } from "react";
import { FiCopy, FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

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
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* Top Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            READY TO <br />
            <span className="text-cyan-500">COLLABORATE?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            I'm currently looking for new opportunities in Data Science and ML
            Engineering.
          </p>
        </div>

        <div className="flex flex-col justify-end items-start lg:items-end space-y-6">
          <div
            className="group flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
            onClick={handleCopy}
          >
            <span className="text-xl md:text-2xl font-mono">
              obidur.shawal@gmail.com
            </span>
            <FiCopy className="text-gray-500 group-hover:text-white transition-colors" />
            {copied && (
              <span className="text-green-500 text-xs font-bold">COPIED!</span>
            )}
          </div>

          <div className="flex gap-4">
            {[
              { Icon: FaGithub, href: "https://github.com/Ashfinn" },
              {
                Icon: FaLinkedin,
                href: "https://linkedin.com/in/obidur-rahman-shawal",
              },
              { Icon: FaTwitter, href: "https://twitter.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                className="p-3 bg-white/5 rounded-full hover:bg-cyan-600 hover:text-white transition-all"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant Link */}
      <a
        href="mailto:obidur.shawal@gmail.com"
        className="group w-full flex-1 flex items-center justify-center overflow-hidden relative my-12"
      >
        <div className="absolute inset-0 bg-cyan-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
        <span className="relative z-10 text-[12vw] font-black tracking-tighter leading-none text-white/20 group-hover:text-white transition-colors duration-500">
          LET'S TALK
        </span>
      </a>

      {/* Footer */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between text-xs font-mono text-gray-500 uppercase">
        <span>© 2024 Obidur Rahman</span>
        <span>Dhaka, Bangladesh</span>
      </div>
    </section>
  );
};

export default ContactSection;
