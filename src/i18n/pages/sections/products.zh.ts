import { PRODUCT_SYMBOLS } from "@/data/product-symbols";
import { featureImages } from "@/data/media";
import type { PageContent, PageFeature } from "../types";

const whyTradeFeatures = (title: string): Pick<PageContent, "featureTitle" | "features"> => ({
  featureTitle: title,
  features: WHY_TRADE,
});

const WHY_TRADE: PageFeature[] = [
  {
    title: "快速入金与出金",
    description:
      "KVB 提供安全、快捷的本地货币在线支付选项。轻松入金、转账或出金，多种灵活支付方式任您选择。",
    image: featureImages[2],
  },
  {
    title: "专属客户支持",
    description: "我们拥有国际化 24/5 客户服务团队，为您提供卓越支持体验。",
    image: featureImages[1],
  },
  {
    title: "专业交易工具",
    description:
      "交易平台界面友好、功能丰富，配备多种高级工具与资源，助您提升交易技能并做出明智决策。",
    image: featureImages[0],
  },
  {
    title: "卓越交易平台",
    description:
      "我们在技术上大力投入，让客户可通过电脑、手机或网页访问功能强大、创新的交易平台，随时随地交易。",
    image: featureImages[0],
  },
  {
    title: "优越交易条件",
    description:
      "每一分成本节省都转化为更高利润空间。交易 100 多种金融产品，点差低至 0.0，佣金处于市场较低水平。",
    image: featureImages[3],
  },
  {
    title: "优质流动性",
    description:
      "我们采用 STP（直通式处理）与 NDD（无交易员柜台）技术，确保客户始终获得最优价格及公平透明的订单执行。",
    image: featureImages[3],
  },
];

const footnote = "*如需更多信息，请联系客户服务。";

