import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaEnvelope as FaMail } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion for animations

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Heading with Hover Animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12"
          initial={{ opacity: 0, y: -20 }} // Initial state (hidden with slight offset)
          whileInView={{ opacity: 1, y: 0 }} // Final state (visible in the viewport with smooth slide-in)
          whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect (scale and rotate)
          transition={{ duration: 1 }}
        >
          <FaMail className="inline-block mr-2 text-yellow-300" /> Contact <span className="text-yellow-300">Me</span>
        </motion.h2>

        {/* One container, two columns */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md grid md:grid-cols-2 gap-10">
          {/* Left: Info Section */}
          <div className="space-y-6">
            <motion.div
              className="flex items-center space-x-4 transform hover:scale-105 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05, rotate: 5 }} // Hover effect (scale and rotate)
            >
              <FaUser className="text-blue-400 text-lg" />
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Name</h3>
                <p className="text-gray-300">Mohd Aftab</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 transform hover:scale-105 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05, rotate: 5 }} // Hover effect (scale and rotate)
            >
              <FaEnvelope className="text-blue-400 text-lg" />
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Email</h3>
                <p className="text-gray-300">mohdaftab8449@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 transform hover:scale-105 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05, rotate: 5 }} // Hover effect (scale and rotate)
            >
              <FaMapMarkerAlt className="text-blue-400 text-lg" />
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Address</h3>
                <p className="text-gray-300">Muzaffarnagar, Uttar Pradesh, India</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <form
  action="https://formspree.io/f/your-form-id"
  method="POST"
  className="space-y-6"
>
  <motion.div whileHover={{ scale: 1.05, rotate: 1 }}>
    <label className="block text-sm font-medium text-blue-300 mb-1">Your Name</label>
    <input
      type="text"
      name="name"
      required
      placeholder="Enter your name"
      className="w-full bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
    />
  </motion.div>
  
  <motion.div whileHover={{ scale: 1.05, rotate: 1 }}>
    <label className="block text-sm font-medium text-blue-300 mb-1">Your Email</label>
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="w-full bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
    />
  </motion.div>
  
  <motion.div whileHover={{ scale: 1.05, rotate: 1 }}>
    <label className="block text-sm font-medium text-blue-300 mb-1">Message</label>
    <textarea
      name="message"
      rows="5"
      required
      placeholder="Write your message..."
      className="w-full bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
    ></textarea>
  </motion.div>
  
  <motion.div whileHover={{ scale: 1.05, rotate: 1 }}>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-blue-600 transition-all transform hover:scale-105 duration-300 ease-in-out"
    >
      Send Message
    </button>
  </motion.div>
</form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
