import React from 'react';
import { motion } from 'framer-motion';

const FinalPage = () => {
  return (
    <div className="final-page">
      <img src="/images/final-photo.jpg" className="final-image" alt="Us" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="final-text"
      >
        <p>Thank you</p>
        <p>for giving me</p>
        <p>a chance.</p>
        <p style={{fontSize: '1.5rem', marginTop: '2rem', fontFamily: 'var(--font-ui)'}}>
          Here's to many more memories, <br/>
          many more laughs, <br/>
          many more kisses, <br/>
          and forever choosing each other.
        </p>
        <p style={{marginTop: '3rem', color: 'var(--color-rose-pink)'}}>Love, Cass ??</p>
      </motion.div>
    </div>
  );
};
export default FinalPage;
