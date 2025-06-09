import { RefObject, useEffect, useRef } from "react";
import { Dispatch, SetStateAction } from "react";

interface props {
  visibilitySetter: Dispatch<SetStateAction<number>>,
}

export default function SearchBar({visibilitySetter}: props) {
  const inputRef: RefObject<HTMLInputElement | null>  = useRef(null);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.code == "KeyS" && inputRef.current != null) {
        inputRef.current.focus({preventScroll: true});
        visibilitySetter(0);
      }
    };
    document.addEventListener("keyup", keyHandler);

    return () => document.removeEventListener("keyup", keyHandler);
  })

  return <input className="search-bar" type="text" placeholder="Search [S]" ref={inputRef} />;
}
