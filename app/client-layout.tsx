"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "@/app/components/Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure we start at the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* The Loader handles its own exit animation/unmounting */}
      {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}

      {/* 
         The Main Content sits underneath the loader.
         We don't need to animate opacity from 0 here because the 
         Loader slides UP revealing this content. 
         However, we can add a subtle scale/y effect for extra polish.
      */}
      <div 
        className={`
           min-h-screen flex flex-col transition-opacity duration-700
           ${isLoading ? 'opacity-0 fixed w-full' : 'opacity-100'}
        `}
      >
          {/* Optional: Add a subtle entry animation once loaded */}
          {!isLoading && (
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:pl-24 flex-grow" // Sidebar padding
            >
              <main>{children}</main>
            </motion.div>
          )}
      </div>
    </>
  );
}