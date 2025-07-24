// app/components/Footer.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaLastfm } from 'react-icons/fa';
import { SiAnilist } from 'react-icons/si';

// --- Data is perfect, no changes needed ---
const socialLinks = [
    { name: 'Email', icon: FiMail, href: 'mailto:obidur.shawal@gmail.com' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/obidur-rahman-shawal/' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Ashfinn' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://www.youtube.com/channel/UC63n2xBEcdTIBITPpNEgoFQ' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/obidur__rahman' },
    { name: 'Last.fm', icon: FaLastfm, href: 'https://www.last.fm/user/Ashfin' },
    { name: 'Anilist', icon: SiAnilist, href: 'https://anilist.co/user/Ashfin/' },
];

// Reusable components styled for the DARK theme
const SocialIconLink = ({ href, icon: Icon, name }: typeof socialLinks[0]) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="text-neutral-400 transition-colors hover:text-cyan-300" // CHANGED
    >
        <Icon size={18} />
    </a>
);

const BackToTopButton = () => (
    <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 transition-colors hover:text-cyan-300" // CHANGED
        aria-label="Scroll to top"
    >
        <span>BACK_TO_TOP</span>
        <FiArrowUp className="transition-transform group-hover:-translate-y-1" />
    </button>
);


const Footer = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                timeZone: 'Asia/Dhaka',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            });
            setTime(`DHK ${timeString}`);
        };

        updateTime();
        const timerId = setInterval(updateTime, 1000 * 60);
        return () => clearInterval(timerId);
    }, []);

    return (
        <motion.footer
            className="px-6 sm:px-8 lg:px-16 py-8 border-t border-neutral-800 bg-black" // CHANGED
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-8">

                    <p className="font-mono text-xs text-neutral-500"> {/* CHANGED */}
                        © {new Date().getFullYear()} OBIDUR.RAHMAN
                    </p>

                    <div className="flex items-center gap-5">
                        {socialLinks.map(link => (
                            <SocialIconLink key={link.name} {...link} />
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-neutral-400"> {/* CHANGED */}
                            {/* The green pulse dot is fine, it has great contrast on black */}
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span>STATUS: OPERATIONAL</span>
                            <span className="text-white">{time}</span> {/* CHANGED */}
                        </div>

                        <div className="hidden lg:block">
                            <BackToTopButton />
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;