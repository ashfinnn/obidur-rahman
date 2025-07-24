// app/hooks/useScroll.ts
'use client';

import { useState } from 'react';
import { useMotionValueEvent, useScroll as useFramerScroll } from 'framer-motion';

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useFramerScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Use a small threshold to avoid the header changing state on minor scroll adjustments at the top
    setIsScrolled(latest > 0.01);
  });

  return { isScrolled, scrollYProgress };
}