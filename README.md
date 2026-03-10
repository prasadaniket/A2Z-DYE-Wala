# 💎 A2Z DYE WALA | The Digital Atelier

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

**A premium digital showroom where traditional jewelry craftsmanship meets state-of-the-art 3D visualization and AI-driven aesthetic design.**

DYE Jewels (A2Z DYE Wala) is an immersive web experience designed to showcase high-end, bespoke jewelry with technical precision and sophisticated aesthetics. It transcends the traditional boundaries of jewelry making by intertwining legendary craftsmanship with avant-garde digital precision.

---

## ✨ Key Features

### 💎 Elite 3D Showcase
A dedicated collection page featuring a curated selection of masterpieces. Each item includes:
- **Interactive 3D Views**: Engaging "Digital Twins" of jewelry pieces powered by Spline.
- **Technical Metadata**: Detailed specifications (ID, Karat, Weight).
- **Architecture Views**: High-precision 3D scans for an uncompromising look at every facet.

### 🎬 Cinematic Motion Design
Powered by **GSAP (GreenSock Animation Platform)** for a seamless luxury feel:
- **Staggered Reveals**: Elegant entrance animations for grids and text blocks.
- **Horizontal Scrolling**: An interactive "The Chronicles" timeline on the Story page.
- **Scroll-Triggered Interactivity**: Dynamic value cards that reveal details upon interaction.
- **Fluid Logo Scaling**: A sophisticated navbar that adapts elegantly as you browse.

### 🎨 Premium Aesthetic & AI Visuals
- **White & Purple Design System**: A meticulously curated brand palette focusing on high-contrast luxury.
- **Custom AI Content**: Bespoke, macro-photographic imagery generated specifically to match the brand's unique lighting and mood.
- **Minimalist UX**: A distraction-free, single-theme interface designed for high-net-worth clients.

### ⚡ Atomic & Modular Architecture
- **Component-Driven Development**: High-performance sections (Contact, Values, Artisans) isolated for maximum stability and lag-free navigation.
- **Vite & React 19**: Lightning-fast builds and state-of-the-art rendering.
- **Smart Preloader**: A minimalist first-run experience that sets the tone for the atelier journey.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React.js 19 (Vite) |
| **3D Engine** | Spline (Runtime & High-fidelity Iframes) |
| **Animation** | GSAP 3 (ScrollTrigger, Flip, Timelines) |
| **Styling** | Modern Vanilla CSS (Variables) & Tailwind CSS |
| **Icons** | Lucide React |
| **Typography** | Playfair Display (Serif), Inter (Sans), Dancing Script |

---

## 📂 Project Architecture

```text
frontend/
├── src/
│   ├── components/      # Atomic UI Modules
│   │   ├── Navbar.jsx        # Fluid, scroll-aware navigation
│   │   ├── Footer.jsx        # Grid-based luxury footer with watermark
│   │   ├── AboutSec.jsx      # Editorial split-layout content
│   │   ├── ValueSec.jsx      # Interactive tenet cards with reveal effects
│   │   ├── ContactUs.jsx     # High-conversion premium form
│   │   └── ArtisansCarousel.js# Cinematic horizontal infinite scroll
│   ├── pages/           # Orchestration Views (Home, OurStory, Collection)
│   ├── assets/          # Custom AI-generated brand imagery
│   ├── App.jsx          # Route management
│   └── index.css        # Global design tokens and root variables
└── vite.config.js       # Build optimization configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **Package Manager**: npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/DYE-Jewels.git
   cd DYE-Jewels/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Launch development server**
   ```bash
   npm run dev
   ```

---

## 🌟 Vision

Our goal is to transcend the traditional boundaries of jewelry making. By intertwining legendary craftsmanship with avant-garde 3D precision, we forge artifacts that outlive time itself.

**DYE Jewels / Est. 1990**  
*A 2 Z - D Y E - W a l a*

---

<p align="center">
  Crafted with ✨ by UniCode Tech Team
</p>