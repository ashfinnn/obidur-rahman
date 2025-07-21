// app/components/Footer.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        const timerId = setInterval(updateTime, 1000 * 60); // Update every minute is enough
        return () => clearInterval(timerId);
    }, []);

    // 1. A single array for all social/contact links for cleaner code
    const socialLinks = [
        { name: 'EMAIL', href: 'mailto:obidur.shawal@gmail.com' },
        { name: 'LINKEDIN', href: 'https://linkedin.com/in/obidur-rahman' },
        { name: 'GITHUB', href: 'https://github.com/obidur-rahman' },
    ];

    return (
        <motion.footer
            className="px-6 sm:px-8 lg:px-16 py-8 border-t border-gray-200 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* 2. Simplified layout: A single row for all essential info */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    
                    {/* Left side: Copyright and Name */}
                    <div className="text-center sm:text-left">
                        <p className="font-mono text-xs text-gray-500">
                            © {new Date().getFullYear()} OBIDUR.RAHMAN
                        </p>
                    </div>

                    {/* Right side: Social links and status */}
                    <div className="flex items-center gap-6">
                        {/* Social Links */}
                        <div className="flex items-center gap-4 font-mono text-xs">
                            {socialLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-black transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        
                        {/* Vertical separator */}
                        <div className="hidden md:block w-px h-4 bg-gray-200"></div>
                        
                        {/* 3. Thematic Status Indicator */}
                        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-500">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span>STATUS: OPERATIONAL</span>
                            <span className="text-black">{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;