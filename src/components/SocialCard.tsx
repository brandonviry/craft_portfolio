import { IconType } from 'react-icons';

interface SocialCardProps {
  href: string;
  icon: IconType;
  title: string;
  description: string;
}

export default function SocialCard({ href, icon: Icon, title, description }: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-6 border border-[#00A8E8]/20 rounded-lg hover:border-[#00A8E8] transition-all hover:scale-105 group"
    >
      <Icon className="text-4xl text-[#00A8E8] group-hover:text-[#FF3B3F] transition-colors" />
      <div className="flex flex-col">
        <span className="text-[#00A8E8] font-bold">{title}</span>
        <span className="text-white/80 text-sm">{description}</span>
      </div>
    </a>
  );
}
