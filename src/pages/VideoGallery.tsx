import React from 'react';
import { motion } from 'framer-motion';
import { videosData } from '../data/videos';

const VideoGallery = () => {
  return (
    <div className="video-page">
      <div className="video-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-romantic"
        >
          Moving Memories
        </motion.h1>
        <p className="font-ui italic">The moments that words can't describe.</p>
      </div>

      <div className="video-grid">
        {videosData.map((video, index) => (
          <motion.div 
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="video-card"
            style={{ 
              rotate: (index % 2 === 0 ? 1 : -1) + 'deg' 
            }}
          >
            <video 
              src={'/images/' + video.url} 
              className="video-element" 
              controls 
              muted 
              loop
            />
            <div className="video-info">
              <p className="video-caption">{video.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
