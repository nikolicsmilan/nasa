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
          name: "city",
          extend: {
            colors: {
              primary: "rgb(129, 171, 178)",
              secondary: "rgb(237, 237, 237)",
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
            fontFamily: {
              sans: "Josefin Sans",
              brush: "Comforter Brush",
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
            backgroundImage: {
              "gradient-to-r": "linear-gradient(to right, #f7fafc, #edf2f7)",
              gradient:
                "linear-gradient(130deg, rgb(129, 171, 178) 23.41%, #1A1918 88.02%)",
              gradient2:
                "linear-gradient(130deg, #EB8814 15.41%, #1A1918 78.02%)",
              gradient3:
                "linear-gradient(130deg, #84cc16, rgb(23, 23, 23) 88.02%)",
              gradient4: "linear-gradient(130deg, yellow, black 95%, #000000)",
              gradient5:
                "linear-gradient(130deg,#C34A36 23.41%, rgb(23, 23, 23) 88.02%)",
                cityvertical: "url('../src/assets/city-vertical.jpg')",
                cityvertical2: "url('../src/assets/city-vertical6.jpg')",
            },
          },
        },
        {
          name: "space",
          extend: {
            colors: {
              primary: "rgb(40, 164, 241, 0.938)",
              secondary: "rgb(25, 25, 25)",
              success: "rgb(237, 237, 237)",
              info: "rgb(40, 164, 241, 0.938)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(237, 237, 237)",
            },
            fontFamily: {
              sans: "Inter",
              brush: "Comforter Brush",
            },
            backgroundImage: {
              gradient:
                "linear-gradient(130deg, rgb(40, 164, 241, 0.938) 23.41%, rgb(23, 23, 23) 88.02%)",
              gradient2:
                "linear-gradient(130deg, #EB8814 15.41%, #1A1918 78.02%)",
              gradient3:
                "linear-gradient(130deg, #84cc16, rgb(23, 23, 23) 88.02%)",
              gradient4: "linear-gradient(130deg, yellow, black 95%, #000000)",
              gradient5:
                "linear-gradient(130deg,#C34A36 23.41%, rgb(23, 23, 23) 88.02%)",
              gradient6:
                "linear-gradient(130deg, rgb(70, 70, 70, 0.938) 80.1%, rgb(40, 40, 40, 0.938 ) 111.02%)",
                spacevertical: "url('../src/assets/space-vertical.jpg')",
              
            },
          },
        },
      ],
    }),
  ],
};