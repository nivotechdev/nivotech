"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * @component SectionTitle
 * Componente de título de seção otimizado para performance e SEO.
 */
export const SectionTitle = ({ children, className }: SectionTitleProps) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { amount: 0.2, once: true });

    return (
        <motion.h2
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1]
            }}
            style={{ willChange: 'opacity' }}
            className={cn(
                "font-headline text-4xl md:text-6xl font-extrabold tracking-tightest text-center leading-[1.1] pb-4",
                className
            )}
        >
            {children}
        </motion.h2>
    );
};
