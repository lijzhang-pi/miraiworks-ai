import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { PageHero } from "@/components/shared/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export const metadata: Metadata = {
  title: siteContent.seo.contact.title,
  description: siteContent.seo.contact.description,
};

export default function ContactPage() {
  const { contactPage, brand } = siteContent;

  return (
    <>
      <PageHero
        badge={brand.name}
        title={contactPage.hero.title}
        description={contactPage.hero.description}
      >
        <p className="max-w-2xl text-sm leading-7 text-slate-500">{contactPage.intro}</p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-8xl space-y-10">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr]">
            <div className="space-y-5">
              <Reveal>
                <Card className="bg-brand-navy text-white">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {contactPage.responsePromise.title}
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      {contactPage.responsePromise.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                      {contactPage.reassuranceNote}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>

              {contactPage.detailCards.map((detail, index) => (
                <Reveal key={detail.title} delay={index * 0.04}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-7 text-slate-600">
                        {detail.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}

              <Reveal>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {contactPage.consultationStage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm leading-7 text-slate-600">
                      {contactPage.consultationStage.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal>
                <Card className="bg-white/85">
                  <CardHeader>
                    <CardTitle className="text-lg">{contactPage.sidebar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm leading-7 text-slate-600">
                      {contactPage.sidebar.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-sky" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{contactPage.directContact.title}</CardTitle>
                    <CardDescription>{contactPage.directContact.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <a
                      href={`mailto:${contactPage.directContact.email}`}
                      className="text-base font-semibold text-brand-navy underline decoration-brand-sky/40 underline-offset-4"
                    >
                      {contactPage.directContact.email}
                    </a>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={0.05}>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>{contactPage.form.title}</CardTitle>
                  <CardDescription>{contactPage.form.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="rounded-2xl border border-brand-line bg-brand-mist/70 px-4 py-3 text-sm text-brand-navy">
                    {contactPage.reassuranceNote}
                  </div>
                  <ContactForm />
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <SectionTitle eyebrow="FAQ" title={contactPage.faq.title} />
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {contactPage.faq.items.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.04}>
                <Card className="h-full bg-white/85">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                    <CardDescription>{item.answer}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
