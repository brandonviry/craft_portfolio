import { FaEnvelope } from 'react-icons/fa';

interface EmailLinkProps {
  email: string;
  className?: string;
}

export default function EmailLink({ email, className = '' }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={`flex items-center gap-3 text-white text-xl hover:text-[#00A8E8] transition-all transform hover:scale-105 group ${className}`}
    >
      <FaEnvelope className="text-2xl text-[#00A8E8] group-hover:text-[#FF3B3F] transition-colors" />
      <span>{email}</span>
    </a>
  );
}
