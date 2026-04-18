import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteContent.seo.pricing.title,
  description: siteContent.seo.pricing.description,
};

export default function PricingPage() {
  const { pricingPage, brand } = siteContent;

  return (
    <>
      <PageHero
        badge={brand.name}
        title={pricingPage.hero.title}
        description={pricingPage.hero.description}
      >
        <p className="max-w-2xl text-sm leading-7 text-slate-500">{pricingPage.intro}</p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-8xl space-y-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPage.plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.04}>
                <Card className={cn("h-full", index === 1 && "border-brand-sky/40 bg-white")}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-3xl font-semibold text-brand-navy">{plan.priceRange}</div>
                    <CardDescription>{plan.description}</CardDescription>
                    <p className="text-sm leading-6 text-brand-navy">{plan.bestFor}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm leading-6 text-slate-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Card>
              <CardHeader>
                <CardTitle>{pricingPage.notesTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm leading-7 text-slate-600">
                  {pricingPage.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPage.faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <Card className="h-full bg-white/85">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <CardDescription>{faq.answer}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
              {pricingPage.ctaLabel}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
