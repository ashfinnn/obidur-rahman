// app/components/Header.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(currentScrollY);

                const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (currentScrollY / windowHeight) * 100;
                setScrollProgress(Math.min(progress, 100));
            }
        };

        const handleResize = () => setIsMenuOpen(false);
        const handleScroll = () => {
            controlHeader();
            if (isMenuOpen) setIsMenuOpen(false);
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [lastScrollY, isMenuOpen]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-50% 0px -50% 0px" } // Detect when section is in middle of screen
        );

        const sections = ['about', 'skills', 'projects', 'contact'];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { href: '#about', label: 'ABOUT' },
        { href: '#skills', label: 'SKILLS' },
        { href: '#projects', label: 'WORK' },
        { href: '#contact', label: 'CONTACT' }
    ];

    // 1. Refactored NavLink for futuristic style
    const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => {
        const isActive = activeSection === href.slice(1);
        const baseClasses = "font-mono tracking-wider transition-colors duration-300 relative";
        const mobileClasses = mobile ? "block text-base py-3" : "text-xs";
        const activeClasses = isActive ? "text-black" : "text-gray-500 hover:text-black";

        return (
            <Link 
                href={href} 
                className={`${baseClasses} ${mobileClasses} ${activeClasses}`}
                onClick={mobile ? () => setIsMenuOpen(false) : undefined}
            >
                {isActive ? `[ ${label} ]` : label}
            </Link>
        );
    };

    return (
        <>
            {/* 2. Simplified Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-px bg-gray-200 z-50">
                <div 
                    className="h-full bg-black"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* 3. Refactored Header for sharp HUD look */}
            <header
                className={`fixed top-px left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 h-20 transition-transform duration-300 ease-in-out ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="h-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
                    {/* 4. Logo matches the futuristic theme */}
                    <Link href="/" className="font-mono font-bold text-sm tracking-widest text-black">
                        OBIDUR.RAHMAN
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navItems.map((item) => (
                            <NavLink key={item.href} href={item.href} label={item.label} />
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        aria-label="Toggle menu"
                        className="relative w-10 h-10 border border-gray-300 flex items-center justify-center transition-colors duration-300 group md:hidden hover:border-black"
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-5 h-px bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
                            <span className={`block w-5 h-px bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`block w-5 h-px bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
                        </div>
                    </button>
                </div>
            </header>

            {/* 5. Refactored Mobile Menu */}
            <div className={`fixed top-20 left-0 right-0 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-200 transform transition-all duration-300 ease-in-out md:hidden ${
                isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
            }`}>
                <nav className="p-6 sm:p-8 space-y-2">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                        >
                            <NavLink href={item.href} label={item.label} mobile />
                        </motion.div>
                    ))}
                    <motion.div 
                        className="pt-6 mt-4 border-t border-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                    >
                        <div className="flex items-center justify-between text-xs font-mono text-gray-400 tracking-wider">
                            <span>[NAVIGATION_MENU]</span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                ONLINE
                            </span>
                        </div>
                    </motion.div>
                </nav>
            </div>
            
            {/* Overlay */}
            {isMenuOpen && <div className="fixed inset-0 bg-black/10 z-20 md:hidden" onClick={() => setIsMenuOpen(false)} />}
        </>
    );
};

export default Header;
