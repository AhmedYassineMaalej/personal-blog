import Navbar from "./navbar";
import Footer from "./footer";

import { Signika } from "next/font/google";
import {
  cloneElement,
  Context,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

const signika = Signika({
  subsets: ["latin"],
});

export const ThemeContext: Context<any> = createContext(null);

export default function Layout({ children }: { children: any }) {
  const [dark, setDark] = useState(true);

  return (
    <div className={signika.className}>
      <ThemeContext.Provider value={{ dark: dark, setDark: setDark }}>
        <Navbar />
        <main>{children}</main>
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
}