const pages: Record<string, PageContent> = {
  forex: {
    title: "外汇",
    description: "在 KVB 交易主要、次要及 exotic 货币对，点差具有竞争力。",
    introTitle: "什么是外汇？",
    body: [
      "外汇（Forex）即外汇交易市场，是全球规模最大、流动性最强的金融市场，日均交易量超过 5 万亿美元。",
      "把握全球最具活力、交易最活跃的市场，在 KVB 使用安全策略与强大工具进行交易。",
    ],
    image: "/assets/products/forex.png",
    symbolListTitle: "查看完整交易品种列表：",
    symbols: PRODUCT_SYMBOLS.forex,
    tradingSessions: {
      title: "交易时段",
      body: [
        "外汇市场每周一至周五 24 小时运行，时间为周一 01:05 至周五 23:00（UTC+2）。",
        "服务器时间：UTC+2",
      ],
    },
    specifications: {
      title: "合约规格",
      groups: [
        {
          rows: [
            { label: "合约规模", value: "100,000 货币单位" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "至周五有效" },
            { label: "隔夜利息类型", value: "按点数" },
            { label: "三倍隔夜利息", value: "周三" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("为何选择 KVB 交易外汇？"),
  },
  commodities: {
    title: "大宗商品",
    description: "交易黄金、白银、原油等全球大宗商品市场。",
    introTitle: "什么是大宗商品？",
    body: [
      "在 KVB 平台交易黄金、白银、原油等品种，分散投资组合。凭借紧点差、快速执行与专业支持，在全球市场中发现机遇。",
    ],
    image: "/assets/products/commodities.png",
    symbolListTitle: "查看完整大宗商品列表：",
    symbols: PRODUCT_SYMBOLS.commodities,
    tradingSessions: {
      title: "交易时段",
      body: [
        "贵金属：周一至周五 01:05–23:00（UTC+2）。",
        "美原油（USOIL）：周一至周五 01:05–23:00（UTC+2）。",
        "布伦特原油（UKOIL）：周一至周五 03:06–22:00（UTC+2）。",
        "服务器时间：UTC+2",
      ],
    },
    specifications: {
      title: "合约规格",
      groups: [
        {
          name: "UKOIL, USOIL",
          rows: [
            { label: "合约规模", value: "1,000 桶" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "至周五有效" },
            { label: "隔夜利息类型", value: "按点数" },
            { label: "三倍隔夜利息", value: "周三" },
          ],
        },
        {
          name: "XAUUSD",
          rows: [
            { label: "合约规模", value: "100 金衡盎司" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "至周五有效" },
            { label: "隔夜利息类型", value: "按点数" },
            { label: "三倍隔夜利息", value: "周三" },
          ],
        },
        {
          name: "XAGUSD",
          rows: [
            { label: "合约规模", value: "5,000 金衡盎司" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "至周五有效" },
            { label: "隔夜利息类型", value: "按点数" },
            { label: "三倍隔夜利息", value: "周三" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("为何选择 KVB 交易大宗商品？"),
  },
  indices: {
    title: "指数",
    description: "交易美国、欧洲及亚洲等主要股票指数。",
    introTitle: "什么是指数？",
    body: [
      "指数反映某一交易所一组股票的价格表现，例如富时 100 追踪伦敦证券交易所最大的 100 家公司。",
      "在 KVB 交易指数，只需开立一个仓位即可布局整体经济或行业。了解更多并开始交易！",
    ],
    image: "/assets/products/indices.png",
    symbolListTitle: "查看完整指数列表：",
    symbols: PRODUCT_SYMBOLS.indices,
    tradingSessions: {
      title: "交易时段",
      body: [
        "各指数交易时间不同。示例：纳斯达克100 / 标普500 — 周一 00:05 至周五 22:59（UTC+2），每日休市 22:16–22:30；富时100 — 周一 00:05 至周五 22:55（UTC+2），每日休市 22:16–22:30；中国A50 — 周一 03:15 至周五 19:30（UTC+2），每日休市 10:16–11:14。",
        "服务器时间：UTC+2",
      ],
    },
    specifications: {
      title: "合约规格",
      groups: [
        {
          rows: [
            { label: "合约规模", value: "1 份合约" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "当日有效" },
            { label: "隔夜利息类型", value: "按百分比" },
            { label: "三倍隔夜利息", value: "周五" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("为何选择 KVB 交易指数？"),
  },
  shares: {
    title: "股票",
    description: "投资全球主要交易所的领先股票。",
    introTitle: "什么是股票？",
    body: [
      "在 KVB 进行股票交易，可在不持有标的资产的情况下，从价格波动中寻求收益，以更经济、高效的方式参与市场。",
      "股票市场充满机遇。您可交易全球知名公司股票，把握波动而无需实际买入股票！KVB 精选全球最受欢迎的股票品种。",
    ],
    image: "/assets/products/shares.png",
    symbolListTitle: "查看完整股票列表：",
    symbols: PRODUCT_SYMBOLS.shares,
    tradingSessions: {
      title: "交易时段",
      body: [
        "股票交易时间因市场而异。",
        "美股：周一至周五 16:36–22:50（UTC+2）。",
        "欧股：周一至周五 10:05–18:30（UTC+2）。",
        "服务器时间：UTC+2",
      ],
    },
    specifications: {
      title: "合约规格",
      groups: [
        {
          rows: [
            { label: "合约规模", value: "1 股" },
            { label: "最小手数", value: "1 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "当日有效" },
            { label: "隔夜利息类型", value: "按百分比" },
            { label: "三倍隔夜利息", value: "周三" },
          ],
        },
      ],
    },
    footnote:
      "*所有美股产品在财报发布前一个交易日将杠杆调整为 1 倍，并于次日开盘后 15 分钟内恢复正常，请据此管理您的仓位。\n\n" +
      footnote,
    ...whyTradeFeatures("为何选择 KVB 交易股票？"),
  },
  cryptocurrencies: {
    title: "加密货币",
    description: "以灵活杠杆交易热门数字资产。",
    introTitle: "什么是加密货币？",
    body: [
      "在 KVB 进行加密货币交易，通过衍生品投机价格走势，无需持有标的币种。看涨可做多，看跌可做空。",
      "在 KVB 交易比特币、以太坊、莱特币等全球热门加密货币！",
    ],
    image: "/assets/products/crypto.png",
    symbolListTitle: "查看完整加密货币列表：",
    symbols: PRODUCT_SYMBOLS.cryptocurrencies,
    tradingSessions: {
      title: "交易时段",
      body: [
        "加密货币交易时间：周一至周六 00:01–23:55；周日 00:01–00:59 及 03:01–23:55（UTC+2）。",
        "服务器时间：UTC+2",
      ],
    },
    specifications: {
      title: "合约规格",
      groups: [
        {
          name: "BTCUSD",
          rows: [
            { label: "合约规模", value: "5 枚" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "撤销前有效" },
            { label: "隔夜利息类型", value: "按百分比" },
            { label: "三倍隔夜利息", value: "周五" },
          ],
        },
        {
          name: "BCHUSD, BNBUSD, ETHUSD",
          rows: [
            { label: "合约规模", value: "10 枚" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "撤销前有效" },
            { label: "隔夜利息类型", value: "按百分比" },
            { label: "三倍隔夜利息", value: "周五" },
          ],
        },
        {
          name: "AVAXUSD, LTCUSD, SOLUSD",
          rows: [
            { label: "合约规模", value: "100 枚" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "撤销前有效" },
            { label: "隔夜利息类型", value: "按百分比" },
            { label: "三倍隔夜利息", value: "周五" },
          ],
        },
        {
          name: "DOTUSD",
          rows: [
            { label: "合约规模", value: "1,000 枚" },
            { label: "最小手数", value: "0.01 手" },
            { label: "最大手数", value: "20 手" },
            { label: "有效期", value: "撤销前有效" },
            { label: "隔夜利息类型", value: "按百分比" },
            { label: "三倍隔夜利息", value: "周五" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("为何选择 KVB 交易加密货币？"),
  },
};

export default pages;
