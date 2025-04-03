'use client';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface GradientButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'gradient' | 'outline' | 'solid';
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function GradientButton({ 
  children, 
  href, 
  variant = 'gradient', 
  className = '',
  external = false,
  onClick
}: GradientButtonProps) {
  const baseStyles = "group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden";
  
  const variantStyles = {
    gradient: "text-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00A8E8] before:via-[#FF3B3F] before:to-[#00A8E8] before:bg-[length:200%_100%] before:animate-gradient-fast before:-z-10 shadow-lg shadow-[#00A8E8]/20 animate-pulse-subtle hover:animate-none hover:scale-105 hover:shadow-xl hover:shadow-[#00A8E8]/30 active:scale-100 active:shadow-lg",
    outline: "bg-white/10 text-white hover:bg-white/20",
    solid: "bg-[#FF3B3F] text-white hover:shadow-lg hover:shadow-[#FF3B3F]/20"
  };

  const linkProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <Link
      href={href}
      className={twMerge(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
