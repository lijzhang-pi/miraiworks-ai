import Link from "next/link";

import { SectionTitle } from "@/components/shared/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingPreview() {
  const { pricingPreview } = siteContent.home;

  return (
    <section className="bg-white/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-8xl space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow={pricingPreview.eyebrow}
            title={pricingPreview.title}
            description={pricingPreview.description}
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPreview.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.05}>
              <Card className={cn("h-full", index === 1 && "border-brand-sky/40 bg-white")}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-semibold text-brand-navy">{plan.priceRange}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-brand-sky to-brand-cyan" />
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/pricing"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
          >
            {siteContent.common.pricingLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
