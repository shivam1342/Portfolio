import { motion } from 'framer-motion';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Jan 2023',
      credentialId: 'AWS-SA-2023-001',
      skills: ['Cloud Architecture', 'AWS Services', 'System Design'],
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: 'Sep 2022',
      credentialId: 'TF-DEV-2022-456',
      skills: ['Deep Learning', 'TensorFlow', 'Neural Networks'],
    },
    {
      title: 'Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Mar 2023',
      credentialId: 'CKA-2023-789',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps'],
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'Jun 2021',
      credentialId: 'ML-SPEC-2021-123',
      skills: ['ML Algorithms', 'Python', 'Data Science'],
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'Nov 2022',
      credentialId: 'MDB-DEV-2022-345',
      skills: ['NoSQL', 'Database Design', 'MongoDB'],
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'Aug 2022',
      credentialId: 'DCA-2022-678',
      skills: ['Containerization', 'Docker', 'Microservices'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const certVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="certificates-section page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title handwritten">Certificates & Achievements</h2>
          <div className="journal-divider"></div>
          <p className="section-subtitle typewriter">
            Professional certifications and accomplishments
          </p>

          <motion.div
            className="certificates-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="certificate-card"
                variants={certVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: 0,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Wax seal */}
                <div className="wax-seal-badge">
                  <div className="seal-inner">🏆</div>
                </div>

                <div className="certificate-content">
                  <div className="cert-header">
                    <div className="cert-number handwritten">
                      #{String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="cert-date typewriter">{cert.date}</div>
                  </div>

                  <h3 className="cert-title handwritten">{cert.title}</h3>
                  
                  <div className="cert-issuer">
                    <span className="issuer-icon">🎓</span>
                    <span className="issuer-name">{cert.issuer}</span>
                  </div>

                  <div className="credential-id typewriter">
                    <span className="credential-label">ID:</span>
                    <span className="credential-value">{cert.credentialId}</span>
                  </div>

                  <div className="cert-skills">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verify button */}
                  <motion.button
                    className="verify-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="typewriter">Verify Certificate</span>
                  </motion.button>
                </div>

                {/* Certificate border decoration */}
                <div className="cert-border top-left"></div>
                <div className="cert-border top-right"></div>
                <div className="cert-border bottom-left"></div>
                <div className="cert-border bottom-right"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="ink-stain small" style={{ top: '8%', left: '10%' }}></div>
      <div className="ink-stain medium" style={{ bottom: '12%', right: '8%' }}></div>
    </div>
  );
};

export default Certificates;
