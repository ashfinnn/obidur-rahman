'use client';

import { motion, Variants } from 'framer-motion';

interface QuoteBlockProps {
  children: React.ReactNode;
  variants?: Variants;
}

const QuoteBlock = ({ children, variants }: QuoteBlockProps) => {
  return (
    <motion.div className="text-center py-16" variants={variants}>
      <blockquote className="relative font-sans text-xl lg:text-2xl font-medium text-gray-800 max-w-4xl mx-auto leading-relaxed">
        {/* Decorative opening quote mark */}
        <span className="absolute -top-4 -left-4 sm:-left-8 text-6xl lg:text-7xl text-gray-200 font-serif opacity-75">
          “
        </span>
        {children}
        {/* Decorative closing quote mark */}
        <span className="absolute -bottom-8 -right-4 sm:-right-8 text-6xl lg:text-7xl text-gray-200 font-serif opacity-75">
          ”
        </span>
      </blockquote>
    </motion.div>
  );
};

export default QuoteBlock;