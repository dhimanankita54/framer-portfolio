import React, { useEffect, useState } from 'react'
import TextReveal from '../../components/TextReveal'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const Skills = () => {

  const [isHovered, setIsHovered] = useState(null);

  const skills = [
    { text: "HTML" },
    { text: "CSS" },
    { text: "JavaScript" },
    { text: "ReactJS" },
    { text: "NextJS" },
    { text: "NodeJS" },
    { text: "MongoDB" },
    { text: "Framer Motion" },
    { text: "GSAP" },
    { text: "RESTFUL APIS" },
    { text: "GRAPHQL" },
    { text: "Azure S3" },
    { text: "Gemini AI API" },
    { text: "Version Control" },
    { text: "Tailwind CSS" },
  ];

  const topMotion = {
    rest: { height: "0px", top: "50%", backgroundColor: "#000000" },
    hover: {
      height: "50px",
      backgroundColor: "#f2bb05",
      top: "0px"
    }
  }
  const bottomMotion = {
    rest: { height: "0px", bottom: "50%", backgroundColor: "#000000" },
    hover: {
      height: "50px",
      backgroundColor: "#f2bb05",
      bottom: "0px"
    }
  }

  return (
    <>
      <div className='flex items-start flex-col justify-center w-full min-h-screen py-20  pb-64'>
        <p className='font-poppins font-medium text-sm text-left text-text tracking-[5px] mb-4 ml-52'>TOOLS OF MY TRADE</p>
        <AnimatePresence exitBeforEneter>
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={index}
                initial="rest"
                whileHover="hover"
                exit="rest"
                animate="rest"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                className='h-[100px] w-full border-t border-b border-t-[rgb(184,172,153,0.2)] border-b-[rgb(184,172,153,0.2)] relative'
              >
                <motion.div
                  variants={topMotion}
                  className="absolute left-0 w-full"
                  transition={{ duration: 0.5 }}
                  exit={{ height: 0, top: "50%" }}
                />
                <motion.div
                  variants={bottomMotion}
                  className="absolute left-0 w-full bg-green-500"
                  exit={{ height: 0, bottom: "50%" }}
                  transition={{ duration: 0.5 }}
                />

                <motion.div className='w-full'>
                  {isHovered === index ?
                    <p key={index} className='text-black text-8xl font-medium font-poppins uppercase pl-52 z-50 relative'>{skill.text}</p>
                    :
                    <TextReveal key={index} text={skill.text} specialWord={[]} className={"text-text text-8xl font-medium font-poppins uppercase pl-52 hover:text-black "} />
                  }

                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </>

  )
}

export default Skills
