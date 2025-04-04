
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-3 flex justify-between items-center shadow-lg">
      <motion.h1
        className="text-2xl font-bold text-purple-400"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/images/logo.png" width={80} height={30} alt="" />
      </motion.h1>
      <div className="flex space-x-6 items-center">
        <Link to="/" className="text-white hover:text-purple-400 transition-colors">
          Home
        </Link>
        <Link to="/games" className="text-white hover:text-purple-400 transition-colors">
          Games
        </Link>
        <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
          About
        </Link>
        <Link to="/auth/register"
        
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Sign up
        </Link>
    
      </div>
    </nav>
  );
};

export default Navbar;