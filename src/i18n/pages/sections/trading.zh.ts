import { featureImages } from "@/data/media";
import type { PageContent } from "../types";

const accountColumns = [
  { id: "cent", label: "美分账户" },
  { id: "classic", label: "经典账户" },
  { id: "plus", label: "高级账户" },
  { id: "pro", label: "专业账户" },
];

const accountComparison = {
  title: "账户类型对比",
  columns: accountColumns,
  rows: [
    {
      label: "起始点差",
      values: { cent: "1.2 点", classic: "1.2 点", plus: "0.0 点", pro: "0.7 点" },
    },
    {
      label: "点差类型",
      values: { cent: "浮动", classic: "浮动", plus: "浮动", pro: "浮动" },
    },
    {
      label: "杠杆",
      values: {
        cent: "最高 1:1000",
        classic: "最高 1:1000",
        plus: "最高 1:1000",
        pro: "最高 1:1000",
      },
    },
    {
      label: "最低入金",
      values: {
        cent: "10 美元",
        classic: "30 美元",
        plus: "2,000 美元",
        pro: "2,000 美元",
      },
    },
    {
      label: "单笔最小手数",
      values: { cent: "0.01 手", classic: "0.01 手", plus: "0.01 手", pro: "0.01 手" },
    },
    {
      label: "单笔最大手数",
      values: { cent: "20 手", classic: "20 手", plus: "20 手", pro: "20 手" },
    },
    {
      label: "追保 / 强平水平",
      values: { cent: "100% / 20%", classic: "100% / 20%", plus: "100% / 20%", pro: "100% / 20%" },
    },
    {
      label: "负余额保护",
      values: { cent: "支持", classic: "支持", plus: "支持", pro: "支持" },
    },
    {
      label: "市场洞察",
      values: {
        cent: "头条、视频、快讯、日历等",
        classic: "头条、视频、快讯、日历等",
        plus: "头条、视频、快讯、日历等",
        pro: "头条、视频、快讯、日历等",
      },
    },
    {
      label: "可交易品种",
      values: {
        cent: "外汇、大宗商品、指数、股票、加密货币",
        classic: "外汇、大宗商品、指数、股票、加密货币",
        plus: "外汇、大宗商品、指数、股票、加密货币",
        pro: "外汇、大宗商品、指数、股票、加密货币",
      },
    },
    {
      label: "交易平台",
      values: {
        cent: "KVB App、ActsTrade、MetaTrader 4、MetaTrader 5",
        classic: "KVB App、ActsTrade、MetaTrader 4、MetaTrader 5",
        plus: "KVB App、ActsTrade、MetaTrader 4、MetaTrader 5",
        pro: "KVB App、ActsTrade、MetaTrader 4、MetaTrader 5",
      },
    },
  ],
};

const depositFaqs = [
  {
    question: "可以使用哪些账户入金？",
    answer:
      "必须使用您本人名下的支付账户入金，不接受第三方支付或代付。详情请登录客户专区（Trader Area）查看。",
  },
  {
    question: "入金失败怎么办？",
    answer:
      "可能是超出每日转账限额或借记卡可用额度不足，请确认卡片未过期。若仍失败，请联系在线客服。",
  },
  {
    question: "入金是否收费？",
    answer:
      "KVB 不收取入金费用，但银行、卡组织或支付网关可能收取手续费，该部分费用不在我方控制范围内。",
  },
  {
    question: "入金多久到账？",
    answer: "入金通常即时到账。",
  },
  {
    question: "支持哪些入金方式？如何操作？",
    answer:
      "支持银行转账、USDT 等多种方式。登录客户专区，选择「资金」→「入金」，选择渠道并填写金额与收款交易账户即可。",
  },
  {
    question: "出金是否收费？",
    answer: "提供多种出金方式，具体费用请在客户专区出金页面查看。",
  },
  {
    question: "出金需要多长时间？",
    answer:
      "通常在 2 小时内处理。大额出金可能因申请时间与银行处理而延迟，跨行转账以银行实际到账时间为准。",
  },
  {
    question: "入金后能否立即申请出金？",
    answer: "入金到账后需等待 24 小时方可提交出金申请。",
  },
];

const leverageFaqs = [
  {
    question: "什么是外汇追保（Margin Call）？",
    answer:
      "已用保证金 > 净值时触发追保通知，提示仓位可能被强制平仓。收到追保后可能需要追加资金以维持持仓。",
  },
  {
    question: "保证金如何计算？",
    answer: "通常根据所选杠杆与合约规模计算：保证金 = 合约规模 / 杠杆比例。",
  },
  {
    question: "什么是杠杆比例？",
    answer: "杠杆比例指借入资金与自有资金的比例，使您能以较少本金控制更大仓位。",
  },
];

