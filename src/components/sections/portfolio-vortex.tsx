
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Zap, Target, Palette, TrendingUp, Shield, Globe } from 'lucide-react';

interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const benefitItems: BenefitItem[] = [
  { id: 1, title: "VELOCIDADE EXTREMA", description: "Otimização de 100 no Core Web Vitals.", icon: Zap },
  { id: 2, title: "DESIGN DE ELITE", description: "Interfaces premium sob medida.", icon: Palette },
  { id: 3, title: "SEO DE ALTA ESCALA", description: "Domínio absoluto nos motores de busca.", icon: Target },
  { id: 4, title: "FOCO EM CONVERSÃO", description: "Arquitetura projetada para vender.", icon: TrendingUp },
  { id: 5, title: "SEGURANÇA ATIVA", description: "Proteção contra ameaças em tempo real.", icon: Shield },
  { id: 6, title: "INFRA GLOBAL", description: "Servidores de alta disponibilidade.", icon: Globe },
];

const VortexCard = ({ item, index, total, scrollProgress, isMobile }: { item: BenefitItem, index: number, total: number, scrollProgress: any, isMobile: boolean }) => {
  const rotationY = useTransform(scrollProgress, [0, 1], [0, 1080]); 
  
  const translateY = useTransform(
    scrollProgress, 
    [0, 1], 
    [index * (isMobile ? 120 : 200) + 400, (index - total) * (isMobile ? 180 : 300) - 400]
  );
  
  const opacity = useTransform(translateY, [-800, -400, 0, 400, 800], [0, 0.8, 1, 0.8, 0]);
  const dynamicRotation = useTransform(rotationY, (val) => val + (index * (360 / total)));

  const cardWidth = isMobile ? 220 : 300;
  const cardHeight = isMobile ? 140 : 160;
  const spiralRadius = isMobile ? 280 : 420;

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        top: '50%',
        left: '50%',
        marginLeft: `-${cardWidth / 2}px`,
        marginTop: `-${cardHeight / 2}px`,
        rotateY: dynamicRotation,
        y: translateY,
        opacity: opacity,
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity',
      }}
      className="group"
    >
      <motion.div
        style={{
          transform: `translateZ(${spiralRadius}px)`,
          // Removido o backfaceVisibility: 'hidden' para permitir leitura de ambos os lados
        }}
        className={cn(
          "relative w-full h-full rounded-2xl p-6 flex flex-col justify-center",
          "border border-primary/40 bg-card/40 backdrop-blur-md shadow-lg shadow-primary/5",
          "transition-all duration-500 ease-out",
          "group-hover:border-primary/80 group-hover:scale-105 group-hover:bg-primary/10"
        )}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <p className="font-code text-[10px] md:text-[11px] font-black text-primary tracking-widest uppercase">
            SISTEMA 0{index + 1}
          </p>
        </div>
        
        <h3 className="font-headline text-sm md:text-base font-extrabold text-foreground mb-1 leading-tight">
          {item.title}
        </h3>
        <p className="text-[10px] md:text-xs text-muted-foreground font-medium leading-relaxed">
          {item.description}
        </p>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
          <div className="w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-sm" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function PortfolioVortex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-visible"
      style={{ 
        perspective: '1200px',
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div 
        style={{ 
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        {benefitItems.map((item, index) => (
          <VortexCard 
            key={item.id} 
            item={item} 
            index={index} 
            total={benefitItems.length} 
            scrollProgress={smoothProgress}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}
