"use client";

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';
import React from 'react';
import { Zap, Shield, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: "Velocidade",
    description: "Páginas que carregam antes mesmo do clique."
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Privacidade e proteção como prioridade absoluta."
  },
  {
    icon: TrendingUp,
    title: "Estabilidade",
    description: "Feito para aguentar o seu sucesso, não importa o tamanho."
  }
];

const PillarCard = ({ icon: Icon, title, description, index }: (typeof pillars)[0] & { index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-card p-8 rounded-3xl shadow-apple-soft hover:shadow-apple-hover transition-all duration-300 ease-in-out text-center border border-primary/10 hover:border-primary/30"
    >
      <div className="mb-6 inline-block">
        <Icon className="w-10 h-10 text-primary mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-3" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};


export default function PerformanceCostSection() {
  return (
    <section id="infra" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <SectionTitle>Engenharia invisível. Resultados reais.</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nossa infraestrutura é projetada para ser imperceptível: tudo simplesmente funciona, permitindo que você foque no que realmente importa — seu negócio.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <PillarCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
