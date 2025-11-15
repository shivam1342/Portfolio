import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TaskPilot',
      description: 'Role-based task management platform with Admin, Manager, and Developer workflows. Admin approves new users and assigns teams; managers create sprints, tasks, and subtasks; developers update task states. Backend handles authentication, RBAC enforcement, and team-level access control.',
      tech: ['Python', 'Flask', 'PostgreSQL', 'JWT Auth', 'Jinja2'],
      category: 'Full Stack',
      status: 'Active',
      github: 'https://github.com/shivam1342/jira_dashboard',
      demo: '#',
    },
    {
      title: 'BlogForge',
      description: 'A full-featured blog platform with authenticated user accounts, post creation/editing, and a working contact system. Backend built in Flask with SQLite/NeonDB, using secure session management and SMTP email integration. Frontend implemented with Jinja templates and clean HTML/CSS.',
      tech: ['Python', 'Flask', 'SQLite / NeonDB', 'SMTP', 'Jinja2', 'HTML/CSS', 'Git'],
      category: 'Full Stack',
      status: 'Completed',
      github: 'https://github.com/shivam1342/blog-website',
      demo: 'https://blog-website-blogify.vercel.app/',
    },
    {
      title: 'StressSense',
      description: 'An ML-powered stress-level prediction system built with Streamlit using the WESAD physiological signals dataset. The app dynamically loads and trains multiple models (Random Forest, SVM, Neural Network) on runtime, enabling transparent experimentation and model comparison. Includes an evaluation dashboard and clean visual insights.',
      tech: ['Python', 'Scikit-Learn', 'Streamlit', 'NumPy', 'Pandas', 'Matplotlib'],
      category: 'AI/ML',
      status: 'Completed',
      github: 'https://github.com/shivam1342/stress_prediction',
      demo: '#',
    },
    {
      title: 'ResumeLens',
      description: 'Offline AI resume analyzer using Mistral via Ollama. Extracts and evaluates resumes against job descriptions, generates feedback and a compatibility score, and runs fully without external APIs.',
      tech: ['Python', 'Flask', 'Ollama', 'Mistral', 'PyMuPDF', 'python-docx'],
      category: 'AI/ML',
      status: 'completed',
      github: 'https://github.com/shivam1342/AI-resume-analyzer',
      demo: '#',
    },
    {
      title: 'ICU Bed Optimizer (Hybrid GA + Fuzzy Logic)',
      description: 'A hospital decision-support system that optimizes ICU bed assignments using a hybrid Genetic Algorithm + Fuzzy Logic model. Built with Flask, it handles multi-objective optimization, uncertainty in patient data, and real-time conflict resolution.',
      tech: ['Python', 'Flask', 'Genetic Algorithm', 'Fuzzy Logic', 'Soft Computing'],
      category: 'AI/Optimization',
      status: 'Completed',
      github: 'https://github.com/shivam1342/ICU-Bed-Assignment-Optimization',
      demo: '#',
    },
    {
      title: 'OSPlayground',
      description: 'Interactive OS concepts simulator built in both React and C++. Includes process scheduling visualizations (FCFS, SJF, RR), file-system simulation, and a C++ console version covering paging and directory operations.',
      tech: ['C++','React','Material UI','Data Structures & Algorithms','OOP'],
      category: 'Systems / OS',
      status: 'Completed',
      github: '#',
      demo: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="projects-section page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title handwritten">Projects</h2>
          <div className="journal-divider"></div>
          <p className="section-subtitle typewriter">
            Case files of systems I've built and shipped
          </p>

          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={projectVariants}
                whileHover={{ 
                  y: -8,
                  rotateZ: index % 2 === 0 ? 1 : -1,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Sticky note header */}
                <div className="project-header">
                  <div className="case-number handwritten">Case #{String(index + 1).padStart(3, '0')}</div>
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="project-content">
                  <h3 className="project-title handwritten">{project.title}</h3>
                  
                  <div className="project-category typewriter">
                    <span className="category-tag">{project.category}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Tech stack with ink stamp style */}
                  <div className="tech-stack">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="project-link primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
                  </div>
                </div>

                {/* Polaroid tape effect */}
                <div className="tape-corner top-left"></div>
                <div className="tape-corner bottom-right"></div>

                {/* Paper clip decoration */}
                <div className="paperclip">📎</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="ink-stain small" style={{ top: '5%', left: '8%' }}></div>
      <div className="ink-stain medium" style={{ bottom: '10%', right: '10%' }}></div>
    </div>
  );
};

export default Projects;
