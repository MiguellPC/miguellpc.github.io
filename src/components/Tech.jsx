import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const TechCard = ({ icon, name, index }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        transitionSpeed={450}
        className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 p-4 rounded-2xl w-28 h-36">
        <div>
          <div className="flex justify-center items-start">
            <div className="absolute w-3 h-3 bg-primary rounded-full top-1.5 border border-gray-700" />
          </div>
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="text-center mt-1">
            <h3 className="text-white font-semibold text-sm">
              {name}
            </h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = ({ techInfo }) => {
  return (
    <div className="flex flex-wrap justify-center gap-7 mt-20">
      {techInfo?.map(({ icon, name }, index) => (
        <div key={name}>
          <TechCard icon={icon.url} name={name} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
