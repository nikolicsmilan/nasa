// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { // <--- Globális kiterjesztések
      screens: {
        'xl': '1200px',
        '2xl': '1700px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        spin: { /* ... */ },
        pulse: { /* ... */ },
      },
      colors: { // <--- Itt definiáljuk az ALAP színpalettákat
        sky: { // A már meglévő sky paletta
          50: 'oklch(97.7% 0.013 236.62)',
          100: 'oklch(95.1% 0.026 236.824)',
          200: 'oklch(90.1% 0.058 230.902)',
          300: 'oklch(82.8% 0.111 230.318)',
          400: 'oklch(74.6% 0.16 232.661)',
          500: 'oklch(68.5% 0.169 237.323)',
          600: 'oklch(58.8% 0.158 241.966)',
          700: 'oklch(50% 0.134 242.749)',
          800: 'oklch(44.3% 0.11 240.79)',
          900: 'oklch(39.1% 0.09 240.876)',
          950: 'oklch(29.3% 0.066 243.157)',
        },
        lime: { // Az ÚJ lime paletta (általad megadott értékekkel)
          50: 'oklch(98.6% 0.031 120.757)',
          100: 'oklch(96.7% 0.067 122.328)',
          200: 'oklch(93.8% 0.127 124.321)',
          300: 'oklch(89.7% 0.196 126.665)',
          400: 'oklch(84.1% 0.238 128.85)', // Ezt használja az 'ion' téma primary-ként
          500: 'oklch(76.8% 0.233 130.85)',
          600: 'oklch(64.8% 0.2 131.684)',
          700: 'oklch(53.2% 0.157 131.589)', // Ezt használhatnád a gradient 'to' színéhez az 'ion'-nál
          800: 'oklch(45.3% 0.124 130.933)',
          900: 'oklch(40.5% 0.101 131.063)',
          950: 'oklch(27.4% 0.072 132.109)', // Ezt használhatnád a gradient 'from' színéhez az 'ion'-nál
        },
        green: { // Az ÚJ green paletta
           50: 'oklch(98.1% 0.022 157.428)', // Feltételezett 50-es érték, a lista 100-assal kezdődött
           100: 'oklch(96.2% 0.044 156.743)',
           200: 'oklch(92.5% 0.084 155.995)',
           300: 'oklch(86.4% 0.139 155.488)', // Feltételezett 300-as, a lista itt ugrott
           400: 'oklch(76.2% 0.196 154.8)',  // Ezt használja a 'fusion' téma primary-ként (Ez lehet, hogy a te eredeti #4ade80-adnak az OKLCH megfelelője)
           500: 'oklch(67.2% 0.213 156.48)',
           600: 'oklch(58.6% 0.195 157.8)',
           700: 'oklch(51.4% 0.163 158.4)',  // Ezt használhatnád a gradient 'to' színéhez a 'fusion'-nál
           800: 'oklch(44.8% 0.133 158.0)',
           900: 'oklch(39.9% 0.107 158.5)',
           950: 'oklch(27.4% 0.072 158.8)',  // Ezt használhatnád a gradient 'from' színéhez a 'fusion'-nál (Figyelem: ez ugyanaz, mint a lime-950, ellenőrizd!)
           // Megjegyzés: A bemásolt 'green' listában volt egy ismétlődés és hiányzott pár árnyalat,
           // megpróbáltam logikusan kiegészíteni/korrigálni a v3 alapján, de ellenőrizd a forrásodat!
        },
        blue: { // Az ÚJ blue paletta
          50: 'oklch(97% 0.014 254.604)',
          100: 'oklch(93.2% 0.032 255.585)',
          200: 'oklch(88.2% 0.059 254.128)',
          300: 'oklch(80.9% 0.105 251.813)',
          400: 'oklch(70.7% 0.165 254.624)', // Ezt használja a 'quantum' téma primary-ként
          500: 'oklch(62.3% 0.214 259.815)',
          600: 'oklch(54.6% 0.245 262.881)',
          700: 'oklch(48.8% 0.243 264.376)',
          800: 'oklch(42.4% 0.199 265.638)', // Ezt használhatnád a gradient 'to' színéhez a 'quantum'-nál
          900: 'oklch(37.9% 0.146 265.522)',
          950: 'oklch(28.2% 0.091 267.935)', // Ezt használhatnád a gradient 'from' színéhez a 'quantum'-nál
        },
      }, // colors vége
    }, // extend vége
  }, // theme vége
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            // Az alapértelmezett primary most már a globálisan definiált sky-400 OKLCH kódja
            primary: 'oklch(74.6% 0.16 232.661)',
          },
          fontFamily: { /* ... */ },
          fontSize: { /* ... */ },
        },
      },
      themes: [
        {
          name: "plasma",
          extend: {
            colors: {
              // A primary ugyanaz, mint a default, nem kellene felülírni, de maradhat
              primary: 'oklch(74.6% 0.16 232.661)', // sky-400
              // A többi specifikus szín marad
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
            // A backgroundImage használhat `theme()`-et, ha akarod:
            backgroundImage: {
               gradient: "linear-gradient(45deg, theme('colors.sky.950') 1%, theme('colors.sky.800') 40%, theme('colors.sky.200') 90%)",
               gradientreverse: "linear-gradient(225deg, theme('colors.sky.950') 1%, theme('colors.sky.800') 40%, theme('colors.sky.200') 90%)",
            },
          },
        },
        {
          name: "ion",
          extend: {
            colors: {
              primary: 'oklch(84.1% 0.238 128.85)', // lime-400
              // A többi specifikus szín
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
            backgroundImage: { // Használja a lime árnyalatokat
               gradient: "linear-gradient(45deg, theme('colors.lime.950') 1%, theme('colors.lime.700') 40%, theme('colors.lime.200') 90%)",
               gradientreverse: "linear-gradient(225deg, theme('colors.lime.950') 1%, theme('colors.lime.700') 40%, theme('colors.lime.200') 90%)",
            },
             boxShadow: { // Ez maradhat, ha kell
               green: "10px 0px 10px 3px rgba(144, 78, 82, 0.75)",
             },
          },
        },
        {
          name: "fusion",
          extend: {
            colors: {
              primary: 'oklch(76.2% 0.196 154.8)', // green-400
               success: "rgb(63, 178, 121)",
               info: "rgb(191, 191, 191)",
               dark: "rgb(0, 0, 0)",
               asidebg: "rgb(129, 171, 178)",
            },
             backgroundImage: { // Használja a green árnyalatokat
               gradient: "linear-gradient(45deg, theme('colors.green.950') 1%, theme('colors.green.700') 40%, theme('colors.green.200') 90%)",
               gradientreverse: "linear-gradient(225deg, theme('colors.green.950') 1%, theme('colors.green.700') 40%, theme('colors.green.200') 90%)",
            },
          },
        },
        {
          name: "quantum",
          extend: {
            colors: {
              primary: 'oklch(70.7% 0.165 254.624)', // blue-400
              // A quantum specifikus színei
              success: "rgb(237, 237, 237)",
              info: "rgb(40, 164, 241, 0.938)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(237, 237, 237)",
            },
            backgroundImage: { // Használja a blue árnyalatokat
               gradient: "linear-gradient(45deg, theme('colors.blue.950') 1%, theme('colors.blue.800') 40%, theme('colors.blue.200') 90%)",
               gradientreverse: "linear-gradient(225deg, theme('colors.blue.950') 1%, theme('colors.blue.800') 40%, theme('colors.blue.200') 90%)",
            },
          },
        },
      ], // themes vége
    }), // require vége
  ], // plugins vége
}; // module.exports vége