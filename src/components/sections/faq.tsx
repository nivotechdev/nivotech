"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { HelpCircle, ChevronRight } from 'lucide-react';

const faqItems = [
  {
    question: "Qual é o investimento para criar um site com a NivoTech?",
    answer: "O valor de cada projeto é personalizado. Depende da complexidade, funcionalidades e nível de design. Realizamos uma análise detalhada (briefing) para entender suas necessidades e fornecer um orçamento preciso e justo. Nosso foco é em entregar um ativo de alto valor, não apenas um site."
  },
  {
    question: "Quanto tempo leva para meu site ficar pronto?",
    answer: "Um projeto de alta performance geralmente leva de 4 a 8 semanas, dependendo da sua complexidade. Este prazo inclui etapas cruciais como análise estratégica, design de interface (UI/UX), desenvolvimento, testes rigorosos e otimizações de performance."
  },
  {
    question: "O que é 'Engenharia de Conversão'?",
    answer: "É a nossa metodologia que combina design psicológico, copywriting, performance técnica (velocidade e responsividade) e análise de dados para transformar o máximo de visitantes em clientes. Não focamos em achismos, mas em uma arquitetura projetada para gerar resultados."
  },
  {
    question: "Vocês oferecem manutenção após o lançamento?",
    answer: "Sim. Oferecemos planos de manutenção e otimização contínua para garantir que seu site permaneça seguro, atualizado e com performance máxima. Um site de alto nível é um ativo vivo que evolui com o seu negócio."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-24 md:py-40 bg-background overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Column 1: Typography & Meta */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="mb-8 inline-flex items-center gap-3">
              <div className="w-12 h-[1px] bg-primary/50" />
              <span className="font-code text-[11px] font-black text-primary tracking-[0.5em] uppercase">
                Protocolo FAQ
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tightest leading-[0.9] text-foreground mb-8">
              Eliminando a <br />
              <span className="text-primary">Incerteza.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              A transparência é o código base da nossa engenharia. Abaixo, decodificamos as dúvidas mais comuns sobre o processo NivoTech.
            </p>

            <div className="mt-12 p-6 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm hidden lg:block">
              <div className="flex items-center gap-4 text-primary">
                <HelpCircle className="w-6 h-6" />
                <span className="font-bold">Ainda com dúvidas?</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Nossa equipe técnica está pronta para um briefing personalizado 24/7.
              </p>
            </div>
          </motion.div>

          {/* Column 2: The Terminal Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className={cn(
                    "group border-none rounded-[2rem] overflow-hidden transition-all duration-500",
                    "bg-neutral-900/40 border border-white/5 hover:border-primary/30 shadow-soft"
                  )}
                >
                  <AccordionTrigger className="flex items-center gap-6 p-8 hover:no-underline text-left transition-all [&[data-state=open]]:bg-primary/5">
                    <div className="shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center bg-background group-data-[state=open]:bg-primary group-data-[state=open]:border-primary transition-all duration-500">
                      <span className="text-xs font-black text-primary group-data-[state=open]:text-white">
                        0{index + 1}
                      </span>
                    </div>
                    <span className="text-lg md:text-xl font-black text-foreground group-data-[state=open]:text-primary transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-8 pt-0 bg-primary/5 text-muted-foreground text-lg leading-relaxed border-t border-primary/10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="pt-6 pl-16">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
