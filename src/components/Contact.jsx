import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_8540hnk',       
      'template_giweeoq',      
      formData,                
      'xhLpHiNGc_LJC3bof'     
    )
    .then(() => {
      alert('Message sent successfully!');
      // Optionally reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Failed to send message. Try again later.');
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/shivam1342', color: '#2c1810' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivam-singh-dfgh/', color: '#0077b5' },
    
    { icon: <FaEnvelope />, label: 'Email', url: 'mailto:shivamchahar300@gmail.com', color: '#a04747' },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'shivamchahar300@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 9258856727' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Agra, India' },
  ];

  return (
    <div className="contact-section page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title handwritten">Let's Connect</h2>
          <div className="journal-divider"></div>
          <p className="section-subtitle typewriter">
            The final page of this notebook... but the beginning of our collaboration
          </p>

          <div className="contact-content">
            {/* Contact Info & Social */}
            <motion.div
              className="contact-info-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="info-card">
                <h3 className="info-title handwritten">Get In Touch</h3>
                
                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="contact-detail-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      <span className="detail-icon">{info.icon}</span>
                      <div className="detail-content">
                        <span className="detail-label typewriter">{info.label}</span>
                        <span className="detail-value">{info.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="social-links">
                  <h4 className="social-title handwritten">Find Me Online</h4>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{ '--hover-color': social.color }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                        <span className="social-label">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Decorative sketch */}
                <div className="sketch-decoration">
                  <div className="sketch-line"></div>
                  <span className="sketch-text handwritten">Let's build something amazing together!</span>
                  <div className="sketch-line"></div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Post-it style) */}
            <motion.div
              className="contact-form-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="postit-form">
                <div className="postit-header">
                  <span className="postit-title handwritten">Drop me a message</span>
                  <span className="postit-pin">📌</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="typewriter">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="typewriter">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="typewriter">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="typewriter">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="handwritten">Send Message</span>
                    <span className="btn-icon">✉️</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Closing Note */}
          <motion.div
            className="closing-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="handwritten">
              Thank you for reading through my portfolio notebook. 
              <br />
              Looking forward to hearing from you! 🚀
            </p>
            <div className="signature handwritten">- Shivam Singh</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="ink-stain small" style={{ top: '10%', left: '5%' }}></div>
      <div className="ink-stain medium" style={{ bottom: '5%', right: '8%' }}></div>
      
      {/* Page corner fold */}
      <div className="page-corner-fold"></div>
    </div>
  );
};

export default Contact;
