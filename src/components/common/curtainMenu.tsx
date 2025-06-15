import styles from "@/styles/curtainMenu.module.css";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface curtainMenuParams {
  isVisible: boolean;
  curtainVisibilitySetter: Dispatch<SetStateAction<boolean>>;
}

export default function CurtainMenu({
  isVisible,
  curtainVisibilitySetter,
}: curtainMenuParams) {
  const visibilityClass = isVisible ? styles.visible : styles.invisible;
  const closeCurtain = () => curtainVisibilitySetter(false);

  return (
    <div className={`${styles.curtainMenuContainer} ${visibilityClass}`}>
      <div className={`${styles.curtainMenu} ${visibilityClass}`}>
        <CurtainMenuButton text="Home" url="/home" onClick={closeCurtain} />
        <CurtainMenuButton
          text="Articles"
          url="/articles/1"
          onClick={closeCurtain}
        />
        <CurtainMenuButton
          text="About me"
          url="/about-me"
          onClick={closeCurtain}
        />
      </div>
    </div>
  );
}

interface curtainMenuButtonProps {
  text: string;
  url: string;
  onClick: () => void;
}

function CurtainMenuButton({ text, url, onClick }: curtainMenuButtonProps) {
  return (
    <Link className={styles.curtainButton} href={url} onClick={onClick}>
      {text}
    </Link>
  );
}
