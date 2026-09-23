import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const byPublished = (a: Post, b: Post) =>
  Number(b.data.sticky) - Number(a.data.sticky) || b.data.published.valueOf() - a.data.published.valueOf();

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date).replaceAll('/', '-');

export const postPath = (post: Post) => `/posts/${post.id}/`;

export const categoryPath = (category: string) => `/category/${encodeURIComponent(category)}/`;

export const tagPath = (tag: string) => `/tag/${encodeURIComponent(tag)}/`;
