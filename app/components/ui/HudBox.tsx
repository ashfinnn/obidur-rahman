// app/components/ui/HudBox.tsx
'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface HudBoxProps extends MotionProps {
  children: ReactNode;
  className?: string;
  bracketClassName?: string;
}

export const HudBox = ({ children, className = '', bracketClassName = 'border-black/50', ...props }: HudBoxProps) => {
  return (
    <motion.div
      className={`relative p-8 sm:p-10 lg:p-12 ${className}`}
      {...props}
    >
      <div className={`absolute top-0 left-0 w-8 h-8 border-l border-t ${bracketClassName}`}></div>
      <div className={`absolute top-0 right-0 w-8 h-8 border-r border-t ${bracketClassName}`}></div>
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-l border-b ${bracketClassName}`}></div>
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-r border-b ${bracketClassName}`}></div>
      {children}
    </motion.div>
  );
};