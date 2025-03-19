
import React from "react";
import { motion } from "framer-motion";

const Feature = ({ feature }) => {
  return (
    <motion.div
      className={`${feature.color} p-6 rounded-xl text-center shadow-lg`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-200">{feature.description}</p>
    </motion.div>
  );
};

export default Feature;