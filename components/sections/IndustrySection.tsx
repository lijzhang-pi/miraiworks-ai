import Link from "next/link";

import { SectionTitle } from "@/components/shared/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";
import type { IconName } from "@/lib/icon-map";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function IndustrySection() {
  const { industries } = siteContent.home;

  return (
    <section className="bg-white/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-8xl space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow={industries.eyebrow}
            title={industries.title}
            description={industries.description}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.items.map((industry, index) => {
            const Icon = iconMap[industry.icon as IconName] ?? iconMap.Building2;

            return (
              <Reveal key={industry.title} delay={index * 0.03}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{industry.title}</CardTitle>
                    <CardDescription>{industry.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="inline-flex rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                      現場に合わせて段階導入
                    </span>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <Link
            href="/industries"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
          >
            {siteContent.common.industriesLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
