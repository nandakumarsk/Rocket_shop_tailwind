/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*./html", "./build/js/*.js", 
     "./src/**/*.{html,js,jsx,ts,tsx}",
     "./components/**/*.{html,js}",
     "./build/index.html",

  ],
  theme: {
    extend: {
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen':{'raw':'(max-aspect-ratio: 13/20)'},

      },
      Keyframes: {
        'open-menu':{
          '0%': {Transform: 'scaleY(0)'},
          '80%': {Transform: 'scaleY(1.2)'},
          '100%': {Transform: 'scaleY(1)'},
        },
      },
      animation:{
        'open-menu':'open-menu 0.5s ease-in-out forwards',

      }
  },
  plugins: [],
}

}