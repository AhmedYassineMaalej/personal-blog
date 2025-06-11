import { useEffect, useRef, useState } from "react";

export function useIsVisible() {
  const [isVisible, setVisible] = useState(false);
  const ref: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.rootBounds == null) return;

        if (entry.boundingClientRect.top < entry.rootBounds.bottom) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    });

    observer.observe(ref.current);
    return () => {
      if (ref.current !== null) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [isVisible, ref];
}
