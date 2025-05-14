import { motion } from 'framer-motion';
import TypingTitle from './TypingTitle';

const Hero = () => {
  return (
    <section 
      className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen" 
      id="hero"
    >
      {/* Left Section - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6 mt-8 md:mt-0">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi There, <br />
          I'm <span className="text-blue-400">MOHD. AFTAB</span>
        </motion.h1>

        <motion.div
          className="w-full text-lg sm:text-xl md:text-2xl font-medium flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div>I am a</div>
          <TypingTitle />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 text-sm sm:text-base">
            About Me
          </button>
         <a href="/MohdAftabResume.pdf" download>
            <button className="px-6 py-3 border border-blue-400 hover:bg-blue-400/10 text-white rounded-full transition duration-300 text-sm sm:text-base">
              Download CV
            </button>
          </a>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div
          className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="src/assets/aftab.jpg"
            alt="Aftab"
            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-blue-400/30 transition-all duration-300 hover:scale-110"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
