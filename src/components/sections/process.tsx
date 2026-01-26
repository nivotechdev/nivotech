"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Code, Cog } from "lucide-react";
import React from "react";
import { SectionTitle } from "@/components/ui/section-title";

const processSteps = [
  {
    icon: Search,
    title: "Análise & Estratégia",
    description: "Mergulhamos no seu negócio para entender seus objetivos, definindo a estratégia digital e a arquitetura do projeto.",
  },
  {
    icon: Pencil,
    title: "Design Premium",
    description: "Criamos um design visualmente impressionante e focado na experiência do usuário para encantar, engajar e converter.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Elite",
    description: "Utilizamos as tecnologias mais modernas para construir um site robusto, ultrarrápido e totalmente responsivo.",
  },
  {
    icon: Cog,
    title: "Otimização Contínua",
    description: "Lançamos seu projeto e continuamos a otimizar para garantir performance máxima, segurança e crescimento contínuo.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <SectionTitle>
            Nosso Processo para o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
              Sucesso
            </span>
          </SectionTitle>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seguimos um processo de quatro etapas para transformar sua visão em uma realidade digital de alto impacto.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto space-y-16">
          {/* Vertical Energy Axis */}
          <div 
            aria-hidden="true" 
            className="absolute left-6 md:left-8 top-0 h-full w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"
          ></div>
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-20 md:pl-24"
            >
              {/* Node (Icon) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card/60 backdrop-blur-md border border-primary/30 md:h-16 md:w-16">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse blur-md" />
                  <step.icon className="z-10 h-6 w-6 text-primary md:h-8 md:w-8" />
                </div>
              </div>
              
              {/* Information Module */}
              <div className="relative flex min-h-[6rem] items-center">
                <div className="py-4 pl-4 md:pl-8">
                  <span className="font-code text-xs font-bold text-primary/80 tracking-widest uppercase">
                    PASSO 0{index + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-foreground md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
