import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [underlineAnimated, setUnderlineAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setUnderlineAnimated(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="home-section">
      <div className="home-container">
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="greeting" variants={itemVariants}>
            <span className="handwritten greeting-text">Hello, I'm</span>
          </motion.div>

          <motion.h1 
            className="name handwritten"
            variants={itemVariants}
          >
            <span className={`ink-underline ${underlineAnimated ? 'animated' : ''}`}>
              Shivam Singh
            </span>
          </motion.h1>

          <motion.div className="tagline-container" variants={itemVariants}>
            <h2 className="tagline typewriter">
              AI/ML Engineer | Backend Developer | Creative Systems Developer
            </h2>
          </motion.div>

          <motion.p 
            className="intro-text"
            variants={itemVariants}
          >
            Crafting intelligent systems and seamless automations —
            <br />
            bridging imagination, engineering, and execution. 
          </motion.p>

          <motion.div 
            className="cta-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="cta-btn primary"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="handwritten">View My Work</span>
            </motion.button>
            
            <motion.button
              className="cta-btn secondary"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="handwritten">Get In Touch</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Decorative doodles */}
        <div className="doodle-container">
          <motion.div 
            className="doodle gear-sketch"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            ⚙️
          </motion.div>
          <motion.div 
            className="doodle brain-sketch"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🧠
          </motion.div>
          <motion.div 
            className="doodle code-sketch"
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            💻
          </motion.div>
        </div>

        {/* Ink stains */}
        <div className="ink-stain small" style={{ top: '10%', right: '15%' }}></div>
        <div className="ink-stain medium" style={{ bottom: '20%', left: '10%' }}></div>
        <div className="ink-stain large" style={{ top: '40%', right: '5%', opacity: 0.3 }}></div>
      </div>
    </div>
  );
};

export default Home;
