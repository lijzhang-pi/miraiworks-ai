"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/lib/constants";

function FieldLabel({
  label,
  optional,
  htmlFor,
}: {
  label: string;
  optional?: boolean;
  htmlFor: string;
}) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-brand-navy">
        {label}
      </label>
      {optional ? (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
          {siteContent.common.optionalLabel}
        </span>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const { form } = siteContent.contactPage;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setIsSubmitting(true);
    setIsSubmitted(false);

    await new Promise((resolve) => {
      window.setTimeout(() => resolve(null), 900);
    });

    formElement.reset();
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="companyName" label={form.fields.companyName.label} />
          <Input
            id="companyName"
            name="companyName"
            placeholder={form.fields.companyName.placeholder}
            required
          />
        </div>
        <div>
          <FieldLabel htmlFor="name" label={form.fields.name.label} />
          <Input id="name" name="name" placeholder={form.fields.name.placeholder} required />
        </div>
        <div>
          <FieldLabel htmlFor="email" label={form.fields.email.label} />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={form.fields.email.placeholder}
            required
          />
        </div>
        <div>
          <FieldLabel htmlFor="phone" label={form.fields.phone.label} optional />
          <Input id="phone" name="phone" type="tel" placeholder={form.fields.phone.placeholder} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="website" label={form.fields.website.label} optional />
          <Input
            id="website"
            name="website"
            type="url"
            placeholder={form.fields.website.placeholder}
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="service" label={form.fields.service.label} />
          <Select
            id="service"
            name="service"
            defaultValue=""
            options={form.serviceOptions}
            placeholder={form.fields.service.placeholder}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="message" label={form.fields.message.label} />
          <Textarea
            id="message"
            name="message"
            placeholder={form.fields.message.placeholder}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="budget" label={form.fields.budget.label} optional />
          <Input id="budget" name="budget" placeholder={form.fields.budget.placeholder} />
        </div>
      </div>

      <p className="text-sm leading-6 text-slate-500">{form.privacyNote}</p>

      {isSubmitted ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4">
          <p className="font-semibold text-emerald-700">{form.successTitle}</p>
          <p className="mt-1 text-sm leading-6 text-emerald-700/90">{form.successMessage}</p>
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? form.submittingLabel : form.submitLabel}
      </Button>
    </form>
  );
}
