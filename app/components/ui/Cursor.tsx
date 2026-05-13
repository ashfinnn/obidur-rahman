"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);

      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: isHovered ? 32 : 8,
        height: isHovered ? 32 : 8,
      }}
      animate={{ scale: isHovered ? 1.2 : 1 }}
      transition={{ duration: 0.2 }}
    />
  );
}
