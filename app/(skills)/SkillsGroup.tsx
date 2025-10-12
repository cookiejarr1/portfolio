import { skills } from "../data/skills";
import Skill from "./Skill";

export default function SkillsGroup() {
  // Duplicate skills for seamless looping
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="mx-0 md:mx-14 px-4 md:px-36 py-14 justify-center overflow-hidden"
    >
      {/* First row - left to right */}
      <div className="relative overflow-hidden mb-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-l from-transparent to-background dark:from-transparent dark:to-background z-20 pointer-events-none"></div>
        <div
          className="flex gap-6 py-2 animate-marquee-left hover:pause-animation"
          style={{ width: "max-content" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <Skill key={`row1-${index}`} skill={skill} />
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-background dark:from-transparent dark:to-background z-20 pointer-events-none"></div>
      </div>

      {/* Second row - right to left */}
      <div className="relative overflow-hidden mb-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-l from-transparent to-background dark:from-transparent dark:to-background z-20 pointer-events-none"></div>
        <div
          className="flex gap-6 py-2 animate-marquee-right hover:pause-animation"
          style={{ width: "max-content" }}
        >
          {duplicatedSkills.reverse().map((skill, index) => (
            <Skill key={`row2-${index}`} skill={skill} />
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-background dark:from-transparent dark:to-background z-20 pointer-events-none"></div>
      </div>
    </section>
  );
}
