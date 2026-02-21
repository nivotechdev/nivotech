"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, ZapOff } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section 
      className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-primary z-10"
    >
      {/* Background Tech Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-transparent to-primary opacity-50" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-background/10 rounded-full blur-[100px] animate-aura-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-md"
          >
            <AlertCircle className="w-4 h-4 text-background animate-pulse" />
            <span className="font-code text-[10px] md:text-xs font-bold text-background tracking-widest uppercase">
              Protocolo de Auditoria: Alerta Crítico
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-headline text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tightest leading-[1] md:leading-[0.9] text-background"
          >
            Faturamento Real ou <br />
            <span className="opacity-40">Apenas Vaidade?</span>
          </motion.h2>

          {/* Problem Body */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <p className="text-xl md:text-2xl font-extrabold text-background leading-relaxed">
                Sua presença digital gera faturamento ou apenas visualizações?
              </p>
              <p className="mt-4 text-lg text-background/70 leading-relaxed font-medium">
                A maioria dos sites são apenas vitrines estáticas que desperdiçam leads e oportunidades todos os dias. Na era da performance, cada segundo de carregamento e cada clique conta. Está na hora de parar de perder clientes e transformar sua presença digital em uma verdadeira máquina de conversão.
              </p>
            </motion.div>

            <div className="md:col-span-5 flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-2">
                  <TrendingDown className="w-6 h-6 text-background/60" />
                  <span className="font-bold text-sm text-background">Drenagem de Leads</span>
                </div>
                <div className="w-full h-1 bg-background/10 rounded-full overflow-hidden">
                  <div className="h-full bg-background/40 w-[85%]" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, delay: 0.2 }}
                className="p-6 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-2">
                  <ZapOff className="w-6 h-6 text-background/60" />
                  <span className="font-bold text-sm text-background">Ineficiência Técnica</span>
                </div>
                <div className="w-full h-1 bg-background/10 rounded-full overflow-hidden">
                  <div className="h-full bg-background/40 w-[92%]" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Protocol */}
          <div className="mt-16 opacity-20 hidden md:block">
            <p className="font-code text-[9px] md:text-[10px] tracking-widest text-background uppercase">
              Auditoria Requerida • NivoTech Systems 2026
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
