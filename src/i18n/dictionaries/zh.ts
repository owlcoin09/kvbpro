import type { Dictionary } from "../types";

const dict: Dictionary = {
  site: {
    name: "KVB",
    legalName: "KVB Prime Limited",
    title: "KVB | 全球金融市场 - 外汇、黄金、股票、指数",
    description:
      "通过 KVB 交易外汇、大宗商品、指数、股票与加密货币。直观交易工具、MetaTrader 平台及 24/5 多语言客户支持。",
    keywords: [
      "KVB",
      "外汇交易",
      "黄金交易",
      "大宗商品",
      "指数",
      "股票",
      "加密货币交易",
      "MetaTrader 4",
      "MetaTrader 5",
      "全球金融市场",
    ],
  },
  nav: {
    home: "首页",
    professional: "专业服务",
    groups: [
      {
        id: "products",
        label: "产品",
        children: [
          { label: "外汇", slug: "forex" },
          { label: "大宗商品", slug: "commodities" },
          { label: "指数", slug: "indices" },
          { label: "股票", slug: "shares" },
          { label: "加密货币", slug: "cryptocurrencies" },
        ],
      },
      {
        id: "trading",
        label: "交易",
        children: [
          { label: "账户类型", slug: "account-types" },
          { label: "入金与出金", slug: "deposit-withdrawal" },
          { label: "杠杆与保证金", slug: "leverage-margin" },
          { label: "负余额保护", slug: "negative-balance-protection" },
          { label: "MetaTrader 4", slug: "metatrader-4" },
          { label: "MetaTrader 5", slug: "metatrader-5" },
          { label: "KVB Desktop", slug: "kvb-desktop" },
          { label: "KVB App", slug: "kvb-app" },
          { label: "ActsTrade", slug: "actstrade" },
          { label: "跟单交易", slug: "copy-trading" },
        ],
      },
      {
        id: "about",
        label: "关于我们",
        children: [
          { label: "关于我们", slug: "who-we-are" },
          { label: "监管牌照", slug: "license" },
          { label: "奖项荣誉", slug: "awards" },
          { label: "媒体", slug: "media" },
          { label: "公司博客", slug: "company-blog" },
          { label: "ESG", slug: "esg" },
          { label: "加入我们", slug: "join-us" },
          { label: "联系我们", slug: "contact-us" },
          { label: "法律文件", slug: "legal-documents" },
          { label: "公告", slug: "announcements" },
        ],
      },
    ],
    contactUs: "联系我们",
    openAccount: "开立账户",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    homeAria: "KVB 首页",
    mainNavAria: "主导航",
    breadcrumbAria: "面包屑导航",
  },
  theme: {
    light: "浅色",
    dark: "深色",
    system: "跟随系统",
    menuAria: "主题",
  },
  footer: {
    contactTitle: "联系我们",
    columns: {
      products: "产品",
      trading: "交易",
      about: "关于我们",
    },
    products: ["外汇", "大宗商品", "指数", "股票", "加密货币"],
    trading: [
      "账户类型",
      "入金与出金",
      "杠杆与保证金",
      "负余额保护",
      "MetaTrader 4",
      "MetaTrader 5",
      "KVB Desktop",
      "KVB App",
      "ActsTrade",
      "跟单交易",
    ],
    about: [
      "关于我们",
      "监管牌照",
      "奖项荣誉",
      "媒体",
      "公司博客",
      "ESG",
      "加入我们",
      "联系我们",
      "法律文件",
      "公告",
    ],
  },
  hero: {
    headline: "KVB",
    subheadline: "让交易更简单",
    description:
      "涵盖多元投资品种、直观交易工具与市场洞察，助您高效执行交易策略。",
    ctaPrimary: "开始交易",
    campaigns: {
      title: "参与活动，开启交易新旅程",
      subtitle:
        "入金赠金、免隔夜利息账户、交易竞赛等多种活动，总有一款适合您。",
      learnMore: "了解更多",
      items: [
        {
          title: "免隔夜利息计划",
          description:
            "「免隔夜利息计划」是一项降低交易成本、提升盈利潜力的推广活动。需满足一定的「交易活动」条件方可参与。",
        },
        {
          title: "幸运抽奖",
          description: "点击转盘，揭晓您的奖励——从即时奖品到隐藏大奖。",
        },
        {
          title: "转户赠金",
          description: "立即转户，与 KVB 一起双倍收获奖励！",
        },
      ],
    },
  },
  markets: {
    title: "接入并交易全球金融市场",
    description:
      "通过 KVB 账户与平台探索全球金融市场，交易外汇、大宗商品、指数、股票与加密货币。",
    disclaimer:
      "*基于 MT4 账户点差，报价仅供参考。请参阅各品种规格了解具体交易条件。",
    products: [
      { name: "外汇", description: "交易主要、次要及 exotic 货币对，点差具竞争力。" },
      { name: "大宗商品", description: "黄金、白银、原油等全球大宗商品市场。" },
      { name: "指数", description: "交易美国、欧洲及亚洲等主要股票指数。" },
      { name: "股票", description: "投资全球主要交易所的优质股票。" },
      { name: "加密货币", description: "交易热门数字资产，杠杆灵活可选。" },
    ],
  },
  tools: {
    title: "轻松交易所需的全部工具",
    description:
      "无论桌面还是移动端，KVB 让您随时贴近市场。客户可通过 MetaTrader 4、ActsTrade 及手机 App 访问全系列产品。",
    learnMore: "了解更多",
    platforms: [
      {
        name: "KVB App",
        description:
          "KVB App 是一站式交易平台，可自定义交易偏好，集资讯、趋势与创新交易功能于一体，全面助力您的交易。",
      },
      {
        name: "ActsTrade",
        description:
          "专为交易者打造的 ActsTrade 桌面平台，在 Windows 与 macOS 上提供友好且高度可定制的界面，配合强大订单管理工具，助您快速高效控仓。",
      },
      {
        name: "MetaTrader 4",
        description:
          "MetaTrader 4 是最受欢迎的零售交易平台，界面直观、功能强大，涵盖图表、下单与持仓管理所需的一切。",
      },
      {
        name: "MetaTrader 5",
        description:
          "MetaTrader 5 集易用设计与高级功能于一身，适合新手与专业交易者，支持一键交易、强大分析与可定制指标。",
      },
    ],
  },
  productsPage: {
    symbolColumn: "品种",
    tradingSessions: "交易时段",
    specifications: "合约规格",
    serverTime: "服务器时间：UTC+2",
    footnote: "*如需更多信息，请联系客户服务。",
  },
  tradingPage: {
    compareAccounts: "账户类型对比",
    faqs: "常见问题",
  },
  features: {
    items: [
      {
        title: "卓越交易平台",
        description: "重金投入技术，为客户提供 PC、移动端及网页端强大创新的交易平台，随时随地交易。",
      },
      {
        title: "专属客户服务",
        description: "多语言客服团队 24/5 在线，为您提供卓越支持体验。",
      },
      {
        title: "入金与出金",
        description: "多种灵活支付方式，助您快速、安全地完成资金存取。",
      },
      {
        title: "优质交易条件",
        description: "每一分成本节省都意味着更高利润空间。100+ 金融产品，点差低至 0.0，佣金极具竞争力。",
      },
    ],
  },
  partner: {
    title: "成为 KVB 合作伙伴",
    description:
      "介绍客户至全球领先的 KVB，获取额外收入。合作伙伴计划全面展示收益、交易、活动及出入金概况。",
    disclaimer: "*条款与细则适用",
    cta: "加入合作伙伴计划",
  },
  cta: {
    title: "与 KVB 一起交易",
    description: "通过 KVB 交易平台探索全球市场，交易外汇、大宗商品、贵金属、指数、股票与加密货币。",
    button: "开始交易",
  },
  homeProfessional: {
    badge: "KVB Pro · 专业服务",
    title: "为专业交易者，提供更专业的服务",
    description:
      "面向 kvbplus.com 活跃客户：1 对 1 专属支持、网络加速与专线、更低手续费及更多出入金通道，全面提升交易体验。",
    cta: "了解专业服务",
    highlights: [
      {
        title: "1 对 1 问题解决",
        description: "专属客户经理，快速响应账户、平台与交易相关问题。",
      },
      {
        title: "专属网络加速",
        description: "定制加速方案，优化与交易服务器之间的连接质量。",
      },
      {
        title: "更低交易手续费",
        description: "更具竞争力的点差与佣金，降低综合交易成本。",
      },
      {
        title: "更多出入金通道",
        description: "拓展本地与跨境资金方式，提升资金流转效率。",
      },
    ],
    welcome: {
      title: "发现 KVB 专业服务",
      description:
        "KVB Pro 为在 kvbplus.com 持续交易的专业用户提供一对一支持、网络加速、专线接入、更优费率与更丰富的资金通道。",
      cta: "查看专业服务",
      dismiss: "稍后再说",
    },
  },
  contact: {
    brands: ["KVB Prime", "KVB Indonesia"],
    operatingAddress:
      "Graha Arsa LT.1 Ruang 1T-1.1, JL Siaga Raya No. 31, Pejaten Barat, Pasar Minggu, Jakarta Selatan 12510, Indonesia",
    registeredAddress:
      "Hamchako, Mutsamudu, The Autonomous Island of Anjouan, Union of Comoros",
  },
  legal: {
    riskWarning:
      "风险提示：外汇交易具有较高风险，可能导致您损失全部本金，请仅使用可承受损失的资金进行交易。外汇交易可能不适合所有投资者，请确保充分了解相关风险并在必要时寻求独立建议。请阅读并充分理解我们的风险披露声明。",
    regulation:
      "KVB Prime Limited（简称「KVB」）经科摩罗联盟安儒昂离岸金融管理局（AOFA）授权监管，可从事包括外汇、股票、外汇大宗商品及各类受监管证券在内的经纪业务，牌照号 L15626 / KVB。",
    services: "通过 www.kvbplus.com 提供的所有服务与产品均由 KVB Prime Limited 提供。",
    age: "您须年满 18 周岁，或达到所在司法辖区规定的法定年龄方可使用 KVB Prime Limited 的服务。",
    restricted:
      "KVB Prime Limited 不向在其网站及服务使用受当地法律法规禁止的国家或地区的个人提供服务。",
    copyright: "KVB Prime Limited | 版权所有",
  },
  professional: {
    meta: {
      title: "KVB 专业服务 | 为 kvbplus.com 专业用户打造",
      description:
        "面向 KVB 专业交易者：1 对 1 专属支持、网络加速与专线、更低手续费及更多出入金通道，全面提升交易体验。",
    },
    hero: {
      badge: "KVB Pro · 专业服务",
      headline: "为专业交易者，提供更专业的服务",
      subheadline: "专为 kvbplus.com 活跃客户打造",
      description:
        "KVB Pro 面向在 kvbplus.com 上持续交易、对执行速度与服务质量有更高要求的专业用户。我们提供一对一问题解决、专属网络加速与专线接入、更优费率及更丰富的资金通道，助您专注策略本身。",
      ctaPrimary: "申请专业服务",
      ctaSecondary: "了解服务内容",
    },
    services: {
      sectionTitle: "核心专业服务",
      sectionSubtitle: "从技术支持到交易成本，全方位满足专业交易者的进阶需求",
      items: [
        {
          title: "1 对 1 问题解决",
          description:
            "配备专属客户经理，快速响应账户、平台与交易相关问题，减少等待时间。",
          highlights: ["专属对接，优先处理", "覆盖账户、平台与订单问题", "多语言沟通支持"],
        },
        {
          title: "专属网络加速工具",
          description:
            "为专业用户提供定制网络加速方案，优化与交易服务器之间的连接质量。",
          highlights: ["降低网络抖动与丢包", "优化 MT4/MT5 连接体验", "按需部署加速节点"],
        },
        {
          title: "专线网络接入",
          description:
            "提供专线级网络通道，显著提升连接稳定性，有效降低行情与下单延迟。",
          highlights: ["更高稳定性与可用性", "降低行情与执行延迟", "适合高频与量化场景"],
        },
        {
          title: "更低交易手续费",
          description:
            "根据交易量与账户等级，享受更具竞争力的点差与佣金方案，降低综合成本。",
          highlights: ["阶梯费率，量越大越优", "覆盖主流交易品种", "透明清晰的费用结构"],
        },
        {
          title: "更多出入金通道",
          description:
            "拓展本地与跨境入金、出金方式，缩短到账时间，提升资金流转效率。",
          highlights: ["多种法币与电子支付", "加快入金到账速度", "灵活出金安排"],
        },
      ],
    },
    rules: {
      sectionTitle: "如何开通 KVB Pro",
      sectionSubtitle:
        "完成注册并达到交易量要求后，联系专属客服，即可解锁网络加速与交易者社群",
      eligibilityLabel: "开通门槛",
      eligibility: "在 点击注册开户后，累计交易流水满 500 美元",
      howToLabel: "开通方式",
      howTo: "通过平台内 IM 联系专属客服，由专人为您办理开通",
      perksLabel: "开通即享",
      perks: ["专属网络加速工具", "专业交易者社群"],
      community:
        "进入社群后，可与同行交流跟单思路、量化模型与交易策略，在交流中精进、在陪伴中成长。",
    },
    benefits: {
      sectionTitle: "为何选择 KVB Pro",
      sectionSubtitle: "在标准服务之上，为专业交易者叠加速度与专属支持",
      items: [
        {
          title: "更快响应",
          description: "专属团队优先处理您的需求，缩短问题闭环时间。",
        },
        {
          title: "更稳连接",
          description: "加速与专线双重保障，减少因网络导致的滑点与断连。",
        },
        {
          title: "更优成本",
          description: "更低手续费与更灵活的资金通道，提升资金使用效率。",
        },
        {
          title: "更专服务",
          description: "面向专业用户的定制化方案，而非标准化模板。",
        },
      ],
    },
    cta: {
      title: "开启您的专业服务之旅",
      description:
        "若您已在 kvbplus.com 开立账户并具备一定交易经验，欢迎联系我们的团队，评估是否适合开通 KVB Pro 专业服务。",
      primary: "前往 kvbplus.com",
      secondary: "了解更多",
    },
  },
};

export default dict;
