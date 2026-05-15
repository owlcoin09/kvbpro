import { PRODUCT_SYMBOLS } from "@/data/product-symbols";
import { featureImages } from "@/data/media";
import type { PageContent, PageFeature } from "../types";

const whyTradeFeatures = (title: string): Pick<PageContent, "featureTitle" | "features"> => ({
  featureTitle: title,
  features: WHY_TRADE,
});

const WHY_TRADE: PageFeature[] = [
  {
    title: "Fast Deposits & Withdrawals",
    description:
      "KVB offers you secure and fast online payment options in local currencies. Deposit, transfer or withdraw funds with ease, choose from the flexible payment method.",
    image: featureImages[2],
  },
  {
    title: "Dedicated Customer Support",
    description:
      "We have an international team of 24/5 dedicated customer service specialists to provide you with an exceptional level of support.",
    image: featureImages[1],
  },
  {
    title: "Professional Tools",
    description:
      "Our trading platforms are user-friendly and feature-rich, with a range of advanced tools and resources to help you improve your trading skills and make informed trading decisions.",
    image: featureImages[0],
  },
  {
    title: "Superior Trading Platforms",
    description:
      "We have invested heavily in technology, giving our clients access to the most powerful and innovative trading platforms from PC, mobile or web. Trade anytime, anywhere.",
    image: featureImages[0],
  },
  {
    title: "Ultimate Trading Conditions",
    description:
      "Every cost savings translates into higher profit margins. Trade more than 100 financial products with spreads as low as 0.0 and some of the lowest commissions on the market.",
    image: featureImages[3],
  },
  {
    title: "Prime Liquidity",
    description:
      "We use both STP (Straight-Through-Processing) technologies and NDD (No Dealing Desk) practices, which means our clients always receive the best price and fair and transparent order execution.",
    image: featureImages[3],
  },
];

const footnote =
  "*For further information, please contact our customer service.";

const forexSpecs = {
  title: "Symbol Specifications",
  groups: [
    {
      rows: [
        { label: "Contract size", value: "100,000 currency units" },
        { label: "Minimal volume", value: "0.01 lot" },
        { label: "Maximal volume", value: "20 lots" },
        { label: "Time in force", value: "Good till Friday" },
        { label: "Swap type", value: "In points" },
        { label: "Triple swaps", value: "Wednesday" },
      ],
    },
  ],
};

