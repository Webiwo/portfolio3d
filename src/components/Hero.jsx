import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto top-[100px]">
      <div className="px-7 sm:px-10 md:px-13 absolute inset-0 top-[40px] max-w-7xl mx-auto flex items-start gap-5">
        <div className="flex flex-col items-center justify-center">
          <div className="size-4 rounded-full bg-[#915eff]" />
          <div className="w-1 h-65 md:h-80 violet-gradient" />
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero.greeting")}{" "}
            <span className="text-[#7f99e0]">{t("hero.name")}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("hero.description")}
          </p>
        </div>
      </div>
      <ComputersCanvas
        onLoaded={() => {
          const hash = window.location.hash;
          if (hash) {
            const el = document.querySelector(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
      />

      <div className="absolute w-full flex justify-center bottom-30 md:bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-[#a8a6c3] rounded-3xl flex justify-center items-start p-2">
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
