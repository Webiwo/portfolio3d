import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const AboutOverview = () => {
  const { t } = useTranslation();

  return (
    <div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="mt-20 flex-1 bg-black-100 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t("about.intro")}</p>
        <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
      </motion.div>
      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-6xl leading-[28px]"
      >
        {t("about.paragraph1")}
      </motion.p>

      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-6xl leading-[28px]"
      >
        {t("about.paragraph2")}
      </motion.p>

      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-6xl leading-[28px]"
      >
        {t("about.paragraph3")}
      </motion.p>

      <motion.p
        variants={textVariant()}
        className="mt-4 text-[#aaa6c3] text-[16px] max-w-6xl leading-[28px]"
      >
        {t("about.paragraph4")}
      </motion.p>
    </div>
  );
};

export default SectionWrapper(AboutOverview, "about");
