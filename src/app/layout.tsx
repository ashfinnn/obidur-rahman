import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Obidur Rahman",
  description: "AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <style>{`@media (max-width:809.98px){
.framer-nvpae .framer-f5mr4r{justify-content:flex-start;gap:4px}
.framer-nvpae .framer-1fwfx4u{flex:1;justify-content:flex-end;gap:4px;min-width:0}
}`}</style>
      </body>
    </html>
  );
}
