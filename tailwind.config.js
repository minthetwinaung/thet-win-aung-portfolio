/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'sans-serif'],
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        'de-bg':      '#0a0e17',
        'de-surface': '#0f1520',
        'de-surface2':'#141c2e',
        'de-border':  '#1e2d47',
        'de-border2': '#162038',
        'de-green':   '#00d68f',
        'de-blue':    '#4da6ff',
        'de-purple':  '#a78bfa',
        'de-orange':  '#fb923c',
        'de-cyan':    '#22d3ee',
        'de-dim':     '#4a6080',
        'de-text':    '#cdd6f4',
        'de-text2':   '#8899bb',
      },
      animation: {
        'blink':  'blink 1s step-end infinite',
        'fade-up':'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        blink:   { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        fadeUp:  { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
