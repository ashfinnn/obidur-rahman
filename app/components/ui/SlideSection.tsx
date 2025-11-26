'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SlideSectionProps {
    children: React.ReactNode;
    className?: string;
    index: number;
    id?: string; // Added ID prop for the Header to track
}

const SlideSection = ({ children, className = "", index, id }: SlideSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track the scroll progress of THIS specific section relative to the window
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // "start start": Top of card hits top of viewport
        // "end start": Bottom of card hits top of viewport (fully scrolled past)
        offset: ["start start", "end start"] 
    });

    // ANIMATION VALUES:
    // 1. Scale: Goes from 100% to 95% as it gets covered
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    // 2. Brightness: Goes from 100% to 80% (darkens) to create depth
    const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    // 3. Border Radius: Smoothly rounds corners as it stacks
    const borderRadius = useTransform(scrollYProgress, [0, 0.1], ["0px", "24px"]);

    return (
        <div 
            ref={containerRef} 
            className="relative w-full"
            style={{ 
                height: `calc(100vh + ${index * 20}px)`, // Slight offset to ensure scrolling flow
                zIndex: index 
            }} 
        >
            <motion.div 
                style={{ 
                    scale, 
                    filter: `brightness(${brightness})`,
                    borderRadius
                }}
                className={`sticky top-0 h-screen overflow-hidden shadow-2xl origin-top ${className}`}
            >
                {/* 
                    The ID is placed here so the Header Observer catches the visible part 
                */}
                <div id={id} className="h-full w-full overflow-y-auto scrollbar-none touch-pan-y">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default SlideSection;