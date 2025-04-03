'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ children, isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-sm border-t border-[#00A8E8]/20"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col items-center gap-6">
              {children}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
