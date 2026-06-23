"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function BackToTopButton() {
  const lenis = useLenis();

  function scrollToTop() {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 0.65,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        force: true,
        lock: true,
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button className="back-to-top" type="button" onClick={scrollToTop} aria-label="Scroll back to top">
      <span>Back to top</span>
      <ArrowUp />
    </button>
  );
}
