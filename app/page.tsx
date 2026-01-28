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
    <main className="bg-[#050505] relative w-full overflow-x-hidden">
      <DynamicNav />

      <section id="hero">
        <Hero />
      </section>

      <SectionDivider />

      <section id="about">
        <AboutSection />
      </section>

      <SectionDivider />

      <section id="experience">
        <ExperienceSection />
      </section>

      <SectionDivider />

      <section id="research">
        <ResearchSection />
      </section>

      <SectionDivider />

      <section id="projects">
        <ProjectsSection />
      </section>

      <SectionDivider />

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}