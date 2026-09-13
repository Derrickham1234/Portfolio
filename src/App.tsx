import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AskAboutDerrick } from './components/AskAboutDerrick.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { Methodology } from './components/Methodology.tsx';
import { Terminal } from './components/Terminal.tsx';
import { Services } from './components/Services.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { InnovationLab } from './components/InnovationLab.tsx';
import { CybersecuritySection } from './components/CybersecuritySection.tsx';
import { TimelineSection } from './components/TimelineSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { GitHubSection } from './components/GitHubSection.tsx';
import { CvBanner } from './components/CvBanner.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { CvModal } from './components/CvModal.tsx';
import { ProjectItem } from './types.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f141c] text-[#dee2ee] relative selection:bg-[#4edea3]/20 selection:text-[#4edea3]">
      {/* Fixed Sticky Header Navigation */}
      <Header onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="w-full pt-16">
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. Instant Intel: Ask About Derrick */}
        <AskAboutDerrick />

        {/* 3. About Me Section */}
        <AboutSection />

        {/* 4. Engineering Mindset / Methodology */}
        <Methodology />

        {/* 5. Interactive Developer CLI Terminal */}
        <Terminal />

        {/* 6. What I Can Build (Value Delivered) */}
        <Services />

        {/* 7. Technical Stack Repertoire */}
        <SkillsSection />

        {/* 8. Featured Projects & Architecture */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 9. Innovation Lab (R&D Blueprints) */}
        <InnovationLab />

        {/* 10. Exploring Cybersecurity */}
        <CybersecuritySection />

        {/* 11. My Learning Journey (Timeline) */}
        <TimelineSection />

        {/* 12. Professional Experience */}
        <ExperienceSection />

        {/* 13. Education & Background */}
        <EducationSection />

        {/* 14. GitHub Repositories Telemetry */}
        <GitHubSection />

        {/* 15. Comprehensive Dossier CV Call to Action */}
        <CvBanner onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 16. Connect & Collaborate (Contact Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialogs */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
