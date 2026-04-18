import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteContent } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://miraiworks-ai.com"),
  alternates: {
    canonical: "/",
  },
  title: siteContent.seo.home.title,
  description: siteContent.brand.description,
  openGraph: {
    title: siteContent.seo.home.title,
    description: siteContent.brand.description,
    url: "/",
    siteName: siteContent.brand.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.home.title,
    description: siteContent.brand.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-hero-grid bg-[length:22px_22px] opacity-50" />
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-96 -z-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
