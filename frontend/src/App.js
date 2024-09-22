import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import RippleBackground from './components/RippleBackground';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div className="font-playfair">
      <RippleBackground />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
