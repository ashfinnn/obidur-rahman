'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' },
];

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

const Header = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isDark, setIsDark] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Track scroll for additional effects
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Intersection observer for active section tracking
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    const theme = entry.target.closest('section')?.getAttribute('data-theme');
                    if (theme) setIsDark(theme === 'dark');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const bgClass = isDark 
        ? 'bg-black/20 border-white/10' 
        : 'bg-white/60 border-black/10';
    const textClass = isDark ? 'text-white' : 'text-black';
    const muteClass = isDark ? 'text-gray-400' : 'text-gray-500';

    return (
        <>
            {/* --- DESKTOP SIDEBAR --- */}
            <motion.aside 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`hidden md:flex fixed left-0 top-0 bottom-0 w-28 flex-col justify-between py-8 z-[999] border-r backdrop-blur-xl transition-all duration-500 ${bgClass} ${scrolled ? 'shadow-2xl' : ''}`}
            >
                {/* Logo */}
                <motion.button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className="w-full flex justify-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={`font-black text-2xl tracking-tighter transition-colors ${textClass} group-hover:text-cyan-500`}>
                        OR.
                    </span>
                </motion.button>

                {/* Nav */}
                <nav className="flex flex-col w-full gap-1">
                    {navItems.map((item, idx) => {
                        const isActive = activeSection === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    href={`#${item.id}`}
                                    className="relative flex items-center justify-center h-14 w-full group"
                                >
                                    {/* Active indicator line */}
                                    <motion.div 
                                        className="absolute left-0 w-1 h-8 bg-cyan-500 rounded-r-full"
                                        initial={false}
                                        animate={{ 
                                            opacity: isActive ? 1 : 0,
                                            scaleY: isActive ? 1 : 0.5
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    <div className={`flex items-center gap-2.5 transition-all duration-300 ${isActive ? 'translate-x-1' : ''}`}>
                                        <span className={`text-[9px] font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
                                            isActive 
                                                ? 'text-cyan-500 opacity-100' 
                                                : 'opacity-0 group-hover:opacity-60'
                                        } ${muteClass}`}>
                                            {item.label}
                                        </span>
                                        <motion.div 
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                                isActive 
                                                    ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]' 
                                                    : isDark ? 'bg-white/30' : 'bg-black/30'
                                            }`}
                                            whileHover={{ scale: 1.3 }}
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Socials */}
                <div className="flex flex-col items-center gap-5">
                    {/* Divider */}
                    <div className={`w-px h-12 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                    
                    {socialLinks.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors relative group ${muteClass}`}
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={social.label}
                        >
                            <social.icon size={18} className="group-hover:text-cyan-500 transition-colors" />
                            
                            {/* Tooltip */}
                            <span className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.aside>

            {/* --- MOBILE TOP BAR --- */}
            <motion.header 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`md:hidden fixed top-0 left-0 right-0 z-[999] px-6 py-4 flex justify-between items-center backdrop-blur-xl border-b transition-all duration-500 ${
                    isDark 
                        ? 'bg-black/80 border-white/10 text-white' 
                        : 'bg-white/90 border-black/10 text-black'
                } ${scrolled ? 'shadow-lg py-3' : ''}`}
            >
                <motion.span 
                    className="font-black text-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    OR.
                </motion.span>
                
                <motion.button 
                    onClick={() => setMobileMenuOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10"
                >
                    <FiMenu size={24} />
                </motion.button>
            </motion.header>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        
                        {/* Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[1001] flex flex-col items-center justify-center gap-6 text-white"
                        >
                            {/* Close Button */}
                            <motion.button 
                                onClick={() => setMobileMenuOpen(false)} 
                                className="absolute top-6 right-6 p-2"
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiX size={28} />
                            </motion.button>
                            
                            {/* Nav Items */}
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link 
                                        href={`#${item.id}`} 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-4xl font-black tracking-tight transition-colors ${
                                            activeSection === item.id ? 'text-cyan-500' : 'text-white hover:text-cyan-400'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            {/* Social Links */}
                            <motion.div 
                                className="flex gap-6 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-cyan-500 transition-colors"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;