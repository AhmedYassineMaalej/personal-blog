import Navbar from "./navbar";
import Footer from "./footer";

import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: any }) {
  return (
    <div className={signika.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
