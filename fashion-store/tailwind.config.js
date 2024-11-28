/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      textPrimary: '#1e1e1e',
      textPrimaryTwo: '#fff'
    },
    borderColor: {
      primary: '#ccc'
    },
    backgroundColor: {
      bgColorPrimary: '#f1f1f1',
      bgColorSecondary: '#1e1e1e',
      otherBgOne: '#5e5e5e',
      otherBgTwo: '#8a8a8a',
      otherBgThree: '#a3a3a3',
      otherBgFour: '#ddd',
      checkOutBlue: '#1DA1F2'
    }
  },
  plugins: []
}
