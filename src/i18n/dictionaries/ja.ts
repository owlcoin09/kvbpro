import type { Dictionary } from "../types";

const dict: Dictionary = {
  site: {
    name: "KVB",
    legalName: "KVB Prime Limited",
    title: "KVB | グローバル金融市場 - FX・金・株式・指数",
    description:
      "KVBでFX、コモディティ、指数、株式、暗号資産を取引。直感的なツール、MetaTraderプラットフォーム、24時間5日対応の多言語サポート。",
    keywords: [
      "KVB",
      "FX取引",
      "金取引",
      "コモディティ",
      "指数",
      "株式",
      "暗号資産取引",
      "MetaTrader 4",
      "MetaTrader 5",
      "グローバル金融市場",
    ],
  },
  nav: {
    home: "ホーム",
    professional: "プロサービス",
    groups: [
      {
        id: "products",
        label: "商品",
        children: [
          { label: "FX", slug: "forex" },
          { label: "コモディティ", slug: "commodities" },
          { label: "指数", slug: "indices" },
          { label: "株式", slug: "shares" },
          { label: "暗号資産", slug: "cryptocurrencies" },
        ],
      },
      {
        id: "trading",
        label: "取引",
        children: [
          { label: "口座タイプ", slug: "account-types" },
          { label: "入出金", slug: "deposit-withdrawal" },
          { label: "レバレッジ・証拠金", slug: "leverage-margin" },
          { label: "マイナス残高保護", slug: "negative-balance-protection" },
          { label: "MetaTrader 4", slug: "metatrader-4" },
          { label: "MetaTrader 5", slug: "metatrader-5" },
          { label: "KVB Desktop", slug: "kvb-desktop" },
          { label: "KVB App", slug: "kvb-app" },
          { label: "ActsTrade", slug: "actstrade" },
          { label: "コピートレード", slug: "copy-trading" },
        ],
      },
      {
        id: "about",
        label: "会社概要",
        children: [
          { label: "会社概要", slug: "who-we-are" },
          { label: "ライセンス", slug: "license" },
          { label: "受賞歴", slug: "awards" },
          { label: "メディア", slug: "media" },
          { label: "会社ブログ", slug: "company-blog" },
          { label: "ESG", slug: "esg" },
          { label: "採用情報", slug: "join-us" },
          { label: "お問い合わせ", slug: "contact-us" },
          { label: "法的文書", slug: "legal-documents" },
          { label: "お知らせ", slug: "announcements" },
        ],
      },
    ],
    contactUs: "お問い合わせ",
    openAccount: "口座開設",
    menuOpen: "メニューを開く",
    menuClose: "メニューを閉じる",
    homeAria: "KVBホーム",
    mainNavAria: "メインナビゲーション",
    breadcrumbAria: "パンくずリスト",
  },
  theme: {
    light: "ライト",
    dark: "ダーク",
    system: "システムに合わせる",
    menuAria: "テーマ",
  },
  footer: {
    contactTitle: "お問い合わせ",
    columns: {
      products: "商品",
      trading: "取引",
      about: "会社概要",
    },
    products: ["FX", "コモディティ", "指数", "株式", "暗号資産"],
    trading: [
      "口座タイプ",
      "入出金",
      "レバレッジ・証拠金",
      "マイナス残高保護",
      "MetaTrader 4",
      "MetaTrader 5",
      "KVB Desktop",
      "KVB App",
      "ActsTrade",
      "コピートレード",
    ],
    about: [
      "会社概要",
      "ライセンス",
      "受賞歴",
      "メディア",
      "会社ブログ",
      "ESG",
      "採用情報",
      "お問い合わせ",
      "法的文書",
      "お知らせ",
    ],
  },
  hero: {
    headline: "KVB",
    subheadline: "取引をもっとシンプルに",
    description:
      "多彩な投資商品、直感的な取引ツール、マーケットインサイトで、あなたの取引戦略をサポートします。",
    ctaPrimary: "取引を始める",
    campaigns: {
      title: "キャンペーンに参加して、取引の新たなステージへ。",
      subtitle:
        "入金ボーナス、スワップフリー口座、トレードコンペなど、あなたに合ったプログラムが見つかります。",
      learnMore: "詳しく見る",
      items: [
        {
          title: "スワップフリープログラム",
          description:
            "「スワップフリープログラム」は取引コストを抑え、収益性向上を目指すプロモーションです。一定の「取引活動」へのコミットメントが参加条件となります。",
        },
        {
          title: "ラッキードロー",
          description:
            "スピンして報酬を確認——即時当選から隠しグランプリまで。",
        },
        {
          title: "スイッチボーナス",
          description: "今すぐ乗り換えて、KVBで報酬をダブルに！",
        },
      ],
    },
  },
  markets: {
    title: "グローバル金融市場へアクセスして取引",
    description:
      "KVBの口座とプラットフォームで世界の金融市場を探索。FX、コモディティ、指数、株式、暗号資産を取引できます。",
    disclaimer:
      "*MT4口座スプレッドに基づく表示価格は参考用です。取引条件は各銘柄仕様をご確認ください。",
    products: [
      { name: "FX", description: "メジャー・マイナー・エキゾチック通貨ペアを競争力のあるスプレッドで。" },
      { name: "コモディティ", description: "金、銀、原油など世界のコモディティ市場へアクセス。" },
      { name: "指数", description: "米国・欧州・アジアの主要株価指数を取引。" },
      { name: "株式", description: "世界主要取引所の優良株式に投資。" },
      { name: "暗号資産", description: "人気のデジタル資産を柔軟なレバレッジで取引。" },
    ],
  },
  tools: {
    title: "快適な取引に必要なすべてのツール",
    description:
      "デスクでも外出先でも、市場に近づけます。MetaTrader 4、ActsTrade、モバイルアプリから幅広い市場にアクセスできます。",
    learnMore: "詳細を見る",
    platforms: [
      {
        name: "KVB App",
        description:
          "KVB Appはワンストップの取引プラットフォーム。取引設定のカスタマイズ、ニュース・トレンド、革新的な取引機能を一つのアプリに集約しました。",
      },
      {
        name: "ActsTrade",
        description:
          "トレーダー向けに設計されたActsTradeデスクトッププラットフォームは、Windows/macOSで使いやすく高度にカスタマイズ可能なUIと、高度な注文管理ツールを提供します。",
      },
      {
        name: "MetaTrader 4",
        description:
          "MetaTrader 4は最も人気のあるリテール向けプラットフォーム。直感的なUIと強力な機能で、チャート、注文、ポジション管理のすべてをカバーします。",
      },
      {
        name: "MetaTrader 5",
        description:
          "MetaTrader 5は使いやすさと高度な機能を両立。ワンクリック執行、強力な分析、カスタム指標で、初心者からプロまで幅広く支持されています。",
      },
    ],
  },
  productsPage: {
    symbolColumn: "シンボル",
    tradingSessions: "取引時間",
    specifications: "シンボル仕様",
    serverTime: "サーバー時間：UTC+2",
    footnote: "*詳細はカスタマーサービスまでお問い合わせください。",
  },
  tradingPage: {
    compareAccounts: "口座タイプ比較",
    faqs: "よくある質問",
  },
  features: {
    items: [
      {
        title: "優れた取引プラットフォーム",
        description:
          "技術への大規模投資により、PC・モバイル・Webから強力で革新的なプラットフォームにアクセス。いつでもどこでも取引。",
      },
      {
        title: "専任カスタマーサポート",
        description: "多言語対応の専任チームが24時間5日、卓越したサポートを提供します。",
      },
      {
        title: "入金・出金",
        description: "柔軟な決済方法で、資金の入出金を迅速かつ安全に行えます。",
      },
      {
        title: "プライム取引条件",
        description:
          "コスト削減は利益率向上につながります。100以上の金融商品を、0.0からのスプレッドと業界最低水準の手数料で。",
      },
    ],
  },
  partner: {
    title: "KVBパートナーになる",
    description:
      "グローバルリーダーKVBへクライアントを紹介して追加収入を獲得。パートナープログラムで収益、取引、アクティビティ、入出金を一覧表示。",
    disclaimer: "*利用規約が適用されます",
    cta: "パートナープログラムに参加",
  },
  cta: {
    title: "KVBで取引を始める",
    description:
      "KVB取引プラットフォームで世界市場を探索。FX、コモディティ、貴金属、指数、株式、暗号資産を取引。",
    button: "取引を開始",
  },
  homeProfessional: {
    badge: "KVB Pro · プロフェッショナルサービス",
    title: "プロトレーダーのための、より専門的なサービス",
    description:
      "kvbplus.com のアクティブユーザー向け：1対1サポート、ネットワーク加速・専用回線、低手数料、豊富な入出金チャネルで取引体験を向上。",
    cta: "プロサービスを見る",
    highlights: [
      {
        title: "1対1の問題解決",
        description: "専任担当者が口座・プラットフォーム・取引に関する問い合わせに迅速対応。",
      },
      {
        title: "専用ネットワーク加速",
        description: "取引サーバーへの接続品質を最適化するカスタム加速ソリューション。",
      },
      {
        title: "低い取引手数料",
        description: "より競争力のあるスプレッドとコミッションで総コストを削減。",
      },
      {
        title: "豊富な入出金チャネル",
        description: "国内外の資金手段を拡充し、資金の流れを効率化。",
      },
    ],
    welcome: {
      title: "KVB プロサービスをご紹介",
      description:
        "KVB Pro は kvbplus.com で継続的に取引する方に、1対1サポート、加速ツール、専用回線、優遇料金、多様な入出金手段を提供します。",
      cta: "プロサービスを見る",
      dismiss: "あとで",
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
      "リスク警告：FX取引は高いリスクを伴い、元本を失う可能性があります。失っても問題ない資金でのみ取引してください。すべての投資家に適さない場合があります。リスクを十分に理解し、必要に応じて独立したアドバイスを求めてください。リスク開示を必ずお読みください。",
    regulation:
      "KVB Prime Limited（「KVB」）は、コモロ連合アンジュアンオフショア金融庁（AOFA）の認可・規制を受け、外国為替、株式、FXコモディティ等のブローカー業務を行っています。ライセンス番号 L15626 / KVB。",
    services: "www.kvbplus.com を通じて提供されるすべてのサービスと商品は、KVB Prime Limitedにより提供されます。",
    age: "KVB Prime Limitedのサービスを利用するには、18歳以上、またはお住まいの国で定められた法定年齢に達している必要があります。",
    restricted:
      "KVB Prime Limitedは、現地法規により当サイトおよびサービスの利用が禁止されている国・地域の個人を対象としていません。",
    copyright: "KVB Prime Limited | All rights reserved.",
  },
  professional: {
    meta: {
      title: "KVB プロサービス | kvbplus.com のプロ向け",
      description:
        "アクティブな KVB トレーダー向け：1対1サポート、ネットワーク加速・専用回線、低手数料、豊富な入出金チャネル。",
    },
    hero: {
      badge: "KVB Pro · プロフェッショナルサービス",
      headline: "プロトレーダーのための、より専門的なサービス",
      subheadline: "kvbplus.com のアクティブユーザー向け",
      description:
        "KVB Pro は、kvbplus.com で継続的に取引し、約定速度とサービス品質に高い要求をお持ちの方のためのプログラムです。1対1の問題解決、専用ネットワーク加速・専用回線、優遇手数料、多様な入出金手段を提供します。",
      ctaPrimary: "プロサービスを申請",
      ctaSecondary: "サービス内容を見る",
    },
    services: {
      sectionTitle: "主要プロサービス",
      sectionSubtitle: "接続品質から資金調達まで、プロの取引ニーズに対応",
      items: [
        {
          title: "1対1 問題解決",
          description:
            "専任担当が口座・プラットフォーム・取引に関する問題に迅速に対応します。",
          highlights: ["専任担当による優先対応", "口座・プラットフォーム・注文をカバー", "多言語サポート"],
        },
        {
          title: "専用ネットワーク加速ツール",
          description:
            "プロユーザー向けのカスタム加速で、取引サーバーへの接続品質を最適化します。",
          highlights: ["ジッター・パケットロスの低減", "MT4/MT5 接続の最適化", "必要に応じた加速ノード"],
        },
        {
          title: "専用回線アクセス",
          description:
            "専用ネットワーク経路により安定性を高め、相場・注文の遅延を低減します。",
          highlights: ["可用性・安定性の向上", "相場・約定遅延の低減", "アクティブ・システム取引向け"],
        },
        {
          title: "低い取引手数料",
          description:
            "取引量と口座ランクに応じた競争力のあるスプレッド・手数料でコストを削減します。",
          highlights: ["段階制料金", "主要銘柄をカバー", "透明な料金体系"],
        },
        {
          title: "豊富な入出金チャネル",
          description:
            "国内外の入出金手段を拡充し、入金反映と出金処理をスムーズにします。",
          highlights: ["複数の法定通貨・電子決済", "入金反映の高速化", "柔軟な出金手配"],
        },
      ],
    },
    rules: {
      sectionTitle: "KVB Pro のご利用方法",
      sectionSubtitle:
        "登録後、取引量の条件を満たせば、専任サポート経由で加速ツールとトレーダーコミュニティをご利用いただけます",
      eligibilityLabel: "ご利用条件",
      eligibility:
        "kvbplus.com で口座開設後、累計取引高が 500 米ドルに達すること",
      howToLabel: "お申し込み方法",
      howTo:
        "プラットフォーム内 IM から専任担当へご連絡ください。開通手続きをサポートします",
      perksLabel: "ご利用いただける内容",
      perks: ["専用ネットワーク加速ツール", "プロトレーダーコミュニティ"],
      community:
        "コミュニティでは、コピートレード、クオンツ、取引戦略などを仲間と共有し、切磋琢磨しながら成長できます。",
    },
    benefits: {
      sectionTitle: "KVB Pro を選ぶ理由",
      sectionSubtitle: "標準サービスの上に、速度と専任サポートを追加",
      items: [
        {
          title: "迅速な対応",
          description: "専任チームが優先対応し、問題解決までの時間を短縮します。",
        },
        {
          title: "安定した接続",
          description: "加速と専用回線で、ネットワーク起因のスリッページを抑制します。",
        },
        {
          title: "コスト優位",
          description: "低手数料と柔軟な資金チャネルで資金効率を向上します。",
        },
        {
          title: "カスタマイズ",
          description: "プロ向けの個別プラン — 画一的なテンプレートではありません。",
        },
      ],
    },
    cta: {
      title: "プロサービスのご利用を開始",
      description:
        "kvbplus.com で口座をお持ちで、一定の取引実績がある方は、KVB Pro の適用可否についてチームまでお問い合わせください。",
      primary: "kvbplus.com へ",
      secondary: "詳細を見る",
    },
  },
};

export default dict;
