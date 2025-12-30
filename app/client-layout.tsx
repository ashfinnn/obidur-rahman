// app/client-layout.tsx
"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.scrollTo(0, 0);
  }, []);

  const content = (
    <>
      {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}

      <div 
        className={`
           min-h-screen flex flex-col transition-opacity duration-700
           ${isLoading ? 'opacity-0 fixed w-full' : 'opacity-100'}
        `}
      >
        {!isLoading && (
          <motion.div
            initial={{ y: 20, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:pl-24 flex-grow"
          >
            <main>{children}</main>
          </motion.div>
        )}
      </div>
    </>
  );

  // Conditionally wrap with Lenis only on desktop
  if (isMobile) {
    return content;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {content}
    </ReactLenis>
  );
}