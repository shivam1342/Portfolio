import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const timeline = [
    
    
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      period: '2022 - 2026',
      description: 'Foundation in computer science fundamentals, algorithms, software and AI/ML engineering.',
      highlights: ['Hackathon Winner', 'Google Nibbler Project Member'],
    },
    {
      type: 'education',
      title: '12th / Senior Secondary',
      institution: 'Kendriya Vidyalaya No.3 Agra',
      location: 'Agra, India',
      period: '2020 - 2021',
      description: 'Focused on Science stream, specializing in Mathematics, Physics, and Computer Science.',
      highlights: ['Science Exhibition Winner', 'Events Management', 'School House Captain'],
    },
    {
      type: 'education',
      title: '10th / Secondary School',
      institution: 'Kendriya Vidyalaya No.3 Agra',
      location: 'Agra, India',
      period: '2018 - 2019',
      description: 'Completed secondary education with a strong foundation in Science and Mathematics.',
      highlights: ['FootBall Regional Winner', 'Social Science Exhibition Winner'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="education-section page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title handwritten">Education & Experience</h2>
          <div className="journal-divider"></div>
          <p className="section-subtitle typewriter">
            My journey through learning and professional growth
          </p>

          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${item.type}`}
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">
                    {item.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
                  </div>
                  <div className="marker-line"></div>
                </div>

                <motion.div
                  className="timeline-content"
                  whileHover={{ 
                    scale: 1.02,
                    rotateZ: index % 2 === 0 ? 0.5 : -0.5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="content-header">
                    <div className="period-badge typewriter">{item.period}</div>
                    <div className={`type-badge ${item.type}`}>
                      {item.type === 'education' ? '🎓 Education' : '💼 Work'}
                    </div>
                  </div>

                  <h3 className="timeline-title handwritten">{item.title}</h3>
                  
                  <div className="timeline-institution">
                    <span className="institution-name">{item.institution}</span>
                    <span className="institution-location">📍 {item.location}</span>
                  </div>

                  <p className="timeline-description">{item.description}</p>

                  <div className="timeline-highlights">
                    {item.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="highlight-tag">
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Folded corner effect */}
                  <div className="folded-corner"></div>
                  
                  {/* Wax seal for education */}
                  {item.type === 'education' && (
                    <div className="wax-seal">🏆</div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="ink-stain small" style={{ top: '10%', right: '5%' }}></div>
      <div className="ink-stain medium" style={{ bottom: '5%', left: '8%' }}></div>
    </div>
  );
};

export default Education;
