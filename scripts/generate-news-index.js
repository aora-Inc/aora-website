#!/usr/bin/env node

/**
 * Netlify CMS News Index Generator
 * CMSで追加されたMarkdownファイルを読み込み、news-index.jsonを生成
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const newsDir = path.join(__dirname, '../content/news');
const outputFile = path.join(__dirname, '../content/news-index.json');

function generateNewsIndex() {
  // content/news ディレクトリが存在するか確認
  if (!fs.existsSync(newsDir)) {
    console.log('⚠️  No news directory found. Creating empty index.');
    fs.writeFileSync(outputFile, JSON.stringify({ news: [] }, null, 2));
    return;
  }

  // Markdownファイルを読み込む
  const files = fs.readdirSync(newsDir).filter(file => file.endsWith('.md'));

  if (files.length === 0) {
    console.log('⚠️  No news articles found. Creating empty index.');
    fs.writeFileSync(outputFile, JSON.stringify({ news: [] }, null, 2));
    return;
  }

  const news = files.map(file => {
    const filePath = path.join(newsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    console.log(`  📄 Processing: ${file}`);
    console.log(`     Title (JA): ${data.title_ja}`);
    console.log(`     Title (EN): ${data.title_en}`);
    console.log(`     Published: ${data.published_date}`);

    return {
      id: data.slug || file.replace('.md', ''),
      title_ja: data.title_ja || '',
      title_en: data.title_en || '',
      content_ja: data.content_ja || '',
      content_en: data.content_en || '',
      excerpt_ja: data.excerpt_ja || '',
      excerpt_en: data.excerpt_en || '',
      category: data.category || '',
      category_en: data.category_en || '',
      published_date: data.published_date ? new Date(data.published_date).getTime() : Date.now(),
      featured: data.featured || false,
      image_url: data.image_url || '',
      tags: data.tags || []
    };
  });

  // 公開日時でソート（新しい順）
  news.sort((a, b) => b.published_date - a.published_date);

  // news-index.json を生成
  const indexData = { news };
  fs.writeFileSync(outputFile, JSON.stringify(indexData, null, 2));

  console.log(`✅ Generated news index with ${news.length} articles`);
  console.log(`   Output: ${outputFile}`);
}

try {
  generateNewsIndex();
} catch (error) {
  console.error('❌ Error generating news index:', error);
  // エラーでも空のインデックスを作成（ビルドは成功させる）
  fs.writeFileSync(outputFile, JSON.stringify({ news: [] }, null, 2));
  process.exit(0);
}
