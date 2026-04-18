import { Badge } from "@/components/ui/badge";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <Badge className="bg-brand-mist text-brand-navy">{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
