'use client';

import { HiArrowRight } from 'react-icons/hi';
import { FaReact, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiWebflow } from 'react-icons/si';
import GradientButton from '@/components/GradientButton';
import AnimatedContainer from '@/components/AnimatedContainer';
import AnimatedText from '@/components/AnimatedText';
import FloatingIcon from '@/components/FloatingIcon';

const floatingIcons = [
  {
    icon: FaReact,
    color: "#00A8E8",
    delay: 0,
    className: "absolute top-1/4 left-1/4"
  },
  {
    icon: SiNextdotjs,
    color: "#00A8E8",
    delay: 0.5,
    className: "absolute top-1/3 right-1/4"
  },
  {
    icon: FaFigma,
    color: "#00A8E8",
    delay: 1,
    className: "absolute bottom-1/3 left-1/3"
  },
  {
    icon: SiWebflow,
    color: "#00A8E8",
    delay: 1.5,
    className: "absolute bottom-1/4 right-1/3"
  }
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A8E810_1px,transparent_1px),linear-gradient(to_bottom,#00A8E810_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Icônes flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((icon, index) => (
          <FloatingIcon
            key={index}
            icon={icon.icon}
            color={icon.color}
            delay={icon.delay}
            className={icon.className}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedContainer>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00A8E8] to-white text-transparent bg-clip-text">
              Brandon VIRY
            </h1>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 mb-12">
              Full-Stack Product Maker créatif & passionné
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3}>
            <GradientButton 
              href="https://steadfast-firefly-f2f.notion.site/WIKI-Full-Stack-Product-Maker-1cae9ab38297806f89ecdd95e68a9d2c?pvs=4" 
              variant="gradient"
              external
            >
              Découvrir mes projets
              <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </GradientButton>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
