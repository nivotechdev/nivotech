"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../ui/section-title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';

// A simple component for the browser frame mockup
const BrowserMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-2xl border border-primary/10 bg-background/50 shadow-[0_30px_60px_rgba(108,100,251,0.15)] backdrop-blur-sm">
    <div className="flex items-center gap-1.5 p-3 border-b border-primary/10">
      <span className="w-3 h-3 rounded-full bg-muted/50"></span>
      <span className="w-3 h-3 rounded-full bg-muted/50"></span>
      <span className="w-3 h-3 rounded-full bg-muted/50"></span>
    </div>
    <div className="aspect-[16/10] overflow-hidden rounded-b-2xl">
      {children}
    </div>
  </div>
);


export default function ShowcaseSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section id="cases" ref={targetRef} className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Coluna 1: Texto e CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <SectionTitle className="text-center lg:text-left">
              Sua Visão, Nossa Engenharia: Design que Converte em Vendas
            </SectionTitle>

            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
              Não criamos apenas sites. Projetamos ecossistemas digitais que funcionam como uma extensão da sua marca, construindo autoridade, desejo e, acima de tudo, resultados mensuráveis.
            </p>
            
            <Button asChild className="mt-10 h-auto whitespace-normal rounded-xl px-6 py-4 text-sm font-semibold bg-accent hover:bg-accent/90 text-primary-foreground sm:text-base">
              <Link href="#contact">Quero um Design assim para minha Empresa <ArrowRight /></Link>
            </Button>
          </motion.div>

          {/* Coluna 2: Visual com Efeito de Camadas e Parallax */}
          <div className="relative min-h-[450px] lg:min-h-[550px] flex items-center justify-center">
            
            {/* Imagem de trás (Mobile) */}
            <motion.div
              style={{ y }}
              className="absolute -bottom-10 right-0 lg:-right-10 w-[45%] h-full z-0"
            >
              <div className="relative h-full w-full rounded-[20px] shadow-[0_30px_60px_rgba(108,100,251,0.15)] border border-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop"
                  alt="Dashboard de analytics mostrando crescimento"
                  fill
                  data-ai-hint="analytics dashboard"
                  className="object-cover rounded-[20px]"
                />
              </div>
            </motion.div>

            {/* Imagem da frente (Desktop) */}
            <motion.div 
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-[90%] lg:w-full z-10"
            >
              <BrowserMockup>
                <Image
                  src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/img2/Captura%20de%20tela%202026-01-23%20223503.png"
                  alt="Landing page de alta conversão em um mockup de navegador"
                  fill
                  data-ai-hint="website dashboard"
                  className="object-cover"
                />
              </BrowserMockup>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
