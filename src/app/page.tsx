
"use client";

import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import ProblemSection from '@/components/sections/problem';
import FeaturesSection from '@/components/sections/features';
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
      <main className="relative">
        {/* Camada Superior: Hero */}
        <div className="relative z-10">
          <HeroSection />
        </div>

        {/* Camada Inferior: Sticky Reveal Section */}
        <div className="relative z-0">
          <ProblemSection />
        </div>

        {/* Camada Superior de Cobertura: Restante do Site */}
        <div className="relative z-10">
          <FeaturesSection />
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
