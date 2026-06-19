/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        arch: {
          black: '#0A0A0A',
          dark: '#111111',
          charcoal: '#1C1C1C',
          gold: '#C9A84C',
          cream: '#F5F0E8',
          text: '#E8E0D0',
          muted: '#9A9183',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
