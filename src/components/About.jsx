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
    <div className="w-full sm:w-[250px] flex-shrink-0">
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
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-[#161131] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
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
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#aaa6c3] text-[17px] max-w-5xl leading-[30px]"
      >
        Scrum Master and agile coach, providing support through training,
        workshops, and daily collaboration with both development teams and
        Product Owners. Acts as a consultant in organizational transformations.
        Enthusiast of Lean Management, continuous improvement, and delivering
        solutions incrementally. Always focused on delivering valuable outcomes
        that meet the real needs of clients and end users. Experienced business
        and systems analyst with a solid background in requirements engineering
        and quality assurance. Also skilled as a backend and frontend developer,
        with a proven track record in industries such as financial services,
        e-commerce, logistics, and automotive.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
