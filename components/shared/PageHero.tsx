import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  title: string;
  description: string;
  badge?: string;
  children?: ReactNode;
};

export function PageHero({
  title,
  description,
  badge = "MiraiWorks AI",
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-line/80 bg-white/80 px-6 py-14 shadow-soft backdrop-blur sm:px-10 lg:px-14">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-brand-cyan/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-brand-sky/10 blur-3xl" />
          <div className="relative max-w-3xl space-y-6">
            <Badge className="bg-brand-mist text-brand-navy">{badge}</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                {title}
              </h1>
              <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
