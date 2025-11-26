'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SlideSectionProps {
    children: React.ReactNode;
    className?: string;
    index: number; // Essential for stacking order
}

const SlideSection = ({ children, className = "", index }: SlideSectionProps) => {
    const containerRef = useRef(null);

    // Optional: Add a very subtle depth effect to the section being covered
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // When this section is stuck and being covered, it scales down slightly (0.98)
    // and gets slightly darker to create depth.
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <div 
            ref={containerRef} 
            className="relative h-[100dvh]" // 100dvh handles mobile URL bars correctly
            style={{ zIndex: index }} // Higher index slides over lower index
        >
            <motion.div 
                style={{ 
                    scale, 
                    filter: `brightness(${brightness})` 
                }}
                className={`sticky top-0 h-[100dvh] w-full overflow-hidden shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)] ${className}`}
            >
                {/* 
                    Internal Scroller:
                    If content is taller than screen (Mobile), this allows scrolling INSIDE the card.
                    Once you hit the bottom, the main page continues scrolling, pulling the next card up.
                */}
                <div className="h-full w-full overflow-y-auto scrollbar-none touch-pan-y">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default SlideSection;