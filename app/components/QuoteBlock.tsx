// app/components/QuoteBlock.tsx
'use client';

import { motion, Variants } from 'framer-motion';

interface QuoteBlockProps {
  children: React.ReactNode;
  variants?: Variants;
}

const QuoteBlock = ({ children, variants }: QuoteBlockProps) => {
  return (
    <motion.div className="text-center py-16" variants={variants}>
      <blockquote className="relative font-sans text-xl lg:text-2xl font-medium text-neutral-200 max-w-4xl mx-auto leading-relaxed"> {/* CHANGED: text-neutral-200 */}
        {/* Decorative opening quote mark */}
        <span className="absolute -top-4 -left-4 sm:-left-8 text-6xl lg:text-7xl text-neutral-800 font-serif opacity-75"> {/* CHANGED: text-neutral-800 */}
          “
        </span>
        {children}
        {/* Decorative closing quote mark */}
        <span className="absolute -bottom-8 -right-4 sm:-right-8 text-6xl lg:text-7xl text-neutral-800 font-serif opacity-75"> {/* CHANGED: text-neutral-800 */}
          ”
        </span>
      </blockquote>
    </motion.div>
  );
};

export default QuoteBlock;