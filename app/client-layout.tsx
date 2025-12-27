"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "@/app/components/Loader";
import { ReactLenis } from '@studio-freight/react-lenis'; // IMPORT HERE

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root> {/* WRAP HERE */}
      
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

    </ReactLenis>
  );
}