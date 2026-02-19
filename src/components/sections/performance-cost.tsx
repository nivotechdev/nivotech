"use client";

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';
import React from 'react';
import { Zap, Shield, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    icon: Zap,
    title: "Velocidade",
    description: "Páginas que carregam antes mesmo do clique, otimizadas para Core Web Vitals com latência zero.",
    number: "01",
    label: "REAL-TIME PERFORMANCE",
    className: "md:col-span-7 md:row-span-2"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Privacidade e proteção como prioridade absoluta em cada linha de código injetada.",
    number: "02",
    label: "ACTIVE DEFENSE",
    className: "md:col-span-5"
  },
  {
    icon: TrendingUp,
    title: "Estabilidade",
    description: "Escalabilidade automática para aguentar picos de tráfego sem degradação de performance.",
    number: "03",
    label: "AUTO-SCALING CORE",
    className: "md:col-span-5"
  }
];

const PillarCard = ({ icon: Icon, title, description, index, number, label, className }: (typeof pillars)[0] & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        delay: index * 0.1
      }}
      style={{ transform: 'translateZ(0)' }}
      className={cn(
        "group relative bg-[#111111]/40 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col justify-between",
        "will-change-transform",
        className
      )}
    >
      {/* Watermark Number */}
      <span className="absolute top-6 right-8 font-code text-7xl font-bold text-white/[0.03] select-none transition-colors group-hover:text-primary/5">
        {number}
      </span>

      <div className="relative z-10">
        <div className="mb-6 inline-block">
          <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <div className="space-y-2">
            <span className="font-code text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
                {label}
            </span>
            <h3 className="text-3xl font-extrabold text-white tracking-tighter drop-shadow-xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}>
              {title}
            </h3>
        </div>
      </div>

      <p className="relative z-10 text-muted-foreground leading-relaxed max-w-sm mt-6 text-sm md:text-base">
        {description}
      </p>

      {/* Subtle Glow interaction */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};


export default function PerformanceCostSection() {
  return (
    <section id="infra" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Technical Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Floating Aurora Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-aura-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-aura-pulse" style={{ animationDelay: '-5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4">
             <span className="font-code text-[11px] font-bold text-primary tracking-[0.3em] uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
                Protocolo de Alta Engenharia
              </span>
          </div>
          <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tightest text-white leading-none mt-6">
            Engenharia Invisível. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary/50">Resultados Reais.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Nossa infraestrutura opera nos bastidores com precisão milimétrica para que sua única preocupação seja a escala do seu sucesso.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[minmax(300px,auto)]">
            {pillars.map((item, index) => (
              <PillarCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}