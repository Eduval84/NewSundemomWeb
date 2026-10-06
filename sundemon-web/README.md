This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Contact form email configuration

The contact form sends email through DonDominio SMTP. Add these variables to
the Vercel project settings for the Production environment:

```text
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=587
SMTP_USER=contacto@sundemom.es
SMTP_PASS=<the SMTP mailbox password>
SMTP_FROM_EMAIL=reservas@sundemom.es
SMTP_FROM_NAME=Sundemon Tattoo Studio
CONTACT_EMAIL_TO=sundemomspace@gmail.com
CONTACT_EMAIL_REPLY_TO=sundemomspace@gmail.com
```

For local development, put the same variables in `.env.local` and restart the
Next.js server. Never commit `.env.local` or expose `SMTP_PASS`; `.env.example`
contains only a placeholder. After adding the variables in Vercel, redeploy
Production. Port 587 uses STARTTLS; port 465 can be used with `SMTP_PORT=465`.
