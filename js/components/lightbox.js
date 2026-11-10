/**
 * Lightbox Component
 * Displays full-screen image previews with next/previous navigation,
 * touch gestures, and keyboard accessibility.
 */

export class Lightbox {
  constructor(items = []) {
    this.items = items;
    this.currentIndex = 0;
    this.isOpen = false;
    this.modal = null;
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    this.createDOM();
    this.attachEvents();
  }

  createDOM() {
    let existing = document.getElementById('thapasLightbox');
    if (existing) existing.remove();

    this.modal = document.createElement('div');
    this.modal.id = 'thapasLightbox';
    this.modal.className = 'lightbox-modal';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-label', 'Image Lightbox');

    this.modal.innerHTML = `
      <button type="button" class="lightbox-close-btn" aria-label="Close Lightbox" id="lightboxClose">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <button type="button" class="lightbox-prev-btn" aria-label="Previous Image" id="lightboxPrev">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button type="button" class="lightbox-next-btn" aria-label="Next Image" id="lightboxNext">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div class="lightbox-content">
        <div class="relative">
          <img src="" alt="" class="lightbox-image" id="lightboxImg" />
          <div class="absolute top-3 left-3 bg-espresso/80 text-cream text-xs px-2.5 py-1 rounded-full font-mono" id="lightboxCounter">1 / 1</div>
        </div>
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>
    `;

    document.body.appendChild(this.modal);
  }

  attachEvents() {
    const closeBtn = this.modal.querySelector('#lightboxClose');
    const prevBtn = this.modal.querySelector('#lightboxPrev');
    const nextBtn = this.modal.querySelector('#lightboxNext');

    closeBtn.addEventListener('click', () => this.close());
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    // Close on background click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal || e.target.classList.contains('lightbox-content')) {
        this.close();
      }
    });

    // Keyboard support
    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Touch swipe support
    this.modal.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.modal.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });
  }

  handleSwipe() {
    const threshold = 50;
    if (this.touchEndX < this.touchStartX - threshold) {
      this.next();
    } else if (this.touchEndX > this.touchStartX + threshold) {
      this.prev();
    }
  }

  open(index = 0, currentList = null) {
    if (currentList) {
      this.items = currentList;
    }
    if (this.items.length === 0) return;

    this.currentIndex = index;
    this.isOpen = true;
    this.updateImage();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateImage();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateImage();
  }

  updateImage() {
    const item = this.items[this.currentIndex];
    const img = this.modal.querySelector('#lightboxImg');
    const caption = this.modal.querySelector('#lightboxCaption');
    const counter = this.modal.querySelector('#lightboxCounter');

    img.src = item.image;
    img.alt = item.title || 'Thapas Cafe Gallery';
    counter.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
    caption.innerHTML = `
      <h4 class="font-serif text-lg font-bold text-cream mb-1">${item.title}</h4>
      <p class="text-sm text-secondary/80">${item.caption}</p>
    `;
  }
}
