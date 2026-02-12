// ========================================
// Simple News Loader - 即座に動作する簡易版
// ========================================

async function loadSimpleNews() {
  try {
    console.log('🔄 Loading news from /news-index.json...');
    const response = await fetch('/news-index.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ News loaded:', data);
    
    if (!data.news || data.news.length === 0) {
      console.log('⚠️  No news found');
      return [];
    }
    
    console.log(`📰 Found ${data.news.length} articles`);
    return data.news;
  } catch (error) {
    console.error('❌ Error loading news:', error);
    return [];
  }
}

// グローバルに公開
window.loadSimpleNews = loadSimpleNews;

// ページ読み込み時にテスト
document.addEventListener('DOMContentLoaded', async () => {
  console.log('=== Simple News Loader Test ===');
  const news = await loadSimpleNews();
  console.log('Test result:', news);
});
