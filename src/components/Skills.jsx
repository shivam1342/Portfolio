import { motion } from 'framer-motion';
import { FaPython, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaUnity, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiRedis, SiBlender, SiReact, SiSqlite } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '📝',
      skills: [
        { name: 'Python', icon: <FaPython />},
        { name: 'SQL', icon: <FaDatabase />},
        { name: 'C++', icon: '⚡'},
      ],
    },
    {
      title: 'AI/ML Frameworks',
      icon: '🧠',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'Scikit-learn', icon: '🔬'},
        { name: 'Keras', icon: '🎯'},
        { name: 'OpenCV', icon: '👁️'},
      ],
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      skills: [
        { name: 'Flask', icon: '🎸'},
        { name: 'REST APIs', icon: '🔌'},
      ],
    },
    {
      title: 'Databases',
      icon: '💾',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />},
        { name: 'MySQL', icon: '🐬'},
        { name: 'Vector DBs', icon: '🔢'},
        { name: 'SQLite', icon: <SiSqlite/>},
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Docker', icon: <FaDocker />},
        { name: 'Git', icon: <FaGitAlt />},
        { name: 'CI/CD', icon: '🔄'},
        { name: 'Linux', icon: '🐧'},
      ],
    },
    {
      title: 'Automation & Creative',
      icon: '🎨',
      skills: [
        { name: 'n8n', icon: <SiReact />},
        { name: 'Unity', icon: <FaUnity />},
        { name: 'Blender', icon: <SiBlender />},
        { name: 'Figma', icon: '🎨'},
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="skills-section page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title handwritten">Skills & Tech Stack</h2>
          <div className="journal-divider"></div>
          <p className="section-subtitle typewriter">
            Tools and technologies I work with daily
          </p>

          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                variants={cardVariants}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title handwritten">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-card"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        z: 50,
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="skill-content">
                        <span className="skill-icon">{skill.icon}</span>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level typewriter">{skill.level}</span>
                        </div>
                      </div>
                      
                      {/* Pin/tape effect */}
                      <div className="pin-effect">📌</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="ink-stain small" style={{ top: '8%', right: '12%' }}></div>
      <div className="ink-stain medium" style={{ bottom: '15%', left: '8%' }}></div>
    </div>
  );
};

export default Skills;
