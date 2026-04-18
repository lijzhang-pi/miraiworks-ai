import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export function ProcessSection() {
  const { process } = siteContent.home;

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-8xl space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow={process.eyebrow}
            title={process.title}
            description={process.description}
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-5">
          {process.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <Card className="h-full overflow-hidden">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-brand-navy">{step.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
