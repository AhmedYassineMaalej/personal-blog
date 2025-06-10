import { RefObject, useEffect, useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "@/styles/searchbar.module.css";

interface props {
  visibilitySetter: Dispatch<SetStateAction<boolean>>;
}

export default function SearchBar({ visibilitySetter }: props) {
  const inputRef: RefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.code == "KeyS" && inputRef.current != null) {
        inputRef.current.focus({ preventScroll: true });
        visibilitySetter(true);
      }
    };
    document.addEventListener("keyup", keyHandler);

    return () => document.removeEventListener("keyup", keyHandler);
  });

  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Search [S]"
      ref={inputRef}
    />
  );
}
