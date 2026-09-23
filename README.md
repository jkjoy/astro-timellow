# Astro Timellow

基于 Astro 的 Timellow 博客主题，样式与页面结构移植自 `typecho-theme-timellow`。

## 开发

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run check
npm run build
```

## 内容

文章位于 `src/content/posts`，每篇文章使用 Markdown，Frontmatter 示例：

```yaml
---
title: "文章标题"
description: "文章摘要"
published: 2026-09-23
category: "技术"
tags: ["Astro", "博客"]
cover: "/images/covers/1.jpg"
sticky: false
---
```

站点名称、作者信息、导航、说说与友情链接数据位于 `src/data/site.ts`。

## 页面

- 首页文章列表
- 文章详情与本地演示评论
- 归档、分类、标签聚合页
- 说说、友情链接、关于页面
- 客户端站内搜索
- RSS、404、深浅色模式与响应式布局
