/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth:{
      container:"1320px"
    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif'],
     
    },
    backgroundImage:{
      'ban':"url(./src/assets/banner.png)",
      'back':"url(./src/assets/red pipe.png)",
      'pic1':"url(.src/assets/service1.png)",
      'pic2':"url(.src/assets/service2.png)"
    },
    
  },
  plugins: [],
}
