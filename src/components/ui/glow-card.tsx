"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, type HTMLAttributes, type FC } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlowCard: FC<GlowCardProps> = ({ children, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: "-100%", y: "-100%" });

  // For 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-10, 10]), springConfig);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // For glow
    setMousePosition({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` });

    // For 3D tilt
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: "-100%", y: "-100%" });
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ y: { duration: 0.3, ease: "easeInOut" } }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY
      }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card/60 transition-all duration-300 shadow-soft",
        className
      )}
      {...props}
    >
      <div style={{ transform: "translateZ(30px)" }} className="transition-transform duration-300 group-hover:scale-105 h-full w-full">
        {children}
      </div>
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x} ${mousePosition.y}, hsl(var(--accent) / 0.15), transparent 80%)`,
        }}
      />
    </motion.div>
  );
};
