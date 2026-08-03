import React from 'react';
import { motion } from 'framer-motion';
import { memoriesData } from '../data/memories';

const MemoriesPage = () => {
  return (
    <div className="memories-page">
      <div className="memories-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-romantic" 
          style={{fontSize: '4rem', color: 'var(--color-rose-pink)'}}
        >
          Little Things
        </motion.h1>
        <p className="font-ui italic">The fragments of joy that make up our whole.</p>
      </div>
      <div className="memories-grid">
        {memoriesData.map((memory, i) => (
          <motion.div 
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="memory-card"
          >
            <span className="memory-category">{memory.category}</span>
            <h3 className="memory-title">{memory.title}</h3>
            <p className="font-ui" style={{color: 'var(--color-warm-grey)'}}>{memory.description}</p>
            <div className="memory-highlight">"{memory.highlight}"</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default MemoriesPage;
