'use client';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import SocialLink from '@/components/SocialLink';

const socialLinks = [
  {
    href: "https://linkedin.com/in/brandon-viry-81187b237",
    icon: FaLinkedin,
    label: "LinkedIn"
  },
  {
    href: "https://www.instagram.com/virybrandon/",
    icon: FaInstagram,
    label: "Instagram"
  },
  {
    href: "https://github.com/brandonviry/",
    icon: FaGithub,
    label: "GitHub"
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-[#00A8E8]/20 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-white/80 text-sm md:text-base">
            {new Date().getFullYear()} Brandon VIRY - Full-Stack Product Maker
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
