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
    <main className="relative w-full bg-black">
      <Header />

      {/* 1. HERO (Z-Index 1) */}
      <SlideSection index={1} className="bg-[#050505]">
        <Hero />
      </SlideSection>

      {/* 2. ABOUT (Z-Index 2 - Slides OVER Hero) */}
      <SlideSection index={2} className="bg-[#f4f4f0]">
        <AboutSection />
      </SlideSection>

      {/* 3. SKILLS (Z-Index 3 - Slides OVER About) */}
      <SlideSection index={3} className="bg-gray-100">
        <SkillsSection />
      </SlideSection>

      {/* 4. PROJECTS (Z-Index 4 - Slides OVER Skills) */}
      <SlideSection index={4} className="bg-[#0a0a0a]">
        <ProjectsSection />
      </SlideSection>

      {/* 5. CONTACT (Z-Index 5 - Slides OVER Projects) */}
      <SlideSection index={5} className="bg-white">
        <div className="min-h-[100dvh] flex flex-col justify-between">
            <ContactSection />
            <Footer />
        </div>
      </SlideSection>
    </main>
  );
}