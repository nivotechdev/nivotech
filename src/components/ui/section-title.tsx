"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
    const ref = useRef<HTMLHeadingElement>(null);
    // Trigger animation every time it comes into view
    const isInView = useInView(ref, { amount: 0.2, once: false });

    const containerVariants = {
        hidden: { opacity: 1 }, // Parent is visible to allow stagger
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // "Luxurious deceleration"
            },
        },
    };

    // This function takes children and wraps words and other elements for animation
    const animatedChildren = React.Children.toArray(children).flatMap((child, childIndex) => {
        if (typeof child === 'string') {
            // Split string into words and wrap each for animation
            return child.split(' ').map((word, wordIndex) => {
                if (word === '') return null; // Avoid creating empty spans for multiple spaces
                const key = `${word}-${wordIndex}-${childIndex}`;
                return (
                    <motion.span
                        key={key}
                        variants={wordVariants}
                        className="inline-block mr-3"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {word}
                    </motion.span>
                );
            }).filter(Boolean); // Filter out any nulls
        }
        // If child is another React element (e.g., a <span> with custom color), wrap it directly
        return (
            <motion.span
                key={childIndex}
                variants={wordVariants}
                className="inline-block"
                style={{ willChange: 'transform, opacity' }}
            >
                {child}
            </motion.span>
        );
    });

    return (
        <motion.h2
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ backfaceVisibility: 'hidden' }}
            className={cn(
                "font-headline text-4xl md:text-6xl font-bold tracking-tight text-center leading-tight pb-4",
                className
            )}
        >
            {animatedChildren}
        </motion.h2>
    );
};
