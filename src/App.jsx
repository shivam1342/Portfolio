import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Vision from './components/Vision';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = {
    home: Home,
    about: About,
    skills: Skills,
    projects: Projects,
    education: Education,
    certificates: Certificates,
    vision: Vision,
    contact: Contact,
  };

  const handleSectionChange = (section) => {
    if (section !== activeSection && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const ActiveComponent = sections[activeSection];

  // Page flip transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      rotateY: -15,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      rotateY: 15,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="app">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
      />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-container"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
