# Portfolio — Personal Website

Welcome to the source code for a personal portfolio website built with Next.js. This repository contains a fast, accessible, and responsive portfolio that showcases projects, a curriculum section, and contact details.

## Quick Demo

- **Local Preview:** Run the site locally and open `http://localhost:3000`.
- **Deployed:** If deployed, the live demo link will be shown here.

## What This Project Is

- **Project:**: A personal portfolio website demonstrating projects, a CV section, and contact information.
- **Tech Stack:**: Next.js (App Router), TypeScript, React, PostCSS.
- **Purpose:**: Showcase work, provide an approachable contact point, and demonstrate frontend skills.

## Key Features

- **Responsive Design:**: Mobile-first layout that adapts to all screen sizes.
- **Accessible UI:**: Semantic HTML and keyboard-friendly navigation.
- **Modular Components:**: Reusable components under the `components/` folder.
- **Easy Content Updates:**: Pages are located in the `app/` directory for straightforward edits.

## Project Structure

- **`app/`**: Main application routes and pages (`page.tsx`, `curriculum`, `projects`).
- **`components/`**: Reusable components such as navigation, footer, and social buttons.
- **`public/`**: Static assets (images, icons, etc.).
- **`styles`**: Global CSS in `app/globals.css` and component-level styles.

## Local Development

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open `http://localhost:3000` to view the site.

## Available Scripts

- **`dev`**: Runs the app in development mode.
- **`build`**: Builds the production application.
- **`start`**: Starts the production server after building.

Check `package.json` for the exact scripts and commands.

## Deployment

- **Vercel:** Recommended for Next.js — connect your repo to Vercel for continuous deploys.
- **Other platforms:** Any hosting that supports Node.js and Next.js can be used.

## Contributing & Customization

- **Edit content:** Update pages in the `app/` folder (`page.tsx`, `curriculum/page.tsx`, `projects/page.tsx`).
- **Add projects:** Add new project cards/components in `components/` and link them from `projects/page.tsx`.
- **Styles:** Modify `app/globals.css` or component-level styles as needed.

## Contact

If you'd like to get in touch, add your preferred contact method here (email, LinkedIn, etc.) or link to the contact section of the site.

---

If you want, I can: improve the content wording, add a short bio, craft sample project entries, or create a small deployment guide. Which would you like next?
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
