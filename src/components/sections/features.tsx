"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';
import { Maximize, Zap, Code, FileText, BarChart2 } from 'lucide-react';

const features = [
  {
    title: "Design Sob Medida",
    description: "Interfaces únicas que refletem a identidade da sua marca e focam na experiência do usuário.",
    Icon: Maximize,
  },
  {
    title: "Performance Extrema",
    description: "Otimização para garantir um site ultrarrápido, responsivo e com notas máximas no Core Web Vitals.",
    Icon: Zap,
  },
  {
    title: "Desenvolvimento de Elite",
    description: "Código robusto e escalável utilizando as tecnologias mais modernas para uma base sólida e segura.",
    Icon: Code,
  },
  {
    title: "Copywriting Persuasivo",
    description: "Textos que vendem. Criamos mensagens que conectam, convencem e convertem seu público-alvo.",
    Icon: FileText,
  },
  {
    title: "Análise e Otimização",
    description: "Monitoramos dados e realizamos testes para otimizar continuamente a taxa de conversão do seu site.",
    Icon: BarChart2,
  },
];

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType, title: string, description: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="bg-card border border-primary/10 rounded-xl p-6 shadow-soft"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export default function FeaturesSection() {
  return (
    <section id="solucao" className="relative w-full py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <SectionTitle>
            A Revelação: Engenharia de Conversão
          </SectionTitle>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Transformamos visitantes em clientes através de uma metodologia que une design, performance e psicologia do consumidor. Isso não é apenas um site, é uma máquina de resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
