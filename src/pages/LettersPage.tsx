import React from 'react';
import { motion } from 'framer-motion';
import { lettersData } from '../data/letters';

const LettersPage = () => {
  return (
    <div className="letters-page">
      <div className="gallery-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-romantic" 
          style={{fontSize: '4rem', color: 'var(--color-rose-pink)'}}
        >
          Letters
        </motion.h1>
      </div>
      {lettersData.map((letter, i) => (
        <motion.div 
          key={letter.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="letter-paper"
        >
          <div className="letter-date">{letter.date}</div>
          <h2 className="font-romantic" style={{fontSize: '2rem', marginBottom: '1rem'}}>{letter.title}</h2>
          <div className="letter-content">{letter.content}</div>
        </motion.div>
      ))}
    </div>
  );
};
export default LettersPage;
