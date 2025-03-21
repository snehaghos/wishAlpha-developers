// components/HeroSection.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Carousal = ({ onRegisterClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(/images/gamebg.jpg)` }}
    >
      <motion.h1
        className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Build, Publish, and Monetize Your Games
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 mb-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join WishAlpha, the leading platform for indie developers to showcase their games to millions of players worldwide.
      </motion.p>
      <Link to="/auth/register"
        onClick={onRegisterClick}
        className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </Link>
    </div>
  );
};

export default Carousal;