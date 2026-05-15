import type { PageContentMap } from "./types";
import aboutPages from "./sections/about.ja";
import productPages from "./sections/products.ja";
import tradingPages from "./sections/trading.ja";

const pages: PageContentMap = {
  products: productPages,
  trading: tradingPages,
  about: {
    ...aboutPages,
    "company-blog": {
      title: "会社ブログ",
      description: "KVBチームからのニュース、教育、更新。",
      body: [
        "会社ブログでは市場トレンド、プラットフォーム更新、取引教育の記事を掲載。",
        "製品ローンチと会社ニュースの最新情報を購読。",
      ],
    },
    esg: {
      title: "ESG",
      description: "環境・社会・ガバナンスへの取り組み。",
      body: [
        "KVBは環境、社会、ガバナンスの各側面で責任あるビジネス慣行にコミット。",
        "コミュニティプログラム、倫理基準、持続可能性目標をご覧ください。",
      ],
    },
    announcements: {
      title: "お知らせ",
      description: "KVBからの公式通知とサービス更新。",
      body: [
        "プラットフォームメンテナンス、製品変更、規制のお知らせを確認。",
        "最新の公式通知は本ページを定期的にご確認ください。",
      ],
    },
  },
};

export default pages;
