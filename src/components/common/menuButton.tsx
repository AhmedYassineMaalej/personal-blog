import styles from "@/styles/menuButton.module.css";
import { MouseEventHandler } from "react";

interface menuButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function MenuButton({ onClick }: menuButtonProps) {
  return <button className={styles.menuButton} onClick={onClick}>☰</button>;
}
