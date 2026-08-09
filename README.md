# portfolio-website

Personal site of Anikesh Banik — projects, blog, and resume.

**Live:** https://anikesh-banik.vercel.app

## Stack

Next.js (App Router) · Tailwind CSS v4 · MDX via `next-mdx-remote` · deployed on Vercel (auto-deploys from `main`)

## Editing content

| What | Where |
| --- | --- |
| Name, role, tagline, social links | `lib/site.ts` |
| Resume entries | `lib/resume.ts` |
| Blog posts | `content/blog/*.mdx` |
| Project case studies | `content/projects/*.mdx` |

New `.mdx` files appear automatically — posts sort by `date`, projects by `year`; set `featured: true` to surface a project on the home page.

## Development

```bash
npm run dev     # local dev server
npm run build   # production build (all pages prerender statically)
```
