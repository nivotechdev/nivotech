
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Fintech Horizon",
    category: "Banking & Dashboard",
    image: "https://picsum.photos/seed/fintech/800/600",
    hint: "fintech dashboard",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Luxe Estate",
    category: "Real Estate Portal",
    image: "https://picsum.photos/seed/estate/600/400",
    hint: "luxury website",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "SaaS Matrix",
    category: "Cloud Solution",
    image: "https://picsum.photos/seed/saas/600/400",
    hint: "saas platform",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "E-comm Premium",
    category: "High Conversion Shop",
    image: "https://picsum.photos/seed/shop/600/400",
    hint: "modern shop",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "AI Analytics",
    category: "Data Visualization",
    image: "https://picsum.photos/seed/data/600/400",
    hint: "data chart",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Health Pulse",
    category: "HealthTech App",
    image: "https://picsum.photos/seed/health/600/400",
    hint: "health app",
    span: "md:col-span-4 md:row-span-1",
  }
];

export default function PerformanceCostSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Grid - Clean & Minimal */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 max-w-4xl">
          <span className="font-code text-[11px] font-black text-primary tracking-[0.4em] uppercase mb-4 block">
            Protocolo de Engenharia
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tightest leading-tight text-foreground">
            Nosso Portfólio de <br />
            <span className="text-primary">Elite Digital.</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Projetos que unem estética premium à performance absoluta. Transformamos visões em ativos digitais de alta conversão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-primary/5 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-soft",
                project.span
              )}
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-none">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
