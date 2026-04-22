# MiraiWorks AI

MiraiWorks AI の企業サイトです。Next.js App Router、TypeScript、Tailwind CSS を利用しています。

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Contact Form

お問い合わせフォームは `/api/contact` を通じて Resend でメール送信します。

必要な環境変数:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=info@miraiworks-ai.com
CONTACT_FROM_EMAIL=MiraiWorks AI <onboarding@resend.dev>
```

Resend の送信元ドメイン認証後は、`CONTACT_FROM_EMAIL` を以下に変更できます。

```env
CONTACT_FROM_EMAIL=MiraiWorks AI <info@miraiworks-ai.com>
```

## AWS Amplify

AWS Amplify Console で以下の環境変数を追加してください。

```env
RESEND_API_KEY=実際の Resend API Key
CONTACT_TO_EMAIL=info@miraiworks-ai.com
CONTACT_FROM_EMAIL=MiraiWorks AI <onboarding@resend.dev>
```

追加後は `main` ブランチを再デプロイしてください。
