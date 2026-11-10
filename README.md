# THAPAS CAFE – Premium Cafe & Restaurant Website

Official modern, responsive, and SEO-optimized web application for **Thapas Cafe**, located in Mundra, Gujarat, India.

---

## ☕ Business Overview

- **Business Name**: Thapas Cafe
- **Business Category**: Cafe cum Restaurant
- **Full Address**:
  Shop No. 5, Sainath Apartment,
  Opposite Mahavir Shopping Mall,
  Suraj Nagar, Mundra, Baroi,
  Gujarat – 370421, India.
- **Google Rating**: 4.9 / 5.0 (8 Verified Google Reviews)
- **Official Instagram**: [https://www.instagram.com/thapas_cafe/](https://www.instagram.com/thapas_cafe/)
- **Phone Number**: Not provided by owner *(strictly no fabricated phone numbers used)*.

---

## 🎨 Design Direction & Brand System

- **Primary**: Deep Espresso Brown (`#35251F`)
- **Secondary**: Warm Cream (`#F7F1E7`)
- **Accent**: Muted Terracotta (`#BD7658`)
- **Supporting**: Olive Green (`#72785B`)
- **Text**: Dark Charcoal (`#292522`)
- **Background**: Soft Ivory (`#FCFAF6`)
- **Typography**:
  - Headings: *Playfair Display* & *Cormorant Garamond*
  - Body & UI: *Poppins* & *Inter*

---

## 📁 Project Architecture

```
Thapa's Cafe/
├── index.html               # Main semantic HTML5 document with Schema.org JSON-LD
├── server.js                # High-performance zero-dependency Node.js HTTP server
├── package.json             # NPM package manifest with dev and start scripts
├── robots.txt               # Search engine crawler instructions
├── sitemap.xml              # XML Sitemap for search indexing
├── site.webmanifest         # PWA Web Application Manifest
├── favicon.svg              # Custom typographic coffee monogram vector favicon
├── css/
│   └── style.css            # Brand design tokens, micro-animations, lightbox styling
└── js/
    ├── main.js              # Application entry point, scroll reveal, back-to-top
    ├── data/
    │   ├── menuData.js      # Structured menu data with 6 categories and edit notes
    │   └── galleryData.js   # Editorial photo gallery catalog
    └── components/
        ├── navbar.js        # Sticky header, mobile drawer, scrollspy
        ├── menu.js          # Interactive category switcher, search, dietary filter
        ├── gallery.js       # Masonry gallery and category filter
        ├── lightbox.js      # Full-screen touch & keyboard accessible lightbox
        └── location.js      # Google Maps embed, address copy, visit inquiry
```

---

## 🚀 Running Locally

You can launch the website server with standard Node.js:

```bash
# Start the local development server
npm start
# or
node server.js
```

Then navigate in your browser to:
[http://localhost:3000](http://localhost:3000)

---

## 📝 How the Owner Can Customize the Website

### 1. Update Menu Dishes, Prices, or Photos
Open [`js/data/menuData.js`](file:///c:/Users/Preeti%20raj/Downloads/Thapa's%20Cafe/js/data/menuData.js):
- Add or modify items in `MENU_ITEMS` array.
- Update `name`, `description`, `price`, `dietary` (`'veg'` or `'non-veg'`), and `image` URL.

### 2. Update Gallery Photos
Open [`js/data/galleryData.js`](file:///c:/Users/Preeti%20raj/Downloads/Thapa's%20Cafe/js/data/galleryData.js):
- Replace placeholder image URLs with real high-resolution photographs of Thapas Cafe.

### 3. Add Phone Number or Operating Hours Once Available
When official phone numbers or opening hours are provided, search for `<!-- Business Phone -->` or update the Location card in `index.html`.

---

## 🔍 SEO & Local Search Optimizations

- **Target Search Queries**:
  - `Thapas Cafe Mundra`
  - `Cafe in Mundra`
  - `Restaurant in Mundra`
  - `Cafe near Mahavir Shopping Mall`
- **Schema.org Structured Data**: Included `CafeOrCoffeeShop` JSON-LD with exact address, 4.9 rating from 8 reviews, and social link.
- **OpenGraph & Twitter Cards**: Pre-configured for rich social sharing cards.
- **Sitemap & Robots**: Standard compliant `sitemap.xml` and `robots.txt` ready for search indexing.
