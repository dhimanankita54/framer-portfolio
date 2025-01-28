import React from "react";
import { motion } from "framer-motion";

const RollingText = ({ text }) => {
  return (
    <motion.div
      className="relative cursor-pointer group"
      initial={{ y: 0 }} // Default position
      whileHover={{ y: "-100%" }} // On hover, move the text up
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Static Text (initially visible) */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-gray transition-transform duration-500 group-hover:-translate-y-full"
        initial={{ y: 0 }} // Position the static text normally
        whileHover={{ y: "-100%" }} // Move the static text up on hover
      >
        {text}
      </motion.span>

      {/* Rolling Text (comes from beneath on hover) */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-text  translate-y-full transition-transform duration-500 group-hover:translate-y-0"
        initial={{ y: "100%" }} // Starts from beneath the visible area
        whileHover={{ y: 0 }} // Moves into place on hover
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default RollingText;
