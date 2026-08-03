import React from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/gallery';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-romantic"
        >
          Captured Moments
        </motion.h1>
        <p className="font-ui italic">A glimpse into the magic we shared.</p>
      </div>

      <div className="gallery-grid">
        {galleryData.map((photo, index) => {
          const rotation = (Math.random() * 6 - 3);
          
          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                rotate: rotation + 'deg', 
              }}
              className="polaroid-frame"
            >
              <img 
                src={'/images/' + photo.url} 
                alt={photo.caption} 
                className="polaroid-image"
              />
              <div className="polaroid-caption">
                {photo.caption}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
