'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import NavLink from '@/components/NavLink';
import GradientButton from '@/components/GradientButton';
import MobileMenu from '@/components/MobileMenu';

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[#00A8E8] text-xl md:text-2xl font-bold hover:text-white transition-colors">
              Brandon VIRY
            </span>
            <span className="text-white/60 text-sm hidden sm:block">
              Full-Stack Product Maker
            </span>
          </Link>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white md:hidden hover:text-[#00A8E8] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <GradientButton
              href="https://steadfast-firefly-f2f.notion.site/WIKI-Full-Stack-Product-Maker-1cae9ab38297806f89ecdd95e68a9d2c?pvs=4"
              external
              variant="solid"
            >
              Projets
            </GradientButton>
          </div>
        </nav>

        {/* Menu mobile */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-center"
            >
              {link.label}
            </NavLink>
          ))}
          <GradientButton
            href="https://www.notion.so/your-wiki-url"
            external
            variant="solid"
            onClick={() => setIsMenuOpen(false)}
            className="text-center"
          >
            Projets
          </GradientButton>
        </MobileMenu>
      </div>
    </header>
  );
}
