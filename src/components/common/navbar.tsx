import { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import styles from "@/styles/navbar.module.css";
import MenuButton from "./menuButton";
import CurtainMenu from "./curtainMenu";
import Link from "next/link";

export default function Navbar() {
  let [isVisible, setVisible] = useState(true);
  let [scrollPos, setScrollPos] = useState(0);
  let [curtainMenuVisible, setCurtainMenuVisible] = useState(false);

  let visibilityClass = "";
  if (!isVisible) {
    visibilityClass = styles.invisible;
  }

  useEffect(() => {
    const handleScroll = () => {
      let currScrollPos = window.pageYOffset;

      if (currScrollPos > scrollPos && !curtainMenuVisible) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setScrollPos(currScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`${styles.navbar} ${visibilityClass}`}
      style={{ top: isVisible.toString() + "px" }}
    >
      <MenuButton onClick={() => setCurtainMenuVisible((visible) => !visible)}/>
      <CurtainMenu isVisible={curtainMenuVisible} curtainVisibilitySetter={setCurtainMenuVisible}/>
      <NavbarButton text="Home" url="/home" />
      <NavbarButton text="Articles" url="/home" />
      <SearchBar visibilitySetter={setVisible} />
      <NavbarButton text="About me" url="/about-me" />
    </div>
  );
}

interface navbarButtonParams {
  url: string;
  text: string;
}

function NavbarButton({ url, text }: navbarButtonParams) {
  return (
    <Link
      className={styles.navbarButton}
      href={url}
    >
      {text}
    </Link>
  );
}
