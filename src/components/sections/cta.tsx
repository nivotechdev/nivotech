"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppButton } from '../whatsapp-button';
import { Zap, ShieldCheck, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const CredibilityBadge = ({ icon: Icon, text, delay }: { icon: any, text: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    style={{ willChange: 'transform, opacity' }}
    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 md:backdrop-blur-sm"
  >
    <Icon className="w-3.5 h-3.5 text-primary" />
    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{text}</span>
  </motion.div>
);

export default function CtaSection() {
  return (
    <section 
      id="contact"
      className="relative w-full py-24 md:py-40 bg-secondary overflow-hidden"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50 hidden md:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
            className="mb-8 inline-flex items-center gap-4"
          >
            <div className="h-px w-8 bg-primary/30" />
            <span className="font-code text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase">
              Protocolo de Ativação
            </span>
            <div className="h-px w-8 bg-primary/30" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
            className="font-headline text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tightest leading-[1] md:leading-[0.9] text-foreground max-w-5xl"
          >
            Pronto para <span className="text-primary">Dominar</span> <br />
            seu Mercado?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ willChange: 'transform, opacity' }}
            className="mt-8 max-w-2xl text-base md:text-xl text-muted-foreground leading-relaxed font-medium"
          >
            Sua presença digital merece engenharia de alta fidelidade. Vamos construir juntos o próximo nível do seu negócio.
          </motion.p>
          
          {/* CTA Button Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ willChange: 'transform, opacity' }}
            className="mt-12 w-full max-w-sm"
          >
             <WhatsAppButton />
          </motion.div>

          {/* Credibility Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <CredibilityBadge icon={Zap} text="Alta Performance" delay={0.4} />
            <CredibilityBadge icon={ShieldCheck} text="Segurança Ativa" delay={0.5} />
            <CredibilityBadge icon={Globe} text="Escala Global" delay={0.6} />
          </div>

          {/* Bottom Certified Text */}
          <div className="mt-20 opacity-30">
            <p className="font-code text-[9px] md:text-[10px] tracking-widest text-foreground uppercase">
              Nivotech High Performance Hub © 2026
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
