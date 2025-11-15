import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-section page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title handwritten">About Me</h2>
          <div className="journal-divider"></div>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="journal-entry">
                <div className="entry-date handwritten">Entry #001</div>
                <p className="entry-text">
                  I'm a passionate AI/ML Engineer and Backend Developer with a deep fascination 
                  for building intelligent systems that solve real-world problems. My journey in 
                  technology is driven by curiosity and a constant desire to learn and innovate.
                </p>
                <p className="entry-text">
                  With expertise spanning machine learning, backend architecture, and system design, 
                  I specialize in creating scalable solutions that bridge the gap between cutting-edge 
                  AI research and practical implementation. I believe in writing clean, maintainable 
                  code and designing systems that are both robust and elegant.
                </p>
                <p className="entry-text">
                  Beyond coding, I'm deeply interested in automation workflows (n8n), game development 
                  (Unity), and 3D modeling (Blender). I enjoy exploring the intersection of technology 
                  and creativity, always looking for new ways to bring ideas to life.
                </p>
                <p className="entry-text highlight typewriter">
                  "Code is poetry written in logic, and systems are the stories we tell through architecture."
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="about-visual"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="sketch-portrait">
                <div className="portrait-frame">
                  <div className="portrait-placeholder">
                    
                    <img src="src\components\my_photo.jpg" alt="Profile" className="portrait-image" />
                    
                  </div>
                </div>
                <div className="tape-strip top-left"></div>
                <div className="tape-strip bottom-right"></div>
              </div>

              {/* Margin doodles */}
              <div className="margin-doodles">
                <motion.div 
                  className="doodle-item"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="doodle-icon">⚙️</span>
                  <span className="doodle-label handwritten">Systems</span>
                </motion.div>
                <motion.div 
                  className="doodle-item"
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="doodle-icon">🧠</span>
                  <span className="doodle-label handwritten">AI/ML</span>
                </motion.div>
                <motion.div 
                  className="doodle-item"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="doodle-icon">💻</span>
                  <span className="doodle-label handwritten">Code</span>
                </motion.div>
                <motion.div 
                  className="doodle-item"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="doodle-icon">🎨</span>
                  <span className="doodle-label handwritten">Creative</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative ink stains */}
      <div className="ink-stain small" style={{ top: '5%', right: '10%' }}></div>
      <div className="ink-stain medium" style={{ bottom: '10%', left: '5%' }}></div>
    </div>
  );
};

export default About;
