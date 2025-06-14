import styles from "@/styles/toggleThemeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "./layout";

export default function ToggleThemeButton() {
  const contextData = useContext(ThemeContext);
  const toggleTheme = () => {
    if (contextData !== null) {
      const setDark = contextData.setDark;
      setDark((value) => !value);
    }
  };

  return (
    <button className={styles.toggleThemeButton} onClick={toggleTheme}>
      <img src="dark_theme_icon.svg" />
    </button>
  );
}
