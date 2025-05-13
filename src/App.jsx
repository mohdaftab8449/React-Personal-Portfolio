import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div>

      {/* Navbar Section  */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section  */}
      <About />
      
      {/* Skills Section  */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Projects Section  */}
      <Projects />

      {/* Experience Section  */}
      <Experience />

      {/* Certifications Section */}
      <Certifications />  
      
      {/* Contact Section */}
      <Contact />

      {/* Footer Section  */}
      <Footer />
    </div>
  );
};

export default App;
