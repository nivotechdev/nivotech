'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.5
      }
    }
  };

  return (
    // 1. Fixação do Background e 2. Sistema de Camadas
    <section 
      id="hero" 
      className="sticky top-0 w-full h-screen flex items-center justify-center md:justify-start text-center md:text-left overflow-hidden z-0"
    >
      {/* Container do vídeo sem parallax */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/nivotech/Animate_this_minimalist_202601232110_qwf0n.mp4"
          // Poster para evitar um frame vazio durante o carregamento
          poster="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3C/svg%3E"
        />
        {/* Gradients de sobreposição para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-background/60 md:hidden z-10" />
        <div className="absolute inset-0 bg-background/30 z-10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16"
      >
        <motion.h1
          variants={childVariants}
          style={{ willChange: 'transform, opacity' }}
          className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tightest leading-[1.1] md:leading-[0.9] text-foreground"
        >
          Engenharia Digital
          <br />
          <span className="text-primary">Para Resultados Reais.</span>
        </motion.h1>
        <motion.p
          variants={childVariants}
          style={{ willChange: 'transform, opacity' }}
          className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto md:mx-0 font-medium"
        >
          Criamos ecossistemas digitais de alta performance que cativam, convertem e impulsionam o crescimento do seu negócio.
        </motion.p>
        <motion.div
          variants={childVariants}
          style={{ willChange: 'transform, opacity' }}
          className="mt-8 md:mt-10"
        >
          <Button asChild size="lg" className="h-12 md:h-14 px-8 rounded-xl text-base md:text-lg font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-105 active:scale-95">
            <Link href="#contact">Quero um orçamento</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
