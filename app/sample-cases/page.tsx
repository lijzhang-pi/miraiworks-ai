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
  title: siteContent.seo.sampleCases.title,
  description: siteContent.seo.sampleCases.description,
};

export default function SampleCasesPage() {
  const { sampleCasesPage, brand } = siteContent;

  return (
    <>
      <PageHero
        badge={brand.name}
        title={sampleCasesPage.hero.title}
        description={sampleCasesPage.hero.description}
      >
        <p className="max-w-2xl text-sm leading-7 text-slate-500">{sampleCasesPage.notice}</p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-8xl space-y-10">
          <div className="grid gap-5 lg:grid-cols-2">
            {sampleCasesPage.cases.map((item, index) => {
              const Icon = iconMap[item.icon as IconName] ?? iconMap.Building2;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                            想定ケース {String(index + 1).padStart(2, "0")}
                          </span>
                          <CardTitle>{item.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-2xl bg-slate-50 px-4 py-4">
                        <p className="text-sm font-semibold text-brand-navy">課題</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.challenge}</p>
                      </div>
                      <div className="rounded-2xl bg-brand-mist/60 px-4 py-4">
                        <p className="text-sm font-semibold text-brand-navy">提案</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.proposal}</p>
                      </div>
                      <div className="rounded-2xl border border-brand-line/70 bg-white px-4 py-4">
                        <p className="text-sm font-semibold text-brand-navy">期待できる効果</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.effect}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <Card className="bg-brand-navy text-white">
              <CardHeader>
                <CardTitle className="text-white">{sampleCasesPage.ctaTitle}</CardTitle>
                <CardDescription className="text-white/80">
                  {sampleCasesPage.ctaDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full justify-center bg-white text-brand-navy hover:bg-brand-mist sm:w-auto",
                  )}
                >
                  {sampleCasesPage.ctaLabel}
                </Link>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
