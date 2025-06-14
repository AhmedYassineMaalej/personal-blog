import styles from "@/styles/toggleThemeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "./layout";

export default function ToggleThemeButton() {
  const setDark = useContext(ThemeContext).setDark;

  const toggleTheme = () => {
    const body = document.querySelector("body");
    if (body === null) {
      return;
    }

    if (body.classList.contains("lightmode")) {
      body.classList.remove("lightmode");
      setDark(true);
      console.log("set dark to true");
    } else {
      body.classList.add("lightmode");
      setDark(false);
    }
  };

  return (
    <button className={styles.toggleThemeButton} onClick={toggleTheme}>
      <img src="dark_theme_icon.svg" />
    </button>
  );
}
