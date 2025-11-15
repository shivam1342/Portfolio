import { motion } from 'framer-motion';
import './Vision.css';

const Vision = () => {
  const stats = [
    { label: 'Problem Solving', level: 95, color: '#c9a961' },
    { label: 'System Design', level: 90, color: '#5a8f8f' },
    { label: 'AI/ML Expertise', level: 92, color: '#a04747' },
    { label: 'Backend Development', level: 94, color: '#2c1810' },
    { label: 'Team Collaboration', level: 88, color: '#5d4037' },
  ];

  const quests = [
    {
      title: 'Master Advanced AI Architectures',
      status: 'In Progress',
      progress: 75,
      reward: 'Deep Learning Mastery',
    },
    {
      title: 'Build Scalable Systems at Scale',
      status: 'In Progress',
      progress: 85,
      reward: 'Architecture Expertise',
    },
    {
      title: 'Contribute to Open Source',
      status: 'Active',
      progress: 60,
      reward: 'Community Recognition',
    },
    {
      title: 'Mentor Next Generation Developers',
      status: 'Active',
      progress: 70,
      reward: 'Leadership Skills',
    },
  ];

  const achievements = [
    { icon: '🏆', title: 'System Architect', desc: 'Designed 10+ production systems' },
    { icon: '⚡', title: 'Speed Demon', desc: 'Optimized performance by 300%' },
    { icon: '🧠', title: 'AI Innovator', desc: 'Deployed ML models in production' },
    { icon: '🎯', title: 'Problem Solver', desc: 'Solved 500+ coding challenges' },
  ];

  return (
    <div className="vision-section page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title handwritten">Vision & Philosophy</h2>
          <div className="journal-divider"></div>
          <p className="section-subtitle typewriter">
            System Log: Character Profile & Development Path
          </p>

          <div className="vision-content">
            {/* Character Stats Panel */}
            <motion.div
              className="stats-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="panel-header">
                <h3 className="panel-title handwritten">Character Stats</h3>
                <div className="level-badge typewriter">Level 99</div>
              </div>

              <div className="stats-list">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-bar-container">
                      <motion.div
                        className="stat-bar"
                        style={{ backgroundColor: stat.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                      >
                        <span className="stat-value">{stat.level}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy Statement */}
            <motion.div
              className="philosophy-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="panel-header">
                <h3 className="panel-title handwritten">Core Philosophy</h3>
                <div className="philosophy-icon">💭</div>
              </div>

              <div className="philosophy-content">
                <blockquote className="philosophy-quote">
                  "Technology is not just about writing code—it's about solving problems, 
                  creating value, and making a positive impact. Every system I build is 
                  a step toward a future where intelligent automation empowers humanity."
                </blockquote>

                <div className="philosophy-principles">
                  <div className="principle-item">
                    <span className="principle-icon">🎯</span>
                    <div className="principle-text">
                      <strong>Purpose-Driven Development</strong>
                      <p>Build systems that solve real problems</p>
                    </div>
                  </div>
                  <div className="principle-item">
                    <span className="principle-icon">🔧</span>
                    <div className="principle-text">
                      <strong>Elegant Engineering</strong>
                      <p>Simple solutions to complex challenges</p>
                    </div>
                  </div>
                  <div className="principle-item">
                    <span className="principle-icon">🌱</span>
                    <div className="principle-text">
                      <strong>Continuous Growth</strong>
                      <p>Always learning, always improving</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Active Quests */}
            <motion.div
              className="quests-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="panel-header">
                <h3 className="panel-title handwritten">Active Quests</h3>
                <div className="quest-count typewriter">{quests.length} Active</div>
              </div>

              <div className="quests-list">
                {quests.map((quest, index) => (
                  <motion.div
                    key={index}
                    className="quest-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="quest-header">
                      <span className="quest-title">{quest.title}</span>
                      <span className={`quest-status ${quest.status.toLowerCase().replace(' ', '-')}`}>
                        {quest.status}
                      </span>
                    </div>
                    <div className="quest-progress-bar">
                      <motion.div
                        className="quest-progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${quest.progress}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                      >
                        <span className="progress-text">{quest.progress}%</span>
                      </motion.div>
                    </div>
                    <div className="quest-reward typewriter">
                      🎁 Reward: {quest.reward}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="achievements-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="panel-header">
                <h3 className="panel-title handwritten">Achievements Unlocked</h3>
              </div>

              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-desc">{achievement.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="ink-stain small" style={{ top: '5%', right: '15%' }}></div>
      <div className="ink-stain medium" style={{ bottom: '8%', left: '12%' }}></div>
    </div>
  );
};

export default Vision;
