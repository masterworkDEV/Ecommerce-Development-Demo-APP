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
      primary: '#d7d7d7'
    },
    backgroundColor: {
      bgColorPrimary: '#f1f1f1',
      bgColorSecondary: '#1e1e1e',
      otherBgOne: '#5e5e5e',
      otherBgTwo: '#8a8a8a',
      otherBgThree: '#a3a3a3',
      otherBgFour: '#ddd',
      checkOutBlue: '#1DA1F2'
    },
    screens: {
      mobileSmall: '375px',
      mobile: '576px',

      mobileBig: '768px',

      tablet: '992px',

      laptop: '1200px'
    }
  },
  plugins: []
}