const policyPages: Record<string, PageContent> = {
  "account-types": {
    title: "账户类型",
    description:
      "美分、经典、高级与专业账户灵活可选，点差具竞争力，交易条件因账户而异，满足新手与专业交易者需求。",
    introTitle: "按您的方式交易",
    body: [
      "为何要接受不满意的交易条件？我们提供多种账户类型，精心匹配不同交易者的需求。",
      "不确定哪种账户最适合？联系我们，我们将协助您做出选择。",
    ],
    comparisonTable: accountComparison,
    footnote: "*适用条款与条件。最新账户规格请以客户专区为准。",
  },
  "deposit-withdrawal": {
    title: "入金与出金",
    description: "KVB 提供便捷、快速、安全的出入金方式，客户资金隔离存放。",
    image: "/assets/features/wallet.svg",
    body: [
      "KVB 为您提供快速、便捷、安全的出入金服务，并采取一切必要措施保护客户、严格遵守反洗钱规定。不接受第三方代存入金。",
    ],
    featureTitle: "入金方式",
    features: [
      {
        title: "国际银行转账",
        description: "通过国际电汇入金，具体币种与到账时间请在客户专区发起入金时查看。",
        image: featureImages[2],
      },
      {
        title: "隔离账户",
        description:
          "客户资金存放于隔离账户。KVB 不对入金收费；从他行汇入隔离账户时，银行可能收取转账费用。",
        image: featureImages[2],
      },
      {
        title: "本地银行转账",
        description: "提供便捷的本地入金渠道，支持多种货币，详情请登录客户专区。",
        image: featureImages[2],
      },
      {
        title: "加密货币",
        description:
          "支持 USDT（ERC20）、USDT（TRC20）等。入金方式：加密货币转账；费用：免费；到账：即时。",
        image: featureImages[2],
      },
    ],
    sections: [
      {
        title: "出金",
        body: [
          "我们提供多种灵活便捷的出金方式，请登录客户专区提交出金申请。",
          "仅可向本人名下银行账户出金，KVB 无法为第三方账户办理资金划转。",
        ],
      },
    ],
    specifications: {
      title: "出金处理",
      groups: [
        {
          rows: [
            {
              label: "处理方式",
              value: "银行转账、加密货币等 — 详见客户专区",
            },
            {
              label: "处理时间",
              value: "最长约 2 小时（仅工作日适用）",
            },
          ],
        },
      ],
    },
    bulletTitle: "重要提示",
    bullets: [
      "所有资金操作均需安全审核，出金前我们可能要求提供银行流水截图或身份证明等补充材料。",
      "通常按原入金方式及路径退回资金；在合理情况下我们也可酌情采用其他方式。",
      "国际电汇可能产生银行手续费，请咨询您的开户行。",
    ],
    faqs: {
      title: "常见问题",
      items: depositFaqs,
    },
  },
  "leverage-margin": {
    title: "杠杆与保证金",
    description:
      "KVB 提供具竞争力的点差、快速执行，最高杠杆可达 1:1000（视账户类型与品种而定）。",
    body: [
      "杠杆是帮助交易者以较少资金获得更大市场敞口的金融工具，本质上是通过向经纪商借入资金来控制更大名义金额。",
      "在外汇交易中使用杠杆可在行情有利时放大收益，但行情不利时也会放大亏损，请谨慎使用。",
    ],
    sections: [
      {
        title: "什么是杠杆及如何使用？",
        body: [
          "杠杆让您能以低于账户余额的名义金额开仓。KVB 在符合条件的账户上最高提供 1:1000 杠杆。",
          "在实盘使用前请充分理解杠杆风险。若已做好准备，可查看账户类型了解最高杠杆选项。",
        ],
      },
      {
        title: "外汇杠杆交易示例",
        body: [
          "假设您有 1,000 美元并开立保证金账户交易 CFD。入金 1,000 美元后，若选择 1:100 杠杆，则可控制 100,000 美元名义敞口。",
          "用于开仓的 1,000 美元即为保证金（Margin）。",
        ],
      },
      {
        title: "什么是外汇保证金？",
        body: [
          "保证金是您为开仓并运用杠杆而存入的资金。KVB 最低保证金要求为 0.1%，即最高可提供 1:1000 杠杆。",
        ],
      },
    ],
    comparisonTable: {
      title: "杠杆示例",
      columns: [
        { id: "deposit", label: "入金（保证金）" },
        { id: "ratio", label: "杠杆比例" },
        { id: "exposure", label: "敞口" },
      ],
      rows: [{ label: "示例", values: { deposit: "1,000 美元", ratio: "1:100", exposure: "100,000 美元" } }],
    },
    featureTitle: "保证金相关术语",
    features: [
      {
        title: "保证金要求",
        description: "开仓所需的资金金额。",
        image: featureImages[3],
      },
      {
        title: "账户余额",
        description: "交易账户中的总金额。",
        image: featureImages[3],
      },
      {
        title: "净值",
        description: "账户余额加上未平仓盈亏，用于计算保证金水平。",
        image: featureImages[3],
      },
      {
        title: "可用保证金",
        description: "可用于开新仓的资金。",
        image: featureImages[3],
      },
      {
        title: "已用保证金",
        description: "当前持仓占用的保证金。",
        image: featureImages[3],
      },
      {
        title: "追保（Margin Call）",
        description: "保证金水平低于要求时的预警，可能需要追加资金以维持仓位。",
        image: featureImages[3],
      },
    ],
    faqs: {
      title: "常见问题",
      items: leverageFaqs,
    },
  },
  "negative-balance-protection": {
    title: "负余额保护",
    description:
      "KVB 提供负余额保护，在一般市场条件下帮助避免账户余额低于零，为零售客户提供额外保障。",
    body: [
      "负余额保护意味着在一般市场条件下，交易亏损不应超过账户中的资金。虽不能消除市场风险，但有助于避免欠款超过入金金额。",
    ],
    sections: [
      {
        title: "什么是负余额保护？",
        body: [
          "在一般市场条件下，负余额保护有助于确保零售客户的损失不超过账户入金金额。",
          "在保护生效时，市场剧烈波动对账户的影响相对可控；极端跳空行情仍须以条款为准。",
        ],
      },
      {
        title: "负余额保护的优势",
        body: [
          "为刚接触 CFD 与保证金交易的用户提供安全网。波动与杠杆叠加可能导致快速亏损，保护机制有助于管理该风险。",
          "合理运用波动可带来交易机会；负余额保护让您更有信心，损失以入金为上限。",
          "KVB 致力于提供安全的交易环境 — 我们与您同在。",
        ],
      },
    ],
  },
};

