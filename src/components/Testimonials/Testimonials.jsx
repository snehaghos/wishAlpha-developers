import React from "react";
import { motion } from "framer-motion";

const Testimonials = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-gray-700 p-6 rounded-xl"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{testimonial.name}</h3>
          <p className="text-gray-300">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-300">"{testimonial.comment}"</p>
    </motion.div>
  );
};

export default Testimonials;