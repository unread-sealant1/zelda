import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const typingLines = [
    "Every memory with you",
    "deserves a place",
    "we can visit forever."
  ];

  return (
    <div className="landing-container">
      <div className="landing-bg-wrapper">
        <img
          src="https://images.unsplash.com/photo-1516589174121-9c8554437f9a?auto=format&fit=crop&q=80&w=1920"
          className="landing-bg-image"
          alt="Romantic Background"
        />
        <div className="landing-bg-overlay" />
      </div>

      <div className="landing-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="landing-title"
        >
          For Zelda Motsatsi Mahasha (Mrs Cass) ??
        </motion.h1>

        <div className="typing-container">
          {typingLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + (i * 1), duration: 1 }}
              className="typing-line"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          style={{ marginBottom: '6rem' }} 
        >
          <Link to="/timeline" className="cta-button">
            Relive Our Weekend ??
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6, duration: 2 }}
          className="footer-story"
        >
          <p className="footer-title">Our Story</p>
          <p className="footer-dates">Saturday & Sunday</p>
          <p className="footer-subtitle">The beginning of something beautiful.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
