# Next.js Intro Before Movie App

This project contains all the code built so far in the “Getting Started with Next.js” tutorial, covering the fundamentals of the App Router before moving into the full movie application.

## What’s Included

This repository demonstrates the core Next.js concepts:

- Project setup with create-next-app
- App Router basics
- Pages and routes (page.tsx)
- Layouts (layout.tsx)
- Navigation using the <Link> component
- Data fetching in Server Components
- Updating data with revalidate and no-store
- Loading and error handling (loading.tsx / error.tsx)
- Styling with Tailwind CSS
- Styled pages and simple UI structure

At this stage, the project includes:

- A homepage
- An About page
- A Posts page (using a placeholder API)
- A shared layout with navigation
- Tailwind-based styling

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
