"use client";

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Lazy load the Vortex component for high performance (LCP/TBT protection)
const PortfolioVortex = dynamic(() => import('./portfolio-vortex'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-secondary/20 animate-pulse rounded-3xl" />
});

export default function ShowcaseSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <section id="cases" ref={targetRef} className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Coluna 1: Texto e CTA (Fixo e Legível) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left relative z-20"
          >
            <SectionTitle className="text-center lg:text-left">
              Sua Visão, Nossa Engenharia: Design que Converte em Vendas
            </SectionTitle>

            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
              Não criamos apenas sites. Projetamos ecossistemas digitais que funcionam como uma extensão da sua marca, construindo autoridade, desejo e, acima de tudo, resultados mensuráveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <Button asChild className="h-auto whitespace-normal rounded-xl px-6 py-4 text-sm font-semibold bg-accent hover:bg-accent/90 text-primary-foreground sm:text-base shadow-lg shadow-accent/20">
                <Link href="#contact" className="flex items-center gap-2">
                  Quero um Design assim <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Coluna 2: Portfólio Vortex 3D (Substituindo a imagem estática) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <PortfolioVortex />
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}