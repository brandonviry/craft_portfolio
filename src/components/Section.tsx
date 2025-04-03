interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  withPattern?: boolean;
  withContainer?: boolean;
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  withPattern = false,
  withContainer = true 
}: SectionProps) {
  return (
    <section id={id} className={`relative py-20 bg-black ${className}`}>
      {withPattern && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A8E820_1px,transparent_1px),linear-gradient(to_bottom,#00A8E820_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      )}
      {withContainer ? (
        <div className="container mx-auto px-4 relative">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
