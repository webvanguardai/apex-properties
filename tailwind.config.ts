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
        navy: {
          DEFAULT: '#0A1628',
          mid: '#112040',
          light: '#1A3060',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5A3',
          dark: '#A88A50',
        },
        'off-white': '#F8F6F2',
        'gray-blue': '#8A9BB5',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
}
export default config
