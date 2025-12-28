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
        primary: {
          DEFAULT: '#1e3a8a',
          dark: '#1e293b',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#f97316',
          light: '#fb923c',
        },
      },
    },
  },
  plugins: [],
}
export default config
