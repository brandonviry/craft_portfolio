'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TouchInteractionProps {
  children: ReactNode;
  scale?: number;
  rotate?: number;
  className?: string;
}

export default function TouchInteraction({ 
  children, 
  scale = 1.05, 
  rotate = 0,
  className = ''
}: TouchInteractionProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale, 
        rotate,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 } 
      }}
    >
      {children}
    </motion.div>
  );
}
