// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import Footer from './components/Footer';
import StickySection from './components/ui/StickySection';

export default function Home() {
  return (
    <main className="relative w-full bg-black">
      {/* Header stays fixed on top of everything */}
      <Header />

      {/* 1. HERO (Black) */}
      <StickySection index={1} className="bg-[#050505]">
        <Hero />
      </StickySection>

      {/* 2. ABOUT (Light) */}
      <StickySection index={2} className="bg-[#f4f4f0]">
        <AboutSection />
      </StickySection>

      {/* 3. SKILLS (Light Gray) */}
      <StickySection index={3} className="bg-gray-100">
        <SkillsSection />
      </StickySection>

      {/* 4. PROJECTS (Dark) */}
      <StickySection index={4} className="bg-[#0a0a0a]">
        <ProjectsSection />
      </StickySection>

      {/* 5. CONTACT & FOOTER (Light) */}
      <StickySection index={5} className="bg-white">
        <div className="min-h-screen flex flex-col justify-between">
           <ContactSection />
           <Footer />
        </div>
      </StickySection>
    </main>
  );
}