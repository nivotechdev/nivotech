
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Fintech Dashboard", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "E-commerce Premium", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "SaaS Platform", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop" },
  { id: 4, title: "HealthTech App", imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop" },
  { id: 5, title: "AI Analytics", imageUrl: "https://images.unsplash.com/photo-1518186239751-6467fff5a90d?q=80&w=600&auto=format&fit=crop" },
  { id: 6, title: "Legal Solution", imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop" },
];

const VortexCard = ({ item, index, total, scrollProgress, isMobile }: { item: PortfolioItem, index: number, total: number, scrollProgress: any, isMobile: boolean }) => {
  const rotationY = useTransform(scrollProgress, [0, 1], [0, 1080]); 
  
  const translateY = useTransform(
    scrollProgress, 
    [0, 1], 
    [index * (isMobile ? 120 : 200) + 400, (index - total) * (isMobile ? 180 : 300) - 400]
  );
  
  const opacity = useTransform(translateY, [-800, -400, 0, 400, 800], [0, 0.8, 1, 0.8, 0]);
  const dynamicRotation = useTransform(rotationY, (val) => val + (index * (360 / total)));

  const cardWidth = isMobile ? 220 : 300;
  const cardHeight = isMobile ? 140 : 180;
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
          backfaceVisibility: 'hidden',
        }}
        className={cn(
          "relative w-full h-full rounded-2xl overflow-hidden",
          "border border-primary/20 bg-card/40 backdrop-blur-[4px]",
          "transition-all duration-500 ease-out",
          "group-hover:border-primary/60 group-hover:scale-105"
        )}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-background/95 via-background/40 to-transparent">
          <p className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-primary mb-1">PROJETO 0{index + 1}</p>
          <p className="text-[10px] md:text-xs font-semibold text-foreground truncate">{item.title}</p>
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
        perspective: '1000px',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div 
        style={{ 
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        {portfolioItems.map((item, index) => (
          <VortexCard 
            key={item.id} 
            item={item} 
            index={index} 
            total={portfolioItems.length} 
            scrollProgress={smoothProgress}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}
