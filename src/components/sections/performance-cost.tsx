
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
    mobileHeight: "min-h-[450px]",
  },
  {
    title: "Luxe Estate",
    category: "Real Estate Portal",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-estate')?.imageUrl || "https://picsum.photos/seed/estate/800/600",
    hint: "luxury real estate",
    span: "md:col-span-4 md:row-span-1",
    mobileHeight: "min-h-[280px]",
  },
  {
    title: "SaaS Matrix",
    category: "Cloud Solution",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-saas')?.imageUrl || "https://picsum.photos/seed/saas/800/600",
    hint: "saas software",
    span: "md:col-span-4 md:row-span-1",
    mobileHeight: "min-h-[280px]",
  },
  {
    title: "E-comm Premium",
    category: "High Conversion Shop",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-shop')?.imageUrl || "https://picsum.photos/seed/shop/800/600",
    hint: "modern shop",
    span: "md:col-span-6 md:row-span-1",
    mobileHeight: "min-h-[320px]",
  },
  {
    title: "AI Analytics",
    category: "Data Visualization",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-ai')?.imageUrl || "https://picsum.photos/seed/ai/800/600",
    hint: "ai interface",
    span: "md:col-span-6 md:row-span-1",
    mobileHeight: "min-h-[320px]",
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={cn(
      "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-neutral-900/40 transition-all duration-700 hover:border-primary/40",
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
        className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
        data-ai-hint={project.hint}
      />
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-700" />
    </div>

    <div className="relative z-10 p-8 md:p-12">
      <div className="flex items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="font-code text-[10px] font-black tracking-[0.3em] text-primary uppercase block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tightest">
            {project.title}
          </h3>
        </div>
        <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 border border-white/20 backdrop-blur-md">
          <ArrowUpRight className="w-7 h-7 text-white" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function PerformanceCostSection() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-code text-[11px] font-black text-primary tracking-[0.5em] uppercase mb-6 block">
              Protocolo de Engenharia
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tightest leading-[0.9] text-foreground mb-12">
              Engenharia Invisível. <br />
              <span className="text-primary">Resultados Reais.</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Interfaces de alta fidelidade projetadas para dominar o mercado. Performance absoluta, design premium e conversão em cada pixel.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-stretch">
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
