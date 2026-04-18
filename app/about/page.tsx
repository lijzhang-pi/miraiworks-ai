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
  title: siteContent.seo.about.title,
  description: siteContent.seo.about.description,
};

export default function AboutPage() {
  const { aboutPage, brand } = siteContent;

  return (
    <>
      <PageHero
        badge={brand.name}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
      >
        <p className="max-w-2xl text-sm leading-7 text-slate-500">{aboutPage.intro}</p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-8xl space-y-10">
          <Reveal>
            <Card className="bg-brand-navy text-white">
              <CardHeader>
                <CardTitle className="text-white">{aboutPage.mission.title}</CardTitle>
                <CardDescription className="text-white/80">
                  {aboutPage.mission.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {aboutPage.values.map((value, index) => {
              const Icon = iconMap[value.icon as IconName] ?? iconMap.Sparkles;

              return (
                <Reveal key={value.title} delay={index * 0.04}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{aboutPage.reasonsTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-7 text-slate-600">
                    {aboutPage.reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{aboutPage.profileTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aboutPage.profile.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 rounded-2xl border border-brand-line/70 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="text-sm font-medium text-brand-navy">{item.label}</span>
                      <span className="text-sm leading-6 text-slate-600">{item.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle>{aboutPage.ctaTitle}</CardTitle>
                <CardDescription>{aboutPage.ctaDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                  {aboutPage.ctaLabel}
                </Link>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
