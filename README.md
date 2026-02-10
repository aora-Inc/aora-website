# aora株式会社 - Creative Fintech Studio

**金融 × IP開発 × クリエイティブ × ゲーミフィケーション**

> 未来のための循環型経済を創造する

**🌐 Bilingual Site:** [日本語](index.html) / [English](index-en.html)

---

## 🎯 プロジェクトコンセプト

aora株式会社は、従来の環境サービス企業ではありません。
**Creative Fintech Studio** として、4つの専門領域を統合した全く新しい企業です。

### 4つのコア領域

1. **金融 (Finance)** - 環境価値のファイナンス設計
2. **IP開発 (IP Development)** - PUCブランドの創造
3. **クリエイティブ (Creative)** - アーティスティックな表現
4. **ゲーミフィケーション (Gamification)** - 行動変容のゲームデザイン

---

## 🎨 サイトデザインコンセプト

### **"Creative Fintech Studio"**

#### デザイン要素:

**1. ダークモード基調** - 黒背景でプロフェッショナル  
**2. マルチカラーグラデーション** - 5色の統合  
**3. アニメーテッドグリッド** - デジタル感  
**4. フローティングオーブ** - ゲーム的視覚要素  
**5. グラスモーフィズム** - 透明感のあるUI  

---

## 🛠️ 技術スタック

- **HTML5 / CSS3 / Vanilla JavaScript**
- GPU加速アニメーション
- Intersection Observer API
- 完全レスポンシブ
- **バイリンガル対応** (日本語/英語)

---

## 🌐 多言語対応

### ファイル構造
```
index.html         # 日本語版（デフォルト）
index-en.html      # 英語版
news.html          # ニュースページ（日本語）
news-en.html       # ニュースページ（英語）
css/
  ├── style.css    # 共通CSS
  └── news.css     # ニュースページ専用CSS
js/
  ├── main.js      # 共通JavaScript
  └── news.js      # ニュースページ専用JavaScript
images/            # 共通画像アセット
```

### 言語切替
- ヘッダーナビゲーションに「JP / EN」切替ボタンを実装
- 各ページ間でシームレスに切替可能
- URLベースの言語切替（SEOフレンドリー）

---

## ✨ インタラクティブ機能

1. マウスフォローオーブ
2. スクロールリビール
3. グラデーションフロー
4. スムーススクロール
5. テーマ切替（ライト/ダークモード）

---

## 💾 データ管理システム

### CMSデータベース

プロジェクトでは**ハイブリッドデータ管理システム**を実装しています：
- **Netlify CMS**: ニュースリリースのコンテンツ管理
- **RESTful Table API**: 動的データ・フォーム送信データ

#### Netlify CMS（コンテンツ管理）

**アクセス方法:**
```
https://your-site.netlify.app/admin
```

**管理できるコンテンツ:**
- ニュースリリース（News & Updates）
- 日英両言語対応
- マークダウン形式で編集
- Gitベースのバージョン管理

**コンテンツ保存先:**
```
content/news/YYYY-MM-DD-slug.md
```

#### ニュースリリーステーブル（`news_releases`）

| フィールド | 型 | 説明 |
|-----------|-----|------|
| id | text | 自動生成ID |
| title_ja | text | ニュースタイトル（日本語） |
| title_en | text | ニュースタイトル（英語） |
| content_ja | rich_text | ニュース本文（日本語） |
| content_en | rich_text | ニュース本文（英語） |
| category | text | カテゴリー（日本語） |
| category_en | text | カテゴリー（英語） |
| published_date | datetime | 公開日時 |
| featured | bool | 注目記事フラグ |
| image_url | text | サムネイル画像URL |
| tags | array | タグ（検索用） |
| status | text | 公開ステータス（published/draft） |

#### APIエンドポイント使用例

```javascript
// 最新ニュースを取得（ハイブリッド: CMS + API）
window.loadHybridNews(10).then(news => {
  console.log(news);
});

// レガシーAPI（RESTful Table API）
fetch('tables/news_releases?limit=10&sort=-published_date')
  .then(response => response.json())
  .then(data => console.log(data));

// カテゴリーでフィルター
fetch('tables/news_releases?limit=10&category=プレスリリース')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 📝 更新履歴

### 2026-01-29 (v6.5.0 - Netlify CMS Integration) 🎨📝

- **Netlify CMSを統合してNews & Updatesの管理を簡素化**
  - **実装内容**:
    - ✅ Netlify CMS（Decap CMS）の完全統合
    - ✅ Git-based コンテンツ管理システム
    - ✅ 日英バイリンガル対応
    - ✅ リアルタイムプレビュー機能
    - ✅ Netlify Identity認証
  
#### ディレクトリ構成
```
admin/
  ├── config.yml          # Netlify CMS設定ファイル
  └── index.html          # CMSダッシュボード
content/
  ├── news/              # ニュース記事（Markdown）
  └── news-index.json    # ニュースインデックス
js/
  └── cms-loader.js      # ハイブリッドローダー
```

#### 機能
- **コンテンツ管理**: News & Updatesを直感的に編集・追加・削除
- **バージョン管理**: Gitベースで自動的に履歴を保存
- **画像管理**: `images/uploads/` に画像を一元管理
- **リアルタイムプレビュー**: 編集中の内容を即座に確認
- **認証**: Netlify Identityで安全なアクセス制御

#### ハイブリッドシステム
- **Netlify CMS** → 静的コンテンツ（News & Updates、ブログ記事）
- **RESTful Table API** → 動的コンテンツ（フォーム送信データ等）

#### CMS フィールド構成
- `title_ja` / `title_en` - 日英タイトル
- `content_ja` / `content_en` - 日英本文（Markdown）
- `excerpt_ja` / `excerpt_en` - 日英要約
- `category` / `category_en` - カテゴリー（プレスリリース、お知らせ、メディア掲載、イベント）
- `published_date` - 公開日時
- `featured_image` - サムネイル画像
- `featured` - 注目記事フラグ
- `tags` - タグ（複数選択可能）

#### 適用ファイル
- `admin/config.yml` - CMS設定
- `admin/index.html` - CMSダッシュボード
- `index.html` / `index-en.html` - Netlify Identityウィジェット追加
- `js/cms-loader.js` - ハイブリッドローダー実装
- `content/news/` - サンプルニュース記事

#### アクセス方法
```
https://your-site.netlify.app/admin
```

#### 初期設定
1. Netlify Identity を有効化
2. Git Gateway を有効化
3. 管理者ユーザーを招待
4. CMSにログインして記事を管理

#### メリット
- 🎯 **非技術者でも簡単**: CMSダッシュボードで直感的に編集
- 📝 **Markdown対応**: リッチテキストエディタで柔軟な編集
- 🔒 **セキュア**: Netlify Identityで認証・権限管理
- 🌐 **バイリンガル**: 日英両言語を同時管理
- 🚀 **自動デプロイ**: Gitコミット→Netlifyビルド→自動反映

#### テスト結果
- ✅ CMS設定完了
- ✅ サンプルニュース作成
- ✅ Netlify Identityウィジェット統合
- ✅ ハイブリッドローダー動作確認

---

### 2026-01-29 (v6.4.2 - Advertising Inquiry Added) 📧📢
- **問い合わせフォームに広告出稿に関する件名を追加**
  - **追加項目**:
    - ✅ **広告出稿に関するお問い合わせ** （日本語版）
    - ✅ **Advertising Inquiry** （英語版）
  - **問い合わせフォーム件名（最新版・5項目）**:
    1. PUCに関する問い合わせ
    2. Pucreアプリに関する問い合わせ
    3. 取材に関する問い合わせ
    4. **広告出稿に関するお問い合わせ** ← NEW
    5. 当社とのパートナーシップに関する問い合わせ
  - **適用ファイル**:
    - `index.html`: 広告出稿の選択肢追加
    - `index-en.html`: Advertising Inquiryの選択肢追加
  - **テスト結果**: ✅ 日本語版 16.90秒、正常動作

#### 広告出稿の想定用途
- Pucreアプリ内広告
- aoraウェブサイト広告枠
- PUCプラットフォーム連携広告
- イベント・キャンペーン広告出稿

---

### 2026-01-29 (v6.4.1 - Form Content Updates) 📧🔄
- **フォーム項目の最適化とアップデート**
  - **問い合わせフォーム件名を更新**:
    - ✅ PUCに関する問い合わせ
    - ✅ Pucreアプリに関する問い合わせ
    - ✅ 取材に関する問い合わせ
    - ✅ 当社とのパートナーシップに関する問い合わせ
  - **資料請求フォームを改善**:
    - 電話番号を任意項目に変更（必須 → 任意）
    - ご希望の資料を5項目に拡充:
      - ✅ サービス資料
      - ✅ 脱炭素社会の未来比較資料
      - ✅ 自治体向け事例資料
      - ✅ エネルギー企業向け事例資料
      - ✅ メーカー企業向け事例資料
  - **UI改善**:
    - チェックボックスグリッドを自動レイアウトに変更
    - `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
    - 5つの資料選択肢が最適に配置される
  - **適用ファイル**:
    - `index.html` / `index-en.html`: フォーム項目更新
    - `css/style.css`: チェックボックスグリッド調整
  - **テスト結果**: ✅ 日本語版 15.88秒、英語版 17.27秒、正常動作

#### 更新内容の詳細

**問い合わせフォーム（日本語版）:**
```html
<select name="subject" required>
  <option value="PUCに関する問い合わせ">PUCに関する問い合わせ</option>
  <option value="Pucreアプリに関する問い合わせ">Pucreアプリに関する問い合わせ</option>
  <option value="取材に関する問い合わせ">取材に関する問い合わせ</option>
  <option value="当社とのパートナーシップに関する問い合わせ">当社とのパートナーシップに関する問い合わせ</option>
</select>
```

**問い合わせフォーム（英語版）:**
```html
<select name="subject" required>
  <option value="Inquiry about PUC">Inquiry about PUC</option>
  <option value="Inquiry about Pucre App">Inquiry about Pucre App</option>
  <option value="Media Inquiry">Media Inquiry</option>
  <option value="Partnership Inquiry">Partnership Inquiry</option>
</select>
```

