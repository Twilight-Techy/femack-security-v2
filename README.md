<div align="center">
  <img src="public/logo-white.png" alt="Femack Security Limited" width="300" />

  # Femack Security Limited
  
  **A premium, high-performance web profile built with Next.js, Framer Motion, and Tailwind CSS.**
  
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

<br/>

## ✨ Overview

Femack Security Limited is a premier security services provider headquartered in Lagos, Nigeria. This repository contains the official frontend web profile, meticulously designed to reflect the company's commitment to "Top Tier Security Standards" and unparalleled professionalism.

The platform relies heavily on **Glassmorphism aesthetics**, fluid **micro-animations**, and a highly curated **Navy/Cyan color palette** to immediately establish trust and perceived value with prospective corporate clients.

## 🚀 Key Features

- **Fluid Page Transitions & Animations**: Powered by `framer-motion`, featuring floating data cards, smooth scroll reveals, and interactive navigation elements.
- **Glassmorphic UI Engine**: Utilizing advanced backdrop-filters and transparent borders for a futuristic, premium feel over deep-space hero imagery.
- **100% Mobile Responsive**: Bespoke component breakdowns across `sm`, `md`, `lg`, and `xl` breakpoints to ensure perfect visual balance on all devices.
- **Modern SVG Iconography**: Integrated `radix-ui/react-icons` for sharp, scalable, and elegant UI indicators.
- **Native PDF Hosting**: Directly embedded company handbook and certificate assets utilizing Next.js public distribution.

## 🛠️ Technology Stack

| Technology | Role |
| :--- | :--- |
| **Next.js (App Router)** | Core framework, routing, and React server-side rendering |
| **Tailwind CSS v4** | Rapid utility-first styling with dedicated `@theme` configurations |
| **Framer Motion** | Complex UI orchestrations (e.g. animated active navigation tabs layoutIds) |
| **Radix UI Icons** | Premium accessible SVG icon sets |
| **TypeScript** | Strict typings across all React components |

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/femack-security.git
   cd femack-security/website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Navigate to the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Repository Structure

```text
📂 src/
 ┣ 📂 app/              # Next.js App Router (Pages & Layouts)
 ┃ ┣ 📜 globals.css     # Global Tailwind variables and Glassmorphism classes
 ┃ ┣ 📜 layout.tsx      # Root layout (Outfit font configuration)
 ┃ ┣ 📜 page.tsx        # Dynamic Hero & Home overview
 ┃ ┣ 📂 about/          # Company history & Leadership section
 ┃ ┣ 📂 services/       # Detailed security offerings & background checks
 ┃ ┗ 📂 contact/        # Contact forms and maps integration
 ┣ 📂 components/       # Reusable React components
 ┃ ┣ 📜 Navbar.tsx      # Interactive Header with Framer Motion layoutId tabs
 ┃ ┣ 📜 Footer.tsx      # Global footer with Quick Links
 ┃ ┗ 📜 ServiceCard.tsx # Animated, hoverable grid cards for services
 ┗ 📂 lib/              # Utility functions (e.g., Tailwind merge `cn`)
```

<br/>

<div align="center">
  <sub>Built with precision and security in mind. 🛡️</sub>
</div>
