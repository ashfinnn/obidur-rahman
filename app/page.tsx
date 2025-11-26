'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import SlideSection from './components/ui/SlideSection';

export default function Home() {
  return (
    <main className="relative w-full bg-black">
      {/* Header is fixed z-[999] inside the component */}
      <Header />

      {/* 1. HERO (Black Background) */}
      <SlideSection index={1} className="bg-[#050505]">
        <Hero />
      </SlideSection>

      {/* 2. ABOUT (Light Background) */}
      <SlideSection index={2} className="bg-[#f5f5f5]">
        <AboutSection />
      </SlideSection>

      {/* 3. SKILLS (Dark/Gray Background) */}
      <SlideSection index={3} className="bg-[#111111]">
        <SkillsSection />
      </SlideSection>

      {/* 4. PROJECTS (Black Background) */}
      <SlideSection index={4} className="bg-[#000000]">
        <ProjectsSection />
      </SlideSection>

      {/* 5. CONTACT & FOOTER (White Background) */}
      <SlideSection index={5} className="bg-white text-black">
        {/* Wrapper to ensure Footer sits at the bottom of this slide */}
        <div className="min-h-[100dvh] flex flex-col justify-between">
          <ContactSection />
          <Footer />
        </div>
      </SlideSection>

    </main>
  );
}