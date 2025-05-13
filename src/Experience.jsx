import React from 'react';
import { FaChalkboardTeacher, FaCode, FaProjectDiagram, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 md:px-20" id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 1 }}
        >
          <FaBriefcase className="inline-block mr-2 text-yellow-300" />
          My <span className="text-yellow-300">Experience</span>
        </motion.h2>

        {/* Main Card */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 ease-in-out">
          {/* Title */}
          <h3 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
            <FaChalkboardTeacher className="mr-2 text-green-400" />
            Coding Instructor <span className="ml-2 text-sm text-gray-400">(Since Dec 2022)</span>
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Teaching programming and web development at <span className="font-medium text-white">Silicon Computer Centre, Muzaffarnagar</span>. Focused on hands-on learning and real-world applications through live projects and workshops.
          </p>

          {/* Languages & Technologies */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center">
              <FaCode className="mr-2 text-purple-400" />Languages & Technologies Taught
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300 text-sm list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Projects & Activities */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center">
              <FaProjectDiagram className="mr-2 text-orange-400" />Projects & Activities
            </h4>
            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
              <li>Built mini projects like Calculator, Stopwatch, and To-Do List</li>
              <li>Guided students in developing CRUD apps using Java, Python, and SQL</li>
              <li>Conducted workshops and real-time hands-on coding sessions</li>
              <li>Assisted learners in building personal portfolios with HTML, CSS & JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