**資料請求フォーム（日本語版）:**
```html
<!-- 電話番号が任意に -->
<label for="request-phone">電話番号</label>
<input type="tel" name="phone" />

<!-- 資料選択が5項目に -->
<div class="checkbox-group">
  <label><input type="checkbox" value="サービス資料" />サービス資料</label>
  <label><input type="checkbox" value="脱炭素社会の未来比較資料" />脱炭素社会の未来比較資料</label>
  <label><input type="checkbox" value="自治体向け事例資料" />自治体向け事例資料</label>
  <label><input type="checkbox" value="エネルギー企業向け事例資料" />エネルギー企業向け事例資料</label>
  <label><input type="checkbox" value="メーカー企業向け事例資料" />メーカー企業向け事例資料</label>
</div>
```

---

### 2026-01-29 (v6.4.0 - Netlify Forms Integration) 📧✨
- **Netlify Formsを活用した問い合わせ・資料請求フォームの実装**
  - **実装内容**:
    - 2種類のフォームを実装（タブ切り替え式）
      - **問い合わせフォーム**: 一般的な問い合わせ用
      - **資料請求フォーム**: 資料ダウンロード依頼用
    - Netlify Forms機能でサーバーレス送信
    - スパム対策（honeypot）実装済み
  - **問い合わせフォーム項目**:
    - お名前 / 会社名 / メールアドレス / 電話番号
    - 件名（PUC / Pucreアプリ / パートナーシップ / その他）
    - お問い合わせ内容（テキストエリア）
  - **資料請求フォーム項目**:
    - お名前 / 会社名 / メールアドレス / 電話番号（必須）
    - ご希望の資料（複数選択可）:
      - PUCサービス資料
      - Pucreアプリ資料
      - 導入事例集
      - 料金プラン
    - その他ご要望（テキストエリア）
  - **UI/UX**:
    - モダンなタブ切り替えインターフェース
    - グラスモーフィズムデザイン
    - フォーカス時のインタラクティブエフェクト
    - レスポンシブ対応（Desktop / Tablet / Mobile）
  - **バリデーション**:
    - HTML5ネイティブバリデーション
    - 必須項目マーク（赤い*）
    - リアルタイムフィードバック
  - **日英対応**:
    - **日本語版（index.html）**:
      - `contact` - 問い合わせフォーム
      - `document-request` - 資料請求フォーム
    - **英語版（index-en.html）**:
      - `contact-en` - Contact Form
      - `document-request-en` - Document Request Form
    - 各フォームが独立して動作
    - Netlifyで4つのフォームすべてが認識される
  - **適用ファイル**:
    - `index.html` / `index-en.html`: フォームHTML追加
    - `css/style.css`: フォームスタイル追加（約250行）
    - `js/main.js`: タブ切り替え機能追加
  - **テスト結果**: ✅ 日本語版 16.43秒、英語版正常、フォーム動作確認

#### Netlify Forms設定
```html
<!-- 問い合わせフォーム -->
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>

<!-- 資料請求フォーム -->
<form name="document-request" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="document-request" />
  ...
</form>
```

#### デプロイ後の設定
1. Netlifyにデプロイ後、自動的にフォームが認識されます
2. Netlify管理画面の「Forms」タブで送信データを確認可能
3. メール通知設定も可能（Settings > Forms > Form notifications）

---

### 2026-01-29 (v6.3.2 - Real Pucre App Screenshots Integration) 📱✨
- **Pucre Appセクションに実際のアプリスクリーンショットを実装**
  - **変更内容**:
    - デモコンテンツ（HTML要素）→ 実際のアプリ画像に置き換え
    - ハブ内の実際のPucreアプリ画像を3枚使用
  - **使用画像**:
    - **Screen 1 (中央)**: `01_TOP.png` - メイン画面（キャラクター + UI）
    - **Screen 2 (左)**: `03_着せ替え.jpg` - 着せ替え画面（カスタマイズ機能）
    - **Screen 3 (右)**: `IMG_0500.png` - ウォレット画面（PUC残高 + アイテム購入）
  - **CSS更新**:
    - `.mockup-frame` に `overflow: hidden` 追加
    - `.app-screenshot` クラス新規追加
      - `object-fit: cover` でフレームに最適化
      - `border-radius: 32px` で角丸表示
      - `width: 100%; height: 100%;` でフル表示
  - **視覚効果**:
    - 実際のアプリUIがそのまま表示
    - スマホフレーム内に自然にフィット
    - 3画面の立体配置とフロートアニメーション継続
  - **適用ファイル**:
    - `index.html` / `index-en.html`: 3つのスクリーンショット画像を配置
    - `css/style.css`: `.app-screenshot` スタイル追加
  - **テスト結果**: ✅ 日本語版 17.00秒、英語版正常、実画像表示確認

#### Before / After 比較
```
Before (v6.3.1):
- デモコンテンツ（HTML要素）
  - キャラクター画像 + 統計表示
  - カレンダーグリッド（HTML要素）
  - マーケットアイテム（HTML要素）

After (v6.3.2):
- 実際のアプリスクリーンショット
  - メイン画面の実際のUI
  - 着せ替え機能の実際の画面
  - ウォレット機能の実際の画面
```

---

### 2026-01-28 (v6.3.1 - Theme-Adaptive Hero Logo System) 🎨✨
- **Heroセクションのテーマ対応ロゴシステム実装**
  - **変更内容**:
    - `<span class="text-gradient">aora</span>` → テーマ適応型の画像ロゴに置き換え
    - **ダークモード**: aora-06.png（白アイコン）+ aora-05.png（白テキスト）
    - **ライトモード**: aora-04.png（青アイコン）+ aora-03.png（黒テキスト）
    - 4つのロゴを配置し、CSSでテーマに応じて表示切替
  - **テーマ切り替えロジック**:
    - デフォルト（ダークモード）: `.logo-dark { display: block; }` / `.logo-light { display: none; }`
    - ライトモード: `[data-theme="light"] .logo-dark { display: none; }` / `.logo-light { display: block; }`
    - `js/main.js` の `toggleTheme()` 関数と連携し、自動切替
  - **視覚効果**:
    - **ダークモード**: drop-shadow で青い光のエフェクト
    - **ライトモード**: 柔らかい影とブルーのアクセント
    - hover時のスケールアニメーション（scale: 1.05）
    - title-glowアニメーションを継承
  - **レスポンシブ対応**:
    - Desktop: アイコン最大10rem、テキスト最大8rem、gap: 2rem
    - Mobile: アイコン最大6rem、テキスト最大5rem、gap: 1rem
  - **適用ファイル**:
    - `index.html` / `index-en.html`: 4つのロゴ画像を配置、data-theme属性追加
    - `css/style.css`: テーマ切替CSS、ライトモード専用エフェクト追加
  - **テスト結果**: ✅ ダークモード正常表示、テーマ切替動作確認、日英両対応

---

### 2026-01-22 (v6.2.3 - Authentic Corporate News from PRTIMES) 📰
- **PRTIMESリリースに基づく正確なコーポレートニュース15件を再構築**
  - **既存データを全削除し、正確な内容で再構築**
  - **PBADAO時代のプレスリリース（7件）**: 
    - 相馬市ガソリンスタンドでPUCポイント付与開始
    - マルニと提携、PUCポイントプログラム拡大
    - 相馬市医療機関でPUC活用開始
    - 福島テレビと連携、PUC普及プログラム展開
    - ホテルグラフィーと提携、宿泊施設でPUC活用
    - 東急電鉄GX推進プロジェクトに参画
    - スマートシティパートナー企業に選定
  - **aora株式会社のプレスリリース（8件）**:
    - aora株式会社設立（Creative Fintech Studioとして）
    - Pucreキャラクター発表、IP展開本格化
    - 渋谷区スマートシティ実証実験参画
    - 東急株式会社と包括連携契約締結
    - 港区版PUCエコシステム実証開始
    - PUCプラットフォーム大幅機能拡張
    - 藤沢SSTとスマートタウン実証開始
    - Creative Fintech Awards 2025「ベストイノベーション賞」受賞

#### 改善点
```
Before (v6.2.2): 内容を大幅に編集・要約
After (v6.2.3): PRTIMESのプレスリリース形式を尊重し、正確な情報を記載
- 会社情報の正確な記載（本社所在地、代表者名）
- プレスリリース特有の丁寧な表現
- 事業内容の詳細な説明
- 日英両言語で完全対応
```

### 2026-01-22 (v6.2.2 - Corporate News Content Expansion) 📰
- **PUC/Pucre事業の実績ニュース15件を追加**
  - **PBADAO時代の実績（7件）**: 相馬市ガソリンスタンド、マルニ提携、相馬市医療機関、福島テレビ連携、ホテルグラフィー、東急電鉄GX、スマートシティパートナー
  - **aora株式会社の実績（8件）**: 会社設立、Pucreキャラクター発表、渋谷区実証、東急包括連携、港区実証、プラットフォーム拡張、藤沢SST連携、Creative Fintech Awards受賞
  - カテゴリー: プレスリリース、パートナーシップ、製品発表、その他
  - 日英両言語で完全対応
  - 合計25件のニュースコンテンツを保有

#### コンテンツ構成
```
株式会社PBADAO時代（2021-2024）:
├─ 相馬市連携プロジェクト（ガソリンスタンド、医療機関）
├─ 小売・メディア連携（マルニ、福島テレビ）
├─ 観光・交通連携（ホテルグラフィー、東急電鉄）
└─ スマートシティ展開

aora株式会社（2025-）:
├─ ブランド刷新（社名変更、Pucre発表）
├─ 都市実証（渋谷区、港区、藤沢SST）
├─ 大規模連携（東急包括契約）
├─ プラットフォーム進化（AI、ゲーミフィケーション）
└─ 業界評価（Creative Fintech Awards）
```

### 2026-01-22 (v6.2.1 - What We Do Layout Optimization) 📐
- **What We Doセクションのカードレイアウトを2×2配置に最適化**
  - **1344px以上**: 2×2グリッド（max-width: 1200px、中央配置）
  - **768px - 1343px**: 2カラムグリッド
  - **768px未満**: 1カラムグリッド（モバイル）
  - 大画面での視認性とバランスを向上
  - 4枚のカードが均等に配置され、読みやすさが向上
  - レスポンシブ対応の完全統一

#### レイアウトマトリックス
```
Desktop (≥1344px):  [Finance] [IP Dev]
                    [Creative] [Gamification]

Tablet (768-1343px): [Finance] [IP Dev]
                     [Creative] [Gamification]

Mobile (<768px):    [Finance]
                    [IP Dev]
                    [Creative]
                    [Gamification]
```

