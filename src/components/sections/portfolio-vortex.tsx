'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
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

// --- DESKTOP --- //

const CardFace = ({ item, isBack = false }: { item: BenefitItem, isBack?: boolean }) => (
  <div
    className={cn(
      "absolute inset-0 w-full h-full rounded-2xl p-6 flex items-center justify-center transition-all duration-500 ease-out",
      "border border-primary/40",
      isBack
        ? "bg-primary shadow-[0_0_50px_rgba(108,100,251,0.3)]"
        : "bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/10"
    )}
    style={{
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      transform: isBack ? 'rotateY(180deg)' : 'rotateY(0deg)',
      transformStyle: 'preserve-3d',
    }}
  >
    {!isBack ? (
      <>
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
          <item.icon className="w-8 h-8 text-primary" />
        </div>
      </>
    ) : (
      <div className="flex items-center justify-center h-full w-full">
         <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
         </div>
      </div>
    )}
  </div>
);

const VortexCard = ({ item, index, total, scrollProgress }: { item: BenefitItem, index: number, total: number, scrollProgress: any }) => {
  const rotationY = useTransform(scrollProgress, [0, 1], [0, 1080]);
  const translateY = useTransform(
    scrollProgress,
    [0, 1],
    [index * 200 + 400, (index - total) * 300 - 400]
  );
  const opacity = useTransform(translateY, [-800, -400, 0, 400, 800], [0, 0.8, 1, 0.8, 0]);
  const dynamicRotation = useTransform(rotationY, (val) => val + (index * (360 / total)));

  const cardWidth = 300;
  const cardHeight = 160;
  const spiralRadius = 420;

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
      <div
        style={{
          transform: `translateZ(${spiralRadius}px)`,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <CardFace item={item} isBack={false} />
        <CardFace item={item} isBack={true} />
      </div>
    </motion.div>
  );
};


// --- MOBILE (Otimizado) --- //

const MobileCard = ({ item }: { item: BenefitItem }) => {
    const ref = useRef(null);
    // Otimização 1: Animação dispara apenas uma vez
    const isInView = useInView(ref, { once: true, amount: 0.3 });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        // Otimização 2: Adicionado will-change para performance no mobile
        style={{ willChange: 'transform, opacity' }}
        className="w-full bg-card/80 border border-primary/20 rounded-2xl p-6 flex items-center gap-6 shadow-sm"
      >
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30 flex-shrink-0">
          <item.icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary">{item.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        </div>
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

  // Otimização 3: Física do Spring ajustada para maior responsividade
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (isMobile) {
    return (
      <div className="w-full px-6 flex flex-col items-center gap-6">
        {benefitItems.map((item) => (
          <MobileCard key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-visible"
      style={{
        perspective: '2000px',
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
          />
        ))}
      </motion.div>
    </div>
  );
}
