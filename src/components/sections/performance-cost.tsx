
"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Zap, Shield, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    icon: Zap,
    title: "Velocidade",
    description: "Páginas que carregam antes mesmo do clique. Engenharia focada em latência zero e notas máximas no Core Web Vitals para garantir a menor taxa de rejeição do mercado.",
    number: "01",
    label: "REAL-TIME PERFORMANCE",
    className: "md:col-span-2 md:aspect-[21/7]"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Protocolos de criptografia de elite e arquitetura defensiva ativa. Privacidade absoluta em cada linha de código injetada para proteção total de dados.",
    number: "02",
    label: "ACTIVE DEFENSE",
    className: "md:col-span-1 aspect-square"
  },
  {
    icon: TrendingUp,
    title: "Estabilidade",
    description: "Infraestrutura resiliente com escalabilidade automática. Seu negócio online permanece inabalável mesmo durante picos extremos de tráfego global.",
    number: "03",
    label: "AUTO-SCALING CORE",
    className: "md:col-span-1 aspect-square"
  }
];

const PillarCard = ({ icon: Icon, title, description, index, number, label, className }: (typeof pillars)[0] & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }}
      className={cn(
        "relative bg-card p-10 rounded-xl border border-primary/10 flex flex-col justify-between overflow-hidden shadow-soft group",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-8 inline-block">
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 transition-colors group-hover:bg-primary/20">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <div className="space-y-4">
            <span className="font-code text-[10px] font-black text-primary tracking-[0.3em] uppercase">
                {label}
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none">
              {title}
            </h3>
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
          {description}
        </p>
      </div>

      {/* Watermark Number */}
      <span className="absolute bottom-6 right-8 font-code text-8xl font-black text-primary/[0.04] select-none pointer-events-none">
        {number}
      </span>
    </motion.div>
  );
};


export default function PerformanceCostSection() {
  return (
    <section id="infra" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Atmospheric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Static Orbs for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-code text-xs font-black text-primary tracking-[0.4em] uppercase mb-6 block">
              Protocolo de Engenharia
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tightest text-foreground leading-none mb-8">
              Engenharia Invisível.<br />
              <span className="text-primary">Resultados Reais.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Nossa infraestrutura opera com precisão absoluta nos bastidores para que sua única métrica seja o crescimento exponencial.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, index) => (
              <PillarCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
