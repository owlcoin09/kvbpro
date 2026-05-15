import { featureImages } from "@/data/media";
import type { PageContent } from "../types";

const accountColumns = [
  { id: "cent", label: "Cent Account" },
  { id: "classic", label: "Classic Account" },
  { id: "plus", label: "Plus Account" },
  { id: "pro", label: "Pro Account" },
];

const accountComparison = {
  title: "Compare account types",
  columns: accountColumns,
  rows: [
    {
      label: "Spreads starting from",
      values: { cent: "1.2 pips", classic: "1.2 pips", plus: "0.0 pip", pro: "0.7 pips" },
    },
    {
      label: "Spread type",
      values: { cent: "Floating", classic: "Floating", plus: "Floating", pro: "Floating" },
    },
    {
      label: "Leverage",
      values: {
        cent: "Up to 1:1000",
        classic: "Up to 1:1000",
        plus: "Up to 1:1000",
        pro: "Up to 1:1000",
      },
    },
    {
      label: "Minimum deposit",
      values: {
        cent: "USD 10",
        classic: "USD 30",
        plus: "USD 2,000",
        pro: "USD 2,000",
      },
    },
    {
      label: "Minimum volume per trade",
      values: { cent: "0.01 lot", classic: "0.01 lot", plus: "0.01 lot", pro: "0.01 lot" },
    },
    {
      label: "Maximum volume per trade",
      values: { cent: "20 lots", classic: "20 lots", plus: "20 lots", pro: "20 lots" },
    },
    {
      label: "Margin call / Stop-out level",
      values: { cent: "100% / 20%", classic: "100% / 20%", plus: "100% / 20%", pro: "100% / 20%" },
    },
    {
      label: "Negative balance protection",
      values: {
        cent: "Yes",
        classic: "Yes",
        plus: "Yes",
        pro: "Yes",
      },
    },
    {
      label: "Market insights",
      values: {
        cent: "Headline, video, newsflash, calendar & more",
        classic: "Headline, video, newsflash, calendar & more",
        plus: "Headline, video, newsflash, calendar & more",
        pro: "Headline, video, newsflash, calendar & more",
      },
    },
    {
      label: "Symbols",
      values: {
        cent: "Forex, Commodities, Indices, Shares, Cryptocurrencies",
        classic: "Forex, Commodities, Indices, Shares, Cryptocurrencies",
        plus: "Forex, Commodities, Indices, Shares, Cryptocurrencies",
        pro: "Forex, Commodities, Indices, Shares, Cryptocurrencies",
      },
    },
    {
      label: "Trading platforms",
      values: {
        cent: "KVB App, ActsTrade, MetaTrader 4, MetaTrader 5",
        classic: "KVB App, ActsTrade, MetaTrader 4, MetaTrader 5",
        plus: "KVB App, ActsTrade, MetaTrader 4, MetaTrader 5",
        pro: "KVB App, ActsTrade, MetaTrader 4, MetaTrader 5",
      },
    },
  ],
};

const depositFaqs = [
  {
    question: "What accounts can I use to deposit?",
    answer:
      "You must use your own personal payment accounts for deposits. We do not accept direct payments or payments to third parties. All details are available in the Trader Area.",
  },
  {
    question: "Why did my deposit fail?",
    answer:
      "You may have exceeded the daily transfer limit or the available amount on your debit card. Please ensure that your card is not expired. If the deposit still fails, please contact online customer service for assistance.",
  },
  {
    question: "Are there any fees for deposits?",
    answer:
      "While KVB does not apply charges, your bank card provider, bank or payment gateway may apply a transaction fee or commission that is beyond our control.",
  },
  {
    question: "How long does it take for deposits to be credited to the account?",
    answer: "Deposits are credited instantly.",
  },
  {
    question: "What deposit methods does the platform offer, and how can I deposit?",
    answer:
      'KVB offers various deposit methods including bank transfer and USDT deposits. Log in to Trader Area, select "Funds", click "Deposit", choose your channel, enter the amount and receiving trading account to proceed.',
  },
  {
    question: "Are there any withdrawal fees?",
    answer:
      "KVB offers multiple withdrawal methods. For details, please go to the withdrawal page in Trader Area.",
  },
  {
    question: "How long does it take for withdrawals to be processed?",
    answer:
      "Withdrawals are typically processed within 2 hours. For large amounts, delays may occur depending on request time and bank processing. Interbank transfer times apply.",
  },
  {
    question: "Can I submit a withdrawal request immediately after the deposit is credited?",
    answer:
      "A waiting period of 24 hours is required after making a deposit before you can initiate a withdrawal.",
  },
];

