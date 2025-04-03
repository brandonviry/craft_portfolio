'use client';

import { FaCode, FaTools, FaPencilRuler, FaRobot, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function Expertise() {
  const expertise = [
    {
      icon: <FaCode />,
      title: "Développement Full-Stack",
      description: "Création d'applications web modernes et performantes, du front-end au back-end, avec une expertise en React et Next.js.",
      skills: ["React/Next.js", "API REST", "Base de données", "Architecture"]
    },
    {
      icon: <FaTools />,
      title: "No-Code & Outils",
      description: "Maîtrise des outils no-code pour prototyper rapidement et créer des solutions efficaces avec un minimum de code.",
      skills: ["Webflow", "Notion", "Airtable", "WordPress"]
    },
    {
      icon: <FaPencilRuler />,
      title: "Product Design",
      description: "Conception d'interfaces utilisateur intuitives et création d'expériences produit engageantes.",
      skills: ["UI/UX Design", "Figma", "Design System", "Prototypage"]
    },
    {
      icon: <FaRobot />,
      title: "Automatisation",
      description: "Optimisation des processus de travail grâce à l'automatisation et l'intégration d'outils.",
      skills: ["Zapier", "Webhooks", "API", "Workflows"]
    },
    {
      icon: <FaLightbulb />,
      title: "Vision Produit",
      description: "Approche stratégique du développement produit, de l'idéation au déploiement.",
      skills: ["Stratégie", "MVP", "Tests", "Itération"]
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Travail efficace en équipe, communication claire et adaptation aux méthodologies agiles.",
      skills: ["Agile", "Git", "Code Review", "Documentation"]
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-black relative overflow-hidden">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A8E810_1px,transparent_1px),linear-gradient(to_bottom,#00A8E810_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Titre avec effet de gradient */}
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#00A8E8] to-white text-transparent bg-clip-text">
            Expertise
          </h2>

          {/* Grille d'expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/5 rounded-lg border border-[#00A8E8]/10 hover:border-[#00A8E8]/30 transition-all hover:scale-[1.02] animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl text-[#00A8E8] group-hover:text-[#FF3B3F] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#00A8E8] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-[#00A8E8]/10 text-[#00A8E8] group-hover:bg-[#00A8E8]/20 transition-colors"
                    >
                      {skill}
                    </span>
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
