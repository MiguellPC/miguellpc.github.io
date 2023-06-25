import React, { lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';

const Tech = lazy(() => import('./Tech'));
import { RichText } from './Rich-text';

const MOCK_CONTACTS = [
  {
    name: 'GitHub',
    url: 'https://github.com/MiguellPC',
    icon: <TbBrandGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/miguel-caixeta/',
    icon: <TbBrandLinkedin />,
  },
];

const About = ({ aboutInfo }) => {
  const [presentation, setPresentation] = useState([]);

  useEffect(() => {
    if (aboutInfo?.presentation?.raw?.children) {
      setPresentation(aboutInfo?.presentation?.raw?.children);
    }
  }, [aboutInfo]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <RichText content={presentation} />
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.3, 1)}
        className="text-secondary flex items-center h-20 gap-3">
        {MOCK_CONTACTS.map((contact, index) => (
          <a
            data-tooltip-id={`about-tooltip`}
            data-tooltip-content={contact.name}
            href={contact.url}
            key={index}
            target="_blank"
            aria-label={`Find Miguel Caixeta at ${contact.name}`}
            className="hover:text-white transition-colors">
            <span className="text-4xl">{contact.icon}</span>
          </a>
        ))}
        <Tooltip id="about-tooltip" />
      </motion.div>
      <Tech techInfo={aboutInfo?.technologies} />
    </>
  );
};

export default SectionWrapper(About, 'about');
