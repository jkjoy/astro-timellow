export const site = {
  title: "I'm Sun",
  description: '在时间里写作，也在生活里停留。',
  author: 'Sun',
  authorBio: '独立开发者，记录技术、设计与日常生活。',
  email: 'hello@example.com',
  twikooEnvId: 'https://t.imsun.org'
};

export const navItems = [
  { label: '首页', href: '/' },
  { label: '归档', href: '/archives/' },
  { label: '分类', href: '/categories/' },
  { label: '标签', href: '/tags/' },
  { label: '说说', href: '/moments/' },
  { label: '关于', href: '/about/' }
];

export const moments = [
  {
    content: '九月的风已经有一点凉了。把工作台收拾干净，泡一杯茶，继续完成这个一直想做的主题。',
    tags: ['日常', '九月'],
    date: '2026-09-20 18:42',
    location: '杭州',
    source: 'Web',
    media: ['/images/covers/4.jpg']
  },
  {
    content: '设计不是把所有东西都放进去，而是知道什么应该被留下。今天重新调整了正文的字号和行距。',
    tags: ['设计手记'],
    date: '2026-09-12 22:16',
    source: 'iPhone',
    media: []
  },
  {
    content: '周末沿着江边走了很久。城市很吵，但水面总有自己的节奏。',
    tags: ['散步', '生活'],
    date: '2026-09-06 17:30',
    location: '钱塘江畔',
    source: 'iPhone',
    media: ['/images/covers/3.jpg', '/images/covers/1.jpg']
  }
];

export const linkGroups = [
  {
    name: '创作与工具',
    links: [
      { name: 'Astro', url: 'https://astro.build/', description: '面向内容站点的现代 Web 框架。' },
      { name: 'Typecho', url: 'https://typecho.org/', description: '轻量、简洁的开源博客程序。' },
      { name: 'MDN', url: 'https://developer.mozilla.org/', description: '可靠的 Web 技术参考资料。' }
    ]
  },
  {
    name: '朋友们',
    links: [
      { name: '纸上电台', url: 'https://example.com/', description: '写城市、音乐与偶尔的远行。' },
      { name: '北窗笔记', url: 'https://example.org/', description: '一个设计师的工作与生活记录。' }
    ]
  }
];
