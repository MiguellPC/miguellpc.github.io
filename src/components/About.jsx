import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';

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

import Tech from './Tech';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Welcome to my portfolio! My name is{' '}
        <span className="text-white font-semibold">
          Miguel Caixeta
        </span>{' '}
        and I'm a beginner Front-End Developer, thrilled to share my
        skills and projects with you. With a solid understanding of
        HTML, CSS, JavaScript, and experience working with frameworks
        like React and TailwindCSS, I strive to create stunning and
        responsive websites. I am passionate about crafting visually
        appealing interfaces that deliver exceptional user
        experiences. Feel free to explore my portfolio and discover
        the projects I've worked on.
      </motion.p>

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
            className="hover:text-white transition-colors">
            <span className="text-4xl">{contact.icon}</span>
          </a>
        ))}
        <Tooltip id="about-tooltip" />
      </motion.div>

      <Tech />
    </>
  );
};

export default SectionWrapper(About, 'about');
