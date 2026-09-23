---
title: "用 Astro 搭建一个真正以内容为中心的网站"
description: "从内容集合、静态路由到部署，记录这个博客从 Typecho 迁移到 Astro 的完整思路。"
published: 2026-09-21
category: "技术"
tags: ["Astro", "前端", "博客"]
cover: "/images/covers/4.jpg"
sticky: true
---

很多博客系统从数据库开始思考，而 Astro 更愿意先问一个问题：**你的内容在哪里？**

对这个站点来说，答案很简单。每篇文章都是一个 Markdown 文件，标题、日期、分类和封面写在文件开头，正文紧随其后。它们可以被 Git 追踪，也可以在任何编辑器里打开。

## 内容集合

Astro 的内容集合可以为文章的 Frontmatter 提供类型约束。字段写错时，构建过程会立刻告诉我们，而不是等到页面上线之后才发现。

```ts
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    tags: z.array(z.string())
  })
});
```

## 静态生成的好处

构建时，每篇文章都会变成独立 HTML 文件。访问者不需要等待数据库查询，也不需要下载一整套客户端框架。

| 特性 | 传统动态博客 | Astro 静态站点 |
| --- | --- | --- |
| 页面生成 | 请求时 | 构建时 |
| 内容存储 | 数据库 | Markdown |
| 部署要求 | 运行时与数据库 | 静态文件托管 |

> 技术选择不是为了追逐新鲜感，而是让长期维护这件事更轻松。

![阳光下的安静角落](/images/covers/4.jpg "保留一点安静，写作才能发生。")

接下来只需要继续写作。框架应该退到幕后，把舞台留给内容本身。
