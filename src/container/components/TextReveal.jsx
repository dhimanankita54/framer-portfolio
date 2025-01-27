import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Word = ({ children, progress, range, customColor }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char
            key={`c_${i}`}
            progress={progress}
            range={[start, end]}
            customColor={customColor}
          >
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range, customColor }) => {
  // const opacity = useTransform(progress, range, [0, 1]);
  const clipPath = useTransform(progress, range, [
    "inset(0 100% 0 0)",
    "inset(0 0% 0 0)",
  ]);
  const slowedProgress = useTransform(progress, (value) => value * 3);
  const scale = useTransform(slowedProgress, range, [1.2, 1]);
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{
          display: "inline-block",
          color: customColor,
          clipPath: clipPath,
          transform: scale,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const TextReveal = ({ text, specialWord, className }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"],
  });

  const words = text.split(" ");
  return (
    <>
      <p ref={container} className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          // Check if the current word is in the specialWords array
          const isSpecialWord = specialWord.includes(word);
          const customColor = isSpecialWord ? "#f2bb05" : ""; // Apply a custom color (e.g., red) to special words
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              customColor={customColor}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </>
  );
};

export default TextReveal;
