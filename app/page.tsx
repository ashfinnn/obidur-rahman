"use client";

import Hero from "./components/Hero";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ResearchSection from "./components/sections/ResearchSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import SectionDivider from "./components/ui/SectionDivider";
import DynamicNav from "./components/ui/DynamicNav";

export default function Home() {
  return (
    <main className="bg-[#050505] relative w-full">

      <DynamicNav />

      <div id="hero" className="relative z-30 bg-[#050505]">
        <Hero />
      </div>

      <SectionDivider text="INITIALIZING CORE MODULES" />

      {/* 1. ABOUT: Intro + Skills Grid */}
      <div id="about" className="relative z-30 bg-[#050505]">
        <AboutSection />
      </div>
      <SectionDivider text="INITIALIZING CORE MODULES" />

      {/* 2. EXPERIENCE: Employment & Education Log (No Awards) */}
      <div id="experience" className="relative z-30 bg-[#050505]">
        <ExperienceSection />
      </div>

      <SectionDivider text="ACCESSING RESEARCH ARCHIVE" />

      {/* 3. RESEARCH: Papers, Math Frameworks & Awards */}
      <div id="research" className="relative z-30 bg-[#F4F4F5]">
        <ResearchSection />
      </div>
      <SectionDivider text="INITIALIZING CORE MODULES" />

      {/* 4. PROJECTS: Engineering & Systems */}
      <div id="projects" className="relative z-30 bg-[#050505] mb-[100vh] md:mb-[80vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
        <ProjectsSection />
      </div>

      <div id="contact" className="fixed bottom-0 left-0 right-0 z-0 h-[100vh] md:h-[80vh]">
        <ContactSection />
      </div>

    </main>
  );
}