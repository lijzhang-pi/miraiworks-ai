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
CONTACT_FROM_EMAIL=MiraiWorks AI <info@miraiworks-ai.com>
```

初期テストでは Resend のデフォルト送信元を利用できます。正式環境では、Resend で検証済みのドメインメールアドレスを `CONTACT_FROM_EMAIL` に設定してください。

## AWS Amplify

AWS Amplify Console で以下の環境変数を追加してください。

```env
RESEND_API_KEY=実際の Resend API Key
CONTACT_TO_EMAIL=info@miraiworks-ai.com
CONTACT_FROM_EMAIL=MiraiWorks AI <info@miraiworks-ai.com>
```

Next.js App Router の `/api/contact` は SSR の Route Handler として動作するため、Amplify では Console に設定した環境変数を `.env.production` に書き出してからビルドする必要があります。

このリポジトリの [amplify.yml](/Users/zhanglijun/Documents/project/miraiworks-ai/amplify.yml) では、`RESEND_API_KEY`、`CONTACT_TO_EMAIL`、`CONTACT_FROM_EMAIL` を `.env.production` に書き出す設定を入れています。

追加または更新後は `main` ブランチを再デプロイしてください。
