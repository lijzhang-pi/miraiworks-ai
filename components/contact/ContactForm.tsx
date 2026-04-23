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
  const [status, setStatus] = useState<
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null
  >(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      company: String(formData.get("company") ?? ""),
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      website: String(formData.get("website") ?? ""),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setStatus({
          type: "error",
          message: result?.message ?? form.errorMessage,
        });
        return;
      }

      formElement.reset();
      setStatus({
        type: "success",
        message: form.successMessage,
      });
    } catch {
      setStatus({
        type: "error",
        message: form.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel
            htmlFor="company"
            label={form.fields.companyName.label}
            optional
          />
          <Input
            id="company"
            name="company"
            placeholder={form.fields.companyName.placeholder}
          />
        </div>
        <div>
          <FieldLabel htmlFor="name" label={form.fields.name.label} />
          <Input
            id="name"
            name="name"
            placeholder={form.fields.name.placeholder}
            required
            maxLength={100}
          />
        </div>
        <div>
          <FieldLabel htmlFor="email" label={form.fields.email.label} />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={form.fields.email.placeholder}
            required
            maxLength={320}
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
          <FieldLabel htmlFor="service" label={form.fields.service.label} optional />
          <Select
            id="service"
            name="service"
            defaultValue=""
            options={form.serviceOptions}
            placeholder={form.fields.service.placeholder}
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="message" label={form.fields.message.label} />
          <Textarea
            id="message"
            name="message"
            placeholder={form.fields.message.placeholder}
            required
            minLength={10}
            maxLength={2000}
          />
          <p className="mt-2 text-xs text-slate-500">10文字以上でご記入ください。</p>
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="budget" label={form.fields.budget.label} optional />
          <Input id="budget" name="budget" placeholder={form.fields.budget.placeholder} />
        </div>
      </div>

      <p className="text-sm leading-6 text-slate-500">{form.privacyNote}</p>

      {status ? (
        <div
          className={
            status.type === "success"
              ? "rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4"
              : "rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4"
          }
        >
          <p
            className={
              status.type === "success"
                ? "font-semibold text-emerald-700"
                : "font-semibold text-rose-700"
            }
          >
            {status.type === "success" ? form.successTitle : "送信エラー"}
          </p>
          <p
            className={
              status.type === "success"
                ? "mt-1 text-sm leading-6 text-emerald-700/90"
                : "mt-1 text-sm leading-6 text-rose-700/90"
            }
          >
            {status.message}
          </p>
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? form.submittingLabel : form.submitLabel}
      </Button>
    </form>
  );
}
