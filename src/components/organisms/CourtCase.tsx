import React from 'react';
import { motion } from 'framer-motion';

interface CourtCaseProps {
  caseNumber: string;
  judge: string;
  accused: string;
  charges: string[];
  verdict: string;
  sentence: string;
  prison: string;
  status: string;
  judgeNote?: string;
  isMainPage?: boolean;
}

const CourtCase: React.FC<CourtCaseProps> = ({
  caseNumber,
  judge,
  accused,
  charges,
  verdict,
  sentence,
  prison,
  status,
  judgeNote,
  isMainPage = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="court-case-container"
      style={{
        maxWidth: isMainPage ? '800px' : '100%',
        margin: '0 auto',
        backgroundColor: 'var(--color-cream)',
        border: '8px double var(--color-champagne-gold)',
        padding: '4rem 2rem',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        borderRadius: '4px',
        fontFamily: 'var(--font-ui)'
      }}
    >
      {/* Animated Guilty Stamp */}
      <motion.div
        initial={{ opacity: 0, scale: 2, rotate: -20 }}
        whileInView={{ opacity: 0.8, scale: 1, rotate: -15 }}
        transition={{ delay: 0.8, duration: 0.4, type: 'spring' }}
        className="guilty-stamp"
        style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          color: 'var(--color-rose-pink)',
          fontSize: '3.5rem',
          fontWeight: '900',
          border: '8px solid var(--color-rose-pink)',
          padding: '5px 15px',
          borderRadius: '10px',
          textTransform: 'uppercase',
          zIndex: 10,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        {verdict}
      </motion.div>

      <h1 className="font-romantic" style={{
        textAlign: 'center',
        fontSize: '3rem',
        color: 'var(--color-champagne-gold)',
        marginBottom: '3rem',
        marginTop: 0
      }}>
        CASE FILE #{caseNumber}
      </h1>

      <div className="case-details" style={{
        display: 'grid',
        gridTemplateColumns: '180px 1fr',
        gap: '1.5rem',
        fontSize: '1.2rem',
        color: 'var(--color-warm-grey)',
        marginBottom: '3rem'
      }}>
        <strong style={{ color: 'var(--color-champagne-gold)' }}>Judge:</strong> <span>{judge}</span>
        <strong style={{ color: 'var(--color-champagne-gold)' }}>Accused:</strong> <span>{accused}</span>
      </div>

      <div className="charges-section" style={{ marginBottom: '3rem' }}>
        <h3 className="font-romantic" style={{ fontSize: '2rem', color: 'var(--color-rose-pink)', marginBottom: '1.5rem' }}>
          Charges
        </h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          fontSize: '1.1rem',
          lineHeight: '2',
          color: 'var(--color-warm-grey)'
        }}>
          {charges.map((charge, idx) => (
            <li key={idx}>• {charge}</li>
          ))}
        </ul>
      </div>

      <div className="defence-section" style={{
        marginBottom: '3rem',
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: '1.2rem',
        color: 'var(--color-warm-grey)',
        opacity: 0.8
      }}>
        <p>The accused admits the charges.</p>
        <p>There is no attempt to deny the evidence.</p>
      </div>

      <div className="verdict-section" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="font-romantic" style={{ fontSize: '2.5rem', color: 'var(--color-rose-pink)', margin: '0' }}>
          Verdict: {verdict}
        </h2>
      </div>

      <div className="sentence-section" style={{
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: '2rem',
        borderRadius: '10px',
        textAlign: 'center',
        border: '1px solid var(--color-champagne-gold)'
      }}>
        <h3 className="font-ui" style={{ fontSize: '1.2rem', color: 'var(--color-warm-grey)', marginBottom: '1rem' }}>Sentence</h3>
        <p className="font-romantic" style={{ fontSize: '2rem', color: 'var(--color-rose-pink)', margin: '0' }}>
          {sentence}
        </p>
        <div style={{
          marginTop: '1.5rem',
          fontSize: '1.1rem',
          color: 'var(--color-warm-grey)',
          fontWeight: '500'
        }}>
          Prison: {prison}
        </div>
        <p className="font-ui" style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-warm-grey)' }}>
          Status: {status}
        </p>
      </div>

      {judgeNote && (
        <div className="judge-note" style={{
          marginTop: '3rem',
          textAlign: 'right',
          fontFamily: 'var(--font-romantic)',
          fontSize: '1.5rem',
          color: 'var(--color-warm-grey)',
          fontStyle: 'italic'
        }}>
          "{judgeNote}"
        </div>
      )}
    </motion.div>
  );
};

export default CourtCase;
