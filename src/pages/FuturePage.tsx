import React from 'react';
import { motion } from 'framer-motion';
import { futureDatesData } from '../data/futureDates';

const FuturePage = () => {
  return (
    <div className="memories-page">
      <div className="memories-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-romantic" 
          style={{fontSize: '4rem', color: 'var(--color-rose-pink)'}}
        >
          Our Future
        </motion.h1>
        <p className="font-ui italic">The dreams we have yet to touch.</p>
      </div>
      <div className="future-grid">
        {futureDatesData.map((event, i) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="future-card"
          >
            <div className="coming-soon-badge">Coming Soon</div>
            <h3 className="font-romantic" style={{fontSize: '2rem', color: 'var(--color-rose-pink)'}}>{event.title}</h3>
            <p className="font-ui" style={{color: 'var(--color-warm-grey)'}}>{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default FuturePage;
