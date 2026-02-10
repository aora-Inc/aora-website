// ========================================
// aora Creative Fintech Studio
// Interactive JavaScript
// ========================================

// ========================================
// 0. THEME SWITCHER (DARK/LIGHT MODE)
// ========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

// Theme toggle function
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update header style immediately after theme change
  updateHeaderStyle();
}

// Add click event listener
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// Function to update header style based on theme and scroll position
function updateHeaderStyle() {
  const currentScroll = window.pageYOffset;
  const isLightMode = htmlElement.getAttribute('data-theme') === 'light';
  const header = document.querySelector('header');
  
  if (!header) return;
  
  if (currentScroll > 10) {
    if (isLightMode) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)';
      header.style.borderBottom = '1px solid rgba(203, 213, 225, 0.8)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.95)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
      header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
    }
    header.classList.add('scrolled');
  } else {
    if (isLightMode) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04)';
      header.style.borderBottom = '1px solid rgba(226, 232, 240, 0.6)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.6)';
      header.style.boxShadow = 'none';
      header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
    header.classList.remove('scrolled');
  }
}

// ========================================
// 1. MOBILE MENU WITH OVERLAY
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');
const body = document.body;

if (menuToggle && navLinks && navOverlay) {
  // Toggle menu
  menuToggle.addEventListener('click', () => {
    const isActive = navLinks.classList.contains('active');
    
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  // Close menu when clicking overlay
  navOverlay.addEventListener('click', closeMenu);
  
  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close menu with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
      menuToggle.focus(); // Return focus to toggle button
    }
  });
  
  // Trap focus inside menu when open
  const focusableElements = navLinks.querySelectorAll('a, button');
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  navLinks.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
}

function openMenu() {
  menuToggle.classList.add('active');
  navLinks.classList.add('active');
  navOverlay.classList.add('active');
  body.style.overflow = 'hidden'; // Prevent body scroll
  
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'メニューを閉じる');
  navOverlay.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  menuToggle.classList.remove('active');
  navLinks.classList.remove('active');
  navOverlay.classList.remove('active');
  body.style.overflow = ''; // Restore body scroll
  
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'メニューを開く');
  navOverlay.setAttribute('aria-hidden', 'true');
}

// ========================================
// 2. SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// 3. SCROLL REVEAL ANIMATION
// ========================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});

// ========================================
// 4. PARALLAX EFFECT FOR ORBS
// ========================================
const hero = document.querySelector('.hero');
const orbs = document.querySelectorAll('.orb');

if (hero && orbs.length > 0) {
  let mouseX = 0;
  let mouseY = 0;
  
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - rect.width / 2) / 50;
    mouseY = (e.clientY - rect.top - rect.height / 2) / 50;
  });
  
  function animateOrbs() {
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.5;
      orb.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
    requestAnimationFrame(animateOrbs);
  }
  
  animateOrbs();
}

// ========================================
// 5. HEADER SCROLL EFFECT
// ========================================
let lastScroll = 0;
const header = document.querySelector('header');

// Initialize header style on page load
updateHeaderStyle();

window.addEventListener('scroll', () => {
  updateHeaderStyle();
  lastScroll = window.pageYOffset;
});

// ========================================
// 6. GRID CANVAS INTERACTIVE
// ========================================
const gridCanvas = document.querySelector('.grid-canvas');

if (gridCanvas) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    gridCanvas.style.opacity = Math.max(0.3 - scrolled / 1000, 0);
  });
}

