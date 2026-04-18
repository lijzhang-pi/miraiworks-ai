import type { IconName } from "@/lib/icon-map";
import { iconMap } from "@/lib/icon-map";
import { siteContent } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function SolutionSection() {
  const { solution } = siteContent.home;

  return (
    <section className="bg-white/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-8xl space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow={solution.eyebrow}
            title={solution.title}
            description={solution.description}
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {solution.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as IconName] ?? iconMap.Sparkles;

            return (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <Card className="h-full bg-gradient-to-b from-white to-slate-50/90">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {pillar.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-brand-line bg-white px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
