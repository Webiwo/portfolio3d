import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const AboutOverview = () => {
  return (
    <div>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>
      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-5xl leading-[28px]"
      >
        I'm a certified Scrum Master and Agile Coach with a passion for building
        high-performing teams and leading meaningful organizational change. I
        work hands-on with agile teams, Product Owners, and leadership —
        delivering impactful training, workshops, and day-to-day guidance. I
        believe in continuous improvement, lean thinking, and delivering
        customer-centric solutions incrementally.
      </motion.p>
      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-5xl leading-[28px]"
      >
        With a background in business and systems analysis, quality assurance,
        and both frontend and backend development, I bring a holistic
        perspective to every challenge. <br />
        Over the years, I’ve helped shape digital solutions across banking,
        e-commerce, logistics, automotive, manufacturing, and the public sector
        as a...
      </motion.p>
    </div>
  );
};

export default SectionWrapper(AboutOverview, "about");
