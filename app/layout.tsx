// app/layout.tsx

import type { Metadata } from 'next';
// 1. Import Geist Sans and Mono
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import HeroBackground from './components/HeroBackground';
import Loader from './components/Loader';

// Keep metadata as is, it's great
export const metadata: Metadata = {
  title: 'Obidur Rahman - Mathematician & Data Scientist',
  description: 'Portfolio of Obidur Rahman, a BSc Mathematics student specializing in data science, machine learning, and computational mathematics.',
  openGraph: {
    title: 'Obidur Rahman - Mathematician & Data Scientist',
    description: 'BSc Mathematics student passionate about data science and machine learning',
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⬡</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. Update the body class with Geist fonts. Geist Sans is now the default. */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} matrix-bg font-sans`}>
        <Loader />
        <HeroBackground />
        {children}
      </body>
    </html>
  );
}