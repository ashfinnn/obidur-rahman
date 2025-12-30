// app/hooks/useReducedMotion.ts
"use client";
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    // ONLY reduce motion if:
    // 1. User explicitly requested it (accessibility)
    // 2. Device is mobile (< 768px)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.innerWidth < 768;
    
    setShouldReduce(mediaQuery.matches || isMobile);

    const handleChange = () => {
      setShouldReduce(mediaQuery.matches || window.innerWidth < 768);
    };

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("resize", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return shouldReduce; // TRUE on mobile, FALSE on desktop
}