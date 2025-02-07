import React from 'react';
import { RiTeamFill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { motion } from 'framer-motion';

const Intellect = () => {
  return (
    <>
    <div className="flex flex-col items-center text-center mb-20">
      <div className="md:flex block justify-center items-center gap-y-8 md:gap-x-8 md:w-3/4 w-full">
        <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
         className="flex flex-col items-center w-full mb-4">
          <RiTeamFill className="text-4xl text-blue-500" />
          <h3 className="text-lg mt-2">27% (and growing) of Intellectsoft teammates are females</h3>
        </motion.div>

        
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full mb-4">
          <FaRegHandshake className="text-4xl text-green-500" />
          <h3 className="text-lg mt-2">27% (and growing) of Intellectsoft teammates are females</h3>
        </motion.div>


        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full">
          <FaGlobeAfrica className="text-4xl text-purple-500" />
          <h3 className="text-lg mt-2">27% (and growing) of Intellectsoft teammates are females</h3>
        </motion.div>
      </div>
    </div>
       
    </>
  );
};

export default Intellect;
