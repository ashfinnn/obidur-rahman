// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    // State to track if the page has been scrolled
    const [isScrolled, setIsScrolled] = useState(false); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('grid-section');

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                // Set scrolled state for background/style change
                setIsScrolled(window.scrollY > 10);

                // Calculate scroll progress
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                setScrollProgress((window.scrollY / totalHeight) * 100);

                // Close mobile menu on scroll
                if (isMenuOpen) setIsMenuOpen(false);
            }
        };

        const handleResize = () => setIsMenuOpen(false);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        // Initial check in case the page loads scrolled
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const sections = ['grid-section', 'about', 'skills', 'projects', 'contact'];
        const observers = sections.map(id => {
            const element = document.getElementById(id);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.3, rootMargin: '-40% 0px -60% 0px' }
            );
            observer.observe(element);
            return observer;
        });

        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    const navItems = [
        { id: 'about', label: 'ABOUT' },
        { id: 'skills', label: 'SKILLS' },
        { id: 'projects', label: 'WORK' },
        { id: 'contact', label: 'CONTACT' }
    ];

    // Common classes for smooth transitions
    const headerBaseClasses = "fixed top-0.5 left-0 right-0 z-40 h-20 transition-all duration-300 ease-in-out";
    const scrolledClasses = "bg-black/80 backdrop-blur-md border-b border-neutral-800";
    const topClasses = "bg-white border-b border-gray-200";

    const logoColor = isScrolled ? "text-white" : "text-black";
    const mobileIconColor = isScrolled ? "bg-white" : "bg-black";

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-50">
                <div 
                    className={`h-full ${isScrolled ? 'bg-cyan-300' : 'bg-black'}`}
                    style={{ width: `${scrollProgress}%` }} 
                />
            </div>

            {/* Header with dynamic styling */}
            <header className={`${headerBaseClasses} ${isScrolled ? scrolledClasses : topClasses}`}>
                <div className="h-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
                    <Link href="/" className={`font-mono font-bold text-sm tracking-widest transition-colors ${logoColor} hover:text-cyan-300`}>
                        OBIDUR.RAHMAN
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            const linkColor = isScrolled 
                                ? (isActive ? 'text-white' : 'text-neutral-300 hover:text-white') 
                                : (isActive ? 'text-black' : 'text-neutral-500 hover:text-black');
                            const indicatorColor = isScrolled ? 'bg-cyan-300' : 'bg-black';

                            return (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`relative font-mono text-xs tracking-wider transition-colors duration-300 ${linkColor}`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div
                                            className={`absolute -bottom-1 left-0 right-0 h-px ${indicatorColor}`}
                                            layoutId="active-nav-link"
                                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="relative w-8 h-8 flex items-center justify-center md:hidden z-50">
                        <div className="space-y-1.5">
                            <span className={`block w-5 h-px ${mobileIconColor} transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
                            <span className={`block w-5 h-px ${mobileIconColor} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`block w-5 h-px ${mobileIconColor} transition-all duration-300 ease-in-out ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
                        </div>
                    </button>
                </div>
            </header>
            
            {/* Mobile Menu (always dark for consistency) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg md:hidden"
                    >
                        <nav className="h-full flex flex-col justify-center items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-mono text-xl tracking-widest transition-colors ${activeSection === item.id ? 'text-cyan-300' : 'text-neutral-400'}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;