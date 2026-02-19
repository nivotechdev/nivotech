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
    description: "Páginas que carregam antes mesmo do clique, otimizadas para Core Web Vitals.",
    number: "01",
    className: "lg:col-span-3 lg:row-span-2"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Privacidade e proteção como prioridade absoluta em cada linha de código.",
    number: "02",
    className: "lg:col-span-2"
  },
  {
    icon: TrendingUp,
    title: "Estabilidade",
    description: "Feito para aguentar o seu sucesso, com escalabilidade automática.",
    number: "03",
    className: "lg:col-span-2"
  }
];

const PillarCard = ({ icon: Icon, title, description, index, number, className }: (typeof pillars)[0] & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden",
        className
      )}
    >
      {/* Watermark Number */}
      <span className="absolute top-4 right-6 font-code text-6xl font-bold text-primary/5 select-none transition-colors group-hover:text-primary/10">
        {number}
      </span>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 inline-block w-fit">
          <div className="p-3 bg-secondary rounded-2xl group-hover:bg-primary/10 transition-colors duration-500">
            <Icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>
        
        <h3 className="text-2xl font-extrabold text-foreground mb-3 tracking-tightest">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};


export default function PerformanceCostSection() {
  return (
    <section id="infra" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4">
             <span className="font-code text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                Protocolo de Engenharia
              </span>
          </div>
          <SectionTitle>Engenharia invisível. <span className="text-primary">Resultados reais.</span></SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nossa infraestrutura é projetada para ser imperceptível: tudo simplesmente funciona, permitindo que você foque na escala do seu negócio.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          {pillars.map((item, index) => (
            <PillarCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
