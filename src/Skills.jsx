import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Importing skill images
import htmlImage from './assets/html.png';
import cssImage from './assets/css.png';
import jsImage from './assets/js.png';
import reactImage from './assets/react.png';
import nodeImage from './assets/node.png';
import expressImage from './assets/express.png';
import mongodbImage from './assets/mongodb.png';
import cImage from './assets/c.png';
import cppImage from './assets/cpp.png';
import javaImage from './assets/java.png';
import pythonImage from './assets/python.png';
import sqlImage from './assets/sql.png';

const skills = [
  { name: 'HTML', color: 'text-orange-500', image: htmlImage },
  { name: 'CSS', color: 'text-blue-500', image: cssImage },
  { name: 'JavaScript', color: 'text-yellow-500', image: jsImage },
  { name: 'React.js', color: 'text-blue-400', image: reactImage },
  { name: 'Node.js', color: 'text-green-500', image: nodeImage },
  { name: 'Express.js', color: 'text-gray-600', image: expressImage },
  { name: 'MongoDB', color: 'text-green-600', image: mongodbImage },
  { name: 'C', color: 'text-blue-700', image: cImage },
  { name: 'C++', color: 'text-blue-700', image: cppImage },
  { name: 'Java', color: 'text-red-500', image: javaImage },
  { name: 'Python', color: 'text-blue-500', image: pythonImage },
  { name: 'SQL', color: 'text-blue-600', image: sqlImage },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-20" id="skills">
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
          <FaCode className="text-yellow-300 text-3xl sm:text-4xl" />
          My <span className="text-yellow-300">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2, borderColor: '#3B82F6' }}
            >
              <div className="mb-3 sm:mb-4">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full object-contain transform transition-all duration-300 ease-in-out hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-medium ${skill.color} mt-2`}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;