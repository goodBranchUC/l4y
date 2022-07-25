module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}
 // tailwind.config.js
 const colors = require('tailwindcss/colors')
  
 module.exports = {
   // ...
   theme: {
     extend: {
       colors: {
         grape: colors.purple,
       },
     },
   },
   plugins: [
     // ...
     require('@tailwindcss/forms'),
   ],
 }