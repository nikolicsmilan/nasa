module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: "blue",
          },
          fontFamily: {
            sans: "ui-monospace",
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
      themes: [
        {
          name: "sky",
          extend: {
            colors: {
              primary: "#22d3ee",
              200: "#bae6fd",
              600: "#0284c7",
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
            fontFamily: {
              robotoMono: ["Roboto Mono", "monospace"],
            },
            backgroundImage: {
              // gradient from sky 950, 800, 100
              gradient:
                "linear-gradient(45deg, #082f49 1%, #075985 10%,  #cffafe 90% )",
              mybackground: "url('../src/assets/images/desk.jpg')",
            },
          },
        },
        {
          name: "lime",
          extend: {
            colors: {
              primary: "#a3e635",
              200: "#d9f99d",
              600: "#65a30d",
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
            fontFamily: {
              robotoMono: ["Roboto Mono", "monospace"],
            },
            backgroundImage: {
               // gradient from lime 950, 800, 100
              gradient:
                "linear-gradient(45deg, #1a2e05 1%, #3f6212 10%, #ecfccb 90%)",
              mybackground: "url('../src/assets/images/desk.jpg')",
            },
            boxShadow: {
              green: "10px 0px 10px 3px rgba(144, 78, 82, 0.75)",
            },
          },
        },
        {
          name: "city",
          extend: {
            colors: {
              primary: "#4ade80",
              200: "#bbf7d0",
              600: "#16a34a",
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
            fontFamily: {
              robotoMono: ["Roboto Mono", "monospace"],
            },
            backgroundImage: {
              // gradient from green 950, 800, 100
              gradient:
                "linear-gradient(45deg, #052e16 1%, #166534 10%,  #dcfce7 90% )",
              mybackground: "url('../src/assets/images/desk.jpg')",
            },
          },
        },
        {
          name: "space",
          extend: {
            colors: {
              primary: "#60a5fa",
              200: "#bfdbfe",
              600: "#2563eb",
              success: "rgb(237, 237, 237)",
              info: "rgb(40, 164, 241, 0.938)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(237, 237, 237)",
            },
            fontFamily: {
              robotoMono: ["Roboto Mono", "monospace"],
            },
            backgroundImage: {
              gradient:
              // gradient from blue 950, 800, 100
                "linear-gradient(45deg, #172554 1%, #1e40af 10%,  #dbeafe 90% )",
              mybackground: "url('../src/assets/images/desk.jpg')",
            },
          },
        },
      ],
    }),
  ],
};
/*
fontFamily: {
  futura: ["Futura", "ui-sans-serif", "system-ui"],
  arial: ["Arial", "ui-sans-serif", "system-ui"],
  orbitron: ["Orbitron", "sans-serif"],
  robotoMono: ["Roboto Mono", "monospace"],
  exo2: ["Exo 2", "sans-serif"],
},
backgroundImage: {
  gradient:
    "linear-gradient(45deg, #082f49 1%, #075985 10%,  #cffafe 90% )",
    mybackground: "url('../src/assets/images/desk.jpg')",
},*/
// gradient: "linear-gradient(130deg, #7dd3fc,  #082f49 90%)",

/* fontFamily: {
              futura: ["Futura", "ui-sans-serif", "system-ui"],
              arial: ["Arial", "ui-sans-serif", "system-ui"],
              orbitron: ["Orbitron", "sans-serif"],
              robotoMono: ["Roboto Mono", "monospace"],
              exo2: ["Exo 2", "sans-serif"],
            }, */
