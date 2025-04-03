import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface FloatingIconProps {
  icon: IconType;
  color: string;
  delay?: number;
  className?: string;
}

export default function FloatingIcon({ icon: Icon, color, delay = 0, className = '' }: FloatingIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`animate-float ${className}`}
    >
      <div className={`p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-${color}/20`}>
        <Icon className={`text-3xl sm:text-4xl text-${color}`} />
      </div>
    </motion.div>
  );
}
