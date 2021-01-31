/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      xs: '370px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    container: {
      center: true,
      padding: '2rem',
      size: {
        xs: '640px',
        sm: '780px',
        md: '900px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    fontFamily: {
      body: ['Manrope', 'Helvetica', 'sans-serif']
    },
    extend: {
      colors: {
        purple: '#6101EA',
        pink: '#FF3366',
        green: '#00c109'
      },
      width: {
        '4-5': '1.125rem',
        '72': '18rem',
        '96': '24rem',
        '128': '32rem'
      }
    }
  },
  variants: {},
  plugins: [require('tailwindcss-container-sizes')()]
}
