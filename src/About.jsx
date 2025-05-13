import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16" id="about">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl">
        {/* Title Section */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-6 sm:mb-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaUserCircle className="text-yellow-300 text-3xl sm:text-4xl" />
          About <span className="text-yellow-300">Me</span>
        </motion.h2>

        {/* Content Section */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-justify">
            Hello! I'm <span className="font-semibold text-blue-400">Mohd. Aftab</span>, a passionate and dedicated Web Developer based in {' '}
            <span className="font-medium text-yellow-300">Muzaffarnagar</span>. I specialize in creating responsive, user-friendly, and efficient websites and web applications.
            With a strong grasp of both frontend and backend technologies, I strive to build web solutions that are not only visually appealing but also robust and scalable.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-justify">
            I have hands-on experience in technologies like {' '}
            <span className="font-medium text-yellow-300">HTML, CSS, JavaScript, React.js, Node.js, MongoDB</span> and more.
            I'm also passionate about teaching and sharing knowledge — currently working as a coding instructor, helping others build their tech careers.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-justify">
            Apart from coding, I enjoy exploring new tech trends and improving my development skills every day.
            I believe in writing clean, maintainable code and continuously learning to stay ahead in this ever-evolving industry.
          </p>

          {/* Contact Information */}
          <motion.div
            className="mt-6 sm:mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <p className="text-sm sm:text-base font-medium flex items-center">
                📧 <a href="mailto:mohdaftab8449@gmail.com" className="text-blue-400 underline ml-1">mohdaftab8449@gmail.com</a>
              </p>
              <span className="hidden sm:inline">•</span>
              <p className="text-sm sm:text-base font-medium flex items-center">
                📍 <span className="text-yellow-300 ml-1">Niyazupura, Shahbuddinpur, MZN</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;