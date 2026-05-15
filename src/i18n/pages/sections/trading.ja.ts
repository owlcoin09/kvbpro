import { featureImages } from "@/data/media";
import type { PageContent } from "../types";

const accountColumns = [
  { id: "cent", label: "セント口座" },
  { id: "classic", label: "クラシック口座" },
  { id: "plus", label: "プラス口座" },
  { id: "pro", label: "プロ口座" },
];

const accountComparison = {
  title: "口座タイプ比較",
  columns: accountColumns,
  rows: [
    {
      label: "スプレッド（最小）",
      values: { cent: "1.2 pips", classic: "1.2 pips", plus: "0.0 pip", pro: "0.7 pips" },
    },
    {
      label: "スプレッドタイプ",
      values: { cent: "変動", classic: "変動", plus: "変動", pro: "変動" },
    },
    {
      label: "レバレッジ",
      values: {
        cent: "最大 1:1000",
        classic: "最大 1:1000",
        plus: "最大 1:1000",
        pro: "最大 1:1000",
      },
    },
    {
      label: "最低入金",
      values: {
        cent: "USD 10",
        classic: "USD 30",
        plus: "USD 2,000",
        pro: "USD 2,000",
      },
    },
    {
      label: "最小取引量",
      values: { cent: "0.01 lot", classic: "0.01 lot", plus: "0.01 lot", pro: "0.01 lot" },
    },
    {
      label: "最大取引量",
      values: { cent: "20 lots", classic: "20 lots", plus: "20 lots", pro: "20 lots" },
    },
    {
      label: "マージンコール / ストップアウト",
      values: { cent: "100% / 20%", classic: "100% / 20%", plus: "100% / 20%", pro: "100% / 20%" },
    },
    {
      label: "マイナス残高保護",
      values: { cent: "あり", classic: "あり", plus: "あり", pro: "あり" },
    },
    {
      label: "マーケットインサイト",
      values: {
        cent: "ヘッドライン、動画、ニュースフラッシュ、カレンダー等",
        classic: "ヘッドライン、動画、ニュースフラッシュ、カレンダー等",
        plus: "ヘッドライン、動画、ニュースフラッシュ、カレンダー等",
        pro: "ヘッドライン、動画、ニュースフラッシュ、カレンダー等",
      },
    },
    {
      label: "取引銘柄",
      values: {
        cent: "FX、コモディティ、指数、株式、暗号資産",
        classic: "FX、コモディティ、指数、株式、暗号資産",
        plus: "FX、コモディティ、指数、株式、暗号資産",
        pro: "FX、コモディティ、指数、株式、暗号資産",
      },
    },
    {
      label: "取引プラットフォーム",
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
    question: "入金に使用できる口座は？",
    answer:
      "ご本人名義の支払い口座のみご利用いただけます。第三者からの入金はお受けできません。詳細はトレーダーエリアをご確認ください。",
  },
  {
    question: "入金が失敗する理由は？",
    answer:
      "1日の振込限度額超過やデビットカードの利用可能額不足、カード期限切れなどが考えられます。解決しない場合はオンラインサポートへご連絡ください。",
  },
  {
    question: "入金手数料はかかりますか？",
    answer:
      "KVB は入金手数料をいただきませんが、銀行・カード会社・決済代行により手数料が発生する場合があります。",
  },
  {
    question: "入金の反映時間は？",
    answer: "入金は通常即時に反映されます。",
  },
  {
    question: "入金方法と手順は？",
    answer:
      "銀行振込、USDT 等に対応。トレーダーエリアで「資金」→「入金」からチャネル・金額・受取口座を指定してください。",
  },
  {
    question: "出金手数料は？",
    answer: "複数の出金方法をご用意しています。詳細はトレーダーエリアの出金ページをご確認ください。",
  },
  {
    question: "出金の処理時間は？",
    answer:
      "通常 2 時間以内に処理します。高額の場合は申請時間・銀行処理により遅延する場合があります。",
  },
  {
    question: "入金直後に出金できますか？",
    answer: "入金反映後、出金申請まで 24 時間の待機期間が必要です。",
  },
];

const leverageFaqs = [
  {
    question: "FX のマージンコールとは？",
    answer:
      "使用証拠金 > 有効証拠金のときに発生する警告です。ポジションの強制決済リスクを示し、追加入金が必要になる場合があります。",
  },
  {
    question: "証拠金の計算方法は？",
    answer: "一般的に、証拠金 = 契約サイズ / レバレッジ比率 で算出されます。",
  },
  {
    question: "レバレッジ比率とは？",
    answer: "借入資金と自己資金の比率で、少ない入金で大きなポジションをコントロールできます。",
  },
];

const policyPages: Record<string, PageContent> = {
  "account-types": {
    title: "口座タイプ",
    description:
      "セント・クラシック・プラス・プロ口座から選択。競争力のあるスプレッドと用途に合わせた取引条件。",
    introTitle: "あなたに合った口座で",
    body: [
      "満足いく条件で取引しましょう。トレーダーのニーズに合わせた複数の口座タイプをご用意しています。",
      "どの口座が最適かお悩みの方は、お気軽にお問い合わせください。",
    ],
    comparisonTable: accountComparison,
    footnote: "*規約が適用されます。最新仕様はトレーダーエリアをご確認ください。",
  },
  "deposit-withdrawal": {
    title: "入出金",
    description: "迅速・簡単・安全な入出金。お客様資金は分別管理されています。",
    image: "/assets/features/wallet.svg",
    body: [
      "KVB は迅速で安全な入出金オプションを提供し、AML 規制を厳守してお客様を保護します。第三者からの入金はお受けできません。",
    ],
    featureTitle: "入金方法",
    features: [
      {
        title: "国際銀行振込",
        description: "国際送金で入金。通貨・反映時間はトレーダーエリアでご確認ください。",
        image: featureImages[2],
      },
      {
        title: "分別管理口座",
        description:
          "お客様資金は分別口座で管理。KVB は入金手数料をいただきません（他行手数料はお客様負担の場合あり）。",
        image: featureImages[2],
      },
      {
        title: "ローカル銀行振込",
        description: "地域に応じた便利な入金方法。複数通貨に対応。",
        image: featureImages[2],
      },
      {
        title: "暗号資産",
        description:
          "USDT（ERC20）、USDT（TRC20）等。手数料無料、反映は即時。",
        image: featureImages[2],
      },
    ],
    sections: [
      {
        title: "出金",
        body: [
          "柔軟な出金方法をご用意。トレーダーエリアから出金申請が可能です。",
          "ご本人名義の銀行口座へのみ出金できます。第三者口座への送金はできません。",
        ],
      },
    ],
    specifications: {
      title: "出金処理",
      groups: [
        {
          rows: [
            { label: "処理方法", value: "銀行振込、暗号資産等 — トレーダーエリア参照" },
            { label: "処理時間", value: "最大約 2 時間（営業日のみ）" },
          ],
        },
      ],
    },
    bulletTitle: "重要事項",
    bullets: [
      "すべての支払いはセキュリティチェックの対象となり、出金前に身分証明等の提出をお願いする場合があります。",
      "原則として入金と同じ方法・経路で返金します。状況により代替手段を検討する場合があります。",
      "国際送金では銀行手数料が発生する場合があります。",
    ],
    faqs: {
      title: "よくある質問",
      items: depositFaqs,
    },
  },
  "leverage-margin": {
    title: "レバレッジ・証拠金",
    description:
      "タイトなスプレッド、高速約定、最大 1:1000 レバレッジ（口座・銘柄により異なります）。",
    body: [
      "レバレッジは少ない資金で大きな市場エクスポージャーを得るためのツールです。ブローカーから借入れた資金で大きなポジションをコントロールします。",
      "有利な値動きでは利益が拡大しますが、不利な場合は損失も拡大します。",
    ],
    sections: [
      {
        title: "レバレッジとは？",
        body: [
          "レバレッジにより、口座残高以上のポジションを建てられます。KVB では最大 1:1000 まで（条件あり）。",
          "実口座使用前に十分ご理解ください。口座タイプページで最大レバレッジをご確認ください。",
        ],
      },
      {
        title: "レバレッジ取引の例",
        body: [
          "1,000 ドルを入金し 1:100 レバレッジを選択すると、100,000 ドル相当のエクスポージャーをコントロールできます。",
          "ポジション開設に預けた 1,000 ドルが証拠金（マージン）です。",
        ],
      },
      {
        title: "FX における証拠金",
        body: [
          "証拠金はポジション開設・レバレッジ利用のために預ける金額です。KVB の最低証拠金は 0.1%（最大 1:1000）です。",
        ],
      },
    ],
    comparisonTable: {
      title: "レバレッジ例",
      columns: [
        { id: "deposit", label: "入金（証拠金）" },
        { id: "ratio", label: "レバレッジ" },
        { id: "exposure", label: "エクスポージャ" },
      ],
      rows: [{ label: "例", values: { deposit: "$1,000", ratio: "1:100", exposure: "$100,000" } }],
    },
    featureTitle: "主な用語",
    features: [
      { title: "必要証拠金", description: "ポジション開設に必要な金額。", image: featureImages[3] },
      { title: "口座残高", description: "取引口座の総額。", image: featureImages[3] },
      { title: "有効証拠金", description: "残高に未決済損益を加えた額。", image: featureImages[3] },
      { title: "余剰証拠金", description: "新規ポジションに使える資金。", image: featureImages[3] },
      { title: "使用証拠金", description: "既存ポジションに拘束されている証拠金。", image: featureImages[3] },
      { title: "マージンコール", description: "証拠金維持率が低下した際の警告。", image: featureImages[3] },
    ],
    faqs: {
      title: "よくある質問",
      items: leverageFaqs,
    },
  },
  "negative-balance-protection": {
    title: "マイナス残高保護",
    description:
      "通常の市場条件下で口座残高がマイナスにならないよう保護する仕組み（対象・条件は規約参照）。",
    body: [
      "マイナス残高保護は、一般条件下で損失が入金額を超えないよう支援します。市場リスクをなくすものではありませんが、安心感の向上に役立ちます。",
    ],
    sections: [
      {
        title: "マイナス残高保護とは？",
        body: [
          "小売顧客の損失が口座への入金額を超えないよう支援する保護です（通常の市場条件）。",
          "極端なギャップ時は規約に基づき個別対応となる場合があります。",
        ],
      },
      {
        title: "保護のメリット",
        body: [
          "CFD・証拠金取引初心者の安全網として機能します。ボラティリティとレバレッジは損失を加速させる可能性があります。",
          "適切なリスク管理と併せて、ボラティリティを機会として捉えやすくなります。",
          "KVB は安全な取引環境の提供に努めています。",
        ],
      },
    ],
  },
};

const platformPages: Record<string, PageContent> = {
  "metatrader-4": {
    title: "MetaTrader 4",
    description: "チャート、注文、ポジション管理を備えた定番プラットフォーム。",
    body: [
      "MetaTrader 4 は直感的な UI と強力な機能で世界中のトレーダーに支持されています。",
      "チャート分析から注文・ポジション管理まで一元化。",
      "MT4 をダウンロードし、KVB 口座に接続してください。",
    ],
    image: "/assets/platforms/metatrader4.svg",
  },
  "metatrader-5": {
    title: "MetaTrader 5",
    description: "マルチアセット対応の高機能プラットフォーム。",
    body: [
      "MetaTrader 5 は使いやすさと高度な機能を両立。",
      "ワンクリック約定、分析ツール、カスタムインジケーターに対応。",
      "MT4 より多くの時間足・注文タイプ・分析機能を提供。",
    ],
    image: "/assets/platforms/metatrader5.svg",
  },
  "kvb-desktop": {
    title: "KVB Desktop",
    description: "PC からグローバル市場へ、いつでもどこでも。",
    body: [
      "KVB Desktop は高度なチャート、分析、約定、口座・資金管理を統合した PC 向けプラットフォームです。",
      "リアルタイムの市場アクセスと経済イベントで、情報に基づいた取引が可能です。",
    ],
    image: "/assets/home-mt.png",
    featureTitle: "デスクトップの特長",
    features: [
      { title: "シームレスな取引", description: "相場、ポジション、仕様、センチメントを一画面で。" },
      { title: "口座管理", description: "履歴、注文、入出金を包括的に管理。" },
      { title: "マーケットインサイト", description: "トレンド、分析、ニュース、経済カレンダー。" },
      { title: "デスクトップ取引", description: "安定アクセスのための高度なデスクトップソリューション。" },
    ],
  },
  "kvb-app": {
    title: "KVB App",
    description: "究極のモバイル取引 — いつでも市場へ。",
    body: [
      "KVB App はチャート、約定、口座・資金管理、経済イベントを備えたモバイルプラットフォームです。",
    ],
    image: "/assets/platforms/kvb-app.svg",
    featureTitle: "モバイル機能",
    features: [
      { title: "資金管理", description: "手数料 0% の入金、口座間振替、複数の出金方法。" },
      { title: "フル機能", description: "ワンタップで建玉・指値・決済、TP/SL 設定。" },
      { title: "ニュースと分析", description: "ヘッドライン、フラッシュ、カレンダー、分析。" },
      { title: "モバイル取引", description: "FX、コモディティ、指数、株式、金属を外出先から。" },
    ],
  },
  actstrade: {
    title: "ActsTrade",
    description: "シンプル・高速・信頼 — ブラウザと OS を問わず。",
    body: [
      "ActsTrade はあらゆるブラウザと OS で信頼性の高い取引体験を提供します。",
      "FX、コモディティ、指数、株式をシームレスに。ワンクリック執行と分析ツールを搭載。",
    ],
    image: "/assets/platforms/actstrade.svg",
  },
  "copy-trading": {
    title: "コピートレード",
    description: "経験豊富なトレーダーの戦略を自動で複製。",
    body: [
      "MetaTrader サーバー間で取引を複製し、手動取引と同様に約定を同期します。",
      "シグナルプロバイダーまたはコピートレーダーとして参加可能。利益分配モデルを採用。",
    ],
  },
};

export default { ...policyPages, ...platformPages };
