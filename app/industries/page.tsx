import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";
import type { IconName } from "@/lib/icon-map";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteContent.seo.industries.title,
  description: siteContent.seo.industries.description,
};

export default function IndustriesPage() {
  const { industriesPage, brand } = siteContent;

  return (
    <>
      <PageHero
        badge={brand.name}
        title={industriesPage.hero.title}
        description={industriesPage.hero.description}
      >
        <p className="max-w-2xl text-sm leading-7 text-slate-500">{industriesPage.intro}</p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-8xl space-y-10">
          <div className="grid gap-5 lg:grid-cols-2">
            {industriesPage.sectors.map((sector, index) => {
              const Icon = iconMap[sector.icon as IconName] ?? iconMap.Building2;

              return (
                <Reveal key={sector.title} delay={index * 0.04}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{sector.title}</CardTitle>
                      <CardDescription>{sector.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="space-y-2">
                        {sector.pains.map((pain) => (
                          <div key={pain} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                            {pain}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sector.support.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-brand-line bg-white px-3 py-1 text-xs font-medium text-brand-navy"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle>{industriesPage.closingTitle}</CardTitle>
                <CardDescription>{industriesPage.closingDescription}</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>

          <Reveal>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
              {industriesPage.ctaLabel}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
