"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 w-1 bg-primary origin-top z-50"
      style={{ scaleY: scrollYProgress }}
    />
  );
}
