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
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-6xl leading-[28px]"
      >
        I am a certified Scrum Master (PSM I, PSM II) and Quality Assurance
        Engineer (ISTQB Certified Tester - Foundation Level, ISTQB Certified
        Tester - Advanced Level, Technical Test Analyst) with a passion for
        building high-performing teams and delivering valuable, user-focused
        solutions. I work directly with Agile teams, Product Owners, and
        leadership — providing effective training, workshops, and daily
        coaching. I believe in continuous improvement, lean thinking, and
        delivering customer-oriented solutions incrementally.
      </motion.p>
      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-5xl leading-[28px]"
      >
        I remain passionate and actively engaged in technical topics and
        web/intranet development. <br />
        With a background in business and systems analysis, quality assurance,
        and both front-end and back-end development, I bring a holistic
        perspective to every challenge I take on. Over the years, I’ve helped
        shape digital solutions in banking, e-commerce, logistics, automotive,
        manufacturing, and the public sector as a...
      </motion.p>
    </div>
  );
};

export default SectionWrapper(AboutOverview, "about");
