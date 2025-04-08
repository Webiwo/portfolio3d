import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="px-7 sm:px-10 md:px-13 absolute inset-0 top-[40px] max-w-7xl mx-auto flex items-start gap-5">
        <div className="flex flex-col items-center justify-center">
          <div className="size-4 rounded-full bg-[#915eff]" />
          <div className="w-1 h-65 md:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Sławomir</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Scrum Master, Agile Coach, and Web Developer with a passion for
            building high-performing teams and creating user-centered web
            solutions.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute w-full flex justify-center bottom-30 md:bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-[#aaa6c3] rounded-3xl flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="size-3 rounded-full bg-gray-100 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