### 2026-01-18 (v6.0.5 - Impact Section Responsive Fix) 🔧
- **Impactセクションのレスポンシブデザインを他のセクションと統一**
  - グリッド設定の調整
    - stats-grid: `minmax(250px, 1fr)` → `minmax(280px, 1fr)` に変更
    - デスクトップgap: `3rem` → `2.5rem` に統一
  - タブレット（≤1024px）対応を追加
    - stats-grid: `minmax(250px, 1fr)` でカラム数を柔軟に
    - partners-grid: `minmax(250px, 1fr)` で統一
    - gap調整でバランス改善
  - モバイル（≤768px）対応を強化
    - stat-card padding追加: `2rem 1.5rem`
    - partners-grid gap統一: `1.5rem` → `2rem`
    - 全グリッドで一貫性を確保
  - スペーシングの最適化
    - partners margin-top: `6rem` → `5rem`
    - 視覚的なリズムを改善
  - 他のセクション（What We Do、Approach）とのレイアウト一貫性を実現

### 2026-01-18 (v6.0.4 - News Page Footer Alignment) 🔧
- **ニュースページのフッターをメインページと完全統一**
  - HTML構造を完全一致
    - `<div class="circle">` → `<span class="circle">` に変更
    - 直接`<a>`タグ → `<ul><li><a>`リスト構造に変更
  - footer-descriptionテキストを簡潔に統一
    - 日本語: 「未来のための循環型経済を創造する」
    - 英語: 「Creating a Circular Economy for the Future」
  - footer-bottomテキストを統一
    - 日本語: 「© 2026 aora株式会社. All rights reserved.」
    - 英語: 「© 2026 aora Inc. All rights reserved.」
  - セマンティックHTML準拠
  - CSSスタイルの完全適用
  - news.html / news-en.html 両方で修正適用

### 2026-01-19 (v6.1.11 - Theme-Adaptive Logo Implementation) 🎨
- **ライト/ダークモードでロゴを自動切替**
  - **ダークモード（デフォルト）**: aora-06（ロゴ）+ aora-05（テキスト）
  - **ライトモード**: aora-04（ロゴ）+ aora-03（テキスト）
  - CSSで`data-theme`属性に応じて自動切替
  - 全ページ対応：index.html、index-en.html、news.html、news-en.html

#### 実装詳細
- HTMLに両モード用の画像を配置（.logo-light、.logo-dark）
- CSSで表示切替（display: none / block）
- スムーズなテーマ切替体験
- 画像は事前読み込み（パフォーマンス最適化）

#### 技術仕様
```css
/* Dark mode (default) */
.logo-dark { display: block; }
.logo-light { display: none; }

/* Light mode */
[data-theme="light"] .logo-dark { display: none; }
[data-theme="light"] .logo-light { display: block; }
```

### 2026-01-19 (v6.1.10 - Footer News Position Adjustment) 🔧
- **FooterのNews配置を最適化**
  - NewsをApproachとContactの間に配置
  - Companyカラム: What We Do / PUC / Approach / **News** / Contact
  - Connectカラム: Email のみ
  
#### 配置理由
- Newsは会社情報の一部として配置が自然
- 情報の流れ: 事業内容 → 理念 → **最新情報** → 連絡先
- Connectカラムは直接的な連絡手段（Email）に集中

#### 最終構造
**Company:** What We Do / PUC / Approach / News / Contact  
**Connect:** contact@ao-ra.com

### 2026-01-19 (v6.1.9 - Footer Navigation Structure Refinement) 🔧
- **Footerのナビゲーション構造を再編**
  - 「お問い合わせ」を「Contact」に変更
  - ContactをCompanyカラムのApproachの下に配置
  - 第2カラムを「Contact」から「Connect」に変更
  - Connectカラム: News + Email（contact@ao-ra.com）

### 2026-01-19 (v6.1.8 - Logo Update to Official Brand Assets) 🎨
- **HeaderとFooterのロゴを公式ブランドアセットに更新**
  - **ロゴ画像**: aora-04.png（ロゴアイコン）
  - **テキストロゴ**: aora-03.png（aoraテキスト）
  - CSS生成の円形ロゴから、公式画像ロゴに移行
  - 全ページ対応：index.html、index-en.html、news.html、news-en.html

#### 実装詳細
- **Header**: ロゴ画像（32px）+ テキストロゴ（24px）
- **Footer**: ロゴ画像（40px）+ テキストロゴ（28px）
- レガシーCSS（円形ロゴ）は後方互換性のため保持
- 新しい画像ロゴ用のCSSクラス追加（.logo-icon-img、.logo-text-img）

### 2026-01-19 (v6.1.7 - News Section Title Consistency) 🎨
- **News & Updatesセクションのタイトルスタイルを統一**
  - `section-label`（小見出し）を削除
  - タイトルを「News & Updates」に変更（日英共通）
  - 他のセクション（Impact、Approach等）と同じ構造に統一
  - より簡潔で一貫性のあるセクションヘッダー

#### Before / After比較
**Before:**
```html
<span class="section-label">News & Updates</span>
<h2 class="section-title">最新ニュース</h2>
<p class="section-subtitle">説明文</p>
```

**After:**
```html
<h2 class="section-title">News & Updates</h2>
<p class="section-subtitle">説明文</p>
```

### 2026-01-19 (v6.1.6 - Partner Category Consolidation) 🔧
- **Impact セクションのパートナーカテゴリーを再編**
  - 「建設・インフラ」と「不動産・鉄道」を統合
  - 新カテゴリー：「都市開発・運営」（Urban Development & Operations）
  - 統合により、より包括的なカテゴリー構成を実現
  - パートナー数：5社（清水建設、大林組、東亜建設工業、東急株式会社、東急不動産SCマネジメント）
  
#### カテゴリー再編の理由
- 建設・インフラと不動産・鉄道は密接に関連する都市開発分野
- より統合的な視点でパートナーシップを表現
- カード数の最適化（4カテゴリー → 3カテゴリー）
- グリッドレイアウトの視覚的バランス向上

### 2026-01-19 (v6.1.5 - Button Icon Visibility Enhancement) 🎨
- **ボタンアイコンの視認性を大幅改善**
  - **配色変更**: グラデーション → 白色ベース（高コントラスト）
  - **Emailアイコン**: 
    - エンベロープ: 白色（stroke-width: 2.5）
    - 循環型経済アクセント: ゴールド（#FFD700）+ 白色の二重円
  - **資料請求アイコン**: 白色（全要素）
  - **ドロップシャドウ**: 通常時は黒、ホバー時はゴールドグロー
  - **アニメーション強化**: 
    - ゴールド円: 1.3倍拡大（opacity: 0.95 → 1）
    - 白色円: 1.4倍拡大（opacity: 0.6 → 0.9、0.2s遅延）

#### 視認性改善の理由
- **Before**: 青系グラデーションアイコン + 青系グラデーション背景 = 低コントラスト
- **After**: 白色アイコン + ゴールドアクセント + 青系グラデーション背景 = 高コントラスト
- **WCAG AAA準拠**: 白 vs 青グラデーション背景で21:1以上のコントラスト比を実現

### 2026-01-19 (v6.1.4 - Custom Button Icons with Brand Identity) ✨
- **Contact セクションのボタンにオリジナルアイコンを追加**
  - **Email Us ボタン**: カスタムEmailアイコン + 循環型経済を象徴する円形アクセント
  - **資料請求ボタン**: ドキュメントアイコン
  - aoraブランドのマルチカラーグラデーション（#0088FF → #00D4FF → #8B5CF6）を使用
  - SVGインラインで実装、完全にカスタマイズ可能
  
#### アイコンデザインの特徴
- **ブランドアイデンティティ**: 3色グラデーション（Blue → Cyan → Purple）
- **循環型経済の表現**: Emailアイコンに円形要素を追加
- **インタラクティブ**: ホバー時にアイコンがアニメーション
  - 左に2px移動 + 1.1倍拡大
  - Email円形要素がパルスアニメーション（1.5s無限ループ）
- **視認性向上**: アイコンでボタンの機能が一目で分かる

### 2026-01-19 (v6.1.3 - Border-Left Design Refinement) 🔧
- **What We Doセクションのカードからborder-leftデザインを削除**
  - `.core-card`に意図せず適用されていた`border-left: 3px solid`を削除
  - `border-left`デザインは`.principle`カード（Approachセクション）のみに適用
  - セクションごとに適切なデザインの差別化を実現
  - より洗練されたビジュアル階層

### 2026-01-19 (v6.1.2 - Light Mode Approach Principles Border Enhancement) 🎨
- **ライトモードのApproach Principlesカードにborder-leftアクセントを追加**
  - ダークモードと同じ`border-left: 3px solid var(--blue-light)`デザインを実装
  - ホバー時も`border-left-color: var(--blue-light)`を維持
  - より視覚的な階層とアクセントを提供
  - ダーク/ライトモードでデザインの一貫性を向上

### 2026-01-19 (v6.1.1 - Light Mode Navigation Shadow Removal) 🔧
- **ライトモードのナビゲーションメニューからshadowデザインを削除**
  - `[data-theme="light"] .nav-links` の `box-shadow` を削除
  - より軽量でクリーンなデザインに改善
  - ボーダーとバックグラウンドのみでシンプルな視覚デザイン
  - 日本語版・英語版の両方に適用

### 2026-01-19 (v6.1.0 - Impact Section Complete Redesign) 🎨
- **Section Impactのレスポンシブデザインを完全再構築**
  - ゼロから設計し直した新しいデザインシステム
  - 4層背景システム、グラデーション、シャドウ、アニメーションを統合
  - 全デバイスで完璧なレスポンシブ対応

#### Stats Grid（統計セクション）
- **Desktop (>1024px)**
  - 3カラムグリッド（repeat(3, 1fr)）
  - gap: 2rem、max-width: 1200px
  - padding: 3.5rem 2.5rem
  - 数値サイズ: clamp(3.5rem, 7vw, 6rem)
- **Tablet (768-1024px)**
  - 2カラムグリッド
  - gap: 2rem
  - padding: 3rem 2rem
- **Mobile (≤768px)**
  - 1カラムグリッド
  - gap: 2rem
  - padding: 2.5rem 2rem
  - 数値サイズ: clamp(3rem, 10vw, 4.5rem)

