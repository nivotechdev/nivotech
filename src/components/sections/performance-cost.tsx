
"use client";

import React from 'react';
import { Zap, Shield, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    icon: Zap,
    title: "Velocidade",
    description: "Infraestrutura de latência zero. Otimizamos cada milissegundo do Core Web Vitals para garantir que seu site carregue instantaneamente, eliminando a rejeição.",
    label: "PROTOCOLO DE RESPOSTA",
    highlight: false
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Arquitetura blindada com criptografia de ponta a ponta. Implementamos camadas defensivas ativas que protegem a integridade dos seus dados 24h por dia.",
    label: "DEFESA ATIVA",
    highlight: true
  },
  {
    icon: TrendingUp,
    title: "Estabilidade",
    description: "Sistemas resilientes com escalabilidade automática. Sua presença online permanece inabalável, suportando picos extremos de tráfego global.",
    label: "ESCALABILIDADE CORE",
    highlight: false
  }
];

export default function PerformanceCostSection() {
  return (
    <section id="infra" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle Grid Background - Static & Light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 max-w-4xl">
          <span className="font-code text-[11px] font-black text-primary tracking-[0.4em] uppercase mb-4 block">
            Protocolo de Engenharia
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tightest leading-tight text-foreground">
            Engenharia Invisível.<br />
            <span className="text-primary">Resultados Reais.</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Nossa infraestrutura opera com precisão absoluta nos bastidores para que sua única métrica seja o crescimento exponencial do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pillars.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col p-10 md:p-12 rounded-[16px] border transition-all duration-300",
                item.highlight 
                  ? "bg-secondary/50 border-primary/20 shadow-soft z-10 lg:-translate-y-4" 
                  : "bg-card border-border shadow-sm"
              )}
            >
              <div className="mb-10">
                <div className={cn(
                  "w-14 h-14 flex items-center justify-center rounded-xl",
                  item.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <item.icon className="w-7 h-7" />
                </div>
              </div>
              
              <div className="flex-grow space-y-4">
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase block">
                  {item.label}
                </span>
                <h3 className="text-3xl font-extrabold text-foreground leading-none">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-left">
                  {item.description}
                </p>
              </div>

              {/* Static Watermark Number */}
              <div className="mt-12 flex justify-end">
                <span className="font-code text-4xl font-black text-primary/5 select-none pointer-events-none">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
