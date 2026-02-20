
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    title: "Fintech Horizon",
    category: "Banking & Dashboard",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-fintech')?.imageUrl || "https://picsum.photos/seed/fintech/1200/800",
    hint: "modern fintech",
    span: "md:col-span-8 md:row-span-2",
    mobileHeight: "min-h-[350px] md:min-h-[450px]",
    priority: true,
  },
  {
    title: "Luxe Estate",
    category: "Real Estate Portal",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-estate')?.imageUrl || "https://picsum.photos/seed/estate/800/600",
    hint: "luxury real estate",
    span: "md:col-span-4 md:row-span-1",
    mobileHeight: "min-h-[280px]",
    priority: false,
  },
  {
    title: "SaaS Matrix",
    category: "Cloud Solution",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-saas')?.imageUrl || "https://picsum.photos/seed/saas/800/600",
    hint: "saas software",
    span: "md:col-span-4 md:row-span-1",
    mobileHeight: "min-h-[280px]",
    priority: false,
  },
  {
    title: "E-comm Premium",
    category: "High Conversion Shop",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-shop')?.imageUrl || "https://picsum.photos/seed/shop/800/600",
    hint: "modern shop",
    span: "md:col-span-6 md:row-span-1",
    mobileHeight: "min-h-[300px] md:min-h-[320px]",
    priority: false,
  },
  {
    title: "AI Analytics",
    category: "Data Visualization",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-ai')?.imageUrl || "https://picsum.photos/seed/ai/800/600",
    hint: "ai interface",
    span: "md:col-span-6 md:row-span-1",
    mobileHeight: "min-h-[300px] md:min-h-[320px]",
    priority: false,
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    style={{ willChange: 'transform, opacity' }}
    className={cn(
      "group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-primary/10 bg-neutral-900/40 transition-all duration-500 hover:border-primary/50",
      project.span,
      project.mobileHeight,
      "flex flex-col justify-end"
    )}
  >
    <div className="absolute inset-0 z-0">
      <Image 
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={project.priority}
        className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        data-ai-hint={project.hint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
    </div>

    <div className="relative z-10 p-6 sm:p-10">
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-1 sm:space-y-2">
          <span className="font-code text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-primary uppercase block opacity-80 sm:opacity-0 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-500">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white leading-none tracking-tightest">
            {project.title}
          </h3>
        </div>
        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center sm:opacity-0 sm:scale-75 sm:group-hover:opacity-100 sm:group-hover:scale-100 transition-all duration-300 border border-primary/30 backdrop-blur-md">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function PerformanceCostSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 md:mb-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-code text-[10px] sm:text-[11px] font-black text-primary tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 block">
              Protocolo de Engenharia
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tightest leading-[1] md:leading-[0.9] text-foreground mb-6 sm:mb-8">
              Engenharia Invisível. <br />
              <span className="text-primary">Resultados Reais.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Interfaces de alta fidelidade projetadas para dominar o mercado. Performance absoluta, design premium e conversão em cada pixel.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
