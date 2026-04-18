import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { cta } = siteContent.home;

  return (
    <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-8xl">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-12 text-white shadow-soft sm:px-10 lg:px-14">
          <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-brand-sky/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-brand-cyan/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                MiraiWorks AI
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {cta.title}
              </h2>
              <p className="max-w-2xl whitespace-pre-line text-base leading-7 text-white/80">
                {cta.description}
              </p>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                {cta.reassuranceNote}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full justify-center bg-white text-brand-navy hover:bg-brand-mist sm:w-auto",
                )}
              >
                {cta.primaryCta}
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-full justify-center border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white sm:w-auto",
                )}
              >
                {cta.secondaryCta}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
