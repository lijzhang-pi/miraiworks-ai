import { BadgeCheck } from "lucide-react";

import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export function ProblemSection() {
  const { problem } = siteContent.home;

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-8xl space-y-10">
        <Reveal>
          <SectionTitle eyebrow={problem.eyebrow} title={problem.title} />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problem.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <Card className="h-full bg-white/80">
                <CardContent className="flex h-full items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
