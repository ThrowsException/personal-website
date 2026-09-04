# oneillc.io

My personal site. Static, built with [Astro](https://astro.build), hosted on S3
behind CloudFront.

## Writing

Posts are markdown files in `content/blog/`. The filename is the URL, so
`content/blog/phones-suck.md` becomes `/phones-suck/`. Frontmatter is validated
by the schema in `src/content.config.ts`:

```yaml
---
title: Phones Suck
date: '2026-09-03'
description: 'stop caring about your phone'
draft: true # optional, defaults to false
---
```

### Drafts

Add `draft: true` to keep a post out of the build entirely — no page, no URL,
and no mention on the index. Drafts still show up in `npm run dev` (labelled
"draft" in the list) so you can read what you're working on. Delete the line to
publish.

## Running it

```sh
npm run dev      # local server
npm run check    # types + content schema
npm run build    # static output into dist/
npm run deploy   # build, sync to S3, invalidate CloudFront
```

`/github` is generated at build time from the GitHub GraphQL API, so a
`GITHUB_TOKEN` must be in `.env` for `build` and `deploy` to work.
