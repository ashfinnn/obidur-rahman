import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import { Navbar } from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-dm-sans",
});

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
    <html lang="en" className={dmSans.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
