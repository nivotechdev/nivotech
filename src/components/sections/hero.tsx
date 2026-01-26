"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1
      }
    }
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full flex items-center justify-center md:justify-start text-center md:text-left overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          fetchPriority="high"
          poster=""
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/Imagens/Animate_this_minimalist_202601232110_qwf0n.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-background/30 z-10 backdrop-blur-sm" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-20"
      >
        <motion.h1
          variants={childVariants}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-none text-foreground"
        >
          Engenharia Digital
          <br />
          <span className="text-primary">Para Resultados Reais.</span>
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto md:mx-0"
        >
          Criamos ecossistemas digitais de alta performance que cativam, convertem e impulsionam o crescimento do seu negócio.
        </motion.p>
        <motion.div
          variants={childVariants}
          className="mt-10"
        >
          <Button asChild size="lg" className="h-12 rounded-xl text-lg font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-105">
            <Link href="#contact">Quero um orçamento</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