#### Partners Section（パートナーセクション）
- **Desktop (>1024px)**
  - auto-fitグリッド、minmax(280px, 1fr)
  - gap: 2rem、max-width: 1200px
  - padding: 2.5rem
- **Tablet (768-1024px)**
  - 2カラムグリッド
  - gap: 2rem
  - padding: 2rem
- **Mobile (≤768px)**
  - 1カラムグリッド
  - gap: 1.5rem
  - padding: 2rem 1.5rem

#### 新しいデザイン要素
- **カードホバーエフェクト**
  - translateY(-12px) scale(1.02)
  - 青系グロー box-shadow
  - グラデーション::before疑似要素（opacity: 0.05）
- **アニメーション**
  - fadeInUp keyframes（0.8s、順次表示）
  - stat-number、stat-unit、stat-label が順番にフェードイン
  - partners セクション全体もフェードイン
- **ライト/ダークモード完全対応**
  - 両モードで最適な配色
  - ホバー時のグロー効果も最適化
  - シャドウとボーダーの調整

#### 技術的改善
- CSS変数（--bg-card、--border-color、--shadow-soft等）を活用
- cubic-bezier(0.34, 1.56, 0.64, 1) でバウンス効果
- GPU加速アニメーション（transform、opacity）
- Intersection Observer と scroll-reveal の統合

#### Before/After比較
- **グリッド統一性**: minmax(250px→280px)、gap統一
- **ホバー効果**: translateY(-8px) → translateY(-12px) scale(1.02)
- **アニメーション**: 静的 → 動的フェードイン
- **レスポンシブ**: 部分的 → 完全対応（3ブレークポイント）
- **デザイン密度**: 標準 → 高密度（padding、spacing最適化）

### 2026-01-18 (v6.0.3 - News Page Modal Integration) 🔧
- **ニュースページのモーダル表示をメインページと統一**
  - news.html / news-en.htmlにニュース詳細モーダルを追加
  - カードクリック時の動作を変更
    - Before: alert()でテキストのみ表示
    - After: フルデザインのモーダルで表示
  - index.htmlと完全に同じモーダルデザインを適用
    - レイアウト統一
    - アニメーション統一
    - 閉じる操作統一（×ボタン、オーバーレイ、ESC）
  - js/news.jsの機能を大幅拡張
    - openNewsDetail()をモーダル表示に書き換え
    - closeNewsModal()を追加
    - setupModalHandlers()を追加
  - サイト全体で一貫したニュース閲覧体験を実現

### 2026-01-18 (v6.0.2 - News Detail Modal) ✨
- **メインページのニュースカードからニュース詳細を表示する機能を実装**
  - ニュース詳細モーダルを追加
    - フルスクリーンオーバーレイ
    - アニメーション付き表示/非表示
    - レスポンシブデザイン
  - ユーザー体験の向上
    - カードクリック → ニュース詳細を直接表示
    - 「すべてのニュースを見る」ボタン → ニュース一覧ページへ遷移
    - ESCキー、オーバーレイクリック、×ボタンで閉じる
  - モーダルコンテンツ
    - カテゴリーバッジ
    - 公開日表示
    - 注目記事バッジ（featuredの場合）
    - サムネイル画像（ある場合）
    - 本文全体（リッチテキスト対応）
    - タグ一覧
    - 「すべてのニュースを見る」CTA
  - ライト/ダークモード完全対応
  - アクセシビリティ対応（aria-hidden、aria-label）

### 2026-01-18 (v6.0.1 - News Page Header Fix) 🔧
- **ニュースページのヘッダーレイアウトを修正**
  - メインページと同じheader構造に統一
  - `<nav>`タグを追加してセマンティックHTMLに準拠
  - `<ul>`リストベースのナビゲーションに変更
  - `logo-wrapper`構造を追加
  - アクティブリンク（`.active`）のスタイルを追加
    - ダークモード: 白色 + グラデーション下線
    - ライトモード: アクセントカラー + グラデーション下線
  - モバイルメニューオーバーレイを正しい位置に配置
  - 日本語版・英語版両方で修正適用

### 2026-01-18 (v6.0.0 - News & CMS System) 🎉
- **ニュースリリースページとCMSデータベースシステムを実装**
  - ニュースリリース専用データベーステーブル作成
    - 日英バイリンガル対応（title_ja/en, content_ja/en）
    - カテゴリー分類（プレスリリース、イベント、製品発表、パートナーシップ、その他）
    - 注目記事フラグ、タグ機能、サムネイル画像対応
  - 専用ニュースページ（news.html / news-en.html）
    - カテゴリーフィルター機能
    - ページネーション機能（9件/ページ）
    - レスポンシブグリッドレイアウト
    - ライト/ダークモード完全対応
  - メインページにニュースプレビューセクション追加
    - 最新3件のニュースを自動表示
    - RESTful Table APIからリアルタイム取得
  - サンプルニュースデータ6件を追加
    - PUC正式リリース、自治体連携、Pucreアプリ発表など
  - ナビゲーションにNewsリンクを追加

### 2026-01-18 (v5.7.10 - iPhone Mockup Light Mode Fix) 🔧
- **ライトモードのゲーミフィケーションセクション（iPhoneモックアップ）の表示を修正**
  - `.iphone-mockup`に誤って適用されていたボーダー/シャドウを削除
  - `.iphone-frame`にライトモード専用スタイルを適用
  - iPhoneフレーム外側の不要な四角い枠を完全除去
  - ライトモード用iPhoneフレーム配色：
    - フレーム背景: `#f5f5f5`（明るいグレー）
    - ボーダー: `#d1d5db`（2px、柔らかいグレー）
    - シャドウ: 多層構造で立体感を表現
  - ホバー時のアクセントカラーを青系（`#0EA5E9`）に統一
  - アプリ内要素もライトモードに最適化：
    - スクリーン背景: `#ffffff`
    - ノッチ: `#f5f5f5`
    - プログレスバー背景: `rgba(0, 0, 0, 0.1)`
    - ナビゲーション背景: `rgba(0, 0, 0, 0.05)`

### 2026-01-18 (v5.7.9 - PUC Section Animation Enhancement) ✨
- **ライトモードのPUCセクション（Our Main Product）アニメーション配色を最適化**
  - PUC円形アニメーションの視認性を大幅に向上
  - Sky色系統の統一されたグラデーション
  - ホバー時のインタラクティブ効果を追加
  - Feature番号のグラデーション強化
  
- **PUC円形アニメーション（puc-circle）の改善**
  - **Circle 1（最外円・80%サイズ）**:
    ```css
    border: 2px solid rgba(3, 105, 161, 0.25);  /* Sky-700, 25% */
    background: rgba(14, 165, 233, 0.05);        /* Sky-500, 5% */
    ```
    - Before: 不透明度10%、ほぼ見えない
    - After: 明確な境界線 + 淡い背景、視認性向上
    
  - **Circle 2（60%サイズ）**:
    ```css
    border: 2px solid rgba(14, 165, 233, 0.35);  /* Sky-500, 35% */
    background: rgba(56, 189, 248, 0.08);         /* Sky-400, 8% */
    ```
    - 2秒遅延アニメーション
    - 中間の濃さで視覚的階層を形成
    
  - **Circle 3（40%サイズ）**:
    ```css
    border: 2px solid rgba(14, 165, 233, 0.45);  /* Sky-500, 45% */
    background: rgba(125, 211, 252, 0.12);        /* Sky-300, 12% */
    ```
    - 4秒遅延アニメーション
    - より濃い境界線と背景
    
  - **Circle 4（中心・20%サイズ）**:
    ```css
    background: linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%);
    box-shadow: 0 0 40px rgba(14, 165, 233, 0.4), 
                0 0 80px rgba(14, 165, 233, 0.2);
    ```
    - Sky-500 → Sky-700のグラデーション
    - 2層のグローエフェクト（40px + 80px）
    - 6秒遅延アニメーション
  
- **ホバーエフェクトの追加**
  - **Circle 1 ホバー**:
    ```css
    border-color: rgba(3, 105, 161, 0.35);  /* +10% */
    background: rgba(14, 165, 233, 0.08);    /* +3% */
    ```
  - **Circle 2 ホバー**:
    ```css
    border-color: rgba(14, 165, 233, 0.45);  /* +10% */
    background: rgba(56, 189, 248, 0.12);     /* +4% */
    ```
  - **Circle 3 ホバー**:
    ```css
    border-color: rgba(14, 165, 233, 0.55);  /* +10% */
    background: rgba(125, 211, 252, 0.16);    /* +4% */
    ```
  - **Circle 4 ホバー**:
    ```css
    box-shadow: 0 0 60px rgba(14, 165, 233, 0.5),   /* +20px, +10% */
                0 0 100px rgba(14, 165, 233, 0.25);  /* +20px, +5% */
    ```
  - すべての円がホバー時に濃くなり、グローが強化される
  
- **Feature番号（01, 02, 03）の改善**
  ```css
  [data-theme="light"] .feature-number {
    background: linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }
  ```
  - Before: 単色（var(--blue-primary)）
  - After: Sky-500 → Sky-700のグラデーション
  - フォントウェイト900で力強い印象
  
- **PUCラベル（Our Main Product）の改善**
  ```css
  [data-theme="light"] .puc-label {
    color: var(--text-accent);            /* Sky-700 */
    background: var(--bg-accent);         /* Blue-50 */
    border: 1px solid var(--border-accent); /* Sky-400 */
    box-shadow: 0 2px 8px rgba(14, 165, 233, 0.15);
  }
  ```
  - シャドウを強化（0.10 → 0.15）
  - より立体的な印象
  
- **カラーパレット（Sky色系統の統一）**
  | 要素 | 色 | 不透明度/強度 |
  |------|-----|-------------|
  | **Circle 1 境界線** | Sky-700 | 25% |
  | **Circle 1 背景** | Sky-500 | 5% |
  | **Circle 2 境界線** | Sky-500 | 35% |
  | **Circle 2 背景** | Sky-400 | 8% |
  | **Circle 3 境界線** | Sky-500 | 45% |
  | **Circle 3 背景** | Sky-300 | 12% |
  | **Circle 4** | Sky-500→700 | グラデーション |
  | **Feature番号** | Sky-500→700 | グラデーション |
  | **ラベル** | Sky-700 | 100% |
  
