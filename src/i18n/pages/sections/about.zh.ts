import type { PageContent } from "../types";

const legalPdf = "https://static.kvbplus.com/pdf";

const aboutPages: Record<string, PageContent> = {
  "who-we-are": {
    title: "关于我们",
    description:
      "KVB 以技术前沿的经纪商自居，为客户提供真实的市场准入与优越的交易条件。",
    image: "/assets/about/who-we-are.png",
    body: [
      "KVB 以技术前沿的经纪商自居，为客户提供真实的市场准入与最佳交易条件。公司成立于 2001 年，现已成为全球领先的交易服务公司。目前我们在 100 多个国家拥有客户，并提供五大资产类别的经纪服务。",
    ],
    sections: [
      {
        title: "我们的使命",
        image: "/assets/about/mission.png",
        body: [
          "凭借超过 20 年的行业知识与经验，KVB 将技术、金融市场与分析融为一体，为您带来前沿的在线交易解决方案。",
          "我们的目标是提供市场领先的创新交易体验，兼具教育性与直观性，赋能客户掌控自己的财务未来。",
        ],
      },
    ],
    featureTitle: "为何选择 KVB 交易？",
    features: [
      {
        title: "卓越交易平台",
        description:
          "我们在技术上投入重金，让客户可通过电脑、移动端或网页访问强大创新的交易平台，随时随地交易。",
        image: "/assets/about/platforms.png",
      },
      {
        title: "专业工具",
        description:
          "交易平台友好且功能丰富，配备多种高级工具与资源，助您提升交易技能并做出明智决策。",
        image: "/assets/about/tools.png",
      },
      {
        title: "极致交易条件",
        description:
          "每一分成本节省都转化为更高利润空间。交易 100 多种金融产品，点差低至 0.0，佣金处于市场较低水平。",
        image: "/assets/about/trading-conditions.png",
      },
      {
        title: "专属客户服务",
        description: "多语言专属客服团队每周 5 天、每天 24 小时为您提供卓越支持。",
        image: "/assets/about/support.png",
      },
    ],
  },
  license: {
    title: "监管牌照",
    description: "KVB Prime Limited 的监管授权与牌照信息。",
    image: "/assets/about/license-hero.png",
    body: [
      "KVB Prime Limited（「KVB」）经安儒昂离岸金融管理局（AOFA）授权，作为国际经纪与清算所提供金融服务，牌照编号 L15626 / KVB。",
      "KVB Prime Limited 依据 2005 年第 005 号政府公告授予的权力，获 AOFA 批准并监管，可开展包括外汇、货币、股票、大宗商品及各类获准监管证券在内的全部经纪活动。",
      "KVB Prime Limited 在财务报告、客户资产管理、客户资金隔离等各个方面均严格执行监管与合规要求。",
    ],
    sections: [
      {
        title: "监管机构",
        body: [
          "安儒昂离岸金融管理局（AOFA）成立于 2001 年，是安儒昂（科摩罗）金融部门的主要监管机构，致力于维护最高标准的诚信与透明。",
          "AOFA 通过全面监管框架促进负责任的金融实践，防范洗钱，并执行《2005 年洗钱（预防）法》。",
        ],
      },
    ],
    featureTitle: "客户保护",
    features: [
      {
        title: "客户资金隔离",
        description:
          "存入 KVB 的所有客户资金与公司自有资金完全隔离，存放于顶级银行机构的独立客户资金账户中。",
        image: "/assets/about/segregation.png",
      },
      {
        title: "真实 STP 与 NDD 实践",
        description: "KVB 仅作为中介撮合交易，严格不与客户对赌。",
        image: "/assets/about/stp.png",
      },
      {
        title: "反洗钱",
        description: "依照《2005 年安儒昂洗钱（预防）法》，KVB 制定政策与程序以防范洗钱活动。",
        image: "/assets/about/aml.png",
      },
    ],
    links: [
      {
        label: "在 AOFA 官网了解更多牌照信息",
        href: "https://anjouanoffshorefinanceauthority.org/register/kvb-prime-limited/",
      },
    ],
  },
  awards: {
    title: "奖项荣誉",
    description: "行业认可彰显我们以前沿技术变革交易体验的承诺。",
    image: "/assets/about/awards-hero.png",
    body: [
      "多年来，KVB 荣获多项权威奖项，彰显我们以尖端技术与创新方案变革交易体验的承诺。",
    ],
    awards: [
      { title: "信任与安全卓越奖", issuer: "Trustfinance", image: "/assets/about/awards/1.png" },
      { title: "2026 全球交易服务卓越奖", issuer: "International Business Magazine", image: "/assets/about/awards/2.png" },
      { title: "2026 全球最佳在线交易解决方案提供商", issuer: "International Business Magazine", image: "/assets/about/awards/3.png" },
      { title: "2026 全球最具创新交易平台", issuer: "International Business Magazine", image: "/assets/about/awards/4.png" },
      { title: "2025 最受欢迎经纪商", issuer: "Followme", image: "/assets/about/awards/5.png" },
      { title: "2025 亚洲最佳交易平台", issuer: "Global Business & Finance Magazine", image: "/assets/about/awards/6.png" },
      { title: "2025 泰国最佳交易体验", issuer: "World Business Outlook", image: "/assets/about/awards/7.png" },
      { title: "最佳外汇经纪商", issuer: "Trust Score FX", image: "/assets/about/awards/8.png" },
      { title: "2025 亚洲最受信赖外汇经纪商", issuer: "International Business Magazine", image: "/assets/about/awards/9.png" },
      { title: "2025 泰国最受欢迎经纪商", issuer: "Finance Derivative", image: "/assets/about/awards/10.png" },
      { title: "2025 越南最受欢迎经纪商", issuer: "Finance Derivative", image: "/assets/about/awards/11.png" },
      { title: "2025 亚洲最佳交易平台", issuer: "Brands Review Magazine", image: "/assets/about/awards/12.png" },
      { title: "2024 最佳创新经纪商", issuer: "Brokersview", image: "/assets/about/awards/13.png" },
      { title: "2024 最受欢迎经纪商", issuer: "Followme", image: "/assets/about/awards/14.png" },
      { title: "2022 最受欢迎经纪商", issuer: "Followme", image: "/assets/about/awards/15.png" },
      { title: "2021 最佳外汇交易体验", issuer: "Global Forex Awards", image: "/assets/about/awards/16.png" },
    ],
  },
  media: {
    title: "媒体",
    description: "通过媒体报道与行业亮点了解 KVB 的故事。",
    image: "/assets/about/media-hero.png",
    body: [
      "了解 KVB 如何持续塑造全球金融市场。从专家洞见到重要里程碑，看看媒体如何评价我们及我们在全球的影响力。",
    ],
    mediaItems: [
      {
        title: "携手同行：KVB 的企业社会责任",
        excerpt: "KVB 向泰国红十字会捐款，支持泰国洪灾救援，帮助受灾社区。",
        image: "/assets/about/media/1.jpg",
      },
      {
        title: "KVB 交易平台：交易者真实评价",
        excerpt: "KVB 是一家在全球金融市场活跃超过二十年的经纪交易平台，深受交易者信赖。",
        image: "/assets/about/media/2.jpg",
      },
      {
        title: "KVB 荣获 2024 最佳创新经纪商",
        excerpt: "BrokersView 宣布 KVB 在 2024 年杰出经纪商评选中荣获最佳创新经纪商。",
        image: "/assets/about/media/3.png",
      },
      {
        title: "KVB 荣膺 2024 最受欢迎经纪商",
        excerpt: "KVB 在 Followme 主办的 2024 最受欢迎经纪商评选中脱颖而出，创下参与纪录。",
        image: "/assets/about/media/4.png",
      },
      {
        title: "KVB 亚洲交易卓越表现获认可",
        excerpt: "国际媒体持续报道 KVB 在亚洲市场以技术、透明与客户导向解决方案做出的贡献。",
        image: "/assets/about/media/5.png",
      },
      {
        title: "KVB 加强全球市场布局",
        excerpt: "媒体报道 KVB 以创新平台与竞争力条件，服务覆盖 100 多个国家的交易者。",
        image: "/assets/about/media/6.png",
      },
    ],
  },
  "join-us": {
    title: "加入我们",
    description: "加入真正的国际化金融服务与金融科技团队，拓展职业视野。",
    image: "/assets/about/join-hero.png",
    body: [
      "在真正的国际化企业工作，您将获得更广阔的视野！团队成员的才华与热情是我们实力与专业的基础。金融科技与金融服务领域的精英正在 KVB 塑造未来，欢迎加入我们！",
    ],
    sections: [
      {
        title: "了解更多",
        image: "/assets/about/join-about.png",
        body: [
          "KVB 的创立旨在为投资者提供「安全、公平、透明的环境」。公司核心价值观指引我们的每一步，我们持续提供满足客户金融需求的解决方案。",
          "创新与本地优秀人才是我们成功的两大基石。",
        ],
      },
      {
        title: "加入行业先驱",
        image: "/assets/about/join-team.png",
        body: [
          "KVB 提供独特的工作机会，通过培训、工作坊与研讨会支持您的自我提升。我们鼓励创意，创新始于想法。",
          "我们营造理想的工作氛围，助您孕育改变行业的原创理念！",
        ],
      },
      {
        title: "招聘理念",
        image: "/assets/about/company-1.png",
        body: [
          "我们重视多元化，积极吸纳来自全球各地的本地人才，拓宽团队视野。",
          "欢迎领导者、决策者与创意人才加入我们，以全新思路应对日常挑战。",
          "加入团队，分享您的突破性想法——在这里您会被倾听，并有机会产生影响。",
        ],
      },
    ],
    bulletTitle: "职场性别平等",
    bullets: [
      "同工同酬，同等或可比工作获得平等报酬。",
      "消除女性充分平等参与劳动力市场的障碍。",
      "在所有职业与行业中提供平等机会，包括领导岗位，不因性别而别。",
      "消除性别歧视，尤其在家庭与照护责任方面。",
    ],
    contacts: [
      { label: "邮箱", value: "support@kvbplus.com" },
      { label: "服务时间", value: "周一至周五 7:30 - 23:00" },
      {
        label: "地址",
        value: "Hamchako, Mutsamudu, The Autonomous Island of Anjouan, Union of Comoros",
      },
    ],
  },
  "contact-us": {
    title: "联系我们",
    description: "有任何问题？告诉我们如何为您提供帮助。",
    image: "/assets/about/contact-hero.png",
    body: ["多语言专属客服团队每周 5 天、每天 24 小时为您提供卓越支持。"],
    contacts: [
      { label: "邮箱", value: "support@kvbplus.com" },
      { label: "服务时间", value: "周一至周五 7:30 - 23:00" },
      {
        label: "地址",
        value:
          "Graha Arsa LT.1 Ruang 1T-1.1, JL Siaga Raya No. 31, Pejaten Barat, Pasar Minggu, Jakarta Selatan 12510, Indonesia",
      },
    ],
  },
  "legal-documents": {
    title: "法律文件",
    description: "开户前请查阅、理解并接受所有必要的法律信息。",
    image: "/assets/about/legal-hero.png",
    body: ["交易前请充分阅读并理解我们的风险披露及相关政策。"],
    links: [
      { label: "客户协议", href: `${legalPdf}/client-agreement.pdf` },
      { label: "风险披露", href: `${legalPdf}/risk-disclosure.pdf` },
      { label: "隐私政策", href: `${legalPdf}/privacy-policy.pdf` },
      { label: "条款与条件", href: `${legalPdf}/terms-conditions.pdf` },
      { label: "Cookie 政策", href: `${legalPdf}/cookies-policy.pdf` },
      { label: "KYC 政策", href: `${legalPdf}/kyc-policy.pdf` },
      { label: "AML 政策", href: `${legalPdf}/aml-policy.pdf` },
      { label: "退款政策", href: `${legalPdf}/refund-policy.pdf` },
    ],
  },
};

export default aboutPages;
