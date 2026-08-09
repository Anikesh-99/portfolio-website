"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Replays the hero's staggered entrance on a section as it scrolls into
// view. Only `.sr` children below the fold at mount are hidden, so content
// visible at load never flashes; the cascade fires when the first hidden
// child approaches the viewport. No-JS visitors and reduced-motion users
// see everything immediately.
export function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hidden = [...el.querySelectorAll<HTMLElement>(".sr")].filter(
      (item) => item.getBoundingClientRect().top > window.innerHeight,
    );
    if (hidden.length === 0) return;

    hidden.forEach((item) => item.classList.add("sr-hide"));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-reveal-in");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(hidden[0]);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