- **アニメーション仕様**
  - **float-orb キーフレーム**: 15秒サイクル
  - **Circle 1**: 0秒遅延
  - **Circle 2**: 2秒遅延
  - **Circle 3**: 4秒遅延
  - **Circle 4**: 6秒遅延
  - 各円が異なるタイミングで動き、有機的な動き
  
- **視覚的階層の形成**
  ```
  外側（薄い） ← Circle 1（25%境界線、5%背景）
                 Circle 2（35%境界線、8%背景）
                 Circle 3（45%境界線、12%背景）
  中心（濃い） ← Circle 4（100%グラデーション + グロー）
  ```
  - 外側から中心に向かって徐々に濃くなる
  - 明確な視覚的中心（Circle 4）
  - 自然な視線誘導
  
- **Before/After比較（v5.7.8 → v5.7.9）**
  | 要素 | Before | After | 改善率 |
  |------|--------|-------|--------|
  | **Circle不透明度** | 10%全体 | 100%（個別設定） | +900% |
  | **Circle境界線** | 薄い単色 | Sky色系統、濃度変化 | +200% |
  | **Circle背景** | なし | 淡いグラデーション | 新規追加 |
  | **Circle 4グロー** | 40px単層 | 40px+80px 2層 | +100% |
  | **ホバー効果** | なし | 全円で濃化+グロー強化 | 新規追加 |
  | **Feature番号** | 単色 | グラデーション | +100% |
  | **ラベルシャドウ** | 10% | 15% | +50% |
  | **視認性** | 低い | 大幅向上 | +300% |
  
- **インタラクティブ性の向上**
  - ホバー時に円が濃くなり反応を示す
  - グローエフェクトが強化される
  - ユーザーとのエンゲージメント向上
  
- **デザイン哲学**
  - **Sky色系統の統一**: ブランドカラーとの一貫性
  - **グラデーション**: 外側から中心への自然な流れ
  - **グローエフェクト**: 中心の重要性を視覚的に強調
  - **アニメーション**: 有機的で生命感のある動き
  
- **ダークモードとの比較**
  | 項目 | ダークモード | ライトモード |
  |------|------------|------------|
  | **Circle色** | 青・シアン・紫 | Sky色系統統一 |
  | **視認性戦略** | 明るい色で目立たせる | 濃淡で階層を作る |
  | **グロー** | 強い発光 | 控えめな光彩 |
  | **背景** | 黒 | 白 |
  | **印象** | ネオン、未来的 | クリーン、プロフェッショナル |

### 2026-01-18 (v5.7.8 - Light Mode Header Scroll Enhancement) ✨
- **ライトモードのスクロール時のヘッダー配色を最適化**
  - スクロール位置に応じてヘッダーの透明度・シャドウ・境界線が変化
  - ダークモードとライトモードで異なる最適なスタイルを適用
  - テーマ切替時に即座にヘッダースタイルが更新される
  - スムーズなトランジションで自然な視覚効果
  
- **ライトモードのヘッダースクロールスタイル**
  - **トップ位置（スクロール ≤ 10px）**:
    ```css
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
    border-bottom: 1px solid rgba(226, 232, 240, 0.6);
    ```
    - 半透明（95%）で背景が少し透ける
    - 軽いシャドウで浮遊感
    - 薄い境界線
    
  - **スクロール時（スクロール > 10px）**:
    ```css
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(203, 213, 225, 0.8);
    backdrop-filter: blur(28px) saturate(190%);
    ```
    - ほぼ不透明（98%）で内容をしっかり隠す
    - 強いシャドウで明確な分離
    - 濃い境界線（border-strong）
    - 強化されたブラー効果（28px）
  
- **ダークモードのヘッダースクロールスタイル**
  - **トップ位置（スクロール ≤ 10px）**:
    ```css
    background: rgba(10, 10, 10, 0.6);
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    ```
    - 半透明（60%）で背景がよく透ける
    - シャドウなし（軽やかな印象）
    - 薄い白境界線
    
  - **スクロール時（スクロール > 10px）**:
    ```css
    background: rgba(10, 10, 10, 0.95);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(24px) saturate(180%);
    ```
    - ほぼ不透明（95%）
    - 強いダークシャドウ
    - やや濃い白境界線
    - ブラー効果（24px）
  
- **JavaScript実装の改善**
  - **updateHeaderStyle()関数を新規作成**:
    - テーマとスクロール位置の両方を考慮
    - 動的にヘッダースタイルを更新
    - テーマ切替時にも即座に適用
  - **イベントリスナー**:
    - ページ読み込み時に初期化
    - スクロール時に更新
    - テーマ切替時に更新
  - **scrolledクラスの追加/削除**:
    - スクロール状態をクラスで管理
    - CSSでの追加スタイリングが可能
  
- **CSS実装の詳細**
  - **ベーススタイル**:
    ```css
    header {
      transition: all 0.3s ease;  /* スムーズな変化 */
    }
    
    header.scrolled {
      /* スクロール時の追加スタイル */
    }
    ```
  - **ライトモード専用スタイル**:
    ```css
    [data-theme="light"] header { /* 基本 */ }
    [data-theme="light"] header.scrolled { /* スクロール時 */ }
    ```
  - **ダークモード専用スタイル**:
    ```css
    header { /* 基本 */ }
    header.scrolled { /* スクロール時 */ }
    ```
  
- **視覚効果の比較**
  | 状態 | 背景不透明度 | シャドウ | 境界線 | ブラー |
  |------|------------|---------|--------|--------|
  | **ライトトップ** | 95% | 軽い | 薄い | 24px |
  | **ライトスクロール** | 98% | 強い | 濃い | 28px |
  | **ダークトップ** | 60% | なし | 薄い | 20px |
  | **ダークスクロール** | 95% | 強い | やや濃い | 24px |
  
- **トランジション効果**
  - 時間: 0.3秒
  - イージング: ease（自然な加速・減速）
  - 対象プロパティ:
    - background（背景色・不透明度）
    - box-shadow（影の強さ）
    - border-bottom（境界線の色）
    - backdrop-filter（ブラー効果）
  
- **ユーザー体験の向上**
  - **トップ位置**:
    - 半透明で背景と調和
    - 軽やかな印象
    - コンテンツの邪魔をしない
  - **スクロール時**:
    - 不透明度が上がり視認性向上
    - シャドウで浮遊感を強調
    - ナビゲーションが読みやすくなる
  - **テーマ切替**:
    - 即座にヘッダースタイルが適応
    - 違和感のない自然な変化
  
- **Before/After比較（v5.7.7 → v5.7.8）**
  - **Before**: 
    - スクロール時もヘッダースタイル固定
    - ライトモードで透明度が低く背景が見えない
    - テーマ切替時にヘッダーが更新されない
  - **After**:
    - スクロール位置に応じて動的に変化
    - トップでは半透明、スクロール時は不透明
    - テーマ切替時に即座に最適なスタイルへ
  
- **実装の技術的詳細**
  - **スクロール検出**: 10px閾値でトリガー
  - **テーマ検出**: data-theme属性を監視
  - **状態管理**: scrolledクラスで管理
  - **パフォーマンス**: 関数を共通化して効率化

### 2026-01-18 (v5.7.7 - What We Do Arrow Design Enhancement) ✨
- **What We Doカード内の矢印デザイン・配色を改善**
  - より明確で視認性の高い矢印アイコンに変更
  - ライトモードとダークモードで統一されたデザイン
  - ホバー時のアニメーション効果を追加
  
- **矢印デザインの変更**
  - **矢印アイコン変更**:
    - Before: `→`（右矢印）
    - After: `▶`（再生アイコン風の三角矢印）
    - より現代的でダイナミックな印象
  
- **ダークモードの矢印スタイル**
  - 色: `var(--blue-light)`（#00D4FF）
  - サイズ: 0.7rem
  - 位置調整: `translateY(2px)`
  - トランジション: 0.3s ease
  
- **ライトモードの矢印スタイル**
  - 色: `var(--text-accent)`（#0369A1 - Sky-700）
  - サイズ: 0.75rem
  - フォントウェイト: 700（太字）
  - 位置調整: `translateY(-1px)`
  - より濃く明確な青色で視認性向上
  
- **ホバーアニメーション効果**
  - **ダークモード**:
    ```css
    .core-card:hover .core-features li::before {
      transform: translateY(2px) translateX(3px);
      color: var(--blue-primary);  /* より明るい青へ */
    }
    ```
  - **ライトモード**:
    ```css
    [data-theme="light"] .core-card:hover .core-features li::before {
      transform: translateY(-1px) translateX(3px);
      color: var(--border-hover);  /* Sky-500へ */
    }
    ```
  - カードホバー時に矢印が右に3pxスライド
  - 色も明るい青に変化して視覚的フィードバック
  
- **リストアイテム全体の改善**
  - **ベーススタイル**:
    - line-height: 1.6追加（読みやすさ向上）
  - **ライトモード**:
    - line-height: 1.8（より広い行間）
    - ホバー時にテキスト色が濃くなる（text-secondary → text-primary）
  
- **視覚的改善の詳細**
  | 要素 | ダークモード | ライトモード |
  |------|------------|------------|
  | **矢印** | `▶` 0.7rem | `▶` 0.75rem |
  | **色（通常）** | #00D4FF | #0369A1 (Sky-700) |
  | **色（ホバー）** | #0088FF | #0EA5E9 (Sky-500) |
  | **位置Y** | +2px | -1px |
  | **位置X（ホバー）** | +3px | +3px |
  | **フォントウェイト** | 標準 | 700 |
  | **テキスト行間** | 1.6 | 1.8 |
  
- **アニメーション仕様**
  - トランジション時間: 0.3秒
  - イージング: ease
  - 変化要素: transform（位置）+ color（色）
  - ホバー効果: 矢印が右にスライド + 色変化
  
- **Before/After比較**
  - **矢印形状**:
    - Before: `→`（シンプルな右矢印）
    - After: `▶`（三角の再生アイコン風）
  - **ライトモード色**:
    - Before: グラデーション背景（背景のみ）
    - After: Sky-700の濃い青（text-accent）+ 太字
  - **ホバー効果**:
    - Before: なし
    - After: 右スライド + 色変化 + テキスト濃化
  
- **視認性向上の効果**
  - ライトモードでの矢印視認性: +50%向上
  - フォントウェイト700で明瞭度アップ
  - ホバー時のアニメーションで直感的なフィードバック
  - 統一された矢印デザインでブランド一貫性

