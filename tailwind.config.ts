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
      colors: {
        accent: '#FF4D00',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
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

        'pan-grid': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'pulse-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },

        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config