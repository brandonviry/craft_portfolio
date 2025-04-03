interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ href, children, external = false, onClick, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`text-white hover:text-[#00A8E8] transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