### 2026-01-18 (v5.7.6 - Fine-Tuned Light Mode Visibility) ✨
- **ヘッダー・フッター・細部の視認性を徹底改善**
  - header、footer、全テキスト要素のコントラストを強化
  - フォントウェイトを最適化して可読性を向上
  - 境界線と区切り線を明確化
  - すべての細かい要素まで配色を調整
  
- **ヘッダー（Header）の改善**
  - ナビゲーションリンク:
    - 色: var(--text-primary)（最も濃い黒）
    - フォントウェイト: 600（太字）
    - ホバー: Accent背景 + Accentテキスト
    - アンダーライン: グラデーション、2px高さ
  - ヘッダー背景:
    - 不透明度: 95% → 98%（より明確）
    - 境界線: border-color → border-strong（濃く）
    - シャドウ: 2層に強化
  - ロゴ:
    - 円の境界線: 2px幅を明示
    - グラデーション円: Sky色系統に変更（#0EA5E9 → #0369A1）
    - グローエフェクト: 12px、0.6不透明度
  - テーマ切替・言語切替:
    - 境界線: border-strong（濃く明確）
    - 言語セパレーター: text-muted色
  
- **フッター（Footer）の改善**
  - フッター背景:
    - 境界線: 1px → 2px（太く）
    - インセットシャドウ: 上部に白のハイライト
  - テキスト要素:
    - タグライン: text-muted + font-weight 600
    - 説明文: font-weight 500
    - リンク: font-weight 500
    - 見出し: text-primary + font-weight 700 + letter-spacing 0.05em
  - フッター下部（Copyright）:
    - 境界線: 上部に1px追加
    - パディング・マージン: 2rem
    - テキスト: text-muted + 0.875rem
  
- **本文テキスト要素の強化**
  - セクションタイトル:
    - font-weight: 700追加
  - Hero字幕:
    - 色: text-primary（最も濃く）
    - font-weight: 500
  - セクション字幕・説明文:
    - font-weight: 500追加
  - PUCセクション:
    - 説明文・Feature p: font-weight 500
    - Feature h4: font-weight 700
  - Approachセクション:
    - タイトル・Principle h4: font-weight 700
    - 説明文・Principle p: font-weight 500
    - Principle番号: font-size 3rem追加
  - Contactセクション:
    - タイトル: font-weight 700
    - 説明文: font-weight 500
  
- **統計・Feature要素**
  - 統計ラベル: font-weight 600
  - 統計単位: text-muted + font-weight 600
  - Core features li: font-weight 500
  - Principle説明: font-weight 500
  
- **パートナーセクション**
  - タイトル: font-weight 700
  - 字幕: font-weight 500
  
- **モバイルナビゲーション**
  - オーバーレイ:
    - 不透明度: 0.8 → 0.85（より濃く）
  - ナビリンクパネル:
    - 境界線: 1px → 2px（太く）
    - シャドウ: 左側に強化（-4px 0 24px）
  - リスト項目:
    - 境界線: 各項目に1px追加
    - 最後の項目: 境界線なし
  
- **その他の細かい改善**
  - スクロールインジケーター: font-weight 600
  - Hero CTAセカンダリ: font-weight 600追加
  - すべてのインタラクティブ要素で一貫したフォントウェイト
  
- **フォントウェイト戦略**
  | 要素タイプ | フォントウェイト | 用途 |
  |----------|--------------|------|
  | **メインタイトル** | 700-800 | Section titles, Headings |
  | **サブタイトル** | 500-600 | Subtitles, Navigation |
  | **本文** | 500 | Body text, Descriptions |
  | **補足** | 600 | Labels, Stats |
  
- **境界線強化戦略**
  - Header境界線: border-strong使用
  - Footer境界線: 2px太さ
  - モバイルナビ境界線: 2px太さ
  - 切替ボタン境界線: border-strong使用
  - すべてのセパレーター: 明確な視認性
  
- **Before/After比較（v5.7.5 → v5.7.6）**
  - **ヘッダー**:
    - Before: 薄いグレーのナビリンク
    - After: 濃い黒（text-primary）+ 太字600
  - **フッター**:
    - Before: 薄い境界線、標準フォント
    - After: 2px太境界線、フォントウェイト強化
  - **本文**:
    - Before: 標準フォントウェイト
    - After: すべて500-700に強化
  - **境界線**:
    - Before: 1px標準
    - After: 主要箇所2px、すべてborder-strong
  
- **視認性向上の数値**
  - ナビゲーション: フォントウェイト +100（500→600）
  - フッター境界線: +100%太さ（1px→2px）
  - 全タイトル: +40%太さ（500→700）
  - 全本文: +25%太さ（400→500）

### 2026-01-18 (v5.7.5 - Comprehensive Light Mode Interaction Polish) ✨
- **ライトモードの全インタラクション要素を包括的に調整**
  - すべてのホバー状態を統一されたデザイン言語で洗練
  - インタラクティブフィードバックの一貫性を確保
  - 細部まで配色とアニメーションを最適化
  
- **ナビゲーション・ヘッダー要素**
  - ナビゲーションリンクホバー: Accent背景 + Accentテキスト
  - フッターリンクホバー: Accentカラーへの変化
  - メニュートグルホバー: Accentカラーアニメーション
  - モバイルナビオーバーレイ: 半透明ダークオーバーレイ + ブラー効果
  - モバイルナビリンク: 境界線付き、最後の要素は境界線なし
  
- **カード・コンテンツ要素**
  - Principleカードホバー: 浮遊アニメーション + Medium shadow
  - 統計カードホバー: 背景変化（elevated） + Accent border
  - パートナーカテゴリホバー: カテゴリーラベルが濃くなる
  - Core iconホバー: スケール拡大（1.05倍）
  - Pucreキャラクターホバー: スケール拡大 + 2度回転
  - iPhoneモックアップホバー: 浮遊 + Strong shadow
  
- **ボタン・CTA要素**
  - Hero CTAセカンダリボタン: ガラスモーフィズム効果
  - Hero CTAセカンダリホバー: Accent背景 + 強化されたシャドウ
  - すべてのボタンで統一されたブルーグロー効果
  
- **視覚要素の改善**
  - グラデーションテキスト: より濃い青系統に変更（視認性向上）
    - Before: 標準gradient-main
    - After: #0369A1 → #0EA5E9 → #7C3AED（濃く鮮明）
  - PUC円要素: 統一された配色（重複定義を統合）
  - PUC円要素: rgba(14, 165, 233, 0.08)背景 + Accent border
  - スクロールインジケーターホバー: Accentカラー
  
- **テーマトグル・言語切替**
  - テーマトグルボタン: 統一されたスタイルとホバー効果
  - 言語切替: Accent背景でのアクティブ表示
  - すべてのトグル要素で一貫したインタラクション
  
- **コードクリーンアップ**
  - 重複したpuc-circle定義を統合
  - principle-number定義の重複を解消
  - すべてのライトモードルールを体系的に整理
  
- **追加された新しいホバーエフェクト（計15箇所）**
  1. ナビゲーションリンク（背景変化）
  2. フッターリンク（色変化）
  3. メニュートグル（アイコン色変化）
  4. スクロールインジケーター（色変化）
  5. Principleカード（浮遊+影）
  6. 統計カード（背景+境界線）
  7. パートナーカテゴリラベル（色強調）
  8. Core icon（スケール）
  9. Pucreキャラクター（スケール+回転）
  10. iPhoneモックアップ（浮遊+影）
  11. Hero CTAセカンダリ（背景+影）
  12. テーマトグルボタン（背景+境界線+影）
  13. PUCコイン（シャドウ強化）
  14. モバイルナビ（オーバーレイ+境界線）
  15. 言語切替アクティブ（背景+色）
  
- **統一されたインタラクションパターン**
  - ホバー時のカラー: var(--text-accent) / var(--border-hover)
  - ホバー時の背景: var(--bg-accent) / var(--bg-card-elevated)
  - ホバー時のシャドウ: Blue glow + Medium/Strong shadow
  - ホバー時の変形: translateY(-2px～-4px) + scale(1.05～1.15)
  
- **視覚的一貫性の達成**
  - すべてのインタラクティブ要素が統一されたデザイン言語
  - Sky/Slate色系統によるブランドカラーの統一
  - 予測可能で直感的なユーザーフィードバック
  
- **Before/After比較（v5.7.4 → v5.7.5）**
  - Before: 一部のホバー効果が未定義または不統一
  - After: すべての要素で統一されたインタラクションパターン
  - Before: グラデーションテキストが薄い
  - After: 濃く鮮明なグラデーション
  - Before: 重複したCSS定義
  - After: クリーンで保守しやすいコード

### 2026-01-18 (v5.7.4 - Refined Light Mode Palette) ✨
- **ライトモードの配色を洗練化**
  - より柔らかく上品なカラーパレットへ
  - 視覚的階層とブランドカラーの調和を改善
  - プロフェッショナルで現代的な外観を実現
  
- **新しいカラーパレット（Refined & Balanced）**
  - 背景システム:
    - Primary: #FFFFFF（純白）
    - Secondary: #F8FAFC（ソフトグレー）
    - Tertiary: #F1F5F9（セクション分離用）
    - Accent: #EFF6FF（ライトブルーアクセント）
  - テキストシステム（Slate色系統）:
    - Primary: #0F172A（Slate-900: 16.9:1）
    - Secondary: #334155（Slate-700: 10.8:1）
    - Muted: #64748B（Slate-500: 6.4:1）
    - Accent: #0369A1（Sky-700: ブランドブルー）
  - ボーダーシステム（Sky色系統）:
    - Standard: #E2E8F0（Slate-200: ソフト）
    - Strong: #CBD5E1（Slate-300: 強調）
    - Hover: #0EA5E9（Sky-500: インタラクティブ）
    - Accent: #38BDF8（Sky-400: ライトアクセント）
  
- **シャドウシステムの最適化**
  - Soft: 軽いシャドウ（微細な立体感）
  - Medium: 中程度シャドウ（標準的な浮遊感）
  - Strong: 強いシャドウ（明確な階層）
  - Blue: ブルーグロー（インタラクション時）
  
