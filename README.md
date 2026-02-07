# Mel'Yoga — Website + CMS (Next.js + Payload)

Website for a yoga teacher, powered by **Next.js (App Router)** and **Payload CMS**.  
Content is managed in Payload (pages built with blocks), stored in **Postgres (Neon)**, and deployed on **Vercel**. Media can be stored locally in dev and/or via **Vercel Blob** in production.

---

## Tech Stack

- **Next.js** (App Router)
- **React**
- **Payload CMS**
- **PostgreSQL** (Neon)
- **Vercel** deployment
- **Vercel Blob Storage** for `media` uploads
- **Resend** for contact form
- Styling: **SCSS** 

---

## Features

- Block-based pages (Payload “Pages” collection)
- Live Preview / Draft mode (Payload ↔ Next.js)
- Role-based access control in Payload (admin/editor)
- Media upload collection

---

## Environment Variables
### Database
DATABASE_URL

### Payload / Next
PAYLOAD_SECRET
PREVIEW_SECRET
NEXT_PUBLIC_SERVER_URL="http://localhost:3000" # or your deployed URL

### If you use Vercel Blob for media storage
BLOB_READ_WRITE_TOKEN="your_vercel_blob_token"

### For email
RESEND_API_KEY

### (Optional) For CORS/CSRF allowlists if you separate URLs
SITE_URL_DEV="https://your-dev-url"
SITE_URL_PROD="https://your-prod-url"


## Getting Started

### 1) Requirements

- Node.js (recommend latest LTS)
- pnpm / npm / yarn (use the one configured in the project)
- A Postgres database (local or Neon)

### 2) Install

```bash
# using pnpm (example)
pnpm install
```

### 3) Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

