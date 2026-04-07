# 🎨 Portfolio Website — HTML5 / CSS3 / JavaScript

A responsive personal portfolio website built with pure HTML5, SCSS and vanilla JavaScript. Includes sections for services, portfolio, testimonials, blog, FAQ and contact form. Built and optimized with Gulp.

---

## ✨ Features

- 📱 **Fully responsive** — mobile-first layout with burger menu
- 🎠 **Testimonials slider** — touch-friendly carousel powered by Swiper.js
- ▶️ **Video section** — YouTube embed with custom play button
- 🪗 **FAQ accordion** — native HTML `<details>` / `<summary>` elements
- 📬 **Contact form** — email, subject select and message textarea
- 📰 **Blog section** — article cards with categories and dates
- ♿ **Accessible** — ARIA labels, roles, visually-hidden text, semantic HTML
- 🚀 **Optimized build** — minified HTML, CSS, JS + WebP images via Gulp

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup, SEO meta, JSON-LD schema |
| **SCSS** | BEM methodology, component styles |
| **Vanilla JavaScript (ES6+)** | Menu toggle, video player, slider init |
| **Swiper.js** | Testimonials carousel |
| **Gulp 5** | Build pipeline — sass, minify, webp, deploy |
| **gh-pages** | Deploy to GitHub Pages |
| **Browser-sync** | Live reload dev server |

---

## 📄 Sections

- **Hero** — name, tagline, CTA button
- **Services** — Design & Development cards
- **Video Reel** — YouTube embed with poster
- **Portfolio** — latest work with tags
- **About** — bio, stats (experience, projects)
- **Features** — checkmark list with image
- **Testimonials** — Swiper slider with star ratings
- **FAQ** — accordion with partner logos
- **Blog** — article cards with categories
- **Contact** — address, phone, email + contact form
- **Footer** — navigation, social links, legal

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/SSerg-dev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Build (compiles SCSS, minifies, copies assets)
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 🏗 Project Structure

```
src/
├── index.html          # Main HTML page
├── app.js              # Menu, video, Swiper init
├── style.scss          # Global SCSS entry point
├── scss/               # Component styles (BEM)
└── assets/
    ├── images/         # SVG illustrations, portfolio, blog
    └── fonts/          # (if any)
```

---

## 💡 Key Concepts Demonstrated

- **BEM naming** — consistent class structure across all components
- **Semantic HTML5** — `<header>`, `<main>`, `<section>`, `<article>`, `<address>`, `<details>`
- **JSON-LD Schema** — structured data for SEO (`WebPage`, `Person`)
- **SVG sprites** — icons bundled into a single `sprite.svg`
- **Accessibility** — `aria-expanded`, `aria-controls`, `aria-label`, `role` attributes
- **Gulp pipeline** — automated build with SASS compilation, autoprefixer, CSS/HTML/JS minification

---

## 📸 Demo

> 🚧 Screenshots coming soon — run `npm run build` and open `dist/index.html`

---

## 👨‍💻 Author

**Sergei Shabailov**
- GitHub: [@SSerg-dev](https://github.com/SSerg-dev)
- Email: srmail@mail.ru

---

## 📄 License

ISC
