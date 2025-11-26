'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StickySectionProps {
    children: React.ReactNode;
    className?: string;
    // We need to know the index to set z-index (higher index = on top)
    index: number; 
}

const StickySection = ({ children, className = "", index }: StickySectionProps) => {
    const ref = useRef(null);
    
    // Track scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: ref,
        // "start start": when top of element hits top of viewport
        // "end start": when bottom of element hits top of viewport (fully scrolled past)
        offset: ["start start", "end start"]
    });

    // Create the "Depth" effects
    // As the user scrolls past this section, it scales down slightly and gets darker
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
    const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Simulates shadow

    return (
        <div ref={ref} className="relative min-h-screen">
            <motion.div
                style={{ 
                    // On mobile, we might want to disable the scale effect if it causes jitter, 
                    // but Framer Motion handles it well. 
                    scale,
                    filter: `brightness(${brightness})`, // Optional: Darkens as it goes back
                }}
                className={`sticky top-0 h-screen overflow-hidden ${className}`}
            >
                {/* 
                   IMPORTANT: z-index must increase with each section 
                   so the next one slides OVER the previous one.
                */}
                <div className="relative w-full h-full" style={{ zIndex: index * 10 }}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default StickySection;