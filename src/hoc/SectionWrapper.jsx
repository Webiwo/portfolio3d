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
        className="p-4 max-w-6xl mx-auto raltive z-0"
      >
        <div className="h-2" id={idName}>
          &nbsp;
        </div>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
