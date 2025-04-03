import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="p-[1px] rounded-lg bg-gradient-to-br from-[#00A8E8]/50 to-transparent hover:from-[#00A8E8] hover:to-[#FF3B3F] transition-all duration-300"
    >
      <div className="bg-black rounded-lg p-8 h-full">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#00A8E8]/10 flex items-center justify-center">
            <Icon className="text-2xl text-[#00A8E8]" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
