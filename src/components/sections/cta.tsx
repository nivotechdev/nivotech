"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppButton } from '../whatsapp-button';
import { SectionTitle } from '../ui/section-title';

export default function CtaSection() {
  return (
    <section 
      id="contact"
      className="relative w-full py-24 md:py-32 bg-secondary overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-aura-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTitle>Pronto para Dominar seu Mercado?</SectionTitle>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-center"
        >
          Sua presença digital merece uma engenharia de resultados. Vamos construir juntos o próximo nível do seu negócio.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 w-full max-w-sm"
        >
           <WhatsAppButton />
        </motion.div>
        
      </div>
    </section>
  );
}
