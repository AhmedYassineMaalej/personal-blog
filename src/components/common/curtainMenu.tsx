import styles from "@/styles/curtainMenu.module.css";
import Link from "next/link";

interface curtainMenuParams {
  isVisible: any;
  curtainVisibilitySetter: any;
}

export default function CurtainMenu({ isVisible, curtainVisibilitySetter }: curtainMenuParams) {
  const visibilityClass = isVisible ? styles.visible : styles.invisible;
  const closeCurtain = () => curtainVisibilitySetter(false);

  return (
    <div className={`${styles.curtainMenu} ${visibilityClass}`}>
      <CurtainMenuButton text="Home" url="/home" onClick={closeCurtain}/>
      <CurtainMenuButton text="Articles" url="/articles/1" onClick={closeCurtain}/>
      <CurtainMenuButton text="About me" url="/about-me" onClick={closeCurtain}/>
    </div>
  );
}

interface curtainMenuButtonProps {
  text: string;
  url: string;
  onClick: any;
}

function CurtainMenuButton({ text, url, onClick }: curtainMenuButtonProps) {
  return (
    <Link
      className={styles.curtainButton}
      href={url}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
