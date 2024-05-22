/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    screens: {
      'sm': '411px',
      // => @media (min-width:) { ... }
      'mdsm': '650px',
      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
   
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
       
    },
    extend: {
      backgroundImage: {
        'Eyewearbg': "url('/bgimages/Eyewear.jpg')",
        'LADIESTOP': "url('/bgimages/LADIEtOP.jpg')",
        'shoes': "url('/bgimages/shoesbg.jpg')",
        'specialoffer': "url('/bgimages/Spofferbg.jpg')",
        'Aboutusbg' : "url('/bgimages/Aboutusbg.jpg')",
        'Aboutusbg2' : "url('/bgimages/aboutusbg2.jpg')",
        'Contactbg' : "url('/bgimages/contactbg.jpg')",
        
      },
      colors: {
        'navcol': "#166390",
        'hovernav': "#555",
      },
       
    
      

     
    },
  },
  plugins: [],
};
