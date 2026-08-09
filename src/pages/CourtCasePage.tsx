import React from 'react';
import { motion } from 'framer-motion';
import CourtCase from '../components/organisms/CourtCase';

const CourtCasePage = () => {
  const cases = [
    {
      caseNumber: '0001',
      judge: 'Zelda Mrs Cass',
      accused: 'Cass',
      charges: ['Making Your Honour blush', 'Unable to behave around his woman'],
      verdict: 'GUILTY ❤️',
      sentence: 'LIFE IMPRISONMENT',
      prison: 'Zelda\'s Heart ❤️',
      status: 'Happily Serving',
      judgeNote: 'The first of many.',
    },
    {
      caseNumber: '0002',
      judge: 'Zelda Mrs Cass',
      accused: 'Cass',
      charges: [
        'Making Your Honour blush',
        'Excessive staring',
        'Excessive affection',
        'Excessive hugs',
        'Excessive kisses',
        'Refusing to behave around his woman',
        'Repeatedly making Your Honour lose her serious face'
      ],
      verdict: 'GUILTY ❤️',
      sentence: 'LIFE IMPRISONMENT',
      prison: 'Zelda\'s Heart ❤️',
      status: 'Serving happily.',
      judgeNote: 'You\'ll forever get life sentences.',
    },
    {
      caseNumber: '0003',
      judge: 'Zelda Mrs Cass',
      accused: 'Cass',
      charges: [
        'Persistent refusal to be serious',
        'Excessive blushing induction',
        'Chronic affection',
        'Repeated attempts to steal Your Honour\'s focus',
        'Uncontrollable devotion'
      ],
      verdict: 'GUILTY ❤️',
      sentence: 'LIFE IMPRISONMENT',
      prison: 'Zelda\'s Heart ❤️',
      status: 'Serving happily.',
      judgeNote: 'The sentence is final. No appeal.',
    },
  ];

  return (
    <div className="court-archive-page" style={{
      background: 'var(--color-soft-white)',
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="archive-header"
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <h1 className="font-romantic" style={{
          fontSize: '4rem',
          color: 'var(--color-rose-pink)',
          margin: 0
        }}>
          Court Records
        </h1>
        <p className="font-ui italic" style={{ color: 'var(--color-warm-grey)', fontSize: '1.2rem' }}>
          The official criminal record of the state vs. Cass.
        </p>
      </motion.div>

      <div className="cases-list" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8rem',
        width: '100%',
        maxWidth: '800px'
      }}>
        {cases.map((caseData, index) => (
          <motion.div
            key={caseData.caseNumber}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CourtCase {...caseData} isMainPage={true} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          marginTop: '8rem',
          textAlign: 'center',
          fontFamily: 'var(--font-romantic)',
          fontSize: '1.8rem',
          color: 'var(--color-rose-pink)'
        }}
      >
        Final Ruling: Guilty. Life Imprisonment. ❤️
      </motion.div>
    </div>
  );
};

export default CourtCasePage;
