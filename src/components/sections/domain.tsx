"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '../ui/glow-card';
import { ShieldCheck, Scaling, Lock, HeartPulse } from 'lucide-react';

const domainFeatures = [
  {
    icon: ShieldCheck,
    title: "Infraestrutura Robusta",
    description: "Operação estável garantida em servidores de alta disponibilidade global.",
    metric: "99.9% UPTIME",
  },
  {
    icon: Scaling,
    title: "Escalabilidade Ilimitada",
    description: "Sistemas projetados para crescer com sua demanda, sem gargalos.",
    metric: "AUTO-SCALING",
  },
  {
    icon: Lock,
    title: "Segurança de Ponta",
    description: "Múltiplas camadas de proteção para seus dados e usuários.",
    metric: "WAF & DDOS",
  },
  {
    icon: HeartPulse,
    title: "Monitoramento Ativo 24/7",
    description: "Vigilância constante para antecipar e neutralizar qualquer anomalia.",
    metric: "REAL-TIME",
  }
];

const FeatureCard = ({ icon: Icon, title, description, metric }: { icon: React.ElementType; title: string; description: string; metric: string }) => (
  <GlowCard className="p-6 h-full">
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between gap-4 mb-4">
        <Icon className="w-8 h-8 text-primary shrink-0" />
        <span className="font-code text-xs uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded text-right">{metric}</span>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{description}</p>
    </div>
  </GlowCard>
);


export default function DomainSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.section
      id="domain"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {domainFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                metric={feature.metric}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            DOMÍNIO DIGITAL E ESCALABILIDADE
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Construímos ecossistemas digitais que não apenas impressionam, mas operam com a máxima eficiência. Nossas soluções são projetadas para escalar, garantindo que sua performance cresça junto com o seu sucesso.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
