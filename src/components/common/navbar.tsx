import { useEffect, useState } from "react";
import SearchBar from "./searchbar";

const LINKEDIN = "https://www.linkedin.com/in/ahmedyassinemaalej/";
const GITHUB = "https://github.com/AhmedYassineMaalej";

export default function Navbar() {
  let [top, setTop] = useState(0);
  let [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
        const handleScroll = () => {
            let currScrollPos = window.pageYOffset;

            if (currScrollPos > scrollPos) {
                setTop(-100);
            } else {
                setTop(0);
            }
            setScrollPos(currScrollPos);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }
  )

  const openLink = (link: string) => {
    return () => window.open(link, "_blank");
  };

  return (
    <div className="navbar" style={{ top: top.toString() + "px" }}>
      <button onClick={() => {window.open("/home", "_self")}}>Home</button>
      <button onClick={() => {window.open("/home", "_self")}}>Articles</button>
      <SearchBar visibilitySetter={setTop}/>
      <img src="/github.png" onClick={openLink(GITHUB)} />
      <img src="/linkedin.png" onClick={openLink(LINKEDIN)} />
      <button onClick={() => {window.open("/about-me", "_self")}}>About me</button>
    </div>
  );
}
