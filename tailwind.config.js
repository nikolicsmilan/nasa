// tailwind.config.js - TELJES, JAVÍTOTT VERZIÓ
module.exports = {
  // A te tartalmi fájljaidra mutat
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: { // Globális kiterjesztések (ezeket te adtad meg korábban)
      screens: {
        'xl': '1200px',
        '2xl': '1700px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
      },
      colors: { // ALAP színpaletták (ide kerülnek az OKLCH definíciók)
        sky:     { 50: 'oklch(97.7% 0.013 236.62)', 100: 'oklch(95.1% 0.026 236.824)', 200: 'oklch(90.1% 0.058 230.902)', 300: 'oklch(82.8% 0.111 230.318)', 400: 'oklch(74.6% 0.16 232.661)', 500: 'oklch(68.5% 0.169 237.323)', 600: 'oklch(58.8% 0.158 241.966)', 700: 'oklch(50% 0.134 242.749)', 800: 'oklch(44.3% 0.11 240.79)', 900: 'oklch(39.1% 0.09 240.876)', 950: 'oklch(29.3% 0.066 243.157)' },
        lime:    { 50: 'oklch(98.6% 0.031 120.757)', 100: 'oklch(96.7% 0.067 122.328)', 200: 'oklch(93.8% 0.127 124.321)', 300: 'oklch(89.7% 0.196 126.665)', 400: 'oklch(84.1% 0.238 128.85)', 500: 'oklch(76.8% 0.233 130.85)', 600: 'oklch(64.8% 0.2 131.684)', 700: 'oklch(53.2% 0.157 131.589)', 800: 'oklch(45.3% 0.124 130.933)', 900: 'oklch(40.5% 0.101 131.063)', 950: 'oklch(27.4% 0.072 132.109)' },
        green:   { 50: 'oklch(98.1% 0.022 157.428)', 100: 'oklch(96.2% 0.044 156.743)', 200: 'oklch(92.5% 0.084 155.995)', 300: 'oklch(86.4% 0.139 155.488)', 400: 'oklch(76.2% 0.196 154.8)', 500: 'oklch(67.2% 0.213 156.48)', 600: 'oklch(58.6% 0.195 157.8)', 700: 'oklch(51.4% 0.163 158.4)', 800: 'oklch(44.8% 0.133 158.0)', 900: 'oklch(39.9% 0.107 158.5)', 950: 'oklch(27.4% 0.072 158.8)' }, // Ellenőrizd a 950-et!
        blue:    { 50: 'oklch(97% 0.014 254.604)', 100: 'oklch(93.2% 0.032 255.585)', 200: 'oklch(88.2% 0.059 254.128)', 300: 'oklch(80.9% 0.105 251.813)', 400: 'oklch(70.7% 0.165 254.624)', 500: 'oklch(62.3% 0.214 259.815)', 600: 'oklch(54.6% 0.245 262.881)', 700: 'oklch(48.8% 0.243 264.376)', 800: 'oklch(42.4% 0.199 265.638)', 900: 'oklch(37.9% 0.146 265.522)', 950: 'oklch(28.2% 0.091 267.935)' },
        neutral: { 50: 'oklch(98.5% 0 0)', 100: 'oklch(97% 0 0)', 200: 'oklch(92.2% 0 0)', 300: 'oklch(87% 0 0)', 400: 'oklch(70.8% 0 0)', 500: 'oklch(55.6% 0 0)', 600: 'oklch(43.9% 0 0)', 700: 'oklch(37.1% 0 0)', 800: 'oklch(26.9% 0 0)', 900: 'oklch(20.5% 0 0)', 950: 'oklch(14.5% 0 0)' },
      }, // colors vége
    }, // extend vége
  }, // theme vége
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: { primary: 'oklch(74.6% 0.16 232.661)', }, // sky-400 (az alapértelmezett primary)
          fontFamily: { mono: ['"Fira Code"', 'monospace'] },
          fontSize: { xs: "0.563rem", sm: "0.75rem", base: "1rem", xl: "1.333rem", "2xl": "1.777rem", "3xl": "2.369rem", "4xl": "3.157rem", "5xl": "4.209rem" },
        },
      },
      themes: [
        // --- PLASMA TÉMA ---
        {
          name: "plasma",
          extend: {
            colors: {
              primary: 'oklch(74.6% 0.16 232.661)', // sky-400
              success: "rgb(63, 178, 121)", info: "rgb(191, 191, 191)", dark: "rgb(0, 0, 0)", asidebg: "rgb(129, 171, 178)"
            },
            backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(29.3% 0.066 243.157))', // neutral-800 -> sky-950
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',          // neutral-800 -> neutral-900
              'panel-gradient':          'linear-gradient(to bottom, oklch(29.3% 0.066 243.157), oklch(44.3% 0.11 240.79))',      // sky-950 -> sky-800
            },
            borderColor: {
              'button-theme': 'oklch(74.6% 0.16 232.661 / 0.4)',     // sky-400 / 40%
              'button-theme-hover': 'oklch(74.6% 0.16 232.661 / 0.7)' // sky-400 / 70%
            },
            boxShadow:   {
              'button-theme-hover': '0 0 15px oklch(74.6% 0.16 232.661)' // sky-400 glow
            },
            dropShadow:  {
              'text-theme': '0 0 5px oklch(74.6% 0.16 232.661 / 0.9)' // sky-400 text glow (90% opacitás)
            }
          },
        },
        // --- ION TÉMA ---
        {
          name: "ion",
          extend: {
            colors: {
              primary: 'oklch(84.1% 0.238 128.85)', // lime-400
              success: "rgb(63, 178, 121)", info: "rgb(191, 191, 191)", dark: "rgb(0, 0, 0)", asidebg: "rgb(129, 171, 178)"
            },
            backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(27.4% 0.072 132.109))', // neutral-800 -> lime-950
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
              'panel-gradient':          'linear-gradient(to bottom, oklch(27.4% 0.072 132.109), oklch(53.2% 0.157 131.589))', // lime-950 -> lime-700
            },
            borderColor: {
              'button-theme': 'oklch(84.1% 0.238 128.85 / 0.4)',      // lime-400 / 40%
              'button-theme-hover': 'oklch(84.1% 0.238 128.85 / 0.7)'  // lime-400 / 70%
            },
            boxShadow:   {
              'button-theme-hover': '0 0 15px oklch(84.1% 0.238 128.85)' // lime-400 glow
            },
            dropShadow:  {
              'text-theme': '0 0 5px oklch(84.1% 0.238 128.85 / 0.9)' // lime-400 text glow
            }
          },
        },
        // --- FUSION TÉMA ---
        {
          name: "fusion",
          extend: {
            colors: {
              primary: 'oklch(76.2% 0.196 154.8)', // green-400
              success: "rgb(63, 178, 121)", info: "rgb(191, 191, 191)", dark: "rgb(0, 0, 0)", asidebg: "rgb(129, 171, 178)"
            },
             backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(27.4% 0.072 158.8))', // neutral-800 -> green-950
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
              'panel-gradient':          'linear-gradient(to bottom, oklch(27.4% 0.072 158.8), oklch(51.4% 0.163 158.4))', // green-950 -> green-700
            },
             borderColor: {
               'button-theme': 'oklch(76.2% 0.196 154.8 / 0.4)',      // green-400 / 40%
               'button-theme-hover': 'oklch(76.2% 0.196 154.8 / 0.7)' // green-400 / 70%
             },
            boxShadow:   {
              'button-theme-hover': '0 0 15px oklch(76.2% 0.196 154.8)' // green-400 glow
            },
            dropShadow:  {
              'text-theme': '0 0 5px oklch(76.2% 0.196 154.8 / 0.9)' // green-400 text glow
            }
          },
        },
        // --- QUANTUM TÉMA ---
        {
          name: "quantum",
          extend: {
             colors: {
               primary: 'oklch(70.7% 0.165 254.624)', // blue-400
               success: "rgb(237, 237, 237)", info: "rgb(40, 164, 241, 0.938)", dark: "rgb(0, 0, 0)", asidebg: "rgb(237, 237, 237)"
             },
             backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(28.2% 0.091 267.935))', // neutral-800 -> blue-950
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
              'panel-gradient':          'linear-gradient(to bottom, oklch(28.2% 0.091 267.935), oklch(42.4% 0.199 265.638))', // blue-950 -> blue-800
            },
             borderColor: {
               'button-theme': 'oklch(70.7% 0.165 254.624 / 0.4)',      // blue-400 / 40%
               'button-theme-hover': 'oklch(70.7% 0.165 254.624 / 0.7)' // blue-400 / 70%
             },
            boxShadow:   {
              'button-theme-hover': '0 0 15px oklch(70.7% 0.165 254.624)' // blue-400 glow
            },
            dropShadow:  {
              'text-theme': '0 0 5px oklch(70.7% 0.165 254.624 / 0.9)' // blue-400 text glow
            }
          },
        },
      ], // themes vége
    }), // require vége
  ], // plugins vége
};
