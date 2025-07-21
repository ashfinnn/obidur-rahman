// 1. Add 'use client' because we are now using React hooks (useState)
'use client';

// 2. Import React hooks and your components
import { useState } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

import Header from '@/app/components/Header'; // Adjust path if needed
import Footer from '@/app/components/Footer'; // Adjust path if needed
import Loader from '@/app/components/Loader'; // Adjust path if needed

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 3. Create state to manage whether the loader is active
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-white`}>
        
        {/* 4. Conditionally render the Loader and pass the required onLoaded prop */}
        {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}
        
        {/* Your main site content will not be rendered until loading is false, 
            or you can render it behind the loader. 
            For best performance, let's show it after loading. */}
        <AnimatePresence>
            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </motion.div>
            )}
        </AnimatePresence>
      </body>
    </html>
  );
}

// You will also need to import these for the fade-in effect after loading
import { AnimatePresence, motion } from 'framer-motion'; 