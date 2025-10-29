import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const Publications = ({ showHeader = true, columns=3, filePath = "/data/publications.json" }) => {
  const { t } = useTranslation();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch publications JSON");
        return res.json();
      })
      .then((data) => setPublications(data))
      .catch((err) => console.error("Failed to load publications:", err));
  }, [filePath]);

  let col_md, col_lg;

  if (columns <= 2) {
    col_md = columns;
    col_lg = columns;
  } else {
    col_md = 2;
    col_lg = columns;
  }

  return (
    <div className="mt-12">
      {showHeader && (
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-black-100 rounded-2xl p-6"
        >
          <p className={styles.sectionSubText}>{t("publications.subtitle")}</p>
          <h2 className={styles.sectionHeadText}>{t("publications.title")}</h2>
        </motion.div>
      )}

      <div className={`mt-0 grid gap-6 sm:grid-cols-1 md:grid-cols-${col_md} lg:grid-cols-${col_lg}`}>
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            variants={textVariant(index * 0.2)}
            className="bg-black-200 p-5 rounded-2xl hover:shadow-lg transition-shadow duration-300"
          >
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-lg font-bold hover:underline flex items-center gap-2"
            >
              {pub.title} 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#aaa6c3]"
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
            <p className="mt-2 text-[#aaa6c3] text-sm">{pub.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Publications, "publications");
