import { Resend } from "resend";
import { z } from "zod";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function trimToUndefined(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function trimString(value: unknown) {
  return typeof value === "string" ? value.trim() : value;
}

const optionalField = (max: number) =>
  z.preprocess(trimToUndefined, z.string().max(max).optional());

const contactSchema = z.object({
  company: optionalField(200),
  name: z.preprocess(trimString, z.string().min(1).max(100)),
  email: z.preprocess(trimString, z.string().email().max(320)),
  phone: optionalField(50),
  website: optionalField(500),
  service: optionalField(200),
  budget: optionalField(200),
  message: z.preprocess(trimString, z.string().min(10).max(2000)),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatTextValue(value?: string) {
  return value?.trim() ? value.trim() : "未入力";
}

function formatHtmlValue(value?: string) {
  if (!value?.trim()) {
    return "未入力";
  }

  return escapeHtml(value.trim()).replaceAll("\n", "<br />");
}

export async function POST(request: Request) {
  try {
    const json = (await request.json()) as unknown;
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "入力内容を確認してください。" },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          ok: false,
          message: "送信に失敗しました。時間をおいて再度お試しください。",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const data = parsed.data;
    const submittedAt = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const text = [
      "MiraiWorks AI へのお問い合わせがありました。",
      "",
      `会社名: ${formatTextValue(data.company)}`,
      `お名前: ${formatTextValue(data.name)}`,
      `メールアドレス: ${formatTextValue(data.email)}`,
      `電話番号: ${formatTextValue(data.phone)}`,
      `現在のホームページURL: ${formatTextValue(data.website)}`,
      `希望するサービス: ${formatTextValue(data.service)}`,
      `予算感: ${formatTextValue(data.budget)}`,
      "相談内容:",
      formatTextValue(data.message),
      "",
      `送信日時: ${submittedAt}`,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, 'Hiragino Sans', 'Yu Gothic', sans-serif; color: #1f2937; line-height: 1.7;">
        <h2 style="margin-bottom: 20px; color: #0B2341;">MiraiWorks AI へのお問い合わせがありました。</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr><td style="padding: 10px 0; width: 180px; font-weight: 700; color: #0B2341;">会社名</td><td style="padding: 10px 0;">${formatHtmlValue(data.company)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341;">お名前</td><td style="padding: 10px 0;">${formatHtmlValue(data.name)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341;">メールアドレス</td><td style="padding: 10px 0;">${formatHtmlValue(data.email)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341;">電話番号</td><td style="padding: 10px 0;">${formatHtmlValue(data.phone)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341;">現在のホームページURL</td><td style="padding: 10px 0;">${formatHtmlValue(data.website)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341;">希望するサービス</td><td style="padding: 10px 0;">${formatHtmlValue(data.service)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341;">予算感</td><td style="padding: 10px 0;">${formatHtmlValue(data.budget)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341; vertical-align: top;">相談内容</td><td style="padding: 10px 0;">${formatHtmlValue(data.message)}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #0B2341;">送信日時</td><td style="padding: 10px 0;">${escapeHtml(submittedAt)}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `【MiraiWorks AI】お問い合わせ：${data.name} 様`,
      text,
      html,
    });

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          message: "送信に失敗しました。時間をおいて再度お試しください。",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { ok: true, message: "お問い合わせを送信しました。" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "入力内容を確認してください。" },
      { status: 400 },
    );
  }
}
