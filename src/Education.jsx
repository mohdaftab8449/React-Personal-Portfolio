import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-20" id="education">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-8 sm:mb-12 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaGraduationCap className="text-yellow-300 text-3xl sm:text-4xl" />
          My <span className="text-yellow-300">Education</span>
        </motion.h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* BCA */}
          <motion.div
            className="bg-gray-800 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ borderColor: '#3B82F6' }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-2 hover:text-blue-500 transition-colors">
              BCA (Bachelor of Computer Applications)
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-blue-300">
              Shri Ram Group Of Colleges, Muzaffarnagar (MZN)
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 text-gray-300">
              Graduated in August 2022
            </p>
          </motion.div>

          {/* MCA */}
          <motion.div
            className="bg-gray-800 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ borderColor: '#3B82F6' }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-2 hover:text-blue-500 transition-colors">
              MCA (Master of Computer Applications)
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-blue-300">
              IGNOU University, New Delhi
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 text-gray-300">
              Post Graduated in June 2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;