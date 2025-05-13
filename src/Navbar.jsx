import React, { useState } from 'react';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold flex items-center gap-2">
                    <FaLaptopCode className="text-blue-400 text-2xl" />
                    MOHD. AFTAB
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-sm lg:text-base">
                    <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                    <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                    <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                    <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
                    <li><a href="#certificates" className="hover:text-blue-400 transition-colors">Certificates</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                </ul>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-2' : 'max-h-0 overflow-hidden'}`}>
                <ul className="flex flex-col space-y-3 px-4">
                    <li><a href="#hero" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>About</a></li>
                    <li><a href="#skills" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#education" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>Education</a></li>
                    <li><a href="#projects" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#experience" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#certificates" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>Certificates</a></li>
                    <li><a href="#contact" className="block hover:text-blue-400 py-2 transition-colors" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;