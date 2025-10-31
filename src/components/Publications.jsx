import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const Publications = ({ showHeader = true}) => {
  const { t, i18n } = useTranslation();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const filePath = `/data/publications.${i18n.language}.json`;
    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch publications JSON");
        return res.json();
      })
      .then((data) => setPublications(data))
      .catch((err) => console.error("Failed to load publications:", err));
  }, [i18n.language]);

  return (
    <div className="mt-12">
      {showHeader && (
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="flex-1 bg-black-100 rounded-2xl p-6"
        >
          <p className={styles.sectionSubText}>{t("publications.subtitle")}</p>
          <h2 className={styles.sectionHeadText}>{t("publications.title")}</h2>
        </motion.div>
      )}

      {publications.length > 0 ? (
        <div className="mt-0 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={textVariant(index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-black-200 p-5 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-lg font-bold hover:underline inline-flex items-start gap-2"
              >
                <span>{pub.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[1em] h-[1em] text-[#aaa6c3] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  />
                </svg>
              </a>
              <p className="mt-2 text-[#aaa6c3] text-sm whitespace-pre-line">{pub.description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-[#aaa6c3] mt-6">{/* można dodać loader np. "Ładowanie..." */}</p>
      )}

    </div>
  );
};

export default SectionWrapper(Publications, "publications");
