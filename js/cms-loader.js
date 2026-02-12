// ========================================
// Netlify CMS News Loader
// Markdownファイルからニュースを読み込む
// ========================================

/**
 * Markdownファイルのフロントマターとコンテンツを解析
 */
function parseMarkdown(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return null;
  }
  
  const frontmatter = match[1];
  const markdown = match[2];
  
  // YAMLパース（簡易版）
  const data = {};
  const lines = frontmatter.split('\n');
  let currentKey = null;
  let currentArray = null;
  
  lines.forEach(line => {
    const trimmed = line.trim();
    
    // 配列の要素
    if (trimmed.startsWith('- ') && currentArray) {
      const value = trimmed.substring(2).trim().replace(/^["']|["']$/g, '');
      currentArray.push(value);
      return;
    }
    
    // キー: 値
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex > 0) {
      const key = trimmed.substring(0, colonIndex).trim();
      let value = trimmed.substring(colonIndex + 1).trim();
      
      // 配列の開始
      if (value === '') {
        currentKey = key;
        currentArray = [];
        data[key] = currentArray;
        return;
      }
      
      currentArray = null;
      
      // 複数行テキストの開始
      if (value === '|') {
        currentKey = key;
        data[key] = '';
        return;
      }
      
      // 値のクリーンアップ
      value = value.replace(/^["']|["']$/g, '');
      
      // ブーリアン変換
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      data[key] = value;
      currentKey = null;
    } else if (currentKey && trimmed) {
      // 複数行テキストの継続
      data[currentKey] += (data[currentKey] ? '\n' : '') + trimmed;
    }
  });
  
  return { data, content: markdown };
}

/**
 * Netlify CMSのMarkdownニュースを読み込む
 */
async function loadCMSNews() {
  try {
    // content/newsディレクトリのMarkdownファイルを取得
    // 注: 静的サイトでは事前にビルド時に生成されたJSONを使用
    console.log('🔄 Loading CMS news from /content/news-index.json...');
    const response = await fetch('/content/news-index.json');
    if (!response.ok) {
      console.log('⚠️  CMS news index not found, using API fallback');
      return [];
    }
    
    const indexData = await response.json();
    console.log('✅ CMS news index loaded:', indexData);
    
    if (!indexData.news || indexData.news.length === 0) {
      console.log('⚠️  No news articles in CMS index');
      return [];
    }
    
    console.log(`📰 Found ${indexData.news.length} articles in CMS`);
    return indexData.news;
  } catch (error) {
    console.error('❌ Error loading CMS news:', error);
    return [];
  }
}

/**
 * ハイブリッドニュースローダー
 * Netlify CMS + RESTful Table API の両方に対応
 */
async function loadHybridNews(limit = 100) {
  try {
    // 1. Netlify CMSからニュースを読み込み
    const cmsNews = await loadCMSNews();
    
    // 2. RESTful Table APIからニュースを読み込み（フォールバック）
    let apiNews = [];
    try {
      const response = await fetch(`tables/news_releases?limit=${limit}&sort=-published_date`);
      const data = await response.json();
      if (data && data.data) {
        apiNews = data.data;
      }
    } catch (error) {
      console.log('API news not available');
    }
    
    // 3. 両方のニュースを結合して日付順にソート
    const allNews = [...cmsNews, ...apiNews];
    allNews.sort((a, b) => {
      const dateA = new Date(a.published_date);
      const dateB = new Date(b.published_date);
      return dateB - dateA;
    });
    
    return allNews;
  } catch (error) {
    console.error('Error loading hybrid news:', error);
    return [];
  }
}

// グローバルに公開
window.loadCMSNews = loadCMSNews;
window.loadHybridNews = loadHybridNews;
