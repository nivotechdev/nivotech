'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PortfolioVortex = dynamic(() => import('./portfolio-vortex'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-secondary/10 animate-pulse rounded-3xl" />
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function ShowcaseSection() {
  return (
    <section 
      id="cases" 
      className="relative z-10 w-full py-24 md:py-32 bg-background overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="text-center lg:text-left relative z-20"
          >
            <motion.div variants={childVariants} style={{ willChange: 'transform, opacity' }} className="mb-6 inline-block">
              <span className="font-code text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                Showcase Premium
              </span>
            </motion.div>
            
            <SectionTitle 
              as={motion.h2} // Renderiza SectionTitle como motion.h2
              className="text-center lg:text-left"
              variants={childVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              Design que Eleva sua Marca ao <span className="text-primary">Próximo Nível</span>
            </SectionTitle>

            <motion.p 
              variants={childVariants}
              style={{ willChange: 'transform, opacity' }}
              className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed"
            >
              Não projetamos apenas interfaces. Criamos esculturas digitais interativas que constroem autoridade, desejo e resultados mensuráveis para o seu negócio.
            </motion.p>
            
            <motion.div 
              variants={childVariants}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-xl px-8 py-6 text-base font-semibold bg-primary hover:bg-accent text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300">
                <Link href="#contact" className="flex items-center gap-2">
                  Quero um Orçamento <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
            className="relative z-10 min-h-[500px] lg:min-h-[700px] flex items-center justify-center"
          >
            <PortfolioVortex />
          </motion.div>
        </div>
      </div>
      
      {/* Heavy effect hidden on mobile - This is already a good practice */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none hidden lg:block" />
    </section>
  );
}
