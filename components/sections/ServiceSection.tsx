import Link from "next/link";

import { SectionTitle } from "@/components/shared/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";
import type { IconName } from "@/lib/icon-map";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function ServiceSection() {
  const { services } = siteContent.home;

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-8xl space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow={services.eyebrow}
            title={services.title}
            description={services.description}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.cards.map((service, index) => {
            const Icon = iconMap[service.icon as IconName] ?? iconMap.Sparkles;

            return (
              <Reveal key={service.title} delay={index * 0.03}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm leading-6 text-slate-600">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="rounded-3xl border border-brand-line/70 bg-white/70 p-6 shadow-soft">
          <div className="flex flex-wrap gap-3">
            {services.featureChips.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-brand-line bg-slate-50 px-4 py-2 text-sm text-slate-600"
              >
                {feature}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Card className="overflow-hidden bg-gradient-to-r from-brand-navy to-brand-ink text-white">
            <CardHeader>
              <CardTitle className="text-white">{services.aiEraHighlight.title}</CardTitle>
              <CardDescription className="text-white/80">
                {services.aiEraHighlight.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-sm leading-7 text-white/85">{services.aiEraHighlight.note}</p>
              <div className="flex flex-wrap gap-3">
                {services.aiEraHighlight.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
          >
            {siteContent.common.servicesLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
