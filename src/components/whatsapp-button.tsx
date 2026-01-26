"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5554994731661?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20um%20site%20com%20a%20NivoTech.";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button
        asChild
        className={cn(
          "w-full rounded-lg text-primary-foreground font-bold uppercase tracking-widest transition-all duration-300",
          "shadow-lg shadow-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)]"
        )}
        size="lg"
      >
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-3">
          {isHovered ? 'Iniciar Protocolo de Orçamento' : 'Quero um Orçamento'}
          <motion.div 
            animate={{ x: isHovered ? 5 : 0 }} 
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </Link>
      </Button>
    </motion.div>
  );
}
