import Link from "next/link";

import { siteContent } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-brand-line/70 bg-white/70">
      <div className="mx-auto grid max-w-8xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold text-brand-navy">{siteContent.brand.name}</p>
            <p className="text-sm text-slate-500">{siteContent.brand.nameJa}</p>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            {siteContent.footer.description}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wide text-brand-navy">サービス</h2>
          <div className="flex flex-col gap-2">
            {siteContent.footer.serviceLinks.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-brand-navy"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wide text-brand-navy">
            {siteContent.footer.contactTitle}
          </h2>
          <div className="space-y-2">
            {siteContent.footer.contactItems.map((item) => (
              <div key={item.label} className="text-sm text-slate-600">
                <span className="font-medium text-brand-navy">{item.label}：</span>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-line/60 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        {siteContent.footer.copyright}
      </div>
    </footer>
  );
}
