/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
  './src/**/*.tsx',
  './index.html'
],
  theme: {
    colors: {

      'branco':'#FFFFFF',
      'cinza':'#A69E9D',
      'cinza-2':'#E7E2DA',
      'cinza-3':'#474143',
      'cinza-4':'#E7E8E7',
      'bege-claro': '#D7D9CC',
      'bege-escuro': '#BFB0A3',
      'bege-claro-2': '#EADDCC',
      'bege-escuro-2': '#CEB280',
      'bege-claro-3': '#F2EAE4',
      'bege-escuro-3': '#D9B9AD',
      'cinza-claro':'#B0BFB5',
      'cinza-escuro': '#4A5559',
      'yellow-bege': '#F2C36B',
       'color': '#1D2326',
       'color-2': '#071226',
       'color-3': '#011826',
       'color-4': '#0D0D0D',
       'color-5': '#212226',
       'color-6': '#FFEBB0',
       'color-7': '#FFB05A',
       'color-8': '#F84322',
       'color-9': '#9F3818',
       'color-10': '#5D7359',
       'color-11': '#003840',
       'color-12': '#265C4B',
       'color-13': '#8FC1B5',
       'color-14': '#589A8D',
       'color-15': '#21445B',
       'color-16': '#323050',
       'color-17': '#C70039',
       'color-18': '#900C3E',
       'color-19': '#34735C',
       'color-20': '#36D98D',

    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],

}
