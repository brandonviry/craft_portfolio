'use client';

import { FaReact, FaNodeJs, FaFigma, FaWordpress, FaGitAlt, FaStripe, FaDiscord, FaWhatsapp } from 'react-icons/fa';
import { SiNextdotjs, SiWebflow, SiNotion, SiJavascript, SiPython, SiHtml5, SiCss3, SiZapier, SiAirtable, SiCanva } from 'react-icons/si';
import { TbBrandFramerMotion, TbApi, TbSettings } from 'react-icons/tb';
import { BsGearFill } from 'react-icons/bs';

export default function About() {
  const skillCategories = [
    {
      title: "Code & Développement",
      skills: [
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <SiPython />, name: 'Python' },
        { icon: <SiHtml5 />, name: 'HTML' },
        { icon: <SiCss3 />, name: 'CSS' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaGitAlt />, name: 'Git' },
      ]
    },
    {
      title: "Web & CMS",
      skills: [
        { icon: <FaWordpress />, name: 'WordPress' },
        { icon: <SiWebflow />, name: 'Webflow' },
        { icon: <TbBrandFramerMotion />, name: 'Framer' },
      ]
    },
    {
      title: "No-Code",
      skills: [
        { icon: <SiNotion />, name: 'Notion' },
        { icon: <SiAirtable />, name: 'Airtable' },
        { icon: <BsGearFill />, name: 'Système.io' },
      ]
    },
    {
      title: "Automatisation",
      skills: [
        { icon: <SiZapier />, name: 'Zapier' },
        { icon: <TbSettings />, name: 'Make (Integromat)' },
        { icon: <TbApi />, name: 'N8N' },
      ]
    },
    {
      title: "Design & Contenu",
      skills: [
        { icon: <SiCanva />, name: 'Canva' },
        { icon: <FaFigma />, name: 'Figma' },
        { icon: <BsGearFill />, name: 'Suite Affinity' },
      ]
    },
    {
      title: "Tunnel de vente & Paiement",
      skills: [
        { icon: <FaStripe />, name: 'Stripe' },
        { icon: <BsGearFill />, name: 'Système.io' },
      ]
    },
    {
      title: "Outils collaboratifs",
      skills: [
        { icon: <SiNotion />, name: 'Notion' },
        { icon: <FaDiscord />, name: 'Discord' },
        { icon: <FaWhatsapp />, name: 'WhatsApp' },
      ]
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A8E810_1px,transparent_1px),linear-gradient(to_bottom,#00A8E810_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Titre avec effet de gradient */}
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#00A8E8] to-white text-transparent bg-clip-text">
            À propos
          </h2>

          {/* Description avec animation de fade */}
          <div className="space-y-6 text-lg text-white/80 mb-12 animate-fadeIn">
            <p>Créateur de solutions digitales polyvalent, je conçois des produits web en combinant développement, outils no-code, design, automatisation et plus encore selon le besoin.</p>
            <p>Je maîtrise des plateformes comme Webflow, Notion, Zapier, WordPress, Stripe, Canva, et bien d'autres.</p>
            <p>J'ai également de l'expérience avec des outils créatifs et techniques comme Photoshop, Illustrator, Affinity Suite, Figma, VS Code, etc.</p>
            <p>Je conçois des systèmes efficaces, rapides à mettre en place, pensés pour la performance, l'autonomie et l'expérience utilisateur.</p>
          </div>

          {/* Grille de compétences avec animation au hover */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fadeIn" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-4 text-[#00A8E8]">{category.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl text-[#00A8E8]">{skill.icon}</div>
                      <span className="text-white/90">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
