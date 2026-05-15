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

```bash
npm run build
npm start
```

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
