import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

const MaskedElement = ({ children }) => {
  const { mousePosition, isHovered, setIsHovered } = useMousePosition();
  const size = isHovered ? 350 : 0; // Mask size

//   // Update cursor visibility instantly when the element is hovered/unhovered
//   useEffect(() => {
//     if (isHovered) {
//       document.body.style.cursor = 'none'; // Hide default cursor
//     } else {
//       // Instantly hide the cursor when isHovered is false
//       const hideCursor = setTimeout(() => {
//         document.body.style.cursor = 'none'; // Immediately set cursor to none
//       }, 0); // Triggering at 0ms to avoid any delay

//       // Cleanup timeout in case component unmounts or state changes
//       return () => clearTimeout(hideCursor);
//     }

//   }, [isHovered]);

  return (
    <motion.div
      className="mask w-full h-full flex flex-col items-center justify-center z-50"
      animate={{
        WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
          mousePosition.y - size / 2
        }px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    >
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default MaskedElement;