const leverageFaqs = [
  {
    question: "What is margin call in forex?",
    answer:
      "Used Margin > Equity = Margin Call. A margin call is a notification your broker sends when your margin level has dropped below a predetermined amount. It warns you about the risk of your positions being liquidated. You may be required to deposit funds upon receiving a margin call.",
  },
  {
    question: "How is margin calculated in forex trading?",
    answer:
      "Margin calculation is typically based on the leverage ratio you choose and the size of the contract you wish to trade. Margin = Contract size / Leverage ratio.",
  },
  {
    question: "What is leverage ratio?",
    answer:
      "Leverage ratio refers to the ratio between the borrowed capital and your own capital. It allows you to use more capital in the market than you actually deposited.",
  },
];

const policyPages: Record<string, PageContent> = {
  "account-types": {
    title: "Account Types",
    description:
      "Choose from Cent, Classic, Plus and Pro accounts — flexible options for beginners and professionals with competitive spreads and tailored trading conditions.",
    introTitle: "Trade Your Way",
    body: [
      "Why trade with conditions that don't satisfy you? We offer different account types, carefully prepared to meet the needs of different types of traders.",
      "Can't decide which account type is best for you? Contact us — we will be happy to help you find the right fit.",
    ],
    comparisonTable: accountComparison,
    footnote: "*Terms and conditions apply. Please refer to Trader Area for the latest account specifications.",
  },
  "deposit-withdrawal": {
    title: "Deposit and Withdrawal",
    description:
      "KVB offers accessible, fast, easy and secure deposit and withdrawal options with segregated client funds.",
    image: "/assets/features/wallet.svg",
    body: [
      "KVB offers you fast, easy and secure options for deposits and withdrawals. KVB takes all necessary and appropriate measures to protect its clients and ensure that all AML regulations are strictly adhered to. KVB does not accept third-party deposit requests.",
    ],
    featureTitle: "Deposit methods",
    features: [
      {
        title: "International Bank Transfer",
        description:
          "Fund your account via international wire transfer. Execution times and accepted currencies are shown in Trader Area when you initiate a deposit.",
        image: featureImages[2],
      },
      {
        title: "Segregated Account",
        description:
          "Client funds are held in segregated accounts. KVB does not impose charges on deposits; your bank may apply transfer fees when sending USD to our segregated account.",
        image: featureImages[2],
      },
      {
        title: "Local Bank Transfer",
        description:
          "Convenient local funding options with multiple currencies. Check Trader Area for available methods in your region.",
        image: featureImages[2],
      },
      {
        title: "Cryptocurrency",
        description:
          "Accepted currencies include USDT (ERC20) and USDT (TRC20). Deposit method: cryptocurrency transfer. Cost: Free. Execution time: Instant.",
        image: featureImages[2],
      },
    ],
    sections: [
      {
        title: "Withdrawal",
        body: [
          "We offer several flexible and convenient methods for withdrawing funds from your account. Log in to your Trader Area to submit a withdrawal request.",
          "Please note that you can only withdraw funds from your trading account to a bank account held under your name. KVB is unable to facilitate transfers to or from third-party accounts.",
        ],
      },
    ],
    specifications: {
      title: "Withdrawal processing",
      groups: [
        {
          rows: [
            {
              label: "Processing methods",
              value: "Bank transfer, Cryptocurrencies — see Trader Area for details",
            },
            {
              label: "Processing time",
              value: "Up to 2 hours, applicable on business days only",
            },
          ],
        },
      ],
    },
    bulletTitle: "Important information",
    bullets: [
      "All payments are subject to security checks and we may request more information before returning your funds, such as a bank statement screenshot or proof of identity.",
      "We will normally remit money using the same method and to the same place from which it was deposited. We may consider a suitable alternative at our absolute discretion.",
      "International bank wire transfers may incur fees charged by your bank. Please check with your bank for more information.",
    ],
    faqs: {
      title: "FAQs",
      items: depositFaqs,
    },
  },
  "leverage-margin": {
    title: "Leverage & Margin",
    description:
      "KVB offers tight spreads, fast execution and leverage up to 1:1000 depending on your trading preferences and account type.",
    body: [
      "Leverage is a financial tool that enables traders to gain significantly more exposure in the market with a comparatively small amount of capital. Using leverage means controlling a larger amount of money by borrowing capital from a broker.",
      "Trading with leverage in forex can amplify profits when markets move in your favor — but leverage is a two-way street, and losses are also magnified.",
    ],
    sections: [
      {
        title: "What is Leverage and How to Use It?",
        body: [
          "Leverage allows you to open positions larger than your account balance would otherwise permit. KVB offers leverage up to 1:1000 on eligible account types.",
          "It is crucial to understand leverage before using it in live trading. If you feel confident and ready, review our account types for maximum leverage options.",
        ],
      },
      {
        title: "Example of Forex Trading with Leverage",
        body: [
          "Suppose you have $1,000 and open a margin account to trade CFDs. While you can enter the market with $1,000, you may want to control more capital to seek greater opportunity.",
          "After depositing $1,000, you choose 1:100 leverage: $1,000 × 100 = $100,000 notional exposure. The $1,000 deposited to initiate the position is known as margin.",
        ],
      },
      {
        title: "What is Margin in Forex Trading?",
        body: [
          "Margin is the amount you deposit to open a position and use leverage. KVB requires a minimum of 0.1% margin — in other words, the maximum leverage ratio we offer is 1:1000.",
        ],
      },
    ],
    comparisonTable: {
      title: "Leverage example",
      columns: [
        { id: "deposit", label: "Deposit (Margin)" },
        { id: "ratio", label: "Leverage Ratio" },
        { id: "exposure", label: "Exposure" },
      ],
      rows: [
        { label: "Example", values: { deposit: "$1,000", ratio: "1:100", exposure: "$100,000" } },
      ],
    },
    featureTitle: "Key margin terms",
    features: [
      {
        title: "Margin Requirement",
        description: "The amount of money required to open a position.",
        image: featureImages[3],
      },
      {
        title: "Account Balance",
        description: "The total amount in your trading account.",
        image: featureImages[3],
      },
      {
        title: "Equity",
        description:
          "Your balance plus any profits or losses from open positions. Equity determines your margin level.",
        image: featureImages[3],
      },
      {
        title: "Usable Margin",
        description: "Funds available to open new positions.",
        image: featureImages[3],
      },
      {
        title: "Used Margin",
        description: "Funds currently allocated to maintain open positions.",
        image: featureImages[3],
      },
      {
        title: "Margin Call",
        description:
          "A warning when margin level falls below the required threshold. You may need to deposit additional funds to keep positions open.",
        image: featureImages[3],
      },
    ],
    faqs: {
      title: "FAQs",
      items: leverageFaqs,
    },
  },
  "negative-balance-protection": {
    title: "Negative Balance Protection",
    description:
      "KVB offers negative balance protection to help protect your funds and prevent your account from falling below zero under normal market conditions.",
    body: [
      "Negative Balance Protection means your trading losses cannot exceed the funds in your account and helps protect retail clients. While it cannot eliminate market risk, it ensures your account balance does not go below the amount you deposited under normal conditions.",
    ],
    sections: [
      {
        title: "What is Negative Balance Protection?",
        body: [
          "Negative balance protection helps ensure retail clients cannot lose more than the funds deposited in their trading account under normal market conditions.",
          "Market turbulence will not affect you as severely when protection is active, though extreme gaps may still require review under our terms.",
        ],
      },
      {
        title: "Advantages of Negative Balance Protection",
        body: [
          "Negative Balance Protection provides a safety net for traders new to CFD and margin trading. Volatility combined with leverage can cause rapid losses — protection helps manage that risk.",
          "When managed properly, volatility can offer trading opportunities; protection gives you additional confidence that losses are capped at your deposited balance.",
          "At KVB, we are dedicated to providing a secure trading environment. We've got you covered.",
        ],
      },
    ],
  },
};

