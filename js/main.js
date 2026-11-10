import { initNavbar } from './components/navbar.js';
import { initMenu } from './components/menu.js';
import { initGallery } from './components/gallery.js';
import { initLocation } from './components/location.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize modular components
  try {
    initNavbar();
  } catch (e) {
    console.error('Navbar initialization error:', e);
  }

  try {
    initMenu();
  } catch (e) {
    console.error('Menu initialization error:', e);
  }

  try {
    initGallery();
  } catch (e) {
    console.error('Gallery initialization error:', e);
  }

  try {
    initLocation();
  } catch (e) {
    console.error('Location initialization error:', e);
  }

  // Set current year in footer dynamically
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Back to top button logic
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
});
