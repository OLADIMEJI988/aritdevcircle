import { useEffect } from "react";
import anime from "animejs";

export function useNodeAnimation(containerRef, nodeRefs) {
  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.innerWidth < 1024;
    const paths = containerRef.current.querySelectorAll("path");

    nodeRefs.forEach((ref, i) => {
      if (!ref.current || !paths[i]) return;

      const path = anime.path(paths[i]);

      anime({
        targets: ref.current,
        translateX: path("x"),
        translateY: path("y"),
        rotate: isMobile ? path("angle") : 0,
        opacity: [
          { value: 1, duration: (5000 + (i + 1) * 500) * 0.9 },
          { value: 0, duration: (5000 + (i + 1) * 500) * 0.1 },
        ],
        easing: "linear",
        duration: 5000 + (i + 1) * 500,
        loop: true,
      });
    });
  }, [containerRef, nodeRefs]);
}

