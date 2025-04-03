interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl font-bold text-[#00A8E8] mb-12 text-center ${className}`}>
      <span className="bg-gradient-to-r from-[#00A8E8] to-[#FF3B3F] bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}
