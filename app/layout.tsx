import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Obidur Rahman | R&D Engineer",
  description: "Portfolio of Obidur Rahman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-[#050505] text-white`}>
        {/* We moved Lenis inside ClientLayout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}