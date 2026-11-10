import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData.js';

let activeCategory = 'all';
let searchQuery = '';
let activeDietFilter = 'all'; // 'all' | 'veg' | 'non-veg'

export function initMenu() {
  const categoriesContainer = document.getElementById('menuCategoriesContainer');
  const itemsContainer = document.getElementById('menuItemsContainer');
  const searchInput = document.getElementById('menuSearchInput');
  const dietFilterButtons = document.querySelectorAll('.diet-filter-btn');

  if (!itemsContainer) return;

  // Render category buttons
  if (categoriesContainer) {
    categoriesContainer.innerHTML = MENU_CATEGORIES.map((cat) => `
      <button 
        type="button" 
        class="menu-category-btn ${cat.id === activeCategory ? 'active' : ''}" 
        data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    categoriesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.menu-category-btn');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      
      document.querySelectorAll('.menu-category-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.category === activeCategory);
      });

      renderItems();
    });
  }

  // Dietary filter buttons
  dietFilterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      dietFilterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeDietFilter = btn.dataset.diet;
      renderItems();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderItems();
    });
  }

  // Initial render
  renderItems();
}

function renderItems() {
  const container = document.getElementById('menuItemsContainer');
  const countBadge = document.getElementById('menuCountBadge');
  if (!container) return;

  const filtered = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = activeDietFilter === 'all' || item.dietary === activeDietFilter;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) || 
      item.description.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesDiet && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream mb-4 text-terracotta">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <h4 class="text-xl font-serif text-espresso mb-2">No menu items match your search</h4>
        <p class="text-text-muted text-sm max-w-md mx-auto">Try selecting another category or clear your search keyword to view our cafe selections.</p>
        <button type="button" id="resetMenuFilters" class="mt-4 btn-secondary btn-sm">Clear All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetMenuFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        activeCategory = 'all';
        activeDietFilter = 'all';
        searchQuery = '';
        const searchInput = document.getElementById('menuSearchInput');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.menu-category-btn').forEach((b) => {
          b.classList.toggle('active', b.dataset.category === 'all');
        });
        document.querySelectorAll('.diet-filter-btn').forEach((b) => {
          b.classList.toggle('active', b.dataset.diet === 'all');
        });
        renderItems();
      });
    }
    return;
  }

  container.innerHTML = filtered.map((item) => `
    <article class="menu-card group" data-item-id="${item.id}">
      <div class="menu-card-img-wrapper">
        <img 
          src="${item.image}" 
          alt="${item.name} at Thapas Cafe" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80'"
        />
        ${item.badge ? `
          <span class="absolute top-3 left-3 bg-espresso/90 backdrop-blur-sm text-cream text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            ${item.badge}
          </span>
        ` : ''}
        ${item.isPlaceholder ? `
          <span class="absolute bottom-2 right-2 bg-cream/90 backdrop-blur-sm text-espresso text-[10px] font-medium px-2 py-0.5 rounded shadow-sm">
            Sample Item
          </span>
        ` : ''}
      </div>

      <div class="p-5 flex flex-col flex-grow">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="diet-indicator ${item.dietary === 'veg' ? 'veg' : 'non-veg'}" title="${item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
            <h3 class="font-serif text-lg font-bold text-espresso group-hover:text-terracotta transition-colors leading-snug">
              ${item.name}
            </h3>
          </div>
          <span class="font-sans font-bold text-espresso text-lg whitespace-nowrap">
            ${item.currency}${item.price}
          </span>
        </div>

        <p class="text-xs text-terracotta/80 font-medium tracking-wide uppercase mb-2">
          ${item.tagline}
        </p>

        <p class="text-sm text-text-muted line-clamp-2 mb-4 flex-grow">
          ${item.description}
        </p>

        <div class="pt-3 border-t border-espresso/10 flex items-center justify-between text-xs text-text-light">
          <span class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-olive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${item.prepTime || 'Freshly Prepared'}
          </span>
          <button 
            type="button" 
            class="view-item-detail-btn text-terracotta hover:text-espresso font-medium flex items-center gap-1 transition-colors"
            data-item-id="${item.id}">
            View Details
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Attach modal trigger listeners
  container.querySelectorAll('.view-item-detail-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.itemId;
      const item = MENU_ITEMS.find((i) => i.id === itemId);
      if (item) showItemModal(item);
    });
  });
}

function showItemModal(item) {
  let modal = document.getElementById('menuItemModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'menuItemModal';
    modal.className = 'fixed inset-0 z-50 bg-espresso/70 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-surface rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl transform transition-transform duration-300 scale-95 border border-espresso/10">
      <div class="relative aspect-video">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-fit object-cover">
        <button type="button" id="closeItemModalBtn" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-espresso/80 text-cream flex items-center justify-center hover:bg-terracotta transition-colors">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        ${item.badge ? `
          <span class="absolute bottom-3 left-3 bg-espresso/90 text-cream text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            ${item.badge}
          </span>
        ` : ''}
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between gap-4 mb-2">
          <div class="flex items-center gap-2">
            <span class="diet-indicator ${item.dietary === 'veg' ? 'veg' : 'non-veg'}"></span>
            <h3 class="font-serif text-2xl font-bold text-espresso">${item.name}</h3>
          </div>
          <span class="font-sans font-bold text-xl text-espresso">${item.currency}${item.price}</span>
        </div>
        <p class="text-xs text-terracotta font-medium tracking-wide uppercase mb-3">${item.tagline}</p>
        <p class="text-sm text-text-muted leading-relaxed mb-4">${item.description}</p>
        
        <div class="bg-cream/50 rounded-xl p-3.5 mb-5 flex items-center justify-between text-xs text-text-muted border border-border">
          <span>Preparation Time: <strong class="text-espresso">${item.prepTime || 'Fresh on order'}</strong></span>
          <span>Category: <strong class="text-espresso capitalize">${item.category.replace('-', ' ')}</strong></span>
        </div>

        <div class="p-3 bg-cream/70 rounded-lg text-xs text-text-muted mb-4 border border-border/80">
          <span class="font-semibold text-espresso">Owner Note:</span> This is an editable cafe item placeholder. To customize dishes, pricing, or recipes, update <code>js/data/menuData.js</code>.
        </div>

        <div class="flex justify-end gap-3">
          <button type="button" id="closeItemModalFooterBtn" class="btn-primary btn-sm w-full sm:w-auto">
            Close Preview
          </button>
        </div>
      </div>
    </div>
  `;

  // Open modal
  modal.classList.remove('opacity-0', 'pointer-events-none');
  const innerCard = modal.querySelector('div');
  setTimeout(() => innerCard.classList.remove('scale-95'), 10);
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
    innerCard.classList.add('scale-95');
    document.body.style.overflow = '';
  };

  modal.querySelector('#closeItemModalBtn').addEventListener('click', closeModal);
  modal.querySelector('#closeItemModalFooterBtn').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
