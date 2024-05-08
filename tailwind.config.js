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
              secondary: "rgb(237, 237, 237)",
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
          },
        },
        {
          name: "green",
          extend: {
            colors: {
              primary: "rgb(129, 171, 178)",
              secondary: "rgb(237, 237, 237)",
              success: "rgb(63, 178, 121)",
              info: "rgb(191, 191, 191)",
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)",
            },
          },
        },
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
          },
        },
      ],
    }),
  ],
};
