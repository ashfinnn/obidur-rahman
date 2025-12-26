"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("obidur.shawal@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Inside ContactSection.tsx
    return (
        // Removed min-h-screen, added h-full
        <section id="contact" className="relative w-full bg-[#0a0a0a] text-white h-full flex flex-col justify-between pt-32 pb-10 border-t border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="container mx-auto h-full border-r border-l border-white/20 relative">
                    <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/20 hidden md:block" />
                    <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/20 hidden md:block" />
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">

                <span className="font-mono text-xs text-[#FF4D00] tracking-widest uppercase mb-8">
                    (004) — Communication Protocol
                </span>

                {/* Giant Actionable Area */}
                <div
                    onClick={handleCopy}
                    className="group relative w-full border border-white/20 bg-[#0a0a0a] hover:bg-[#111] transition-all duration-500 cursor-pointer overflow-hidden py-12 md:py-24"
                >
                    {/* Hover Reveal Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        <p className="font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest">
                            Click to Copy Address
                        </p>
                        <h2 className="text-[10vw] md:text-[7vw] font-black tracking-tighter leading-[0.85] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-gray-600 transition-all duration-300">
                            LET'S TALK
                        </h2>

                        <div className="h-6 mt-6">
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.div
                                        key="success"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        className="text-[#FF4D00] font-mono text-sm font-bold flex items-center gap-2"
                                    >
                                        <FiCheck /> COPIED TO CLIPBOARD
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="idle"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        className="text-gray-500 font-mono text-sm"
                                    >
                                        obidur.shawal@gmail.com
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-12 flex justify-center gap-8">
                    <SocialLink href="https://github.com/Ashfinn" icon={FiGithub} />
                    <SocialLink href="https://linkedin.com" icon={FiLinkedin} />
                    <SocialLink href="https://twitter.com" icon={FiTwitter} />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-6 md:px-12 py-6 border-t border-white/10 flex justify-between items-center text-[10px] md:text-xs font-mono text-gray-600 uppercase">
                <span>© {new Date().getFullYear()} Obidur Rahman</span>
                <span>System Status: Online</span>
            </div>
        </section>
    )
}

const SocialLink = ({ href, icon: Icon }: any) => (
    <a href={href} target="_blank" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group">
        <Icon size={20} />
    </a>
)