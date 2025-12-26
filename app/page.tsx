"use client";

import Hero from "./components/Hero";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import SectionDivider from "./components/ui/SectionDivider"; // See below for this component

export default function Home() {
  return (
    <main className="bg-[#050505] relative w-full">
      
      {/* 1. HERO - Standard Layer */}
      <div className="relative z-30 bg-[#050505]">
        <Hero />
      </div>

      <SectionDivider text="INITIALIZING CORE MODULES" />

      {/* 2. ABOUT - Standard Layer */}
      <div className="relative z-30 bg-[#050505]">
        <AboutSection />
      </div>

      <SectionDivider text="INDEXING PROJECT ARCHIVE" />

      {/* 3. PROJECTS - The "Top Card" Layer */}
      {/* mb-[80vh] creates the window for the contact section to show through */}
      <div className="relative z-30 bg-[#050505] mb-[100vh] md:mb-[80vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
        <ProjectsSection />
      </div>

      {/* 4. CONTACT - The "Bottom Card" Layer (Sticky Reveal) */}
      <div className="fixed bottom-0 left-0 right-0 z-0 h-[100vh] md:h-[80vh]">
        <ContactSection />
      </div>

    </main>
  );
}