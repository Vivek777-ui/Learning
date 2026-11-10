import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData.js';
import { Lightbox } from './lightbox.js';

let lightboxInstance = null;
let currentFilter = 'all';

export function initGallery() {
  const categoriesContainer = document.getElementById('galleryCategories');
  const gridContainer = document.getElementById('galleryGrid');

  if (!gridContainer) return;

  lightboxInstance = new Lightbox(GALLERY_ITEMS);

  // Render categories
  if (categoriesContainer) {
    categoriesContainer.innerHTML = GALLERY_CATEGORIES.map((cat) => `
      <button 
        type="button" 
        class="menu-category-btn ${cat.id === currentFilter ? 'active' : ''}" 
        data-filter="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    categoriesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.menu-category-btn');
      if (!btn) return;
      currentFilter = btn.dataset.filter;

      document.querySelectorAll('#galleryCategories .menu-category-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.filter === currentFilter);
      });

      renderGallery();
    });
  }

  renderGallery();
}

function renderGallery() {
  const gridContainer = document.getElementById('galleryGrid');
  if (!gridContainer) return;

  const filtered = GALLERY_ITEMS.filter((item) => {
    return currentFilter === 'all' || item.category === currentFilter;
  });

  gridContainer.innerHTML = filtered.map((item, index) => `
    <div class="gallery-item group" data-index="${index}">
      <img 
        src="${item.image}" 
        alt="${item.title} - Thapas Cafe Mundra" 
        loading="lazy" 
      />
      <div class="gallery-overlay">
        <span class="text-xs uppercase tracking-widest text-terracotta font-semibold mb-1">
          ${item.category}
        </span>
        <h3 class="font-serif text-lg font-bold text-cream mb-1">
          ${item.title}
        </h3>
        <p class="text-xs text-secondary/80 line-clamp-1">
          ${item.caption}
        </p>
        <div class="mt-2 flex items-center text-xs font-medium text-cream gap-1 opacity-90">
          <span>Click to view</span>
          <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </div>
      </div>
    </div>
  `).join('');

  gridContainer.querySelectorAll('.gallery-item').forEach((el) => {
    el.addEventListener('click', () => {
      const index = parseInt(el.dataset.index, 10);
      lightboxInstance.open(index, filtered);
    });
  });
}
