import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

const CursorFollower = () => {
  const { mousePosition, isHovered, setIsHovered } = useMousePosition();
  const size = isHovered ? 350 : 40;

  return (
    !isHovered &&
    <motion.div
      className="fixed w-8 h-8 bg-primary rounded-full"
      animate={{
        x: mousePosition.x - 20, // Adjust for centering
        y: mousePosition.y - 20,
        WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`, // Mask position based on mouse
        WebkitMaskSize: `${size}px`, // Mask size
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
      }}
    />
  );
};

export default CursorFollower;
