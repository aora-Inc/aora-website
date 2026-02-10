// =================================
// NEWS PAGE FUNCTIONALITY
// =================================

document.addEventListener('DOMContentLoaded', function() {
  // State management
  let allNews = [];
  let filteredNews = [];
  let currentPage = 1;
  const itemsPerPage = 9;
  let currentCategory = 'all';
  
  // Language detection
  const isEnglish = document.documentElement.lang === 'en';
  
  // Initialize news page
  initNewsPage();
  
  async function initNewsPage() {
    await loadNews();
    setupFilters();
    setupPagination();
  }
  
  // Load news from API
  async function loadNews() {
    try {
      const response = await fetch('tables/news_releases?limit=100&sort=-published_date');
      const data = await response.json();
      
      if (data && data.data) {
        allNews = data.data;
        filteredNews = allNews;
        currentPage = 1;
        displayNews();
      } else {
        showError('ニュースの読み込みに失敗しました');
      }
    } catch (error) {
      console.error('Error loading news:', error);
      showError(isEnglish ? 'Failed to load news' : 'ニュースの読み込みに失敗しました');
    }
  }
  
  // Display news cards
  function displayNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newsToDisplay = filteredNews.slice(startIndex, endIndex);
    
    if (newsToDisplay.length === 0) {
      newsGrid.innerHTML = `
        <div class="loading-spinner">
          <p>${isEnglish ? 'No news found' : 'ニュースが見つかりませんでした'}</p>
        </div>
      `;
      return;
    }
    
    newsGrid.innerHTML = newsToDisplay.map(news => createNewsCard(news)).join('');
    
    // Add click handlers
    document.querySelectorAll('.news-card').forEach(card => {
      card.addEventListener('click', function() {
        const newsId = this.dataset.newsId;
        openNewsDetail(newsId);
      });
    });
    
    updatePagination();
  }
  
  // Create news card HTML
  function createNewsCard(news) {
    const title = isEnglish ? news.title_en : news.title_ja;
    const category = isEnglish ? news.category_en : news.category;
    const content = isEnglish ? news.content_en : news.content_ja;
    const excerpt = extractExcerpt(content);
    const date = formatDate(news.published_date);
    const featuredClass = news.featured ? 'featured' : '';
    
    return `
      <article class="news-card ${featuredClass}" data-news-id="${news.id}">
        <div class="news-card-image ${news.image_url ? '' : 'no-image'}">
          ${news.image_url ? `<img src="${news.image_url}" alt="${title}">` : ''}
        </div>
        <div class="news-card-content">
          <div class="news-card-meta">
            <span class="news-card-category">${category}</span>
            <span class="news-card-date">${date}</span>
          </div>
          <h2 class="news-card-title">${title}</h2>
          <p class="news-card-excerpt">${excerpt}</p>
          ${news.tags && news.tags.length > 0 ? `
            <div class="news-card-tags">
              ${news.tags.map(tag => `<span class="news-tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }
  
  // Extract excerpt from content
  function extractExcerpt(content) {
    if (!content) return '';
    
    // Remove HTML tags
    const text = content.replace(/<[^>]*>/g, '');
    
    // Get first 150 characters
    const excerpt = text.substring(0, 150);
    
    return excerpt + (text.length > 150 ? '...' : '');
  }
  
  // Format date
  function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    
    if (isEnglish) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } else {
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
  
  // Setup category filters
  function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter news
        const category = this.dataset.category;
        currentCategory = category;
        currentPage = 1;
        
        if (category === 'all') {
          filteredNews = allNews;
        } else {
          filteredNews = allNews.filter(news => {
            const newsCategory = isEnglish ? news.category_en : news.category;
            return newsCategory === category;
          });
        }
        
        displayNews();
      });
    });
  }
  
  // Setup and update pagination
  function setupPagination() {
    // Initial pagination will be created in displayNews
  }
  
  function updatePagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    
    if (totalPages <= 1) {
      pagination.innerHTML = '';
      return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
      <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">
        ‹
      </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        paginationHTML += `
          <button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
            ${i}
          </button>
        `;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        paginationHTML += `<span class="page-ellipsis">...</span>`;
      }
    }
    
    // Next button
    paginationHTML += `
      <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">
        ›
      </button>
    `;
    
    pagination.innerHTML = paginationHTML;
    
    // Add click handlers
    pagination.querySelectorAll('.page-btn:not([disabled])').forEach(button => {
      button.addEventListener('click', function() {
        currentPage = parseInt(this.dataset.page);
        displayNews();
        
        // Scroll to top of news grid
        document.querySelector('.news-content-section').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }
  
  // Open news detail modal
  async function openNewsDetail(newsId) {
    const modal = document.getElementById('newsModal');
    if (!modal) return;
    
    try {
      const response = await fetch(`tables/news_releases/${newsId}`);
      const news = await response.json();
      
      if (news) {
        const title = isEnglish ? news.title_en : news.title_ja;
        const category = isEnglish ? news.category_en : news.category;
        const content = isEnglish ? news.content_en : news.content_ja;
        const date = formatDate(news.published_date);
        
        const modalBody = modal.querySelector('.news-modal-body');
        modalBody.innerHTML = `
          <div class="news-modal-header">
            <div class="news-modal-meta">
              <span class="news-modal-category">${category}</span>
              <span class="news-modal-date">${date}</span>
              ${news.featured ? `<span class="news-modal-featured-badge">${isEnglish ? 'FEATURED' : '注目'}</span>` : ''}
            </div>
            <h1 class="news-modal-title">${title}</h1>
          </div>
          
          ${news.image_url ? `
            <div class="news-modal-image">
              <img src="${news.image_url}" alt="${title}">
            </div>
          ` : ''}
          
          <div class="news-modal-content-text">
            ${content}
          </div>
          
          ${news.tags && news.tags.length > 0 ? `
            <div class="news-modal-tags">
              ${news.tags.map(tag => `<span class="news-modal-tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
        `;
        
        // Show modal
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Scroll to top of modal content
        modalBody.scrollTop = 0;
      }
    } catch (error) {
      console.error('Error loading news detail:', error);
    }
  }
  
  // Close news modal
  function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
  
  // Setup modal close handlers
  function setupModalHandlers() {
    const modal = document.getElementById('newsModal');
    if (modal) {
      // Close button
      const closeBtn = modal.querySelector('.news-modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeNewsModal);
      }
      
      // Overlay click
      const overlay = modal.querySelector('.news-modal-overlay');
      if (overlay) {
        overlay.addEventListener('click', closeNewsModal);
      }
      
      // ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeNewsModal();
        }
      });
    }
  }
  
  // Initialize
  setupModalHandlers();
  
  // Show error message
  function showError(message) {
    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid) {
      newsGrid.innerHTML = `
        <div class="loading-spinner">
          <p style="color: #ff4444;">${message}</p>
        </div>
      `;
    }
  }
});
