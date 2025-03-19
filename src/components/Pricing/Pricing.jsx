
import React from "react";
import { motion } from "framer-motion";

const Pricing = ({ plan }) => {
  return (
    <motion.div
      className={`${plan.color} p-6 rounded-xl text-center shadow-lg`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
      <p className="text-4xl font-bold mb-4">{plan.price}</p>
      <ul className="text-gray-200 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        Choose Plan
      </button>
    </motion.div>
  );
};

export default Pricing;