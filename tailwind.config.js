// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { // Globális kiterjesztések
      screens: { 'xl': '1200px', '2xl': '1700px' },
      animation: { 'spin-slow': 'spin 20s linear infinite', pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
      keyframes: { spin: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }, pulse: { '0%, 100%': { opacity: 1 }, '50%': { opacity: .5 } } },
      colors: { // ALAP színpaletták (OKLCH) - Ezek maradnak
        sky:     { 50: 'oklch(97.7% 0.013 236.62)', 100: 'oklch(95.1% 0.026 236.824)', 200: 'oklch(90.1% 0.058 230.902)', 300: 'oklch(82.8% 0.111 230.318)', 400: 'oklch(74.6% 0.16 232.661)', 500: 'oklch(68.5% 0.169 237.323)', 600: 'oklch(58.8% 0.158 241.966)', 700: 'oklch(50% 0.134 242.749)', 800: 'oklch(44.3% 0.11 240.79)', 900: 'oklch(39.1% 0.09 240.876)', 950: 'oklch(29.3% 0.066 243.157)' },
        lime:    { 50: 'oklch(98.6% 0.031 120.757)', 100: 'oklch(96.7% 0.067 122.328)', 200: 'oklch(93.8% 0.127 124.321)', 300: 'oklch(89.7% 0.196 126.665)', 400: 'oklch(84.1% 0.238 128.85)', 500: 'oklch(76.8% 0.233 130.85)', 600: 'oklch(64.8% 0.2 131.684)', 700: 'oklch(53.2% 0.157 131.589)', 800: 'oklch(45.3% 0.124 130.933)', 900: 'oklch(40.5% 0.101 131.063)', 950: 'oklch(27.4% 0.072 132.109)' },
        green:   { 50: 'oklch(98.1% 0.022 157.428)', 100: 'oklch(96.2% 0.044 156.743)', 200: 'oklch(92.5% 0.084 155.995)', 300: 'oklch(86.4% 0.139 155.488)', 400: 'oklch(76.2% 0.196 154.8)', 500: 'oklch(67.2% 0.213 156.48)', 600: 'oklch(58.6% 0.195 157.8)', 700: 'oklch(51.4% 0.163 158.4)', 800: 'oklch(44.8% 0.133 158.0)', 900: 'oklch(39.9% 0.107 158.5)', 950: 'oklch(27.4% 0.072 158.8)' },
        blue:    { 50: 'oklch(97% 0.014 254.604)', 100: 'oklch(93.2% 0.032 255.585)', 200: 'oklch(88.2% 0.059 254.128)', 300: 'oklch(80.9% 0.105 251.813)', 400: 'oklch(70.7% 0.165 254.624)', 500: 'oklch(62.3% 0.214 259.815)', 600: 'oklch(54.6% 0.245 262.881)', 700: 'oklch(48.8% 0.243 264.376)', 800: 'oklch(42.4% 0.199 265.638)', 900: 'oklch(37.9% 0.146 265.522)', 950: 'oklch(28.2% 0.091 267.935)' },
        neutral: { 50: 'oklch(98.5% 0 0)', 100: 'oklch(97% 0 0)', 200: 'oklch(92.2% 0 0)', 300: 'oklch(87% 0 0)', 400: 'oklch(70.8% 0 0)', 500: 'oklch(55.6% 0 0)', 600: 'oklch(43.9% 0 0)', 700: 'oklch(37.1% 0 0)', 800: 'oklch(26.9% 0 0)', 900: 'oklch(20.5% 0 0)', 950: 'oklch(14.5% 0 0)' },
        // Ide jöhetnek az amber és red paletták OKLCH-ban, ha kellenek a warning/error szemantikus színekhez
        // amber: { 500: 'oklch(X Y Z)', /* ... többi árnyalat ... */ },
        // red:   { 500: 'oklch(A B C)', /* ... többi árnyalat ... */ },
      },
      fontFamily: { mono: ['"Fira Code"', 'monospace'] }, // Nem kell theme() itt, a Tailwind kezeli
      fontSize: { xs: "0.563rem", sm: "0.75rem", base: "1rem", xl: "1.333rem", "2xl": "1.777rem", "3xl": "2.369rem", "4xl": "3.157rem", "5xl": "4.209rem" },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: { // Default téma színei KONKRÉT ÉRTÉKEKKEL
          colors: {
            primary: 'oklch(74.6% 0.16 232.661)',           // sky-400
            'primary-content': 'oklch(20.5% 0 0)',        // neutral-900
            secondary: 'oklch(55.6% 0 0)',                // neutral-500
            'secondary-content': 'oklch(97% 0 0)',        // neutral-100
            accent: 'oklch(58.8% 0.158 241.966)',          // sky-600
            'accent-content': 'oklch(100% 0 0)',          // white (Tailwind alap white: #fff)
            neutral: 'oklch(92.2% 0 0)',                  // neutral-200 (szöveg)
            'base-100': 'oklch(20.5% 0 0)',               // neutral-900 (fő BG)
            'base-200': 'oklch(26.9% 0 0)',               // neutral-800 (panel BG)
            'base-300': 'oklch(37.1% 0 0)',               // neutral-700
            'base-content': 'oklch(92.2% 0 0)',           // neutral-200
            info: 'oklch(68.5% 0.169 237.323)',           // sky-500
            success: 'oklch(67.2% 0.213 156.48)',        // green-500
            warning: 'oklch(76.1% 0.201 89.53)',         // amber-500 (ezt ki kell keresni pontosan!)
            error: 'oklch(62.8% 0.222 29.15)',           // red-500 (ezt ki kell keresni pontosan!)
          },
          backgroundImage: { // KONKRÉT ÉRTÉKEKKEL
            'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(29.3% 0.066 243.157))', // neutral-800 -> sky-950
            'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
            'panel-gradient':          'linear-gradient(to bottom, oklch(29.3% 0.066 243.157), oklch(44.3% 0.11 240.79))',
          },
          borderColor: {
            'button-theme': 'oklch(74.6% 0.16 232.661 / 0.4)', // sky-400 / 0.4
            'button-theme-hover': 'oklch(74.6% 0.16 232.661 / 0.7)' // sky-400 / 0.7
          },
          boxShadow:   { 'button-theme-hover': '0 0 15px oklch(74.6% 0.16 232.661)' }, // sky-400
          dropShadow:  { 'text-theme': '0 0 5px oklch(74.6% 0.16 232.661 / 0.9)' } // sky-400 / 0.9
        },
      },
      themes: [
        // --- PLASMA TÉMA ---
        {
          name: "plasma",
          extend: {
            colors: { // KONKRÉT ÉRTÉKEKKEL
              primary: 'oklch(74.6% 0.16 232.661)',           // sky-400
              'primary-content': 'oklch(20.5% 0 0)',        // neutral-900
              secondary: 'oklch(55.6% 0 0)',                // neutral-500
              'secondary-content': 'oklch(97% 0 0)',        // neutral-100
              accent: 'oklch(58.8% 0.158 241.966)',          // sky-600
              'accent-content': '#ffffff',                  // white
              neutral: 'oklch(92.2% 0 0)',                  // neutral-200
              'base-100': 'oklch(20.5% 0 0)',               // neutral-900
              'base-200': 'oklch(26.9% 0 0)',               // neutral-800
              'base-300': 'oklch(37.1% 0 0)',               // neutral-700
              'base-content': 'oklch(92.2% 0 0)',           // neutral-200
              info: "rgb(191, 191, 191)", // Te egyedi
              success: "rgb(63, 178, 121)", // Te egyedi
              warning: 'oklch(76.1% 0.201 89.53)',         // amber-500 (OKLCH)
              error: 'oklch(62.8% 0.222 29.15)',           // red-500 (OKLCH)
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)"
            },
            // A backgroundImage, borderColor, boxShadow, dropShadow itt ugyanaz marad,
            // mint a te eredeti "plasma" témádban, mert azok már jók voltak.
            backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(29.3% 0.066 243.157))',
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
              'panel-gradient':          'linear-gradient(to bottom, oklch(29.3% 0.066 243.157), oklch(44.3% 0.11 240.79))',
            },
            borderColor: { 'button-theme': 'oklch(74.6% 0.16 232.661 / 0.4)', 'button-theme-hover': 'oklch(74.6% 0.16 232.661 / 0.7)' },
            boxShadow:   { 'button-theme-hover': '0 0 15px oklch(74.6% 0.16 232.661)' },
            dropShadow:  { 'text-theme': '0 0 5px oklch(74.6% 0.16 232.661 / 0.9)' }
          },
        },
        // --- ION TÉMA ---
        {
          name: "ion",
          extend: {
            colors: { // KONKRÉT ÉRTÉKEKKEL
              primary: 'oklch(84.1% 0.238 128.85)',           // lime-400
              'primary-content': 'oklch(20.5% 0 0)',        // neutral-900
              secondary: 'oklch(55.6% 0 0)',                // neutral-500
              'secondary-content': 'oklch(97% 0 0)',        // neutral-100
              accent: 'oklch(64.8% 0.2 131.684)',           // lime-600
              'accent-content': 'oklch(20.5% 0 0)',         // neutral-900
              neutral: 'oklch(92.2% 0 0)',                  // neutral-200
              'base-100': 'oklch(20.5% 0 0)',               // neutral-900
              'base-200': 'oklch(26.9% 0 0)',               // neutral-800
              'base-300': 'oklch(37.1% 0 0)',               // neutral-700
              'base-content': 'oklch(92.2% 0 0)',           // neutral-200
              info: "rgb(191, 191, 191)",
              success: "rgb(63, 178, 121)",
              warning: 'oklch(76.1% 0.201 89.53)',
              error: 'oklch(62.8% 0.222 29.15)',
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)"
            },
            backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(27.4% 0.072 132.109))',
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
              'panel-gradient':          'linear-gradient(to bottom, oklch(27.4% 0.072 132.109), oklch(53.2% 0.157 131.589))',
            },
            borderColor: { 'button-theme': 'oklch(84.1% 0.238 128.85 / 0.4)', 'button-theme-hover': 'oklch(84.1% 0.238 128.85 / 0.7)' },
            boxShadow:   { 'button-theme-hover': '0 0 15px oklch(84.1% 0.238 128.85)' },
            dropShadow:  { 'text-theme': '0 0 5px oklch(84.1% 0.238 128.85 / 0.9)' }
          },
        },
        // --- FUSION TÉMA ---
        {
          name: "fusion",
          extend: {
            colors: { // KONKRÉT ÉRTÉKEKKEL
              primary: 'oklch(76.2% 0.196 154.8)',            // green-400
              'primary-content': 'oklch(20.5% 0 0)',         // neutral-900
              secondary: 'oklch(55.6% 0 0)',                 // neutral-500
              'secondary-content': 'oklch(97% 0 0)',         // neutral-100
              accent: 'oklch(58.6% 0.195 157.8)',            // green-600
              'accent-content': '#ffffff',                   // white
              neutral: 'oklch(92.2% 0 0)',                   // neutral-200
              'base-100': 'oklch(20.5% 0 0)',                // neutral-900
              'base-200': 'oklch(26.9% 0 0)',                // neutral-800
              'base-300': 'oklch(37.1% 0 0)',                // neutral-700
              'base-content': 'oklch(92.2% 0 0)',            // neutral-200
              info: "rgb(191, 191, 191)",
              success: "rgb(63, 178, 121)",
              warning: 'oklch(76.1% 0.201 89.53)',
              error: 'oklch(62.8% 0.222 29.15)',
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)"
            },
            backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(27.4% 0.072 158.8))',
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
              'panel-gradient':          'linear-gradient(to bottom, oklch(27.4% 0.072 158.8), oklch(51.4% 0.163 158.4))',
            },
            borderColor: { 'button-theme': 'oklch(76.2% 0.196 154.8 / 0.4)', 'button-theme-hover': 'oklch(76.2% 0.196 154.8 / 0.7)' },
            boxShadow:   { 'button-theme-hover': '0 0 15px oklch(76.2% 0.196 154.8)' },
            dropShadow:  { 'text-theme': '0 0 5px oklch(76.2% 0.196 154.8 / 0.9)' }
          },
        },
        // --- QUANTUM TÉMA ---
        {
          name: "quantum",
          extend: {
            colors: { // KONKRÉT ÉRTÉKEKKEL
              primary: 'oklch(70.7% 0.165 254.624)',         // blue-400
              'primary-content': '#ffffff',                 // white
              secondary: 'oklch(55.6% 0 0)',                // neutral-500
              'secondary-content': 'oklch(97% 0 0)',        // neutral-100
              accent: 'oklch(54.6% 0.245 262.881)',          // blue-600
              'accent-content': '#ffffff',                  // white
              neutral: 'oklch(92.2% 0 0)',                  // neutral-200
              'base-100': 'oklch(20.5% 0 0)',               // neutral-900
              'base-200': 'oklch(26.9% 0 0)',               // neutral-800
              'base-300': 'oklch(37.1% 0 0)',               // neutral-700
              'base-content': 'oklch(92.2% 0 0)',           // neutral-200
              info: "rgb(40, 164, 241, 0.938)", // Te egyedi
              success: "rgb(237, 237, 237)", // Te egyedi
              warning: 'oklch(76.1% 0.201 89.53)',
              error: 'oklch(62.8% 0.222 29.15)',
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(237, 237, 237)"
            },
            backgroundImage: {
              'button-accent-gradient':  'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(28.2% 0.091 267.935))',
              'button-neutral-gradient': 'linear-gradient(to bottom, oklch(26.9% 0 0), oklch(20.5% 0 0))',
              'panel-gradient':          'linear-gradient(to bottom, oklch(28.2% 0.091 267.935), oklch(42.4% 0.199 265.638))',
            },
            borderColor: { 'button-theme': 'oklch(70.7% 0.165 254.624 / 0.4)', 'button-theme-hover': 'oklch(70.7% 0.165 254.624 / 0.7)' },
            boxShadow:   { 'button-theme-hover': '0 0 15px oklch(70.7% 0.165 254.624)' },
            dropShadow:  { 'text-theme': '0 0 5px oklch(70.7% 0.165 254.624 / 0.9)' }
          },
        },
      ], // themes vége
    }), // require vége
  ], // plugins vége
};