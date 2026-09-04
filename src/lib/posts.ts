import { getCollection } from 'astro:content';

/**
 * Published posts, newest first.
 *
 * Drafts are visible while running `astro dev` so you can read what you're
 * working on, and are left out of `astro build` entirely — no page, no URL.
 * Both the index and the post routes go through here so they can't disagree.
 */
export const getPosts = async () =>
  (
    await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft)
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
