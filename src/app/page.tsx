
"use client";

import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import ProblemSection from '@/components/sections/problem';
import PerformanceCostSection from '@/components/sections/performance-cost';
import ShowcaseSection from '@/components/sections/showcase';
import FaqSection from '@/components/sections/faq';
import CtaSection from '@/components/sections/cta';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="relative bg-background">
        {/* Camada 1: Hero (Flui normalmente) */}
        <div className="relative z-20 bg-background">
          <HeroSection />
        </div>

        {/* Camada 0: Sticky Problem Section (Fica presa ao fundo) */}
        <ProblemSection />

        {/* Camada 2: Restante do Site (Cobre a seção fixa ao subir) */}
        <div className="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
          <ShowcaseSection />
          <PerformanceCostSection />
          <FaqSection />
          <CtaSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