const pages: Record<string, PageContent> = {
  forex: {
    title: "Forex",
    description:
      "Trade major, minor and exotic currency pairs with competitive spreads on KVB.",
    introTitle: "What is Forex?",
    body: [
      "Forex, also known as foreign exchange, FX or currency trading, is a decentralised global market where the world buys and sells currency. The forex market is the largest, most liquid market in the world with an average daily trading volume exceeding $5 trillion.",
      "Keep up with the largest and most actively traded market in the world and get access to safe strategies and powerful tools at KVB.",
    ],
    image: "/assets/products/forex.png",
    symbolListTitle: "See our full list of trading pairs:",
    symbols: PRODUCT_SYMBOLS.forex,
    tradingSessions: {
      title: "Trading Sessions",
      body: [
        "The Forex market operates 24 hours a day, from 01:05 on Monday until 23:00 on Friday (UTC +2).",
        "Server Time: UTC+2",
      ],
    },
    specifications: forexSpecs,
    footnote,
    ...whyTradeFeatures("Why Trade Forex With KVB?"),
  },
  commodities: {
    title: "Commodities",
    description: "Access gold, silver, oil and other global commodity markets with KVB.",
    introTitle: "What are Commodities?",
    body: [
      "Speculate on Gold, Silver and Oil to diversify your investment portfolio on our platform. With tight spreads, fast execution and dedicated support, KVB offers commodities for you to find great opportunities in the global markets.",
    ],
    image: "/assets/products/commodities.png",
    symbolListTitle: "See our full list of commodities:",
    symbols: PRODUCT_SYMBOLS.commodities,
    tradingSessions: {
      title: "Trading Sessions",
      body: [
        "You can trade metals from Monday to Friday between 01:05 and 23:00 (UTC +2).",
        "For USOIL: Monday 01:05 until Friday 23:00 (UTC +2).",
        "For UKOIL (Brent Crude Oil Spot): Monday 03:06 until Friday 22:00 (UTC +2).",
        "Server Time: UTC+2",
      ],
    },
    specifications: {
      title: "Symbol Specifications",
      groups: [
        {
          name: "UKOIL, USOIL",
          rows: [
            { label: "Contract size", value: "1,000 barrels" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good till Friday" },
            { label: "Swap type", value: "In points" },
            { label: "Triple swaps", value: "Wednesday" },
          ],
        },
        {
          name: "XAUUSD",
          rows: [
            { label: "Contract size", value: "100 troy ounces" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good till Friday" },
            { label: "Swap type", value: "In points" },
            { label: "Triple swaps", value: "Wednesday" },
          ],
        },
        {
          name: "XAGUSD",
          rows: [
            { label: "Contract size", value: "5,000 troy ounces" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good till Friday" },
            { label: "Swap type", value: "In points" },
            { label: "Triple swaps", value: "Wednesday" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("Why Trade Commodities with KVB?"),
  },
  indices: {
    title: "Indices",
    description: "Trade global stock indices including US, EU and Asia benchmarks.",
    introTitle: "What are Indices?",
    body: [
      "Indices are a measurement of the price performance of a group of stocks from an exchange. For example, the FTSE 100 tracks the 100 largest companies on the London Stock Exchange.",
      "Trading indices at KVB enables you to get exposure to an entire economy or sector at once, while only having to open a single position. Learn more about indices and start trading with KVB!",
    ],
    image: "/assets/products/indices.png",
    symbolListTitle: "See our full list of indices:",
    symbols: PRODUCT_SYMBOLS.indices,
    tradingSessions: {
      title: "Trading Sessions",
      body: [
        "Trading hours vary by index. Examples: NAS100 / SPX500 — Mon 00:05 to Fri 22:59 (UTC+2), daily break 22:16–22:30; FTSE100 — Mon 00:05 to Fri 22:55 (UTC+2), daily break 22:16–22:30; ChinaA50 — Mon 03:15 to Fri 19:30 (UTC+2), daily break 10:16–11:14.",
        "Server Time: UTC+2",
      ],
    },
    specifications: {
      title: "Symbol Specifications",
      groups: [
        {
          rows: [
            { label: "Contract size", value: "1 contract" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good till today" },
            { label: "Swap type", value: "In percentage" },
            { label: "Triple swaps", value: "Friday" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("Why Trade Indices With KVB?"),
  },
  shares: {
    title: "Shares",
    description: "Invest in leading global equities from major exchanges.",
    introTitle: "What are Shares?",
    body: [
      "Shares trading at KVB enables traders to trade company stock and potentially profit from price movements without owning the underlying asset. Shares give traders the opportunity to access the market in a more cost-efficient and time-efficient way.",
      "The share market is full of exciting opportunities. You can trade major companies' shares and take advantage of market volatility without buying the actual shares! KVB offers a curated selection of the world's most popular shares.",
    ],
    image: "/assets/products/shares.png",
    symbolListTitle: "See our full list of shares:",
    symbols: PRODUCT_SYMBOLS.shares,
    tradingSessions: {
      title: "Trading Sessions",
      body: [
        "Shares market opening times vary depending on which share market you are trading.",
        "US Shares: Monday to Friday between 16:36 and 22:50 (UTC +2).",
        "European Shares: Monday to Friday between 10:05 and 18:30 (UTC +2).",
        "Server Time: UTC+2",
      ],
    },
    specifications: {
      title: "Symbol Specifications",
      groups: [
        {
          rows: [
            { label: "Contract size", value: "1 share" },
            { label: "Minimal volume", value: "1 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good till today" },
            { label: "Swap type", value: "In percentage" },
            { label: "Triple swaps", value: "Wednesday" },
          ],
        },
      ],
    },
    footnote:
      "*All U.S. stock products will have leverage adjusted to 1x on the trading day before earnings reports, and within 15 minutes of market open the following day. Leverage will then revert to normal. Please manage your positions accordingly.\n\n" +
      footnote,
    ...whyTradeFeatures("Why Trade Shares with KVB?"),
  },
  cryptocurrencies: {
    title: "Cryptocurrencies",
    description: "Trade popular digital assets with flexible leverage options.",
    introTitle: "What are Cryptocurrencies?",
    body: [
      "Cryptocurrency trading at KVB involves speculating on price movements using derivatives, allowing you to speculate without owning the underlying coins. You can go long (buy) if you believe the cryptocurrency will increase in value, or short (sell) if you anticipate it will decrease.",
      "Trade the world's most popular cryptocurrencies like Bitcoin, Ethereum, or Litecoin at KVB!",
    ],
    image: "/assets/products/crypto.png",
    symbolListTitle: "See our full list of cryptocurrencies:",
    symbols: PRODUCT_SYMBOLS.cryptocurrencies,
    tradingSessions: {
      title: "Trading Sessions",
      body: [
        "Cryptocurrencies trading hours: Monday to Saturday: 00:01–23:55, Sunday: 00:01–00:59 and 03:01–23:55 (UTC +2).",
        "Server Time: UTC+2",
      ],
    },
    specifications: {
      title: "Symbol Specifications",
      groups: [
        {
          name: "BTCUSD",
          rows: [
            { label: "Contract size", value: "5 tokens" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good Till Cancelled" },
            { label: "Swap type", value: "In percentage" },
            { label: "Triple swaps", value: "Friday" },
          ],
        },
        {
          name: "BCHUSD, BNBUSD, ETHUSD",
          rows: [
            { label: "Contract size", value: "10 tokens" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good Till Cancelled" },
            { label: "Swap type", value: "In percentage" },
            { label: "Triple swaps", value: "Friday" },
          ],
        },
        {
          name: "AVAXUSD, LTCUSD, SOLUSD",
          rows: [
            { label: "Contract size", value: "100 tokens" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good Till Cancelled" },
            { label: "Swap type", value: "In percentage" },
            { label: "Triple swaps", value: "Friday" },
          ],
        },
        {
          name: "DOTUSD",
          rows: [
            { label: "Contract size", value: "1,000 tokens" },
            { label: "Minimal volume", value: "0.01 lot" },
            { label: "Maximal volume", value: "20 lots" },
            { label: "Time in force", value: "Good Till Cancelled" },
            { label: "Swap type", value: "In percentage" },
            { label: "Triple swaps", value: "Friday" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("Why Trade Cryptocurrencies with KVB?"),
  },
};

export default pages;
