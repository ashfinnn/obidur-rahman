// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'pan-grid': 'pan-grid 60s linear infinite',
        'pulse-arrow': 'pulse-arrow 2s infinite',
        'text-slide': 'text-slide 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'scan-line': 'scan-line 12s linear infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 20%': { transform: 'translateY(0%)', opacity: '1' },
          '25%, 45%': { transform: 'translateY(-25%)', opacity: '1' },
          '50%, 70%': { transform: 'translateY(-50%)', opacity: '1' },
          '75%, 95%': { transform: 'translateY(-75%)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-2px, 2px)' },
          '20%': { transform: 'translate(-2px, -2px)' },
          '30%': { transform: 'translate(2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '50%': { transform: 'translate(-2px, 2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '70%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(-2px, -2px)' },
          '90%': { transform: 'translate(2px, 2px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'loading-dots': {
          '0%, 20%': { content: "''" },
          '40%': { content: "'.'" },
          '60%': { content: "'..'" },
          '80%, 100%': { content: "'...'" },
        },
        'pan-grid': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'pulse-arrow': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.8' },
        }
      },
    },
  },
  plugins: [],
}

export default config