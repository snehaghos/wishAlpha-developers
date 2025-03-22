import React from "react";
import { motion } from "framer-motion";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <motion.div
        className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-lg border border-purple-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-500 mb-6">
          Developer Registration
        </h2>
        <form>
          <div className="mb-5">
            <label className="block text-gray-300 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-3 bg-gray-700 border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 bg-gray-700 border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-300 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 bg-gray-700 border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-5 py-3 bg-gray-700 border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            Register Now
          </button>
        </form>
       
      </motion.div>
    </div>
  );
};

export default RegistrationPage;