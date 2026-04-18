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
  title: siteContent.seo.services.title,
  description: siteContent.seo.services.description,
};

export default function ServicesPage() {
  const { servicesPage, brand } = siteContent;

  return (
    <>
      <PageHero
        badge={brand.name}
        title={servicesPage.hero.title}
        description={servicesPage.hero.description}
      >
        <p className="max-w-2xl text-sm leading-7 text-slate-500">{servicesPage.intro}</p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-8xl space-y-10">
          <div className="grid gap-5 lg:grid-cols-2">
            {servicesPage.categories.map((category, index) => {
              const Icon = iconMap[category.icon as IconName] ?? iconMap.Sparkles;

              return (
                <Reveal key={category.title} delay={index * 0.04}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-6 text-slate-600">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <Card className="bg-gradient-to-r from-brand-navy to-brand-ink text-white">
              <CardHeader>
                <CardTitle className="text-white">{servicesPage.noteTitle}</CardTitle>
                <CardDescription className="text-white/75">
                  {servicesPage.noteDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {servicesPage.notePoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm"
                  >
                    {point}
                  </span>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
              {siteContent.common.contactLabel}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
