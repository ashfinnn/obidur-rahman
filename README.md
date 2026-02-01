# Obidur Rahman

This repository contains the source code for my personal portfolio, a futuristic and interactive web experience designed with a Heads-Up Display (HUD) aesthetic. Built from the ground up with a focus on performance, responsiveness, and clean, maintainable code.

[![Vercel Deployment](https://img.shields.io/github/deployments/your-username/your-repo/production?label=vercel&style=for-the-badge)](https://obidur.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

### [**Visit the Live Site →**](https://obidur.vercel.app)

---

## ✨ Core Features

-   🎨 **Futuristic HUD Design:** A sharp, monochromatic aesthetic inspired by modern system interfaces, built for clarity and impact.
-   📱 **Fully Responsive:** Meticulously crafted for a seamless experience on all devices, from mobile phones to high-resolution desktops.
-   🔮 **Fluid Animations & Micro-interactions:** Powered by Framer Motion, featuring a 3D parallax hero grid, scroll-triggered animations, and satisfying hover states.
-   🚀 **Animated Loading Sequence:** A thematic system boot-up sequence that sets the tone for the site and ensures a smooth initial render.
-   🧩 **Modular & Maintainable Code:** Built with a component-based architecture in React for clean separation of concerns and easy updates.
-   🔍 **Dynamic Project Filtering:** The project archive features instant, client-side filtering to showcase different categories of work.
-   📈 **SEO & Performance Optimized:** Built with Next.js for server-side rendering, with metadata configured for search engines and social sharing.

---

## 🛠️ Tech Stack & Philosophy

This project is built with a modern, performant, and type-safe technology stack, chosen to deliver the best possible user and developer experience.

| Technology     | Category          | Purpose                                                                                |
| :------------- | :---------------- | :------------------------------------------------------------------------------------- |
| **Next.js**    | Framework         | For its hybrid rendering capabilities (SSR/SSG), performance optimizations, and DX.    |
| **TypeScript** | Language          | For static type-checking, preventing errors, and improving code maintainability.       |
| **Tailwind CSS**| Styling           | For rapid, utility-first UI development and maintaining a consistent design system.   |
| **Framer Motion**| Animation         | For creating complex, performant, and declarative animations in React.               |
| **Geist**      | Font              | A clean, modern, and technical typeface from Vercel that complements the HUD theme.     |
| **Vercel**     | Deployment        | For seamless, zero-config deployment, CI/CD, and global CDN performance.             |

---

## 🚀 Local Development

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later)
-   [pnpm](https://pnpm.io/) (recommended), [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ashfinn/portfolio-v3.git
    cd portfolio-v3
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **(Optional) Environment Variables:**
    If you re-implement the contact form, you'll need to set up environment variables. Create a `.env.local` file in the root of the project by copying the example:
    ```bash
    cp .env.example .env.local
    ```
    Then, fill in the required values in `.env.local`.

4.  **Run the development server:**
    This will start the application on `http://localhost:3000`.
    ```bash
    pnpm dev
    ```

5.  **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

The project uses the Next.js `app` directory structure, organized for clarity and scalability.
