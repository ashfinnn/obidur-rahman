// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import Footer from './components/Footer';
import SlideSection from './components/ui/SlideSection';

export default function Home() {
  return (
    <main className="relative w-full bg-black overflow-x-clip">
      <Header />

      {/* 1. HERO */}
      <SlideSection index={1} id="hero" className="bg-[#050505]">
        <Hero />
      </SlideSection>

      {/* 2. ABOUT + SKILLS (Merged) */}
      <SlideSection index={2} id="about" className="bg-[#f4f4f0]">
        <AboutSection />
      </SlideSection>

      {/* 3. PROJECTS (Adjusted index) */}
      <SlideSection index={3} id="projects" className="bg-[#000]">
        <ProjectsSection />
      </SlideSection>

      {/* 4. CONTACT (Adjusted index) */}
      <SlideSection index={4} id="contact" className="bg-white">
        <div className="min-h-[100dvh] flex flex-col justify-between">
            <ContactSection />
            <Footer />
        </div>
      </SlideSection>
    </main>
  );
}