"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppButton } from '../whatsapp-button';
import { Zap, ShieldCheck, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const CredibilityBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
    <Icon className="w-3.5 h-3.5 text-primary" />
    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{text}</span>
  </div>
);

export default function CtaSection() {
  return (
    <section 
      id="contact"
      className="relative w-full py-24 md:py-40 bg-[#050505] overflow-hidden"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Glow Orbs (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-4"
          >
            <div className="h-px w-8 bg-primary/50" />
            <span className="font-code text-[10px] md:text-xs font-black text-primary tracking-[0.4em] uppercase">
              Protocolo de Ativação
            </span>
            <div className="h-px w-8 bg-primary/50" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tightest leading-[1] md:leading-[0.9] text-white max-w-5xl"
          >
            Pronto para <span className="text-primary">Dominar</span> <br />
            seu Mercado?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-base md:text-xl text-white/50 leading-relaxed font-medium"
          >
            Sua presença digital merece engenharia de alta fidelidade. Vamos construir juntos o próximo nível do seu negócio.
          </motion.p>
          
          {/* CTA Button Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 w-full max-w-sm"
          >
             <WhatsAppButton />
          </motion.div>

          {/* Credibility Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            <CredibilityBadge icon={Zap} text="Alta Performance" />
            <CredibilityBadge icon={ShieldCheck} text="Segurança Ativa" />
            <CredibilityBadge icon={Globe} text="Escala Global" />
          </motion.div>

          {/* Bottom Certified Text */}
          <div className="mt-20 opacity-20">
            <p className="font-code text-[9px] md:text-[10px] tracking-[0.6em] text-white uppercase">
              Nivotech High Performance Hub © 2026
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
