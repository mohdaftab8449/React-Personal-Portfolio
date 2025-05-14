import React from 'react';
import {
    FaCode, FaDatabase, FaHtml5, FaCss3Alt,
    FaJs, FaJava, FaPython, FaCuttlefish, FaTrophy
} from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion for animations

const certifications = [
    { name: "C Programming", icon: FaCuttlefish, link: "/Aftab Certificates/GL C Certificate.pdf" },
    { name: "C++ Programming", icon: FaCode, link: "src/Aftab Certificates/GL C++ Certificate.pdf" },
    { name: "Java Programming", icon: FaJava, link: "src/Aftab Certificates/GL Java Certificate.pdf" },
    { name: "Python Programming", icon: FaPython, link: "src/Aftab Certificates/GL Python Certificate.pdf" },
    { name: "MySQL", icon: FaDatabase, link: "src/Aftab Certificates/GL SQL Certificate.pdf" },
    { name: "HTML", icon: FaHtml5, link: "src/Aftab Certificates/GL HTML Certificate.pdf" },
    { name: "CSS", icon: FaCss3Alt, link: "src/Aftab Certificates/GL CSS Certificate.pdf" },
    { name: "JavaScript", icon: FaJs, link: "src/Aftab Certificates/GL JS Certificate.pdf" }
];

const Certifications = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 md:px-20" id="certificates">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading with Hover Animation */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
                    initial={{ opacity: 0, y: -20 }} // Initial state (hidden with slight offset)
                    whileInView={{ opacity: 1, y: 0 }} // Final state (visible in the viewport with smooth slide-in)
                    whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect (scale and rotate)
                    transition={{ duration: 1 }}
                >
                    <FaTrophy className="inline-block mr-2 text-yellow-300" /> My <span className="text-yellow-300">Certifications</span>
                </motion.h2>

                <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
                    {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={index}
                                className="min-w-[150px] sm:min-w-[160px] bg-gray-800 p-3 rounded-lg shadow-md"
                                whileHover={{ scale: 1.05, rotate: 5 }} // Hover effect (scale and rotate)
                                transition={{ duration: 0.3 }} // Transition for smooth animation
                            >
                                <div className="flex items-center justify-center mb-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Icon className="text-white text-sm" />
                                    </div>
                                </div>
                                <h3 className="text-sm font-semibold text-blue-300 text-center leading-tight">{cert.name}</h3>
                                <p className="text-gray-400 text-xs text-center mt-1">Great Learning</p>
                                <div className="mt-2 text-center">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-white font-medium transition"
                                    >
                                        View
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
