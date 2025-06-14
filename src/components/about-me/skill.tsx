import styles from "@/styles/skill.module.css";
import { useIsVisible } from "../common/useIsVisible";
import { useContext } from "react";
import { ThemeContext } from "../common/layout";

interface params {
  icon: string;
  text: string;
  index: number;
}

export default function Skill({ icon, text, index }: params) {
  const directionClass = index % 2 == 0 ? "" : styles.reverse;
  const [isVisible, ref] = useIsVisible();
  const visibilityClass = isVisible ? styles.visible : styles.invisible;
  const dark = useContext(ThemeContext).dark;

  console.log("dark: " + dark.toString());

  if (!dark) {
    icon = icon.replace(".svg", "_light.svg");
  }

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