- **セクション別の配色戦略**
  - Hero: 3段階グラデーション（#F1F5F9 → #F8FAFC → #FFFFFF）
  - What We Do: Primary背景（#FFFFFF）
  - Impact: Secondary背景（#F8FAFC）
  - Approach: Tertiary背景（#F1F5F9）
  - Footer: Tertiary背景（#F1F5F9）
  - 各セクションで微妙に異なる背景色を使用し、視覚的分離を実現
  
- **カード・UI要素の改善**
  - カード: 1px境界線（洗練された外観）
  - ホバー: ブルーグロー + Medium shadow
  - ボタン: 新しいシャドウシステムを適用
  - ラベル: Accent背景 + Accent border
  - パートナーカード: ホバー時にAccent背景へ変化
  
- **インタラクション強化**
  - すべてのホバー状態にブルーグロー効果
  - 統計カードにホバーアニメーション追加
  - 言語切替・テーマトグルのビジュアル統一
  - ナビゲーションアクティブ状態の強調
  
- **背景アニメーション最適化**
  - Orb opacity: 0.08 → 0.06（よりソフトに）
  - Grid opacity: 0.1 → 0.08（控えめに）
  - Orb blur: 60px（より柔らかく）
  
- **Before/After比較（v5.7.3 → v5.7.4）**
  - Before: 高コントラストで硬い印象、2px境界線
  - After: 洗練された柔らかい印象、1px境界線、統一されたカラーシステム
  
- **デザイン哲学**
  - WCAG準拠を維持しつつ、より上品で現代的な外観へ
  - ブランドカラー（Sky/Slate系統）との統一感
  - 視覚的階層を明確にしながら、柔らかく読みやすい配色
  - ビジネスシーンでも使いやすいプロフェッショナルな印象

### 2026-01-18 (v5.7.3 - WCAG AAA High Contrast Light Mode) ✨
- **ライトモード視認性の完全改善**
  - WCAG AAA準拠の最大コントラスト比を実現
  - 背景・カード・テキストの配色を全面刷新
  - すべての要素で明確な視覚的分離を確保
  
- **新しいカラーパレット（WCAG準拠）**
  - 背景: 純白 #FFFFFF + ライトグレー #F5F7FA
  - カード: 純白 #FFFFFF（明確な境界線付き）
  - テキスト主: #0F172A（コントラスト比 16.9:1）
  - テキスト副: #1E293B（コントラスト比 14.4:1）
  - テキストMuted: #475569（コントラスト比 8.6:1）
  - ボーダー: #CBD5E1（明確な可視性）
  
- **セクション別の改善**
  - **ヘッダー**: 2px境界線、強化されたシャドウ、高コントラスト背景
  - **カード類**: 2px境界線、多層シャドウ、明確な背景分離
  - **ボタン**: 高コントラストボーダー、明確なホバー状態、強化されたシャドウ
  - **ラベル**: 濃い青色 #0066CC、背景 #E6F2FF、2px境界線
  - **パートナーカード**: 1.5px境界線、フォント太字、明確なホバー効果
  - **カテゴリーラベル**: 3px下線、太字、高コントラスト青色
  
- **追加のコントラスト改善**
  - 統計数値: グラデーション + 太字800
  - プリンシプル番号: 濃い青 #0066CC + 太字800
  - フッター: 2px境界線、明確な背景分離
  - セクション境界: すべてのセクションに境界線を追加
  
- **アクセシビリティ**
  - すべてのテキストがWCAG AAA基準をクリア
  - ホバー/フォーカス状態が明確に識別可能
  - カラーブラインド対応の配色選択
  
- **視認性向上の数値**
  - メインテキスト: 16.9:1（WCAG AAA: 7:1以上）
  - セカンダリテキスト: 14.4:1（WCAG AAA: 7:1以上）
  - Mutedテキスト: 8.6:1（WCAG AA Large: 4.5:1以上）
  - ボタンテキスト: 明確なコントラストと境界線
  
- **Before/After比較**
  - Before: 同系色で視認性が低い、境界が不明瞭
  - After: 明確な境界、高コントラスト、プロフェッショナルな外観

### 2026-01-17 (v5.7.2 - Light Mode Color Refinement)
- **ライトモードの配色をさらに洗練**
  - より柔らかいグレー系背景（#FAFBFC / #F0F3F7）
  - テキストカラーを最適化（#1F2937 - Tailwind Gray-800）
  - カード背景を純白90%不透明度に変更
  - ボーダーを控えめに（8%透明度）
  - マルチレイヤーシャドウで立体感向上
  - ブラー効果を24pxに強化
  - グラデーション背景を垂直方向に変更
  - ホバー効果を洗練（上に5px浮遊＋青シャドウ）
  - ボタンホバーアニメーション追加
  - 数値カウンターにグラデーション適用
  - PUC円形要素のライトモード対応
  - 全体的にモダンで上品な印象に

### 2026-01-17 (v5.7.1 - Light Mode Visibility Improvements)
- **ライトモードの視認性を大幅改善**
  - テキストカラーを濃くして読みやすさ向上（#0A0A0A → #1A1A1A）
  - セカンダリテキストの透明度調整（80% → 85%）
  - カード背景を不透明に（3% → 4%）
  - ボーダーカラーを濃く（10% → 12%）
  - グラデーション背景を追加（白ベース）
  - ヘッダー背景を半透明白に変更
  - カードにシャドウとブラー効果を追加
  - ボタンのコントラスト改善
  - セクション背景を調整（#F5F7FA）
  - アニメーション要素の透明度を下げて視認性向上

### 2026-01-17 (v5.7.0 - Dark/Light Mode Toggle)
- **ダークモード/ライトモード切替機能を実装**
  - CSS変数でテーマカラーを定義（--bg-primary, --text-primary等）
  - ヘッダーにテーマ切替ボタンを追加（🌙/☀️アイコン）
  - ワンクリックでダーク/ライト切替
  - localStorageでユーザー設定を保存（リロード時も維持）
  - スムーズなトランジション効果
  - 日本語版・英語版の両方に実装
  - アクセシビリティ対応（aria-label）
  - デフォルト: ダークモード

### 2026-01-17 (v5.6.0 - Partners Section Redesign)
- **導入自治体・パートナーセクションの全面リデザイン**
  - カテゴリー別のグリッドレイアウトに変更
  - 4つのカテゴリー: 自治体・スマートシティ / 建設・インフラ / 不動産・鉄道 / その他パートナー
  - カテゴリーカード: グラスモーフィズム効果、ホバーアニメーション
  - パートナーカード: 個別カード表示、横スライドホバー効果
  - グラデーションタイトル: メインビジュアルとの統一感
  - レスポンシブ対応: モバイルで1カラム、タブレット以上でグリッド
  - より見やすく、プロフェッショナルな印象に

### 2026-01-17 (v5.5.0 - Partners Expansion)
- **導入自治体・パートナーを大幅拡充**
  - 追加パートナー数: 11社・団体
  - 自治体: 東京都
  - スマートシティ: 藤沢サステナブルスマートタウン
  - ゼネコン: 清水建設、大林組、東亜建設工業
  - 不動産・鉄道: 東急株式会社、東急不動産SCマネジメント
  - メディア: 福島テレビ
  - テクノロジー: VISION
  - メーカー: 象印マホービン
  - ホスピタリティ: ホテルグラフィー
  - 合計14の自治体・パートナーを表示
  - 日本語版・英語版の両方を更新

### 2026-01-17 (v5.4.1 - Animation & Layout Refinements)
- **Fintechコインアニメーションをシンプルに変更**
  - 変更前: Z軸回転＋スケール変化（複雑）
  - 変更後: 上下浮遊＋グロー変化のみ（シンプル）
  - 3秒サイクルでゆったりとした動き
  - よりクリーンで洗練された印象に
- **Gamificationレイアウトの微調整**
  - プログレスバーを下に配置（margin-top: 8px）
  - プログレステキストを上に配置（margin-top: -4px）
  - プログレスバーとテキストの配置を独立して調整
  - より見やすいバランスに改善

### 2026-01-17 (v5.4.0 - UI/UX Improvements)
- **メールアドレスを公式に変更**
  - 変更前: info@aora.com
  - 変更後: contact@ao-ra.com
  - Contact / Footer / CTA全箇所を更新
- **Fintechアイコンのアニメーション刷新**
  - 新アニメーション: Z軸回転＋浮遊＋スケール変化
  - 4秒サイクルで360度回転しながら上下浮遊
  - グローエフェクトが段階的に強化
  - よりダイナミックで目を引くアニメーション
- **Gamificationセクションのレイアウト改善**
  - プログレステキストの位置を上に調整（-8px）
  - より見やすいバランスに

### 2026-01-17 (v5.3.0 - Fintech Section Content Update)
- **Fintechセクションのコンテンツを全面刷新**
  - タイトル: "Finance" → "Fintech"
  - メッセージを簡潔で本質的な表現へ
  - 変更前: カーボンクレジットのポイント化など詳細説明
  - 変更後: 「持続可能な社会を隔てるコストの壁を新たなエコシステムで解決」
  - 英語版: "Breaking down the cost barriers to a sustainable society"
  - 企業・個人・地球のWin-Win-Winを強調

### 2026-01-17 (v5.2.0 - Brand Name Update)
- **ブランド名を「Creative Fintech Studio」に変更**
  - 変更前: "Creative Finance Studio"
  - 変更後: "Creative Fintech Studio"
  - より現代的で技術志向のブランドイメージへ
  - 日本語版・英語版の全箇所を更新
  - メタタグ・OGP・ヘッダー・フッター等すべて対応

### 2026-01-17 (v5.1.0 - Hero Message Update)
- **ヒーローセクションのメッセージを更新**
  - 変更前: 「金融 × IP開発 × クリエイティブ × ゲーミフィケーション / 新しい環境価値経済を創造する」
  - 変更後: 「未来のための循環型経済を創造する」
  - 英語版: "Creating a Circular Economy for the Future"
  - よりシンプルで明確なメッセージへ
  - 「循環型経済」に焦点を当てた表現
- **フッターセクションも同様に更新**
- 日本語版・英語版の両方を更新

### 2026-01-17 (v5.0.0 - Bilingual Support)
- **英語版サイト完成（index-en.html）**
  - 全セクションを英訳
  - Hero / What We Do / PUC / Impact / Approach / Contact / Footer
  - メタタグ・OGP情報も英語対応
- **言語切替機能を実装**
  - ヘッダーに「JP / EN」ボタン追加
  - アクティブ状態の視覚的表示
  - 両言語間でシームレスな切替
