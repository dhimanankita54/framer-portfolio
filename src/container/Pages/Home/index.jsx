import "./index.css";
import MaskedElement from "../../components/MaskedElement";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const words = ["Making", "the", "web", "for", "Future"];
  const newWords = ["Fixing", "the", "mistakes", "of", "past"];

  return (
    <>
      <MaskedElement>
        <div className="flex flex-col items-center justify-center">
          {newWords.map((word, index) => (
            <div className="relative h-fit overflow-hidden" key={index}>
              <motion.span
                className={`text-[6.875rem] leading-none inline-block uppercase font-semibold font-poppins`}
                initial={{ y: "100%" }} // Start below, fully hidden
                animate={{ y: "0%" }} // Slide into view
                transition={{
                  delay: index * 0.1, // Stagger each word
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>
      </MaskedElement>

      <AnimatePresence>
        <motion.div id="about" className="min-h-screen flex flex-col items-center justify-center">
          {words.map((word, index) => (
            <div className="relative h-fit overflow-hidden" key={index}>
              <motion.span
                className={`text-[6.875rem] leading-none inline-block uppercase font-semibold font-poppins ${
                  index === 1 || index === 2 ? "text-primary" : "!text-text"
                }`}
                initial={{ y: "100%" }} // Start below, fully hidden
                animate={{ y: "0%" }} // Slide into view
                transition={{
                  delay: index * 0.1, // Stagger each word
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
