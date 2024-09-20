// src/App.jsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="mt-16">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
