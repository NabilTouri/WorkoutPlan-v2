/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#00020f',
        secondary: '#64d8cb'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};