const platformPages: Record<string, PageContent> = {
  "metatrader-4": {
    title: "MetaTrader 4",
    description:
      "The most popular retail trading platform for charting, orders, and position management.",
    body: [
      "MetaTrader 4 is the most popular retail trading platform, chosen by experienced and novice traders alike for its intuitive user interface and powerful trading capabilities.",
      "Chart assets, place orders, and manage positions with advanced tools trusted by millions worldwide.",
      "Download MT4 for desktop or mobile and connect to your KVB account.",
    ],
    image: "/assets/platforms/metatrader4.svg",
  },
  "metatrader-5": {
    title: "MetaTrader 5",
    description: "Advanced multi-asset platform with powerful analytics and execution.",
    body: [
      "Trusted by traders worldwide, MetaTrader 5 combines user-friendly design with advanced features — making it ideal for both beginners and professionals.",
      "Trade effortlessly with one-click execution, robust analytics, and customizable indicators.",
      "Access more timeframes, order types, and analytical tools than MT4.",
    ],
    image: "/assets/platforms/metatrader5.svg",
  },
  "kvb-desktop": {
    title: "KVB Desktop",
    description: "Access global markets anywhere, anytime from your PC.",
    body: [
      "KVB Desktop is the ultimate PC trading platform, combining advanced charting, in-depth analysis, seamless order execution, and comprehensive account and fund management tools.",
      "With real-time access to global markets and integrated economic events, make informed decisions and execute trades with one click.",
    ],
    image: "/assets/home-mt.png",
    featureTitle: "Desktop highlights",
    features: [
      {
        title: "Seamless Trading Operations",
        description:
          "Access market quotes, position details, contract specifications, trading sentiment and analysis on a single screen.",
      },
      {
        title: "Comprehensive Account Management",
        description:
          "Manage accounts, trading history, open orders, deposits and withdrawals with detailed data reports.",
      },
      {
        title: "Stay Ahead with Market Insights",
        description:
          "Latest market trends, analysis, breaking news, economic calendar and instant alerts — all in one place.",
      },
      {
        title: "Trading on Your Desktop",
        description:
          "Advanced desktop trading with proxy services to help bypass network limitations for stable access to your account center.",
      },
    ],
  },
  "kvb-app": {
    title: "KVB App",
    description: "The ultimate mobile trading app — access global markets anywhere, anytime.",
    body: [
      "The KVB App is the ultimate mobile trading platform, featuring analysis charting, order execution, account and fund management tools, alongside economic events. Access global markets with one click.",
    ],
    image: "/assets/platforms/kvb-app.svg",
    featureTitle: "Mobile features",
    features: [
      {
        title: "Fund Management",
        description:
          "Deposit to KVB trading accounts with 0% commission, transfer funds between accounts and submit withdrawals through several convenient payment methods.",
      },
      {
        title: "Full Trading Functionality",
        description:
          "Open trades, place pending orders and close positions with one click. Set deviations, take profits and stop losses from a single screen.",
      },
      {
        title: "Global Market News & Analysis",
        description:
          "Headline news, global financial newsflash, economic calendar and in-depth live market analysis — conveniently accessible in KVB App.",
      },
      {
        title: "Trade On The Go",
        description:
          "Trade Forex, Commodities, Indices, Stocks and Metals with a suite of tools designed for traders on the move.",
      },
    ],
  },
  actstrade: {
    title: "ActsTrade",
    description: "Simplicity, speed and reliable trading — accessible from all browsers and OS.",
    body: [
      "ActsTrade delivers simplicity, speed and reliable trading experiences accessible from all browsers and operating systems.",
      "Welcome to ActsTrade — the future of trading. Seamlessly trade Forex, Commodities, Indices and Shares across OS boundaries.",
      "Execute trades with one click, empowered by advanced analysis tools, while robust security helps protect your investments.",
    ],
    image: "/assets/platforms/actstrade.svg",
  },
  "copy-trading": {
    title: "Copy-trading",
    description: "Follow experienced traders and replicate strategies automatically.",
    body: [
      "The copy-trading program is an integrated platform that enables replication of trades across MetaTrader servers, synchronizing open and close orders like manual trading.",
      "Copy-trading simplifies the process, allowing investors to emulate experienced traders. Participants can engage as Signal Providers or Copy-traders.",
      "A profit-sharing model governs the relationship between Signal Providers and Copy-traders. Signal Providers can set requirements for copy accounts; Copy-traders can choose providers that match their goals.",
    ],
  },
};

export default { ...policyPages, ...platformPages };
