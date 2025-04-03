'use client';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import SocialCard from '@/components/SocialCard';
import EmailLink from '@/components/EmailLink';
import TallyForm from '@/components/TallyForm';

const socialLinks = [
  {
    href: "https://linkedin.com/in/brandon-viry-81187b237",
    icon: FaLinkedin,
    title: "LinkedIn",
    description: "Connectons-nous"
  },
  {
    href: "https://www.instagram.com/virybrandon/",
    icon: FaInstagram,
    title: "Instagram",
    description: "Mes créations graphiques"
  }
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle>Me contacter</SectionTitle>

      <div className="flex flex-col items-center gap-12">
        {/* Email avec animation hover */}
        <EmailLink email="brandonviry@gmail.com" />
        
        {/* Réseaux sociaux avec cartes animées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {socialLinks.map((link) => (
            <SocialCard
              key={link.title}
              href={link.href}
              icon={link.icon}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>

        {/* Formulaire de contact */}
        <TallyForm formId="wkz4yR" />
      </div>
    </Section>
  );
}
