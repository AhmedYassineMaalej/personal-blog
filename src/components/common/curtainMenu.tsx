import styles from "@/styles/curtainMenu.module.css";

export default function CurtainMenu({ isVisible }: { isVisible: boolean }) {
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return (
    <div className={`${styles.curtainMenu} ${visibilityClass}`}>
      <CurtainMenuButton text="Home" url="/home" />
      <CurtainMenuButton text="Articles" url="/articles/1" />
      <CurtainMenuButton text="About me" url="/about-me" />
    </div>
  );
}

interface curtainMenuButtonProps {
  text: string;
  url: string;
}

function CurtainMenuButton({ text, url }: curtainMenuButtonProps) {
  const openUrl = () => window.open(url, "_self");

  return (
    <button className={styles.curtainButton} onClick={openUrl}>
      {text}
    </button>
  );
}
