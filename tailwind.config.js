/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030304', // Pitch jet black
          900: '#07070A', // Deep onyx black
          850: '#0D0D12', // Midnight obsidian black
          800: '#14141B', // Deep carbon noir
          700: '#1D1D26', // Elevated card surface
          600: '#2A2A37', // Refined border slate
        },
        // We configure gold to light pink so existing gold-* utility classes map to exquisite light pink hues
        gold: {
          50: '#FFF5F8',
          100: '#FFE6EE',
          200: '#FFCDD9',
          300: '#FFB6C1', // Canonical LightPink
          400: '#FF94B2', // Radiant LightPink
          500: '#FF6B93', // Primary vibrant rose/lightpink
          600: '#E64C75', // Deep rose pink
          700: '#BD2B52', // Dark velvet pink
        },
        lightpink: {
          DEFAULT: '#FFB6C1',
          50: '#FFF5F8',
          100: '#FFE6EE',
          200: '#FFCDD9',
          300: '#FFB6C1',
          400: '#FF94B2',
          500: '#FF6B93',
          600: '#E64C75',
          700: '#BD2B52',
        },
        pink: {
          50: '#FFF5F8',
          100: '#FFE6EE',
          200: '#FFCDD9',
          300: '#FFB6C1',
          400: '#FF94B2',
          500: '#FF6B93',
          600: '#E64C75',
          700: '#BD2B52',
        },
        amber: {
          300: '#FFB6C1',
          400: '#FF94B2',
          500: '#FF6B93',
          600: '#E64C75',
        },
        accent: {
          crimson: '#FF4D82',
          cyan: '#38BDF8',
          emerald: '#10B981',
          silver: '#E2E8F0',
          pink: '#FFB6C1',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(255, 182, 193, 0.45)',
        'glow-pink': '0 0 35px -5px rgba(255, 182, 193, 0.55)',
        'glow-crimson': '0 0 35px -5px rgba(255, 77, 130, 0.4)',
        'glow-cyan': '0 0 30px -5px rgba(56, 189, 248, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.9)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'carbon-pattern': 'radial-gradient(circle at center, rgba(255, 182, 193, 0.06) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-gentle': 'float-gentle 4.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'ken-burns': 'kenburns 24s ease-in-out infinite alternate',
        'image-reveal': 'image-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'image-pulse': 'image-pulse 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.02) translate(0%, 0%)' },
          '50%': { transform: 'scale(1.10) translate(-1.2%, -0.8%)' },
          '100%': { transform: 'scale(1.02) translate(0%, 0%)' },
        },
        'image-pulse': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.98)' },
          '50%': { opacity: '0.75', transform: 'scale(1.03)' },
        },
        'image-reveal': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
