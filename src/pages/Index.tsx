import React, { useState } from 'react';
import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import InternshipSection from '@/components/InternshipSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExtrasSection from '@/components/ExtrasSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <HomeSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <InternshipSection />
        <ProjectsSection />
        <ExtrasSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;