
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AlertCircle, TrendingDown, ZapOff } from 'lucide-react';

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Captura o progresso do scroll especificamente dentro desta seção
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Mapeia o progresso do scroll para animações de entrada e saída
  // O conteúdo surge de baixo (y: 100 -> 0) e ganha opacidade
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[150vh] md:h-[200vh] bg-primary"
    >
      {/* Container Sticky que mantém o conteúdo fixo enquanto o usuário scrolla os 200vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Elements - Fixos no container sticky */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-transparent to-primary opacity-50" />
        </div>

        {/* Decorative Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-background/10 rounded-full blur-[100px] animate-aura-pulse" />
        
        <motion.div 
          style={{ 
            y: contentY, 
            opacity: contentOpacity,
            scale: scale
          }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            
            {/* Status Badge */}
            <div className="mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-md">
              <AlertCircle className="w-4 h-4 text-background animate-pulse" />
              <span className="font-code text-[10px] md:text-xs font-black text-background tracking-[0.3em] uppercase">
                Diagnóstico de Performance: Alerta Crítico
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tightest leading-[1] md:leading-[0.9] text-background">
              Faturamento Real ou <br />
              <span className="opacity-40">Apenas Vaidade?</span>
            </h2>

            {/* Problem Body */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              <div className="md:col-span-7">
                <p className="text-xl md:text-2xl font-bold text-background leading-relaxed">
                  Sua presença digital gera faturamento ou apenas visualizações?
                </p>
                <p className="mt-4 text-lg text-background/70 leading-relaxed font-medium">
                  A maioria dos sites são apenas vitrines estáticas que desperdiçam leads e oportunidades todos os dias. Na era da performance, cada segundo de carregamento e cada clique conta. Está na hora de parar de perder clientes e transformar sua presença digital em uma verdadeira máquina de conversão.
                </p>
              </div>

              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-2">
                    <TrendingDown className="w-6 h-6 text-background/60" />
                    <span className="font-black text-sm text-background">Drenagem de Leads</span>
                  </div>
                  <div className="w-full h-1 bg-background/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-background/40" 
                    />
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-2">
                    <ZapOff className="w-6 h-6 text-background/60" />
                    <span className="font-black text-sm text-background">Ineficiência Técnica</span>
                  </div>
                  <div className="w-full h-1 bg-background/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full bg-background/40" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Protocol */}
            <div className="mt-20 opacity-20">
              <p className="font-code text-[9px] md:text-[10px] tracking-[0.5em] text-background uppercase">
                Protocolo de Auditoria Requerido • NivoTech Systems 2026
              </p>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
