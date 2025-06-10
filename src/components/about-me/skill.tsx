import styles from "@/styles/skill.module.css";
import { useIsVisible } from "../common/useIsVisible";

interface params {
  icon: string;
  text: string;
  index: number;
}

export default function Skill({ icon, text, index }: params) {
  const directionClass = index % 2 == 0 ? "" : styles.reverse;
  const [isVisible, ref] = useIsVisible();
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return (
    <div
      ref={ref}
      className={`${styles.skill} ${visibilityClass} ${directionClass}`}
    >
      <img src={icon} />
      <p>{text}</p>
    </div>
  );
}
