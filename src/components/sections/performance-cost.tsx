
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
  },
  {
    title: "Luxe Estate",
    category: "Real Estate Portal",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-estate')?.imageUrl || "https://picsum.photos/seed/estate/800/600",
    hint: "luxury real estate",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "SaaS Matrix",
    category: "Cloud Solution",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-saas')?.imageUrl || "https://picsum.photos/seed/saas/800/600",
    hint: "saas software",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "E-comm Premium",
    category: "High Conversion Shop",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-shop')?.imageUrl || "https://picsum.photos/seed/shop/800/600",
    hint: "modern shop",
    span: "md:col-span-6 md:row-span-1",
  },
  {
    title: "AI Analytics",
    category: "Data Visualization",
    image: PlaceHolderImages.find(img => img.id === 'portfolio-ai')?.imageUrl || "https://picsum.photos/seed/ai/800/600",
    hint: "ai interface",
    span: "md:col-span-6 md:row-span-1",
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
      project.span
    )}
  >
    <div className="absolute inset-0 z-0">
      <Image 
        src={project.image}
        alt={project.title}
        fill
        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        data-ai-hint={project.hint}
      />
      {/* Dynamic Overlay - No Blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
    </div>

    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
      <div className="flex items-end justify-between gap-4">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
            {project.title}
          </h3>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 border border-white/20">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function PerformanceCostSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Clean background technical pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-code text-[11px] font-black text-primary tracking-[0.4em] uppercase mb-4 block">
              Protocolo de Engenharia
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tightest leading-[0.95] text-foreground">
              Engenharia Invisível. <br />
              <span className="text-primary">Resultados Reais.</span>
            </h2>
            <div className="mt-8 h-px w-24 bg-primary" />
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Interfaces projetadas sob medida para converter visitantes em clientes fiéis. Performance absoluta e design premium em cada pixel.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch auto-rows-[300px] md:auto-rows-[450px]">
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
