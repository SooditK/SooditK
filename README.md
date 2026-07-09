## Hi there! 👋

I'm **Soodit Kumar**, a passionate developer based in **Delhi, India**. I believe in the power of technology and creativity to solve problems and innovate. 🌟

## About Me

I'm a dedicated developer with a strong focus on building efficient and scalable applications. Currently, I'm based in **Delhi, India**. My expertise spans multiple programming languages and frameworks, primarily in **TypeScript** and **Go**. I love tackling challenging problems and contributing to open-source projects.

## Top Projects

- [**inori**](https://github.com/SooditK/inori) - A lightweight, self-hosted secrets manager inspired by HashiCorp Vault. ⭐️ 1 | Language: Go | Forks: 0 | Issues: 0
- [**downstash**](https://github.com/SooditK/downstash) - A project for simplified database management. ⭐️ 0 | Language: TypeScript | Forks: 0 | Issues: 0

## GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SooditK&show_icons=true&theme=radical)

## Latest Blog Posts

Visit my blog for insightful articles on technology and development at [sooditk.dev](https://sooditk.dev).

## Connect with Me

<a href="https://twitter.com/SooditK" target="_blank" rel="noopener noreferrer"><Icon /> Twitter</a> | <a href="https://www.linkedin.com/in/soodit-kumar-864a0a1b0/" target="_blank" rel="noopener noreferrer"><Icon /> Linkedin</a>

## Skills & Technologies

[![My Skills](https://skillicons.dev/icons?i=angular,appwrite,apollo,bun,cpp,cloudflare,css,docker,elysia,express,fastapi,figma,git,github,gcp,go,html,htmx,js,jenkins,kafka,kubernetes,md,mongodb,mysql,neovim,nestjs,netlify,nextjs,nginx,nodejs,planetscale,pnpm,postgres,postman,prisma,prometheus,rabbitmq,redis,react,remix,rust,supabase,sequelize,sentry,sqlite,selenium,solidjs,svelte,tailwind,tauri,ts,ubuntu,vercel,vim,vite,vitest,vscode,webpack,yarn,workers,windicss,yew,zig&perline=8)](https://skillicons.dev)

---

## This repo — [sooditk.dev](https://sooditk.dev)

This repository also contains the source for my personal website, a fully static [Astro](https://astro.build) site with zero client-side JavaScript (except a ~300-byte inline theme switcher), styled with Tailwind CSS v4 and deployed to Cloudflare Workers static assets.

### Development

```bash
bun install
bun run dev      # dev server on http://localhost:3000
bun run build    # typecheck (astro check) + static build to dist/
bun run preview  # preview the production build
bun run deploy   # build + wrangler deploy
```

### Writing a blog post

Add a markdown file to `src/content/blog/`:

```md
---
title: "My Post Title"
description: "One-line summary shown in meta tags and RSS."
publishedAt: 2026-07-08
draft: false
---

Post content in Markdown (or MDX). Code blocks get syntax highlighting at build time.
```

Push to `main` and deploy — the post page, blog index, RSS feed, and sitemap are all generated from the frontmatter. Set `draft: true` to keep a post out of the published site.
