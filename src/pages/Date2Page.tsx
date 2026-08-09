import React from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/gallery';
import { videosData } from '../data/videos';
import { memoriesData } from '../data/memories';
import CourtCase from '../components/organisms/CourtCase';

const Date2Page = () => {
  const date2Photos = galleryData.filter(p => p.url.startsWith('Date2-'));
  const date2Videos = videosData.filter(v => v.url.startsWith('Date2-'));
  const date2Memory = memoriesData.find(m => m.id === 'm10');

  return (
    <div className="date2-page" style={{ background: 'var(--color-soft-white)', minHeight: '100vh', padding: '4rem 2rem' }}>
      {/* Featured Memory Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="featured-memory-card"
        style={{
          maxWidth: '600px',
          margin: '0 auto 5rem auto',
          padding: '3rem',
          backgroundColor: 'var(--color-cream)',
          border: '2px solid var(--color-champagne-gold)',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          position: 'relative'
        }}
      >
        <h2 className="font-romantic" style={{ fontSize: '2rem', color: 'var(--color-rose-pink)', margin: '0 0 1rem 0' }}>
          {date2Memory?.title}
        </h2>
        <p className="font-ui" style={{ fontSize: '1.1rem', color: 'var(--color-warm-grey)', marginBottom: '1.5rem', letterSpacing: '2px' }}>
          {date2Memory?.description}
        </p>
        <div className="memory-highlight" style={{
          fontSize: '1.4rem',
          fontStyle: 'italic',
          color: 'var(--color-rose-pink)',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          "{date2Memory?.highlight}"
        </div>
      </motion.div>

      {/* Premium Scrapbook Gallery */}
      <div className="scrapbook-section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-romantic"
          style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--color-rose-pink)', marginBottom: '3rem' }}
        >
          Captured Moments
        </motion.h2>

        <div className="scrapbook-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '3rem',
          padding: '2rem'
        }}>
          {/* Images as Polaroids */}
          {date2Photos.map((photo, index) => {
            const rotation = (Math.random() * 6 - 3);
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                style={{ rotate: rotation + 'deg' }}
                className="polaroid-frame"
                style={{
                  backgroundColor: 'white',
                  padding: '15px 15px 40px 15px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <img
                  src={'/images/' + photo.url}
                  alt={photo.caption}
                  style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '15px' }}
                />
                <div className="polaroid-caption" style={{
                  fontFamily: 'var(--font-romantic)',
                  textAlign: 'center',
                  fontSize: '1.2rem',
                  color: 'var(--color-warm-grey)'
                }}>
                  {photo.caption}
                </div>
              </motion.div>
            );
          })}

          {/* Videos as Scrapbook Cards */}
          {date2Videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (date2Photos.length + index) * 0.1 }}
              className="video-card"
              style={{
                backgroundColor: 'white',
                padding: '15px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                borderRadius: '15px',
                overflow: 'hidden'
              }}
            >
              <video
                src={'/images/' + video.url}
                controls
                style={{ width: '100%', borderRadius: '10px', display: 'block' }}
              />
              <div className="video-caption" style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontFamily: 'var(--font-romantic)',
                fontSize: '1.2rem',
                color: 'var(--color-warm-grey)'
              }}>
                {video.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Court Case No. 2 Section */}
      <div className="court-case-section" style={{ marginTop: '8rem', padding: '4rem 2rem' }}>
        <CourtCase
          caseNumber="0002"
          judge="Zelda Mrs Cass"
          accused="Cass"
          charges={[
            'Making Your Honour blush',
            'Excessive staring',
            'Excessive affection',
            'Excessive hugs',
            'Excessive kisses',
            'Refusing to behave around his woman',
            'Repeatedly making Your Honour lose her serious face'
          ]}
          verdict="GUILTY ❤️"
          sentence="LIFE IMPRISONMENT"
          prison="Zelda's Heart ❤️"
          status="Serving happily."
          judgeNote="You'll forever get life sentences."
          isMainPage={true}
        />
      </div>

      {/* Closing Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="closing-section"
        style={{ textAlign: 'center', marginTop: '8rem', paddingBottom: '4rem' }}
      >
        <p className="font-romantic" style={{ fontSize: '2rem', color: 'var(--color-rose-pink)', marginBottom: '1rem' }}>
          Another memory added. ❤️
        </p>
        <p className="font-ui italic" style={{ color: 'var(--color-warm-grey)', fontSize: '1.1rem' }}>
          Some days don't need anything extraordinary.<br />
          Being together is enough.
        </p>
      </motion.div>
    </div>
  );
};

export default Date2Page;
