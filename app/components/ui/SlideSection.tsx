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
    const ref = useRef<HTMLDivElement>(null);

    // Track scroll relative to THIS section
    const { scrollYProgress } = useScroll({
        target: ref,
        // "start start": Top of card hits Top of viewport (Sticks)
        // "end start": Bottom of card hits Top of viewport (Fully covered)
        offset: ["start start", "end start"]
    });

    // FADE OUT EFFECT:
    // As the user scrolls and the NEXT section slides up,
    // THIS section will fade from Opacity 1 to 0.
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    
    // DEPTH EFFECT:
    // Slight scale down to make it look like it's going into the background
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        // IMPORTANT: motion.div is the sticky container directly.
        // No outer wrapper. This ensures it stays fixed.
        <motion.div
            ref={ref}
            style={{ 
                opacity, 
                scale,
                zIndex: index 
            }}
            className={`sticky top-0 h-[100dvh] w-full overflow-hidden origin-top ${className}`}
        >
            {/* Internal Scroll for Mobile/Tall Content */}
            <div 
                id={id}
                className="h-full w-full overflow-y-auto scrollbar-none touch-pan-y"
            >
                {children}
            </div>
        </motion.div>
    );
};

export default SlideSection;