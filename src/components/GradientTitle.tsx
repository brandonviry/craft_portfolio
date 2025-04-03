'use client';
import { motion } from 'framer-motion';

interface GradientTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function GradientTitle({ children, className = '', delay = 0 }: GradientTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl ${className}`}
    >
      <span className="bg-gradient-to-r from-[#00A8E8] via-white to-[#FF3B3F] bg-clip-text text-transparent">
        {children}
      </span>
    </motion.h1>
  );
}
