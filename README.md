# start.ng UI recreation

A responsive React and TypeScript recreation of the start.ng games landing page, with playful UI motion and CTA button effects. It is built with Vite and styled with CSS.

## Requirements

- Node.js 20+ or 22+
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local preview URL in the terminal.

## Project commands

```bash
npm run dev      # Start the local development server
npm run build    # Type-check and create the production build in dist/
npm run lint     # Run ESLint
```

## Deploy to Vercel

### Git integration (recommended)

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Set the project root to the repository root (the folder containing `package.json`).
4. Use these build settings if Vercel does not detect them automatically:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Vite |
   | Install command | `npm install` |
   | Build command | `npm run build` |
   | Output directory | `dist` |

5. Choose **Deploy**. Vercel will build and publish the site. Later pushes to the connected production branch deploy to production; other branches and pull requests can be used for preview deployments.

This page currently uses hash links and does not need a route rewrite. If client-side routes are added later, configure the Vite SPA rewrite described in [Vercel's Vite guide](https://vercel.com/docs/frameworks/frontend/vite). See also Vercel's [CLI deployment guide](https://vercel.com/docs/projects/deploy-from-cli).

### Vercel CLI

From the project root, install and sign in to the Vercel CLI, then deploy a preview:

```bash
npm install --global vercel
vercel login
vercel
```

When the preview looks good, deploy it to production:

```bash
vercel --prod
```

The first CLI deployment will ask you to link this directory to a Vercel project. The resulting `.vercel/` folder contains local project metadata and should not be committed.

## Environment variables

No environment variables are required for the current front-end build. Keep any future secrets in Vercel Project Settings and in a local, ignored `.env` file; never commit secret values.

## Source layout

```text
src/
  App.tsx          Page sections and interactions
  data/games.ts    Local sample game and category data
  styles.css       Layout, responsive styling, and animations
  types/index.ts   Shared TypeScript data types
```

## Current prototype scope

This project recreates the landing page as a front-end prototype. Game cards and categories use local sample data and CSS/emoji artwork. Authentication, tournament entry, publishing games, and external game destinations are not connected to start.ng services yet. Review those links and integrations before treating the deployment as a production start.ng site.

