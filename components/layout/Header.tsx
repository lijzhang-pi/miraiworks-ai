"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { iconMap } from "@/lib/icon-map";
import { siteContent } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const MenuIcon = iconMap.Menu;
  const CloseIcon = iconMap.X;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-slate-50/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-sm font-semibold text-white shadow-soft transition group-hover:-translate-y-0.5">
            MW
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-brand-navy">
              {siteContent.brand.name}
            </div>
            <div className="hidden text-xs text-slate-500 sm:block">
              {siteContent.header.brandSubtitle}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {siteContent.navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-brand-navy",
                  active ? "bg-white text-brand-navy shadow-soft" : "text-slate-600",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className={buttonVariants()}>
            {siteContent.common.consultLabel}
          </Link>
        </div>

        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="lg:hidden"
          aria-label={
            open ? siteContent.header.closeMenuLabel : siteContent.header.openMenuLabel
          }
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-brand-line/70 bg-white/95 px-4 py-4 shadow-soft lg:hidden">
          <nav className="mx-auto flex max-w-8xl flex-col gap-2">
            {siteContent.navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block w-full rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-brand-navy text-white"
                      : "bg-slate-50 text-slate-700 hover:bg-brand-mist hover:text-brand-navy",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={cn(buttonVariants(), "mt-2 w-full justify-center")}
            >
              {siteContent.common.consultLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
