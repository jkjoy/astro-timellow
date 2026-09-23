import { getCollection } from 'astro:content';
import { byPublished, postPath } from '../lib/posts';
import { site } from '../data/site';

export async function GET({ site: base }: { site: URL }) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(byPublished);
  const escape = (value: string) => value.replace(/[<>&'"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] || char);
  const items = posts.map((post) => `<item><title>${escape(post.data.title)}</title><link>${new URL(postPath(post), base)}</link><guid>${new URL(postPath(post), base)}</guid><pubDate>${post.data.published.toUTCString()}</pubDate><description>${escape(post.data.description)}</description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escape(site.title)}</title><link>${base}</link><description>${escape(site.description)}</description>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
