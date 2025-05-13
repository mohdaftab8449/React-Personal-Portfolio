import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingTitle = () => {
  return (
    <div className="text-lg md:text-2xl text-yellow-300 font-semibold mt-2">
      <TypeAnimation
        sequence={[
          'Frontend Developer', 2000,
          'Backend Developer', 2000,
          'Coding Instructor', 2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypingTitle;
