# KVB Pro

使用 **Next.js 16** + **MUI 9** 重构 [KVB 官网](https://www.kvbplus.com/) 首页。

## 技术栈

- Next.js (App Router)
- React 19
- Material UI 9 + Emotion
- TypeScript

## 素材

站点静态资源已通过 `curl` / `wget` 下载至 `public/assets/`，包括 Logo、Banner、背景图、首页视频等。

## 开发

```bash
npm install
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。

## 构建

项目使用 **静态导出**（`output: "export"`），构建产物在 `out/`，部署到 CDN / Cloudflare Pages 时**只需托管静态文件**，无需 Node SSR 或 Workers 跑 Next 运行时，可避免 CF 1102（CPU 超限）。

```bash
pnpm install
pnpm build
pnpm start   # 本地预览 out/ 目录
```

### Cloudflare Pages

- **Build command**: `pnpm build`
- **Build output directory**: `out`
- **Framework preset**: None（静态站点）
- 勿使用 `@cloudflare/next-on-pages` 等 Workers SSR 方案

根路径 `/` 及无语言前缀的路径会通过 `_redirects` 302 到默认语言 `/en`（构建时自动生成）。

## 项目结构

```
src/
  app/              # 页面与布局
  components/
    home/           # 首页各区块
    layout/         # Header / Footer
    providers/      # MUI ThemeRegistry
  data/             # 导航与内容数据
  theme/            # MUI 主题
public/assets/      # 从官网抓取的素材
```