const platformPages: Record<string, PageContent> = {
  "metatrader-4": {
    title: "MetaTrader 4",
    description: "最受欢迎的零售交易平台，集图表、下单与仓位管理于一体。",
    body: [
      "MetaTrader 4 凭借直观界面与强大功能，深受新手与资深交易者青睐。",
      "图表分析、下单交易、管理仓位，尽在一站式平台。",
      "下载 MT4 桌面或移动版，连接您的 KVB 账户。",
    ],
    image: "/assets/platforms/metatrader4.svg",
  },
  "metatrader-5": {
    title: "MetaTrader 5",
    description: "功能更丰富的多资产平台，分析与执行能力更强。",
    body: [
      "MetaTrader 5 将易用设计与高级功能结合，适合初学者与专业人士。",
      "一键交易、强大分析与可定制指标，助您高效交易。",
      "相较 MT4，提供更多时间周期、订单类型与分析工具。",
    ],
    image: "/assets/platforms/metatrader5.svg",
  },
  "kvb-desktop": {
    title: "KVB Desktop",
    description: "随时随地通过电脑接入全球市场。",
    body: [
      "KVB Desktop 是终极 PC 交易平台，集高级图表、深度分析、流畅下单与全面账户及资金管理于一体。",
      "实时接入全球市场并整合财经事件，助您明智决策、一键交易。",
    ],
    image: "/assets/home-mt.png",
    featureTitle: "桌面端亮点",
    features: [
      {
        title: "流畅交易体验",
        description: "在同一界面查看报价、持仓、合约规格、市场情绪与分析。",
      },
      {
        title: "全面账户管理",
        description: "管理账户、历史成交、挂单及出入金，并查看多维数据报表。",
      },
      {
        title: "领先市场资讯",
        description: "市场趋势、深度分析、要闻、经济日历与即时提醒一应俱全。",
      },
      {
        title: "桌面端交易",
        description: "先进桌面方案，并提供代理服务以改善网络访问稳定性。",
      },
    ],
  },
  "kvb-app": {
    title: "KVB App",
    description: "终极移动交易应用 — 随时随地接入全球市场。",
    body: [
      "KVB App 集图表分析、下单执行、账户与资金管理及财经事件于一体，一键接入全球市场。",
    ],
    image: "/assets/platforms/kvb-app.svg",
    featureTitle: "移动端功能",
    features: [
      {
        title: "资金管理",
        description: "0 佣金入金、账户间转账及多种便捷出金方式。",
      },
      {
        title: "完整交易功能",
        description: "开仓、挂单、平仓一键完成，可设置偏差、止盈止损。",
      },
      {
        title: "全球市场资讯",
        description: "头条、全球快讯、经济日历与深度分析，均在 App 内轻松获取。",
      },
      {
        title: "移动交易",
        description: "交易外汇、大宗商品、指数、股票与贵金属，工具齐全、随时下单。",
      },
    ],
  },
  actstrade: {
    title: "ActsTrade",
    description: "简洁、快速、可靠 — 支持各类浏览器与操作系统。",
    body: [
      "ActsTrade 在各浏览器与操作系统上提供简洁、快速、可靠的交易体验。",
      "欢迎体验 ActsTrade — 无缝交易外汇、大宗商品、指数与股票，跨平台无障碍。",
      "一键执行，配合高级分析工具与稳健安全机制，无论新手或专业交易者均可轻松上手。",
    ],
    image: "/assets/platforms/actstrade.svg",
  },
  "copy-trading": {
    title: "跟单交易",
    description: "跟随经验丰富的交易者，自动复制交易策略。",
    body: [
      "跟单计划可在 MetaTrader 服务器间复制交易，开平仓同步如同手动交易。",
      "投资者可复制资深交易者操作，可作为信号提供者或跟单者参与。",
      "双方采用利润分成模式；信号提供者可设定跟单账户要求，跟单者可按目标选择提供者。",
    ],
  },
};

export default { ...policyPages, ...platformPages };
