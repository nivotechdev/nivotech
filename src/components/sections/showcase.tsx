
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Optimized dynamic loading
const PortfolioVortex = dynamic(() => import('./portfolio-vortex'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function ShowcaseSection() {
  return (
    <section id="cases" className="relative w-full py-24 md:py-32 bg-background overflow-visible">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left relative z-20"
          >
            <div className="mb-6 inline-block">
              <span className="font-code text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                Showcase Premium
              </span>
            </div>
            
            <SectionTitle className="text-center lg:text-left">
              Design que Eleva sua Marca ao <span className="text-primary">Próximo Nível</span>
            </SectionTitle>

            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
              Não projetamos apenas interfaces. Criamos esculturas digitais interativas que constroem autoridade, desejo e resultados mensuráveis para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-xl px-8 py-6 text-base font-semibold bg-primary hover:bg-accent text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300">
                <Link href="#contact" className="flex items-center gap-2">
                  Quero um Orçamento <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="relative z-10 min-h-[500px] lg:min-h-[700px]"
          >
            <PortfolioVortex />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
