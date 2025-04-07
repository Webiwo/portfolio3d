import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        animate="visible"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="p-4 sm:p-6 md:p-9 max-w-7xl ma-auto raltive z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
