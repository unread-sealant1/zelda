import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import TimelineItem from '../components/molecules/TimelineItem';

const TimelinePage = () => {
  return (
    <div className="timeline-page">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="timeline-header"
      >
        <h1>Our Journey</h1>
        <p>A chronological whisper of the moments that changed everything.</p>
      </motion.div>

      <div className="timeline-container">
        <div className="timeline-line" />
        {timelineData.map((event, index) => (
          <TimelineItem key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
