# Netlify CMS セットアップガイド

## 📦 実装完了 (v6.5.0)

**News & Updates** セクションを **Netlify CMS** で管理できるようになりました。

---

## 🎯 実装内容

### ディレクトリ構成

```
admin/
  ├── config.yml          # Netlify CMS設定
  └── index.html          # CMSダッシュボード

content/
  ├── news/              # ニュース記事（Markdown）
  │   └── 2026-01-29-netlify-cms-implementation.md
  └── news-index.json    # ニュースインデックス

js/
  └── cms-loader.js      # ハイブリッドローダー（CMS + API）
```

### ファイル説明

#### 1. `admin/config.yml`
Netlify CMSの設定ファイル。以下を定義：
- バックエンド: Git Gateway
- メディアフォルダ: `images/uploads`
- コレクション: `news_releases`（ニュースリリース）
- フィールド: タイトル、本文、カテゴリー、タグ、画像等（日英対応）

#### 2. `admin/index.html`
CMSダッシュボードのエントリーポイント。
- Netlify CMSスクリプトを読み込む
- シンプルなHTMLのみ

#### 3. `content/news/`
Markdownファイルでニュース記事を保存。
- ファイル名形式: `YYYY-MM-DD-slug.md`
- Front Matter でメタデータを管理

#### 4. `js/cms-loader.js`
**ハイブリッドローダー**:
1. `content/news-index.json` を読み込み（CMS管理のニュース）
2. 404の場合、RESTful Table API にフォールバック
3. 既存のRESTful Table APIと共存

#### 5. `index.html` / `index-en.html`
Netlify Identity ウィジェットを追加:
- `<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>`
- ログイン・認証機能を提供

---

## 🚀 デプロイ後の設定手順

### ステップ1: Netlify Identity を有効化

1. Netlify ダッシュボードにログイン
2. サイトを選択
3. **Settings** → **Identity** に移動
4. **Enable Identity** をクリック

### ステップ2: Git Gateway を有効化

1. **Settings** → **Identity** → **Services** に移動
2. **Git Gateway** を有効化
3. **Enable Git Gateway** をクリック

### ステップ3: 登録方法を設定

1. **Settings** → **Identity** → **Registration** に移動
2. **Invite only** を選択（セキュリティ推奨）
   - または **Open** を選択（誰でも登録可能、非推奨）

### ステップ4: 管理者を招待

1. **Identity** タブに移動
2. **Invite users** をクリック
3. 管理者のメールアドレスを入力
4. 招待メールが送信されます
5. メールのリンクから登録を完了

---

## 📝 CMSの使い方

### アクセス

```
https://your-site.netlify.app/admin
```

初回アクセス時は Netlify Identity でログインします。

### ニュース記事を追加

1. **Contents** → **News Releases** をクリック
2. **New News Release** をクリック
3. 以下の項目を入力：

#### 基本情報
- **Title (Japanese)**: 日本語タイトル
- **Title (English)**: 英語タイトル
- **Slug**: URL用のスラッグ（例: `new-service-announcement`）
- **Published Date**: 公開日時

#### カテゴリー
- **Category (Japanese)**: プレスリリース / お知らせ / メディア掲載 / イベント
- **Category (English)**: Press Release / News / Media / Event

#### コンテンツ
- **Content (Japanese)**: 日本語本文（Markdown形式）
- **Content (English)**: 英語本文（Markdown形式）
- **Excerpt (Japanese)**: 日本語要約（150文字以内推奨）
- **Excerpt (English)**: 英語要約（150文字以内推奨）

#### メディア
- **Featured Image**: サムネイル画像をアップロード
  - 推奨サイズ: 1200×630px
  - フォーマット: JPG, PNG

#### オプション
- **Featured**: ON にすると注目記事として表示
- **Tags**: タグを追加（例: `PUC, Pucre, サステナビリティ`）

4. **Save** をクリックして保存
5. **Publish** をクリックして公開

