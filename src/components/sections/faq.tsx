"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from '../ui/section-title';

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
    <section id="faq" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionTitle>A Inevitabilidade da Decisão</SectionTitle>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Eliminando as últimas barreiras entre sua visão e a realidade de um negócio digital de sucesso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-primary/10 rounded-xl px-6 shadow-soft">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
