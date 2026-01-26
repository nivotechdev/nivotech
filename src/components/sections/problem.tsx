"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';

export default function ProblemSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-primary text-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--background)/0.1)_0%,transparent_70%)]"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
      >
        <SectionTitle className="text-background">
          Seu site é um ativo ou um passivo?
        </SectionTitle>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-lg md:text-xl text-muted leading-relaxed"
        >
          Um site comum é um custo que drena seu tráfego e desperdiça oportunidades. Cada visitante que não converte é um investimento perdido. Está na hora de transformar sua presença online em um motor de crescimento.
        </motion.p>
      </motion.div>
    </section>
  );
}
