
module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  theme: {
      colors: {
        'pueblo': {  
          DEFAULT: '#78350F',  
          '50': '#EA8B55',  
          '100': '#E77E43',  
          '200': '#E3661E',  
          '300': '#C15518',  
          '400': '#9C4514',  
          '500': '#78350F',  
          '600': '#461F09',  
          '700': '#140903',  
          '800': '#000000',  
          '900': '#000000'},

        'peach': {
          DEFAULT: '#FFEAAE',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFF5D7',
          '500': '#FFEAAE',
          '600': '#FFDB76',
          '700': '#FFCD3E',
          '800': '#FFBE06',
          '900': '#CD9800'
        },

        'amber': {
          DEFAULT: '#FFC100',
          '50': '#FFEEB8',
          '100': '#FFE9A3',
          '200': '#FFDF7A',
          '300': '#FFD552',
          '400': '#FFCB29',
          '500': '#FFC100',
          '600': '#C79700',
          '700': '#8F6C00',
          '800': '#574200',
          '900': '#1F1700'
        },

        'custom-gray': '#7F7F7F',
        'custom-russet': '#78350F',
        'custom-banana': '#FFEAAE',
        'custom-amber': '#7F7F7F',
        'custom-orange':'#7F7F7F',
    },
   },
  }
