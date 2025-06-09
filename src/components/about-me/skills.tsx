import styles from "@/styles/skills.module.css";
import Skill from "./skill";
import { SkillData } from "@/pages/about-me";

interface params {
  data: SkillData[];
}

export default function Skills({ data }: params) {
  return (
    <div className={styles.skills}>
      {data.map((skill, index) => (
        <Skill icon={skill.image} text={skill.description} index={index} />
      ))}
    </div>
  );
}
