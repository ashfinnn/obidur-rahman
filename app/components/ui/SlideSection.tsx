'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SlideSectionProps {
    children: React.ReactNode;
    className?: string;
    index: number;
    id?: string;
}

const SlideSection = ({ children, className = "", index, id }: SlideSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // "start start": Top of element hits top of viewport
        // "end start": Bottom of element hits top of viewport
        offset: ["start start", "end start"] 
    });

    // SMOOTH TRANSITIONS
    // Scale: 1 -> 0.9 (Shrinks slightly as it goes up/gets covered)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    // Opacity/Brightness: Fades slightly to create depth
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    
    return (
        <div 
            ref={containerRef} 
            className="relative w-full"
            style={{ 
                // This is the magic. We force the container to be scrollable.
                // The zIndex ensures stacking order.
                zIndex: index 
            }} 
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    style={{ scale, opacity }}
                    className={`relative h-full w-full ${className}`}
                >
                    {/* Internal Scroll for Mobile Content */}
                    <div 
                        id={id}
                        className="h-full w-full overflow-y-auto scrollbar-none touch-pan-y"
                    >
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SlideSection;