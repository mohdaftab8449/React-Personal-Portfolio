import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4 sm:px-6 md:px-16 shadow-[inset_0_1px_6px_rgba(255,255,255,0.05)]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Name/Brand */}
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-1">Mohd Aftab</h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm sm:text-xs mb-5 leading-tight">
          Passionate Web Developer — clean code, smooth UX, creative ideas.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {[
            { icon: <FaGithub size={16} />, href: 'https://github.com/yourusername', label: 'GitHub' },
            { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
            { icon: <FaTwitter size={16} />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
            { icon: <FaFacebook size={16} />, href: 'https://facebook.com/yourusername', label: 'Facebook' }
          ].map(({ icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group bg-gray-800 p-2 rounded-full hover:shadow-blue-500/40 hover:-translate-y-0.5 transform transition"
            >
              <span className="text-gray-300 group-hover:text-white">{icon}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-blue-500 mx-auto rounded-full mb-3"></div>

        {/* Footer Note */}
        <p className="text-gray-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">Mohd Aftab</span> — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
