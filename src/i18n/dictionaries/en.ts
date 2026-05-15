import type { Dictionary } from "../types";

const dict: Dictionary = {
  site: {
    name: "KVB",
    legalName: "KVB Prime Limited",
    title: "KVB | Global Financial Markets - Forex, Gold, Shares, Indices",
    description:
      "Access forex, commodities, indices, shares and cryptocurrencies through KVB. Intuitive trading tools, MetaTrader platforms, and 24/5 multilingual support.",
    keywords: [
      "KVB",
      "forex trading",
      "gold trading",
      "commodities",
      "indices",
      "shares",
      "cryptocurrency trading",
      "MetaTrader 4",
      "MetaTrader 5",
      "global financial markets",
    ],
  },
  nav: {
    home: "Home",
    professional: "Pro Services",
    groups: [
      {
        id: "products",
        label: "Products",
        children: [
          { label: "Forex", slug: "forex" },
          { label: "Commodities", slug: "commodities" },
          { label: "Indices", slug: "indices" },
          { label: "Shares", slug: "shares" },
          { label: "Cryptocurrencies", slug: "cryptocurrencies" },
        ],
      },
      {
        id: "trading",
        label: "Trading",
        children: [
          { label: "Account Types", slug: "account-types" },
          { label: "Deposit and Withdrawal", slug: "deposit-withdrawal" },
          { label: "Leverage & Margin", slug: "leverage-margin" },
          { label: "Negative Balance Protection", slug: "negative-balance-protection" },
          { label: "MetaTrader 4", slug: "metatrader-4" },
          { label: "MetaTrader 5", slug: "metatrader-5" },
          { label: "KVB Desktop", slug: "kvb-desktop" },
          { label: "KVB App", slug: "kvb-app" },
          { label: "ActsTrade", slug: "actstrade" },
          { label: "Copy-trading", slug: "copy-trading" },
        ],
      },
      {
        id: "about",
        label: "About Us",
        children: [
          { label: "Who We Are", slug: "who-we-are" },
          { label: "License", slug: "license" },
          { label: "Awards", slug: "awards" },
          { label: "Media", slug: "media" },
          { label: "Company Blog", slug: "company-blog" },
          { label: "ESG", slug: "esg" },
          { label: "Join Us", slug: "join-us" },
          { label: "Contact Us", slug: "contact-us" },
          { label: "Legal Documents", slug: "legal-documents" },
          { label: "Announcements", slug: "announcements" },
        ],
      },
    ],
    contactUs: "Contact Us",
    openAccount: "Open Account",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    homeAria: "KVB Home",
    mainNavAria: "Main navigation",
    breadcrumbAria: "Breadcrumb",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    system: "System",
    menuAria: "Theme",
  },
  footer: {
    contactTitle: "Contact us",
    columns: {
      products: "PRODUCTS",
      trading: "TRADING",
      about: "ABOUT US",
    },
    products: ["Forex", "Commodities", "Indices", "Shares", "Cryptocurrencies"],
    trading: [
      "Account Types",
      "Deposit and Withdrawal",
      "Leverage & Margin",
      "Negative Balance Protection",
      "MetaTrader 4",
      "MetaTrader 5",
      "KVB Desktop",
      "KVB App",
      "ActsTrade",
      "Copy-trading",
    ],
    about: [
      "Who We Are",
      "License",
      "Awards",
      "Media",
      "Company Blog",
      "ESG",
      "Join Us",
      "Contact Us",
      "Legal Documents",
      "Announcements",
    ],
  },
  hero: {
    headline: "KVB",
    subheadline: "Make Trading Simple",
    description:
      "Access a wide range of investment options, intuitive trading tools and market insights to help you execute your trading strategies.",
    ctaPrimary: "Start Trading",
    campaigns: {
      title: "Join our campaigns and unlock the next level of your trading journey.",
      subtitle:
        "With options like Deposit Bonuses, Swap-Free Accounts, and Trading Competitions — there's always one that suits you.",
      learnMore: "Learn More",
      items: [
        {
          title: "Swap-free Program",
          description:
            'The "Swap-free Program" is a promotional program that reduces trading cost to increase profitability. However, a commitment to certain "Trading Activities" determines eligibility.',
        },
        {
          title: "Lucky Draw",
          description:
            "Tap spin and reveal your reward — from instant wins to the hidden grand prize.",
        },
        {
          title: "Switch Bonus",
          description: "Switch now, double your rewards with KVB!",
        },
      ],
    },
  },
  markets: {
    title: "Access and Trade Global Financial Markets",
    description:
      "Discover the global financial markets through KVB accounts and platforms. Trade forex, commodities, indices, shares and cryptocurrencies.",
    disclaimer:
      "*Based on MT4 account spreads. The pricing is for indicative purposes only. Please go to individual symbol specifications to see the trading conditions.",
    products: [
      {
        name: "Forex",
        description: "Trade major, minor and exotic currency pairs with competitive spreads.",
      },
      {
        name: "Commodities",
        description: "Access gold, silver, oil and other global commodity markets.",
      },
      {
        name: "Indices",
        description: "Trade global stock indices including US, EU and Asia benchmarks.",
      },
      {
        name: "Shares",
        description: "Invest in leading global equities from major exchanges.",
      },
      {
        name: "Cryptocurrencies",
        description: "Trade popular digital assets with flexible leverage options.",
      },
    ],
  },
  tools: {
    title: "All the Tools You Need to Trade with Ease",
    description:
      "Whether you're at your desk or on the move, we'll keep you close to the markets. Clients can access our range of markets through the powerful MetaTrader 4 platforms, as well as ActsTrade and our mobile app.",
    learnMore: "Learn More",
    platforms: [
      {
        name: "KVB App",
        description:
          "KVB App is a one-stop trading platform where you can customize your trading preferences. It is an app for news and trends; an app that includes innovative trading features; an app that just facilitates your trading - KVB App has it all.",
      },
      {
        name: "ActsTrade",
        description:
          "Designed specifically for traders, the desktop trading platform ActsTrade provides a user-friendly and highly customisable interface on Windows and MacOS, accompanied by sophisticated order management tools to help you control your positions quickly and efficiently.",
      },
      {
        name: "MetaTrader 4",
        description:
          "MetaTrader 4 is the most popular retail trading platform, chosen by experienced and novice traders alike for its intuitive user interface and powerful trading capabilities, containing everything a trader needs to chart assets, place orders and manage positions.",
      },
      {
        name: "MetaTrader 5",
        description:
          "Trusted by traders worldwide, MetaTrader 5 combines user-friendly design with advanced features — making it ideal for both beginners and professionals. Trade effortlessly with one-click execution, robust analytics, and customizable indicators.",
      },
    ],
  },
  productsPage: {
    symbolColumn: "Symbols",
    tradingSessions: "Trading Sessions",
    specifications: "Symbol Specifications",
    serverTime: "Server Time: UTC+2",
    footnote: "*For further information, please contact our customer service.",
  },
  tradingPage: {
    compareAccounts: "Compare account types",
    faqs: "FAQs",
  },
  features: {
    items: [
      {
        title: "Superior Trading Platforms",
        description:
          "We have invested heavily in technology, giving our clients access to the most powerful and innovative trading platforms from PC, mobile or web. Trade anytime, anywhere.",
      },
      {
        title: "Dedicated Customer Service",
        description:
          "Our dedicated, multilingual customer service team works 24/5 to provide you with an exceptional level of support.",
      },
      {
        title: "Deposits & Withdrawals",
        description:
          "Choose between flexible payment methods to withdraw and deposit your funds quickly and securely.",
      },
      {
        title: "Prime Trading Conditions",
        description:
          "Every cost savings translates into higher profit margins. Trade more than 100 financial products with spreads as low as 0.0 and some of the lowest commissions on the market.",
      },
    ],
  },
  partner: {
    title: "Partner with KVB",
    description:
      "Earn extra income by introducing clients to KVB, a global market leader. Getting you closer to your referral base. The Partner Program shows an overview of earnings, transactions, activity, deposits and withdrawals.",
    disclaimer: "*Terms and conditions apply",
    cta: "Join Partner Program",
  },
  cta: {
    title: "Trade with KVB",
    description:
      "Discover the global markets through KVB trading platform. Trade forex, commodities, metals, indices, shares and cryptocurrencies.",
    button: "Start Trading",
  },
  homeProfessional: {
    badge: "KVB Pro · Professional Services",
    title: "Professional services for serious traders",
    description:
      "For active kvbplus.com clients: dedicated 1-on-1 support, network acceleration and private lines, lower fees, and more deposit and withdrawal channels.",
    cta: "Explore Pro Services",
    highlights: [
      {
        title: "1-on-1 issue resolution",
        description:
          "A dedicated account manager for fast responses on account, platform, and trading questions.",
      },
      {
        title: "Network acceleration",
        description: "Custom acceleration to improve connectivity to trading servers.",
      },
      {
        title: "Lower trading fees",
        description: "More competitive spreads and commissions to reduce overall costs.",
      },
      {
        title: "More funding channels",
        description: "Expanded local and cross-border deposit and withdrawal options.",
      },
    ],
    welcome: {
      title: "Discover KVB Pro Services",
      description:
        "KVB Pro offers active kvbplus.com traders 1-on-1 support, acceleration tools, private network access, better pricing, and expanded funding options.",
      cta: "View Pro Services",
      dismiss: "Maybe later",
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
      "Risk Warning: Trading Forex carries a high level of risk to your capital and you should only trade with money you can afford to lose. Trading Forex may not be suitable for all investors, so please ensure that you fully understand the risks involved and seek independent advice if necessary. Please read and ensure you fully understand our Risk Disclosure.",
    regulation:
      'KVB Prime Limited (referred to as "KVB") is authorized and regulated by The Anjouan Offshore Finance Authority (AOFA), Union of Comoros to conduct all types of brokerage activities including foreign exchange currency, shares, Fx commodities and any kind of regulated securities is permitted, in accordance with the Government Notice No.5 OF 2005 under International Brokerage and Clearing House License number L15626 / KVB.',
    services:
      "All services and products accessible through the site www.kvbplus.com are provided by KVB Prime Limited.",
    age: "You must be at least 18 years old, or of legal age as determined in your country to use the services of KVB Prime Limited.",
    restricted:
      "KVB Prime Limited does not direct its website and services to any individual in any country in which the use of its website and services are prohibited by local laws or regulations.",
    copyright: "KVB Prime Limited | All rights reserved.",
  },
  professional: {
    meta: {
      title: "KVB Pro Services | Built for kvbplus.com Professionals",
      description:
        "For active KVB traders: dedicated 1-on-1 support, network acceleration and private lines, lower fees, and more deposit and withdrawal channels.",
    },
    hero: {
      badge: "KVB Pro · Professional Services",
      headline: "Professional services for serious traders",
      subheadline: "Designed for active kvbplus.com clients",
      description:
        "KVB Pro is for traders on kvbplus.com who demand faster execution, stable connectivity, and hands-on support. Get 1-on-1 issue resolution, exclusive acceleration tools, private network access, competitive pricing, and expanded funding options.",
      ctaPrimary: "Apply for Pro Services",
      ctaSecondary: "View services",
    },
    services: {
      sectionTitle: "Core professional services",
      sectionSubtitle:
        "End-to-end support from connectivity to funding — tailored for advanced trading needs",
      items: [
        {
          title: "1-on-1 issue resolution",
          description:
            "A dedicated account manager helps resolve account, platform, and trading issues quickly.",
          highlights: [
            "Priority handling with a named contact",
            "Coverage for account, platform, and orders",
            "Multilingual support",
          ],
        },
        {
          title: "Exclusive network acceleration",
          description:
            "Custom acceleration for professional users to improve connection quality to trading servers.",
          highlights: [
            "Reduced jitter and packet loss",
            "Optimized MT4/MT5 connectivity",
            "Acceleration nodes on demand",
          ],
        },
        {
          title: "Private network access",
          description:
            "Dedicated network paths for higher stability and lower latency on quotes and order execution.",
          highlights: [
            "Improved uptime and reliability",
            "Lower quote and execution delay",
            "Suited for active and systematic trading",
          ],
        },
        {
          title: "Lower trading fees",
          description:
            "Competitive spreads and commissions based on volume and account tier to reduce overall cost.",
          highlights: [
            "Tiered pricing — higher volume, better rates",
            "Major instruments covered",
            "Transparent fee structure",
          ],
        },
        {
          title: "More funding channels",
          description:
            "Expanded local and cross-border deposit and withdrawal options with faster processing.",
          highlights: [
            "Multiple fiat and e-payment methods",
            "Faster deposit crediting",
            "Flexible withdrawal arrangements",
          ],
        },
      ],
    },
    rules: {
      sectionTitle: "How to join KVB Pro",
      sectionSubtitle:
        "Register, meet the activity threshold, and contact your dedicated support to unlock acceleration and our trader community",
      eligibilityLabel: "Eligibility",
      eligibility:
        "Register on kvbplus.com and reach USD 500 in cumulative trading volume",
      howToLabel: "How to apply",
      howTo:
        "Message your dedicated account manager via in-app IM — we will handle the rest",
      perksLabel: "What you unlock",
      perks: ["Exclusive network acceleration", "Professional trader community"],
      community:
        "Connect with peers to share ideas on copy trading, quantitative models, and strategy — learn together and grow together.",
    },
    benefits: {
      sectionTitle: "Why KVB Pro",
      sectionSubtitle: "Go beyond standard service with speed and dedicated support",
      items: [
        {
          title: "Faster response",
          description: "Your requests are prioritized so issues close sooner.",
        },
        {
          title: "Stable connectivity",
          description: "Acceleration plus private lines help reduce slippage from network issues.",
        },
        {
          title: "Better economics",
          description: "Lower fees and flexible funding improve capital efficiency.",
        },
        {
          title: "Tailored service",
          description: "Solutions built for professionals — not one-size-fits-all.",
        },
      ],
    },
    cta: {
      title: "Start your professional service journey",
      description:
        "If you already trade on kvbplus.com and meet our activity criteria, contact our team to see if KVB Pro is right for you.",
      primary: "Go to kvbplus.com",
      secondary: "Learn more",
    },
  },
};

export default dict;
