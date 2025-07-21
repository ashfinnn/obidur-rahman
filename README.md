# Portfolio - Obidur Rahman

Welcome to the source code for my personal portfolio website. This project is a fully responsive, futuristic, and interactive web experience built with Next.js, TypeScript, and Tailwind CSS. The design is inspired by modern Heads-Up Displays (HUDs) and system interfaces, featuring a monochromatic color scheme, sharp typography, and subtle animations.

**Live Site:** [**obidurrahman.com**](https://obidur.vercel.app) *(Replace with your actual URL)*

---

## ✨ Features

-   **Futuristic HUD-inspired Design:** Clean, sharp, and monochromatic aesthetic that feels like a modern system interface.
-   **Fully Responsive:** A seamless experience across all devices, from mobile phones to high-resolution desktops.
-   **Interactive Animations:** Engaging, non-intrusive animations powered by Framer Motion, including:
    -   A 3D parallax grid background in the hero section.
    -   Scroll-triggered entrance animations for all content sections.
    -   Interactive hover states and micro-interactions.
-   **Animated Loading Screen:** A thematic system boot-up sequence that sets the tone for the entire site.
-   **Component-Based Architecture:** Built with reusable and modular React components for clean code and easy maintenance.
-   **Dynamic Content Filtering:** The project archive features client-side filtering to showcase different categories of work.
-   **SEO Optimized:** Built with Next.js for server-side rendering, with metadata configured for search engines and social sharing.

---

## 🛠️ Tech Stack

This project is built with a modern, performant, and type-safe technology stack.

-   **Framework:** [Next.js](https://nextjs.org/) (v14+) - The React Framework for Production.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) - For static type-checking and improved developer experience.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   **Animation:** [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
-   **Font:** [Geist](https://vercel.com/font) - A modern, clean, and technical typeface from Vercel.
-   **Deployment:** [Vercel](https://vercel.com/) - For seamless, high-performance deployment and hosting.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development or exploration.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) package manager

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install dependencies:**
    Choose your preferred package manager.
    ```bash
    # Using npm
    npm install

    # Using yarn
    yarn install

    # Using pnpm
    pnpm install
    ```

3.  **Run the development server:**
    This will start the application on `http://localhost:3000`.
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## 📂 Project Structure

The project follows the standard Next.js `app` directory structure, organized for clarity and scalability.

```
.
├── app/
│   ├── components/       # Reusable components (Header, Footer, etc.)
│   │   └── sections/     # Main page section components (About, Skills, etc.)
│   ├── lib/              # Data files and type definitions (projects, skills, etc.)
│   ├── layout.tsx        # Root layout for the application
│   ├── page.tsx          # The main entry page
│   └── globals.css       # Global styles and Tailwind directives
├── public/               # Static assets (images, CV, etc.)
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.mjs       # Next.js configuration
└── README.md             # You are here!
```

---

## 🎨 Customization

This portfolio is designed to be easily customizable.

-   **Content:** All personal information (about text, skills, projects) is located in the respective section components in `app/components/sections/` or in the `app/lib/data.ts` file.
-   **Styling:** Global styles and design tokens (colors, fonts, animations) are defined in `app/globals.css` and `tailwind.config.ts`.
-   **Metadata:** Site title, description, and social sharing info can be updated in `app/layout.tsx`.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE). You are free to fork, modify, and use this code as a template for your own portfolio. Attribution is appreciated but not required.

---
```
This README was generated with assistance from an AI model.
```