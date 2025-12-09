"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/app/components/Loader";
import Header from "@/app/components/Header";
// import Footer from '@/app/components/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          // Add padding-left for desktop to accommodate the sidebar
          className="md:pl-24 min-h-screen flex flex-col"
        >
          <Header />
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </motion.div>
      )}
    </>
  );
}
