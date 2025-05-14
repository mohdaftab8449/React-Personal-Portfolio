import React from 'react';
import { FaSuitcase, FaCalculator, FaHeart, FaGraduationCap, FaStopwatch, FaTasks, FaKeyboard, FaClock, FaGamepad, FaHandRock, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "Simple Calculator",
    icon: <FaCalculator className="inline-block mr-2 text-blue-400" />,
    description: "A basic calculator app to perform arithmetic operations.",
    link: "https://simple-calculator-five-khaki.vercel.app/",
  },
  {
    name: "Love Calculator",
    icon: <FaHeart className="inline-block mr-2 text-pink-500" />,
    description: "A fun love percentage calculator using names.",
    link: "https://love-calculator2.vercel.app/",
  },
  {
    name: "Marks Calculator",
    icon: <FaGraduationCap className="inline-block mr-2 text-green-400" />,
    description: "Calculates total marks, percentage, and grade from subject scores.",
    link: "https://marks-calculator-taupe.vercel.app/",
  },
  {
    name: "Stopwatch",
    icon: <FaStopwatch className="inline-block mr-2 text-yellow-400" />,
    description: "A responsive digital stopwatch with start, stop and reset features.",
    link: "https://stop-watch-eight-weld.vercel.app/",
  },
  {
    name: "To-Do List",
    icon: <FaTasks className="inline-block mr-2 text-purple-400" />,
    description: "Manage your daily tasks with this interactive to-do list app.",
    link: "https://todo-list2-eight.vercel.app/",
  },
  {
    name: "Real-Time Character Counter",
    icon: <FaKeyboard className="inline-block mr-2 text-orange-400" />,
    description: "Live character counter for text input with limit alert.",
    link: "https://real-time-character-counter-lime.vercel.app/",
  },
  {
    name: "Alarm Clock",
    icon: <FaClock className="inline-block mr-2 text-red-400" />,
    description: "Set alarms and view the real-time digital clock.",
    link: "https://alarm-clock2.vercel.app/",
  },
  {
    name: "Tic Tac Toe Game",
    icon: <FaGamepad className="inline-block mr-2 text-indigo-400" />,
    description: "Classic Tic Tac Toe game with interactive UI and logic.",
    link: "https://tic-tac-toe-five-gules-63.vercel.app/",
  },
  {
    name: "Rock Paper Scissors",
    icon: <FaHandRock className="inline-block mr-2 text-teal-400" />,
    description: "A fun Rock-Paper-Scissors game to play against the computer.",
    link: "https://rock-paper-scissors-game-sand-nine.vercel.app/",
  }
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 md:px-20" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 1 }}
        >
          <FaSuitcase className="inline-block mr-2 text-yellow-300" />
          My <span className='text-yellow-300'>Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                {project.icon} {project.name}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-base font-semibold text-center w-full"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* JavaScript Project Website */}
        <div className="mt-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            <h1 className='text-2xl font-semibold text-blue-300 mb-2'>
              <FaCode className="inline-block mr-2 text-teal-400" /> JavaScript Project Website
            </h1>
            <p className="text-gray-300 mb-4">
              This website showcases several fun and interactive JavaScript projects I've created, including a Rock-Paper-Scissors game, Calculator, Tic Tac Toe, Digital Clock, and a Love Calculator.
            </p>
            <a
              href="https://mohdaftab8449.github.io/JavaScript-Projects-Website/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-base font-semibold text-center w-full"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
