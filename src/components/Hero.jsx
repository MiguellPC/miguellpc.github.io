import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { RichText } from './Rich-text/index';

const Hero = ({ heroInfo }) => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="flex flex-col gap-10">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-emerald-500" />
            <div className="w-1 sm:h-80 h-40 emerald-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-emerald-400">Miguel</span>
            </h1>
            <div
              className={`${styles.heroSubText} mt-2 text-white-100`}>
              {heroInfo?.introduction}
            </div>
          </div>
        </div>

        <div className="absolute xl:h-[750px] md:h-[550px] h-[450px] w-full xl:translate-y-24 md:translate-y-1/3 translate-y-2/4">
          <ComputersCanvas />
        </div>

        <div className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center">
          <a href="#about" aria-label="Go to about section">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
