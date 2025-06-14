import Navbar from "./navbar";
import Footer from "./footer";

import { Signika } from "next/font/google";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/layout.module.css";

const signika = Signika({
  subsets: ["latin"],
});

type contextData = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<null | contextData>(null);

export default function Layout({ children }: { children: any }) {
  const [dark, setDark] = useState(true);
  const themeClass = dark ? "" : "lightmode";

  return (
    <div className={`${signika.className} ${themeClass} ${styles.layout}`}>
      <ThemeContext.Provider value={{ dark: dark, setDark: setDark }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
