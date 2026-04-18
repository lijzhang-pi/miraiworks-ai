import type { Metadata } from "next";

import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustrySection } from "@/components/sections/IndustrySection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { siteContent } from "@/lib/constants";

export const metadata: Metadata = {
  title: siteContent.seo.home.title,
  description: siteContent.seo.home.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServiceSection />
      <IndustrySection />
      <ProcessSection />
      <PricingPreview />
      <CTASection />
    </>
  );
}