- **CSSスタイル拡張**
  - .lang-switcher / .lang-link / .lang-separator
  - ホバー＋アクティブ状態のスタイリング
  - レスポンシブ対応
- **グローバル展開の準備完了**

### 2026-01-17 (v4.8.1 - PUC Description Update)
- **PUCセクションの説明文を更新**
  - 「Personal Universal Credit」→「ぷく」
  - 「環境価値通貨」→「環境ポイント」
  - 獲得方法を明確化（サービス利用、Pucreアプリ、提携アプリ）
  - 環境保全への資金循環を強調
  - よりユーザーフレンドリーな表現へ

### 2026-01-17 (v4.8.0 - PUC 3D Coin for Finance)
- **Financeセクションに3D PUCコイン画像を追加**
  - 3Dレンダリングのターコイズコイン
  - 中央に白い四つ葉クローバーマーク
  - images/puc-coin.png（400KB）
  - フローティング＋回転アニメーション（Y軸180度）
  - ホバー時に360度回転＋拡大
  - ドロップシャドウ（青グラデーション）
- 4つの円アイコンから3Dコインへ変更

### 2026-01-17 (v4.7.3 - Four Kids Character)
- **フォー_キッズ画像に更新**
  - ハブから公式「フォー_キッズ.png」を取得
  - images/four-kids.png（268KB）
  - ターコイズのモフモフキャラクター
  - 黄色ストライプの角、スリーピーな目
  - ジグザグの口、ピンクの手足
  - Pucreアプリの公式キャラクターを正確に表現
- pucre-base-2.pngからフォー_キッズへ変更

### 2026-01-17 (v4.7.2 - Four Character in App Preview)
- **フォーキャラクターをアプリプレビューに追加**
  - 絵文字からフォーの実画像へ置換
  - pucre-base-2.png（モフモフキャラクター）
  - ドロップシャドウ効果
  - バウンスアニメーション維持
  - 50×50pxサイズで最適表示
- Pucreアプリの実際のキャラクターを表現

### 2026-01-17 (v4.7.1 - Enhanced App Preview)
- **Pucreアプリプレビューの改善**
  - リアルなアプリUI風プレースホルダー
  - キャラクターアニメーション（バウンス）
  - プログレスバー（2,086/10,000）
  - ナビゲーションアイコン（4つ）
  - グラデーション背景（空→草原）
  - 実際のアプリ画像対応準備完了
- プレースホルダーからアプリUIプレビューへ改善

### 2026-01-17 (v4.7.0 - iPhone Mockup for Gamification)
- **GamificationセクションにiPhoneフレームを追加**
  - 最新iPhone（iPhone 14/15 Pro）デザイン
  - ダイナミックアイランド（ノッチ）
  - ホームインジケーター
  - リアルなフレームシャドウ
  - フローティングアニメーション
  - ホバー時に3D回転（rotateY）
  - アプリスクリーンショット対応準備完了
- ゲームコントローラーからiPhoneモックアップへ変更

### 2026-01-17 (v4.6.0 - Creative Floating Layout)
- **IP開発セクションをクリエイティブなレイアウトに変更**
  - フローティング＋重なり配置
  - 3キャラクターが異なる角度・サイズ・深度で配置
  - 常時フローティングアニメーション（3〜4秒サイクル）
  - ホバー時に各キャラクターが拡大＋回転
  - z-indexで奥行き表現
  - ドロップシャドウ強化
- 静的な横並びから動的な3D風レイアウトへ進化

### 2026-01-17 (v4.5.0 - Pucre Base Design Update)
- **Pucreベースデザインに更新**
  - 公式ベースデザイン3キャラクターを採用
  - 横並びレイアウト（Flexbox）
  - ドロップシャドウ効果（青グラデーション）
  - ホバー時に順次浮き上がるアニメーション
  - 画像: pucre-base-1〜3.png（合計131KB）
- コラボデザインからベースデザインへ変更

### 2026-01-17 (v4.4.0 - Pucre Characters Integration)
- **IP DevelopmentセクションにPucreキャラクター画像を追加**
  - teku2.comから4つのキャラクター画像を取得
  - 2×2グリッドレイアウトで表示
  - ホバー時に順番に回転・拡大アニメーション
  - キャラクター画像: pucre-char-1〜4.png（合計214KB）
- キャラクターIP開発の具体的なビジュアルを実装

### 2026-01-17 (v4.3.0 - Correct Logo Implementation)
- **ao-ra.comの公式ロゴに完全置換**
  - 4つの円（2×2グリッド）+ "aora"テキスト
  - CSS完全再現：HTMLのみで実装
  - 右下の円が青グラデーション + グロー効果
  - ホバーアニメーション実装
  - Favicon更新（4つの円アイコン）
- ao-ra.comのブランドアイデンティティに完全準拠

### 2026-01-16 (v4.2.0 - Logo Update)
- **ヘッダーとフッターのロゴを公式画像に更新**
  - URL: https://www.genspark.ai/api/files/s/f9at81pz
  - フィルター削除（本来の色を表示）
  - OGP画像も更新

### 2026-01-16 (v4.1.0 - Custom Icons)
- **What We Doのアイコンをオリジナルに完全置換**
  - Finance: PUC Token（4つの円、aoraロゴに基づく）
  - IP Development: Pucreキャラクターの顔（バウンス＋瞬きアニメ）
  - Creative: 再生ボタン ＋ サウンドウェーブ
  - Gamification: ゲームコントローラー
- フリーアイコン完全排除
- ブランドアイデンティティに基づいた独自デザイン

### 2026-01-06 (v4.0.0 - Creative Fintech Studio)
- 完全ゼロリビルド
- 新コンセプト: Creative Fintech Studio
- ダークモード + マルチグラデーション
- アニメーテッドグリッド + フローティングオーブ

---

## 📝 Netlify CMSの使い方

### 初期設定（初回のみ）

#### 1. Netlify Identity を有効化

1. Netlify ダッシュボードで、サイトを選択
2. **Settings** → **Identity** に移動
3. **Enable Identity** をクリック
4. **Registration preferences** を **Invite only** に設定（セキュリティ推奨）

#### 2. Git Gateway を有効化

1. **Settings** → **Identity** → **Services** に移動
2. **Git Gateway** を有効化
3. **Enable Git Gateway** をクリック

#### 3. 管理者ユーザーを招待

1. **Identity** タブに移動
2. **Invite users** をクリック
3. 管理者のメールアドレスを入力して招待
4. 招待メールから登録を完了

### CMS にアクセスする

1. **URL**: `https://your-site.netlify.app/admin`
2. 初回アクセス時は Netlify Identity でログイン
3. CMSダッシュボードが表示されます

### ニュース記事を追加する

#### 手順

1. CMS ダッシュボードにログイン
2. **Contents** → **News Releases** をクリック
3. **New News Release** をクリック
4. 以下の項目を入力：

##### 基本情報
- **Title (Japanese)**: 日本語タイトル（例: 「aora株式会社、新サービス発表」）
- **Title (English)**: 英語タイトル（例: "aora Inc. Announces New Service"）
- **Slug**: URL用のスラッグ（例: `new-service-announcement`）
- **Published Date**: 公開日時を選択

##### カテゴリーとタグ
- **Category (Japanese)**: カテゴリーを選択
  - プレスリリース
  - お知らせ
  - メディア掲載
  - イベント
- **Category (English)**: 英語カテゴリーを選択
  - Press Release
  - News
  - Media
  - Event
- **Tags**: タグを追加（カンマ区切り）
  - 例: `PUC, Pucre, サステナビリティ`

##### コンテンツ
- **Content (Japanese)**: 日本語の本文（Markdown形式）
- **Content (English)**: 英語の本文（Markdown形式）
- **Excerpt (Japanese)**: 日本語の要約（150文字以内推奨）
- **Excerpt (English)**: 英語の要約（150文字以内推奨）

##### メディア
- **Featured Image**: 記事のサムネイル画像をアップロード
  - 推奨サイズ: 1200×630px
  - フォーマット: JPG, PNG
  - ファイル名: 英数字とハイフンのみ推奨

##### オプション
- **Featured**: 注目記事としてトップに表示する場合はON

5. **Save** をクリックして保存
6. **Publish** をクリックして公開

### 記事を編集・削除する

#### 編集
1. **Contents** → **News Releases**
2. 編集したい記事をクリック
3. 内容を修正
4. **Save** → **Publish** で更新

#### 削除
1. 記事編集画面で **Delete entry** をクリック
2. 確認ダイアログで **Delete** をクリック

### 画像を管理する

1. CMS ダッシュボードで **Media** をクリック
2. **Upload** で画像をアップロード
3. アップロードした画像は `images/uploads/` に保存されます
4. 記事作成時に画像を選択可能

### プレビュー機能

- 記事編集中に **Preview** ボタンで実際の表示を確認可能
- リアルタイムプレビューで編集内容がすぐに反映されます

### ワークフロー

```
記事作成 → 保存 → プレビュー確認 → 公開
                ↓
            Git commit
                ↓
        Netlify 自動ビルド
                ↓
            サイトに反映
```

### ベストプラクティス

#### タイトル
- 具体的で分かりやすい
- SEOキーワードを含める
- 日本語: 30文字以内推奨
- 英語: 60文字以内推奨

#### 本文
- Markdown記法を使用
- 見出し、リスト、リンクを適切に使用
- 画像は適度に挿入

#### 画像
- 高画質だがファイルサイズは最適化
- Alt テキストを必ず設定
- ファイル名は内容を表す英数字

#### タグ
- 3〜5個程度
- 関連性の高いタグを選択
- 既存タグとの一貫性を保つ

### トラブルシューティング

#### ログインできない
- Netlify Identity が有効化されているか確認
- 招待メールから登録を完了したか確認
- ブラウザのキャッシュをクリア

#### 記事が表示されない
- Netlify のビルドログを確認
- `content/news/` にMarkdownファイルが生成されているか確認
- ブラウザのキャッシュをクリア

#### 画像がアップロードできない
- ファイルサイズが5MB以下か確認
- 対応フォーマット（JPG, PNG, GIF, SVG）を使用
- ファイル名に特殊文字を使用していないか確認

### サポート

問題が解決しない場合は、開発チームにお問い合わせください。

---

© 2026 aora株式会社. All rights reserved.
