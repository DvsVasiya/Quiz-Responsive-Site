/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sxs': '530px',
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }], 
      },

      borderColor: {
        DEFAULT: '#EBEBED', 
      },

    },
  },
  plugins: [],
}

