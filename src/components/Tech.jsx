import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const icons = Object.values(technologies).map(
    (technology) => technology.icon
  );

  return (
    <group className="flex flex-row flex-wrap justify-center items-center gap-10">
      {icons.map((icon) => (
        <div className="size-20 sm:size-28" key={icon}>
          <BallCanvas icon={icon} />
        </div>
      ))}
    </group>
  );
};

export default SectionWrapper(Tech, "");
