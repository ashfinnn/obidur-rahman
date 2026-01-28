"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Loader from "@/app/components/Loader";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLoaded = useCallback(() => {
    setIsLoading(false);
    // Reset scroll after loading
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const content = (
    <>
      {isLoading && <Loader onLoaded={handleLoaded} />}

      <div 
        className={`
          min-h-screen flex flex-col transition-opacity duration-700
          ${isLoading ? 'opacity-0 fixed w-full overflow-hidden' : 'opacity-100'}
        `}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      >
        {!isLoading && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        )}
      </div>
    </>
  );

  // Only use Lenis on desktop
  if (isMobile) {
    return content;
  }

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.2, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {content}
    </ReactLenis>
  );
}