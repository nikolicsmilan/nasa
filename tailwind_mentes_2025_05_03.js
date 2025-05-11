// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
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
            '50%': { opacity: 0.5 },
          },
        },
      },
    },
    plugins: [
      require("tailwindcss-themer")({
        // --- Alapértelmezett téma beállítások ---
        defaultTheme: {
          extend: {
            colors: {
              // Alapértelmezett primary, ha szükséges (pl. 'plasma')
              primary: "#22d3ee",
            },
            fontFamily: {
              mono: ['"Fira Code"', 'monospace'],
            },
            fontSize: {
              xs: "0.563rem",
              sm: "0.75rem",
              base: "1rem",
              xl: "1.333rem",
              "2xl": "1.777rem",
              "3xl": "2.369rem",
              "4xl": "3.157rem",
              "5xl": "4.209rem",
            },
          },
        },
        // --- A definiált TÉMÁK az ÚJ nevekkel ---
        themes: [
          {
            // Az eredeti 'sky' téma
            name: "plasma", // <<< Új név
            extend: {
              colors: {
                primary: "#22d3ee", // Türkiz/Cián
                200: "#bae6fd",     // Hozzá tartozó világosabb árnyalat
                600: "#0284c7",     // Hozzá tartozó sötétebb árnyalat
                950: "#082f49",     // Hozzá tartozó nagyon sötét árnyalat
                success: "rgb(63, 178, 121)",
                info: "rgb(191, 191, 191)",
                dark: "rgb(0, 0, 0)",
                asidebg: "rgb(129, 171, 178)",
              },
              fontFamily: {
                mono: ['"Fira Code"', 'monospace']
              },
              backgroundImage: {
                gradient: "linear-gradient(45deg, #082f49 1%, #075985 40%, #cffafe 90%)",
                gradientreverse: "linear-gradient(225deg, #082f49 1%, #075985 40%, #cffafe 90%)",
              },
            },
          },
          {
            // Az eredeti 'lime' téma
            name: "ion", // <<< Új név
            extend: {
              colors: {
                primary: "#a3e635", // Lime
                200: "#d9f99d",
                600: "#65a30d",
                950: "#1a2e05",
                success: "rgb(63, 178, 121)",
                info: "rgb(191, 191, 191)",
                dark: "rgb(0, 0, 0)",
                asidebg: "rgb(129, 171, 178)",
              },
              fontFamily: {
                mono: ['"Fira Code"', 'monospace']
              },
              backgroundImage: {
                gradient: "linear-gradient(45deg, #1a2e05 1%, #3f6212 40%, #ecfccb 90%)",
                gradientreverse: "linear-gradient(225deg, #1a2e05 1%, #3f6212 40%, #ecfccb 90%)",
              },
              boxShadow: {
                // Ezt az egyedi árnyékot meghagytam, átnevezheted, ha akarod
                green: "10px 0px 10px 3px rgba(144, 78, 82, 0.75)",
              },
            },
          },
          {
            // Az eredeti 'city' téma
            name: "fusion", // <<< Új név
            extend: {
              colors: {
                primary: "#4ade80", // Zöld
                200: "#bbf7d0",
                600: "#16a34a",
                950: "#052e16",
                success: "rgb(63, 178, 121)",
                info: "rgb(191, 191, 191)",
                dark: "rgb(0, 0, 0)",
                asidebg: "rgb(129, 171, 178)",
              },
              fontFamily: {
                mono: ['"Fira Code"', 'monospace']
              },
              backgroundImage: {
                gradient: "linear-gradient(45deg, #052e16 1%, #166534 40%, #dcfce7 90%)",
                gradientreverse: "linear-gradient(225deg, #052e16 1%, #166534 40%, #dcfce7 90%)",
              },
            },
          },
          {
            // Az eredeti 'space' téma
            name: "quantum", // <<< Új név
            extend: {
              colors: {
                primary: "#60a5fa", // Kék
                200: "#bfdbfe",
                600: "#2563eb",
                950: "#172554",
                success: "rgb(237, 237, 237)", // Itt más volt a success/info/aside
                info: "rgb(40, 164, 241, 0.938)",
                dark: "rgb(0, 0, 0)",
                asidebg: "rgb(237, 237, 237)",
              },
              fontFamily: {
                mono: ['"Fira Code"', 'monospace']
              },
              backgroundImage: {
                gradient: "linear-gradient(45deg, #172554 1%, #1e40af 40%, #dbeafe 90%)",
                gradientreverse: "linear-gradient(225deg, #172554 1%, #1e40af 40%, #dbeafe 90%)",
              },
            },
          },
          // Nincs több téma (a 'sky-refined' törölve)
        ],
      }),
    ],
  };