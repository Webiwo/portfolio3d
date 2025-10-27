import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import Parser from "html-react-parser";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();

  // Pobranie punktów z i18n jako tablicy
  const points = t(`experience.${experience.id}.points`, { returnObjects: true });

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={t(`experience.${experience.id}.date`)}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={t(`experience.${experience.id}.company`)}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(`experience.${experience.id}.title`)}
        </h3>
        <p
          className="text-[#aaa6c3] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {t(`experience.${experience.id}.company`)}
        </p>

        {points.map((point, index) => (
          <p
            key={`experience-point-${index}`}
            style={{
              fontSize: "0.9em",
              fontWeight: "200",
              letterSpacing: "0.5px",
            }}
          >
            {Parser(point)}
          </p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="-mt-10 md:mt-20">
      <div>
        <p className={styles.sectionSubText}>{t("experience.sectionIntro")}</p>
        <h2 className={styles.sectionHeadText}>{t("experience.sectionTitle")}</h2>
      </div>
      <div className="mt-6 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