// ========================================
// 7. PERFORMANCE OPTIMIZATION
// ========================================

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Preload critical images
function preloadImages() {
  const criticalImages = [
    'https://www.genspark.ai/api/files/s/xWJw0h0i',
    'https://www.genspark.ai/api/files/s/HN0PWg3b',
    'https://www.genspark.ai/api/files/s/yhENBMsh'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Defer non-critical JavaScript
function deferNonCritical() {
  // Add any non-critical scripts here
}

// ========================================
// 7. NEWS PREVIEW ON HOME PAGE
// ========================================
async function loadNewsPreview() {
  const newsPreviewEl = document.getElementById('newsPreview');
  if (!newsPreviewEl) return;
  
  const isEnglish = document.documentElement.lang === 'en';
  
  try {
    // ハイブリッドニュースローダーを使用（CMS + API）
    let allNews = [];
    
    if (typeof window.loadHybridNews === 'function') {
      allNews = await window.loadHybridNews(3);
    } else {
      // フォールバック: RESTful Table APIのみ
      const response = await fetch('tables/news_releases?limit=3&sort=-published_date');
      const data = await response.json();
      allNews = (data && data.data) ? data.data : [];
    }
    
    if (allNews.length > 0) {
      const newsHTML = allNews.slice(0, 3).map(news => {
        const title = isEnglish ? news.title_en : news.title_ja;
        const category = isEnglish ? news.category_en : news.category;
        const content = isEnglish ? news.content_en : news.content_ja;
        const excerpt = extractExcerpt(content);
        const date = formatNewsDate(news.published_date, isEnglish);
        
        return `
          <article class="news-preview-card scroll-reveal" data-news-id="${news.id}">
            <div class="news-preview-image ${news.image_url ? '' : 'no-image'}">
              ${news.image_url ? `<img src="${news.image_url}" alt="${title}">` : ''}
            </div>
            <div class="news-preview-content">
              <div class="news-preview-meta">
                <span class="news-preview-category">${category}</span>
                <span class="news-preview-date">${date}</span>
              </div>
              <h3 class="news-preview-title">${title}</h3>
              <p class="news-preview-excerpt">${excerpt}</p>
            </div>
          </article>
        `;
      }).join('');
      
      newsPreviewEl.innerHTML = newsHTML;
      
      // Add click handlers to open modal
      newsPreviewEl.querySelectorAll('.news-preview-card').forEach(card => {
        card.addEventListener('click', function() {
          const newsId = this.dataset.newsId;
          openNewsModal(newsId);
        });
      });
      
      // Trigger scroll reveal
      if (typeof observer !== 'undefined') {
        newsPreviewEl.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
      }
    } else {
      newsPreviewEl.innerHTML = `<p style="text-align: center; color: var(--text-muted);">${isEnglish ? 'No news available' : 'ニュースはありません'}</p>`;
    }
  } catch (error) {
    console.error('Error loading news preview:', error);
    newsPreviewEl.innerHTML = '';
  }
}

// Open news detail modal
async function openNewsModal(newsId) {
  const modal = document.getElementById('newsModal');
  if (!modal) return;
  
  const isEnglish = document.documentElement.lang === 'en';
  
  try {
    const response = await fetch(`tables/news_releases/${newsId}`);
    const news = await response.json();
    
    if (news) {
      const title = isEnglish ? news.title_en : news.title_ja;
      const category = isEnglish ? news.category_en : news.category;
      const content = isEnglish ? news.content_en : news.content_ja;
      const date = formatNewsDate(news.published_date, isEnglish);
      
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
        
        <div class="news-modal-footer">
          <a href="${isEnglish ? 'news-en.html' : 'news.html'}" class="news-modal-view-all">
            ${isEnglish ? 'View All News' : 'すべてのニュースを見る'}
          </a>
        </div>
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
document.addEventListener('DOMContentLoaded', function() {
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
});

function extractExcerpt(content) {
  if (!content) return '';
  const text = content.replace(/<[^>]*>/g, '');
  const excerpt = text.substring(0, 100);
  return excerpt + (text.length > 100 ? '...' : '');
}

function formatNewsDate(dateString, isEnglish) {
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

// Load news preview on page load
document.addEventListener('DOMContentLoaded', loadNewsPreview);

// Run optimizations
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    deferNonCritical();
  });
} else {
  preloadImages();
  deferNonCritical();
}

// Reduce animations on slower devices
if (navigator.connection && navigator.connection.effectiveType === '2g') {
  document.documentElement.classList.add('reduce-animations');
}

// ========================================
// 8. KEYBOARD ACCESSIBILITY
// ========================================
if (menuToggle) {
  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menuToggle.click();
    }
  });
}

// ========================================
// 9. REDUCE MOTION SUPPORT
// ========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
}

// ========================================
// 10. COUNTER ANIMATION
// ========================================
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = formatNumber(Math.floor(current));
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = formatNumber(target);
    }
  };
  
  updateCounter();
}

function formatNumber(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '億';
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  } else if (num >= 1000) {
    return num.toLocaleString();
  }
  return num;
}

// Observe counters
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
  counterObserver.observe(counter);
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%caora Creative Fintech Studio', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #0088FF, #00D4FF, #8B5CF6); -webkit-background-clip: text; color: transparent;');
console.log('%c金融 × IP × クリエイティブ × ゲーミフィケーション', 'font-size: 14px; color: #888;');

// ========================================
// 11. CONTACT FORM - DOCUMENT REQUEST TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const subjectSelect = document.getElementById('contact-subject');
  const documentsGroup = document.getElementById('documents-group');
  const messageField = document.getElementById('contact-message');
  const messageRequired = document.getElementById('message-required');
  const documentCheckboxes = documentsGroup ? documentsGroup.querySelectorAll('input[type="checkbox"]') : [];
  
  if (subjectSelect && documentsGroup) {
    subjectSelect.addEventListener('change', function() {
      const isDocumentRequest = this.value === '資料請求' || this.value === 'Document Request';
      
      if (isDocumentRequest) {
        // 資料請求を選択した場合
        documentsGroup.style.display = 'block';
        messageField.removeAttribute('required');
        if (messageRequired) messageRequired.style.display = 'none';
        messageField.placeholder = 'その他ご要望があればご記入ください（任意）';
        
        // 少なくとも1つのチェックボックスを必須にする
        documentCheckboxes.forEach(checkbox => {
          checkbox.addEventListener('change', validateDocumentCheckboxes);
        });
      } else {
        // その他の件名を選択した場合
        documentsGroup.style.display = 'none';
        messageField.setAttribute('required', 'required');
        if (messageRequired) messageRequired.style.display = 'inline';
        messageField.placeholder = 'お問い合わせ内容をご記入ください';
        
        // チェックボックスのバリデーションを解除
        documentCheckboxes.forEach(checkbox => {
          checkbox.removeEventListener('change', validateDocumentCheckboxes);
          checkbox.setCustomValidity('');
        });
      }
    });
  }
  
  // 少なくとも1つのチェックボックスが選択されているか確認
  function validateDocumentCheckboxes() {
    const isChecked = Array.from(documentCheckboxes).some(checkbox => checkbox.checked);
    documentCheckboxes.forEach(checkbox => {
      if (!isChecked) {
        checkbox.setCustomValidity('少なくとも1つの資料を選択してください');
      } else {
        checkbox.setCustomValidity('');
      }
    });
  }
});
