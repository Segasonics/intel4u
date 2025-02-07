import React from 'react';
import Navbar from './Navbar';
import {motion} from 'framer-motion'

const Layout = ({ children, bgImage, heroText,heroHeight,heroParagraph }) => {
  return (
    <div className="w-full h-full z-10">
      {/* Hero Section with Background Image and Overlay */}
      <div
        className={`relative w-full bg-cover bg-center ${heroHeight}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        {/* Text on top of the background image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full md:w-3/4 p-4">
          <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold">{heroText}</motion.h1>
          {/* Optional: Additional text */}
          <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 ,ease:"easeOut"}}
          className="text-lg md:text-xl mt-4">{heroParagraph}</motion.p>
        </div>

        <Navbar />
      </div>

      {/* Content below the hero section */}
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default Layout;
