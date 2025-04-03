import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

export default function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/80 hover:text-[#00A8E8] transition-colors p-2 hover:scale-110"
    >
      <Icon className="text-xl md:text-2xl" />
      <span className="sr-only">{label}</span>
    </a>
  );
}
