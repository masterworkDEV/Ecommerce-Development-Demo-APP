/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        computerText: '1rem',
        tabletText: '.75rem',
        mobileText: '.65rem',
        smallerText: '.6rem',
        smallestText: '.5rem'
      },
      colors: {
        textPrimary: '#1e1e1e',
        textPrimaryTwo: '#fff',
        otherTextOne: '#5e5e5e'
      },
      borderColor: {
        primary: '#ccc'
      },
      backgroundColor: {
        white: '#fff',
        bgColorPrimary: '#f1f1f1',
        transparentBLK: 'rgba(0,0,0,0.9)',
        bgColorSecondary: '#1e1e1e',
        otherBgOne: '#5e5e5e',
        otherBgTwo: '#8a8a8a',
        otherBgThree: '#a3a3a3',
        inputBg: '#ddd',
        checkOutBlue: '#1DA1F2'
      },
      screens: {
        smaller: '400px'
      }
    }
  },
  plugins: []
}
