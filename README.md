# <p align="center"><img src="public/ChatGPT Image Jun 12, 2026, 09_34_09 PM.png" alt="Tanjiro Cinematic Portfolio Banner" width="100%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);"></p>

<h1 align="center">⚔️ Tanjiro Kamado: Cinematic Animated Portfolio</h1>

<p align="center">
  <strong>An immersive, high-performance developer portfolio themed around Tanjiro Kamado (Demon Slayer)</strong><br>
  Built with Next.js, React, TypeScript, Tailwind CSS, GSAP, and Framer Motion.
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://gsap.com"><img src="https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP"></a>
</p>

---

## 🌟 Introduction

This is an immersive, ultra-performance developer portfolio themed around **Tanjiro Kamado's Hinokami Kagura (Dance of the Fire God)**. The application blends visual storytelling with modern frontend engineering, using interactive HTML5 canvas rendering, frame scrubbing, dynamic particle physics, and a fully functional terminal contact system to create a premium user experience.

---

## ⚡ Core Features

### 🎬 1. Cinematic Scroll Frame-Scrubbing
* **Hardware-Accelerated Canvas:** Binds page scroll position to a compressed sequence of image frames loaded into an HTML5 2D Canvas context.
* **Smooth Interpolation:** Employs linear interpolation (`lerp`) through custom scroll listeners, providing fluid, stutter-free animations matching the speed of the user's scroll.
* **Pre-Caching Pipeline:** Pre-loads and caches frames sequentially in memory, preventing flashing/loading artifacts.

### 🔥 2. Hinokami Kagura Fire Particle Engine
* **Real-time Simulation:** Renders floating embers, rising ash, and warm glow filters using 2D Canvas math.
* **Dynamic Physics:** Simulates gravity, upward drafts, and wind-drift coefficients on individual particles for a lifelike atmospheric environment.
* **Performance-Optimized:** Runs on a dedicated `requestAnimationFrame` loop, automatically pausing when the hero section is out of the viewport.

### 💻 3. Command-Line Terminal Contact System
* **Interactive Shell:** A custom CLI widget simulating a Linux/Unix terminal environment where visitors can run commands.
* **Fully Functional Commands:** Supports `help`, `about`, `skills`, `projects`, `clear`, and `email` sending.
* **Interactive Message Portal:** Prompts user steps sequentially to collect name, email, and messages directly via input commands.

---

## 🛠️ Tech Stack & Architecture

### Frontend & Rendering
* **Framework:** Next.js 14 (App Router, Server-side optimizations, Static asset delivery)
* **Core Libraries:** React 18 & TypeScript (Type-safe structures, state management, custom lifecycle hooks)
* **CSS & Design System:** Tailwind CSS 3 (Utility styling, glassmorphism templates, CSS custom variables)

### Motion & Interactions
* **Animation Engines:**
  * **GSAP 3:** For precise scroll triggers and complex canvas frame-interpolation.
  * **Framer Motion 11:** For element-level entrance, exit, hovering, and layout transitions.
* **Vector Assets:** Lucide React icons.

---

## 📊 Developer Metrics
<p align="center">
  <img src="https://img.shields.io/badge/Experience-2+%20Years-orange?style=flat-square" alt="Experience">
  <img src="https://img.shields.io/badge/Projects-10+%20Completed-red?style=flat-square" alt="Projects">
  <img src="https://img.shields.io/badge/DSA-250+%20Solved-yellow?style=flat-square" alt="DSA Solved">
  <img src="https://img.shields.io/badge/Internships-1+%20Production-blue?style=flat-square" alt="Internship">
</p>

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router configurations, global styles, and layout
│   ├── globals.css       # Core design tokens, gradients, and custom utility classes
│   ├── layout.tsx        # HTML wrapper and global metadata
│   └── page.tsx          # Main entrypoint bringing all sections together
├── components/           # Reusable portfolio section components
│   ├── About.tsx         # Bio details, background cards, and timeline
│   ├── Achievements.tsx  # Grid displaying awards and certifications
│   ├── CinematicHero.tsx # HTML5 Canvas scrubbing engine & particle systems
│   ├── Contact.tsx       # Terminal command line contact portal
│   ├── Experience.tsx    # Chronological professional career timeline
│   ├── Footer.tsx        # Footnote copyright and signature
│   ├── Navbar.tsx        # Sticky navigation overlay with glowing elements
│   ├── Projects.tsx      # Showcase cards for previous work
│   └── Skills.tsx        # Capabilities progress bars
├── public/               # Static web assets (automatically populated frames go here)
├── scripts/              # Build-related automation scripts
│   └── unzip.js          # Frame extraction and configuration tool
├── package.json          # Dependency definition and lifecycle scripts
└── tsconfig.json         # TypeScript compiler configuration
```

---

## 🚀 Installation & Local Setup

### Prerequisites
* **Node.js** (v18.x or later recommended)
* **npm** (or alternative package manager)
* **Operating System:** Designed and verified on Windows, featuring automated build scripts.

### 1. Install & Decompress Assets
Run the installation command. The `postinstall` lifecycle hook will automatically decompress the animation frames package into `/public/frames/` and generate configuration mappings:
```bash
npm install
```

### 2. Run in Development Mode
Fire up the local server to run the workspace locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your local browser.

### 3. Production Compilation
Generate an optimized, production-ready static bundle:
```bash
npm run build
```
Preview the compiled production bundle locally:
```bash
npm run start
```

---

## 🎨 Visual Identity & Theme Guidelines
* **Dominant Color Palette:** Midnight Black (#050505), Hinokami Crimson Red (#E63946), Flame Orange (#F39C12 / #E67E22), and Charcoal (#1A1A1A).
* **Typography:** Outfit (Display titles, bold numbers) and Inter (Clean body text, description layouts) imported via Google Fonts.
* **Component Styling:** Rich frosted glass effects using backdrop filters and subtle crimson glows to retain a sleek premium look.

---

<p align="center">
  Created with ❤️ by <strong>Harish K</strong>
</p>
