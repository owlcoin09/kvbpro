import type { PageContentMap } from "./types";
import aboutPages from "./sections/about.zh";
import productPages from "./sections/products.zh";
import tradingPages from "./sections/trading.zh";

const pages: PageContentMap = {
  products: productPages,
  trading: tradingPages,
  about: {
    ...aboutPages,
    "company-blog": {
      title: "公司博客",
      description: "KVB 团队的市场资讯、教育与动态。",
      body: [
        "公司博客涵盖市场趋势、平台更新与交易教育文章。",
        "订阅以了解产品发布与公司新闻。",
      ],
    },
    esg: {
      title: "ESG",
      description: "环境、社会与治理相关举措。",
      body: [
        "KVB 致力于在环境、社会与治理方面践行负责任商业。",
        "了解我们的社区项目、道德标准与可持续发展目标。",
      ],
    },
    announcements: {
      title: "公告",
      description: "KVB 官方通知与服务更新。",
      body: [
        "了解平台维护、产品变更与监管公告。",
        "请定期查看本页获取最新官方通知。",
      ],
    },
  },
};

export default pages;
