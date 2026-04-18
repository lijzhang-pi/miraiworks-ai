import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { brand, home } = siteContent;

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-8xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <Badge className="bg-brand-mist text-brand-navy">{home.hero.eyebrow}</Badge>
            <div className="space-y-5">
              <h1 className="max-w-4xl whitespace-pre-line text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl lg:text-5xl">
                {home.hero.title}
              </h1>
              <p className="max-w-2xl whitespace-pre-line text-base leading-8 text-slate-600 sm:text-lg">
                {home.hero.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {brand.compactLabels.map((label) => (
              <Badge key={label} className="bg-white/80 text-slate-600">
                {label}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "w-full justify-center sm:w-auto")}
            >
              {brand.primaryCta}
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full justify-center sm:w-auto",
              )}
            >
              {brand.secondaryCta}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="relative overflow-hidden border-brand-line bg-white/85">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-sky via-brand-cyan to-brand-sky" />
            <CardContent className="space-y-5 p-6 sm:p-8">
              {home.hero.statCards.map((card, index) => (
                <div
                  key={card.label}
                  className={cn(
                    "rounded-3xl border border-brand-line/80 p-5",
                    index === 0 ? "bg-brand-navy text-white" : "bg-slate-50/80",
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-medium",
                      index === 0 ? "text-white/70" : "text-slate-500",
                    )}
                  >
                    {card.label}
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-lg font-semibold leading-7",
                      index === 0 ? "text-white" : "text-brand-navy",
                    )}
                  >
                    {card.value}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
