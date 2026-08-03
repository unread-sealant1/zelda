import React from 'react';
import { motion } from 'framer-motion';

const CourtCasePage = () => {
  return (
    <div className="court-container">
      <motion.div 
        initial={{ rotate: -5, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        className="case-file"
      >
        <div className="guilty-stamp">GUILTY ??</div>
        <h1 className="font-purpose" style={{textAlign: 'center', marginBottom: '2rem'}}>CASE FILE #0001</h1>
        <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px', fontSize: '1.1rem'}}>
          <strong>Accused:</strong> <span>Cass</span>
          <strong>Crime:</strong> <span>Making Your Honour blush</span>
          <strong>Verdict:</strong> <span>Guilty</span>
          <strong>Sentence:</strong> <span>Life Imprisonment</span>
          <strong>Prison:</strong> <span>?? Zelda's Heart ??</span>
          <strong>Status:</strong> <span>Happily Serving</span>
        </div>
      </motion.div>
    </div>
  );
};
export default CourtCasePage;
