"use client";

import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import ProblemSection from '@/components/sections/problem';
import FeaturesSection from '@/components/sections/features';
import PerformanceCostSection from '@/components/sections/performance-cost';
import ShowcaseSection from '@/components/sections/showcase';
import FaqSection from '@/components/sections/faq';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/layout/footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <PerformanceCostSection />
        <ShowcaseSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
