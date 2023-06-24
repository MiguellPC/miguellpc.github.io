import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({
  index,
  name,
  description,
  tag,
  image,
  sourceCodeLink,
  liveVersionLink,
}) => {
  const MOCK_LINKS = [
    {
      name: 'Live Version',
      icon: <HiOutlineExternalLink />,
      link: liveVersionLink,
      message: 'Click to see the live version of this project',
    },
    {
      name: 'Github',
      icon: <FaGithub />,
      link: sourceCodeLink,
      message: 'Repository on GitHub',
    },
  ];

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={450}
        className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 p-5 rounded-2xl sm:w-[360px] w-full min-h-[480px]">
        <div className="flex flex-col items-start justify-center">
          <div className="relative w-full h-[230px]">
            <img
              src={image.url}
              alt={`Thumbnail for ${name}`}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
              {MOCK_LINKS.map(({ icon, link, message }, index) => (
                <div
                  data-tooltip-id={`projectCard-tooltip`}
                  data-tooltip-content={message}
                  key={index}
                  onClick={() => window.open(link, '_blank')}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-secondary transition-all">
                  <div className="text-2xl">{icon}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 w-full">
            {tag.map(({ tagName, tagColor }) => (
              <p key={tagName} className={`text-[14px] ${tagColor}`}>
                #{tagName}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
      <Tooltip id="projectCard-tooltip" />
    </motion.div>
  );
};

const Works = ({ projectsInfo }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience. Each
          project is briefly described with links to code repositores
          and live demos in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projectsInfo?.about?.projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
