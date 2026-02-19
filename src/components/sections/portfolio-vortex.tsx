"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  id: number;
  title: string;
  videoUrl?: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Fintech Dashboard", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "E-commerce Premium", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "SaaS Platform", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop" },
  { id: 4, title: "HealthTech App", imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop" },
  { id: 5, title: "AI Analytics", imageUrl: "https://images.unsplash.com/photo-1518186239751-6467fff5a90d?q=80&w=600&auto=format&fit=crop" },
];

const VortexCard = ({ item, index, total, scrollProgress }: { item: PortfolioItem, index: number, total: number, scrollProgress: any }) => {
  // Calculate base angle for spiral distribution
  const baseAngle = (index / total) * Math.PI * 2;
  
  // Link rotation and movement to scroll
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 720]); // Two full rotations
  const translateY = useTransform(scrollProgress, [0, 1], [index * 100, (index - total) * 150]);
  
  // Dynamic rotation for each card based on its position in the spiral
  const cardRotation = useTransform(rotateY, (value) => value + (index * (360 / total)));

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '280px',
        height: '180px',
        top: '50%',
        left: '50%',
        marginLeft: '-140px',
        marginTop: '-90px',
        rotateY: cardRotation,
        translateY: translateY,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className="group"
    >
      <motion.div
        style={{
          transform: `translateZ(300px)`, // Radius of the spiral
          backfaceVisibility: 'hidden',
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20 bg-card/40 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-primary/60 group-hover:scale-110"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-0" />
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
          <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/80">{item.title}</p>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
};

export default function PortfolioVortex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] perspective-2000 overflow-hidden flex items-center justify-center"
      style={{ perspective: '2000px' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0%,transparent_70%)]" />
      
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
          />
        ))}
      </motion.div>
      
      {/* Central energy core effect */}
      <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-sm pointer-events-none" />
    </div>
  );
}