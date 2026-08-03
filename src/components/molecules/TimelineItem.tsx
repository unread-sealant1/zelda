import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent } from '../../data/types';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const TimelineItem = ({ event, index }: TimelineItemProps) => {
  const isRight = index % 2 !== 0;

  return (
    <motion.div 
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={'timeline-item ' + (isRight ? 'right' : '')}
    >
      <div className="timeline-dot" />
      <div className="timeline-content">
        <span className="timeline-date">{event.date}</span>
        <h3 className="timeline-title">{event.title}</h3>
        
        {event.photos && event.photos.length > 0 ? (
          <img src={'/images/' + event.photos[0]} className="timeline-image" alt={event.title} />
        ) : (
          <div className="placeholder-card">
            "{event.placeholderText || 'A memory that lives in the heart.'}"
          </div>
        )}
        
        <p className="timeline-story">{event.story}</p>
        {event.notes && <p className="font-purpose italic" style={{fontSize: '0.8rem', color: 'var(--color-warm-grey)'}}>Note: {event.notes}</p>}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