### ワークフロー

```
記事作成 → 保存 → プレビュー → 公開
              ↓
          Git commit
              ↓
      Netlify 自動ビルド
              ↓
          サイトに反映
```

---

## ✅ ハイブリッドシステム

### データソースの優先順位

1. **Netlify CMS** (`content/news-index.json`) - 優先
2. **RESTful Table API** (`tables/news_releases`) - フォールバック

### コード実装

`js/cms-loader.js` で以下のロジックを実装：

```javascript
async function loadNews() {
  try {
    // 1. CMSのニュースインデックスを取得
    const response = await fetch('content/news-index.json');
    if (response.ok) {
      const data = await response.json();
      return data.news; // CMS管理のニュース
    }
  } catch (error) {
    console.log('CMS news index not found, using API fallback');
  }
  
  // 2. APIフォールバック
  const apiResponse = await fetch('tables/news_releases?limit=10&sort=-published_date');
  const apiData = await apiResponse.json();
  return apiData.data;
}
```

---

## 🎨 メリット

### 1. 非技術者でも簡単
- GUIダッシュボードで直感的に編集
- Markdownエディタで柔軟な編集
- リアルタイムプレビュー

### 2. セキュア
- Netlify Identity で認証
- Invite only モードでアクセス制御
- Git履歴で完全なバージョン管理

### 3. バイリンガル対応
- 日本語・英語を同時管理
- 各言語ごとにタイトル・本文・カテゴリーを設定

### 4. 自動デプロイ
- Gitコミット後、Netlifyが自動ビルド
- 手動デプロイ不要

### 5. RESTful Table APIと共存
- 既存のAPIデータも引き続き利用可能
- フォールバック機能で安定動作

---

## 🛠️ トラブルシューティング

### ログインできない

**原因**: Netlify Identityが有効化されていない

**解決方法**:
1. Netlify ダッシュボードで **Settings** → **Identity** を確認
2. **Enable Identity** をクリック
3. Git Gateway を有効化

### 記事が表示されない

**原因**: ビルドエラーまたはキャッシュ

**解決方法**:
1. Netlify の **Deploys** タブでビルドログを確認
2. `content/news/` にMarkdownファイルが生成されているか確認
3. ブラウザのキャッシュをクリア

### 画像がアップロードできない

**原因**: ファイルサイズまたは形式の問題

**解決方法**:
- ファイルサイズを5MB以下に圧縮
- 対応フォーマット（JPG, PNG, GIF, SVG）を使用
- ファイル名に特殊文字を使用しない

---

## 📚 参考リンク

- [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- [Decap CMS (New Name)](https://decapcms.org/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)

---

## 🎉 完了報告

**v6.5.0 - Netlify CMS Integration**

### 実装内容

✅ Netlify CMS完全統合  
✅ Git-based コンテンツ管理  
✅ 日英バイリンガル対応  
✅ Netlify Identity認証  
✅ ハイブリッドシステム（CMS + API）  
✅ リアルタイムプレビュー  
✅ 画像アップロード管理  

### ファイル

- `admin/config.yml` - CMS設定
- `admin/index.html` - CMSダッシュボード
- `content/news/` - ニュース記事（Markdown）
- `content/news-index.json` - ニュースインデックス
- `js/cms-loader.js` - ハイブリッドローダー
- `index.html` / `index-en.html` - Netlify Identityウィジェット追加

### テスト結果

✅ 日本語版（index.html）正常表示（7.98秒）  
✅ 英語版（index-en.html）正常表示（8.41秒）  
✅ CMSダッシュボード（admin/index.html）正常表示（9.31秒）  
✅ ハイブリッドローダー動作確認  
✅ サンプルニュース作成完了  

---

© 2026 aora株式会社 | Creative Fintech Studio

**実装完了**: News & UpdatesをNetlify CMSで管理可能に。非技術者でも簡単にコンテンツ追加・編集ができます。
