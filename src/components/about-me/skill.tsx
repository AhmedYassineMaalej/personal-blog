import styles from "@/styles/skill.module.css";
import { useIsVisible } from "../common/useIsVisible";

interface params {
  icon: string;
  text: string;
  index: number;
}

export default function Skill({ icon, text, index }: params) {
  const flexDirection = index % 2 == 0 ? "row" : "row-reverse";
  const [isVisible, ref] = useIsVisible();
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return (
    <div
      ref={ref}
      className={`${styles.skill} ${visibilityClass}`}
      style={{
        flexDirection: flexDirection,
      }}
    >
      <p>{text}</p>
      <img src={icon} />
    </div>
  );
}
