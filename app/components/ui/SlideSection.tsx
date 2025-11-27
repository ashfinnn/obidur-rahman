"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface SlideSectionProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  id?: string;
}

const SlideSection = ({
  children,
  className = "",
  index,
  id,
}: SlideSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // 1. Detect Mobile to disable expensive animations
  useEffect(() => {
    const checkMobile = () => {
      // 1024px is the standard LG breakpoint in Tailwind
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Scroll Logic (Desktop Only)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 3. Calculate Effects (Only used on Desktop)
  // Opacity fades out as the next card covers it
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // Scale shrinks slightly to create depth
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // 4. Conditional Styles based on Device
  // On Mobile: We return EMPTY styles so it scrolls naturally without transforms
  const dynamicStyle = isMobile ? {} : { opacity, scale, zIndex: index };

  return (
    <motion.div
      ref={ref}
      style={dynamicStyle}
      // WILL-CHANGE: Hints browser to optimize rendering for these properties
      className={`
                w-full
                origin-top
                will-change-transform

                /* MOBILE STYLES (Default) */
                relative
                min-h-screen
                h-auto

                /* DESKTOP STYLES (lg+) */
                lg:sticky
                lg:top-0
                lg:h-screen
                lg:overflow-hidden

                ${className}
            `}
    >
      {/*
               Inner Container:
               On mobile, this allows content to grow naturally.
               On desktop, it centers content if it's short, or fits strictly.
            */}
      <div id={id} className="relative w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default SlideSection;
