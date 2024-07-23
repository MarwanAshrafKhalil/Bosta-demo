/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#d00f19',
          secondary: '#e8f7fa',
          'base-100': '#ffffff',
          green: '#49a722',
          yellow: '#f8bb02',
        },
      },
    ],
  },
};
