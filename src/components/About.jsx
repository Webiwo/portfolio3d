import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ServiceCard = ({ index, title, icon }) => (
    <div className="w-[140px] sm:w-[240px]">
      <Tilt
        className="w-full"
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px]"
        >
          <div className="bg-[#161131] rounded-[20px] py-3 sm:py-4 px-4 sm:px-12 min-h-[180px] sm:min-h-[250px] flex justify-evenly items-center flex-col">
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[15px] sm:text-[20px] font-semibold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );

  if (!isClient) return null;

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[17px] max-w-5xl leading-[30px]"
      >
        I'm a certified Scrum Master and Agile Coach with a passion for building
        high-performing teams and leading meaningful organizational change. I
        work hands-on with agile teams, Product Owners, and leadership —
        delivering impactful training, workshops, and day-to-day guidance. I
        believe in continuous improvement, lean thinking, and delivering
        customer-centric solutions incrementally.
        <br /> With a background in business and systems analysis, quality
        assurance, and both frontend and backend development, I bring a holistic
        perspective to every challenge. <br />
        Over the years, I’ve helped shape digital solutions across banking,
        e-commerce, logistics, automotive, manufacturing, and the public sector
        as a...
      </motion.p>
      <div className="mt-10 sm:mt-20 flex flex-wrap gap-8 sm:gap-10 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.p
        variants={textVariant()}
        className="mt-10 text-[#aaa6c3] text-[17px] max-w-5xl leading-[30px]"
      >
        Let’s build something valuable — together!
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about");
