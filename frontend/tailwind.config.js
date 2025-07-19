/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#0a1f44', // Deep Night Blue
        cyan: '#00eaff', // Soft Neon Cyan
        amber: '#ffbf00', // Warm Amber
        smoke: '#f5f5f5', // White Smoke
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 