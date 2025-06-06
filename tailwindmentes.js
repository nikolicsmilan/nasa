module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        screens: {
          'xl': '1200px', 
        },
      },
    },
    plugins: [
      require("tailwindcss-themer")({
        defaultTheme: {
          extend: {
            colors: {
              primary: "blue",
            },
            fontFamily: {
              mono: ['"Fira Code"', 'monospace'] ,//mono: ['"Fira Code"', 'monospace']  mono: ['monospace'],
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
                950: "#082f49",
                success: "rgb(63, 178, 121)",
                info: "rgb(191, 191, 191)",
                dark: "rgb(0, 0, 0)",
                asidebg: "rgb(129, 171, 178)",
              },
              fontFamily: {
                mono: ['"Fira Code"', 'monospace'] 
              },
              backgroundImage: {
                gradient:
                  "linear-gradient(45deg, #082f49 1%, #075985 40%,  #cffafe 90% )",
                gradientreverse:
                  "linear-gradient(225deg, #082f49 1%, #075985 40%,  #cffafe 90% )",
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
                gradient:
                  "linear-gradient(45deg, #1a2e05 1%, #3f6212 40%, #ecfccb 90%)",
                gradientreverse:
                  "linear-gradient(225deg, #1a2e05 1%, #3f6212 40%, #ecfccb 90%)",
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
                gradient:
                  "linear-gradient(45deg, #052e16 1%, #166534 40%,  #dcfce7 90% )",
                gradientreverse:
                  "linear-gradient(225deg, #052e16 1%, #166534 40%,  #dcfce7 90% )",
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
                950: "#172554",
                success: "rgb(237, 237, 237)",
                info: "rgb(40, 164, 241, 0.938)",
                dark: "rgb(0, 0, 0)",
                asidebg: "rgb(237, 237, 237)",
              },
              fontFamily: {
                mono: ['"Fira Code"', 'monospace'] 
              },
              backgroundImage: {
                gradient:
                  "linear-gradient(45deg, #172554 1%, #1e40af 40%,  #dbeafe 90% )",
                gradientreverse:
                  "linear-gradient(225deg, #172554 1%, #1e40af 40%,  #dbeafe 90% )",
                mybackground: "url('../src/assets/images/desk.jpg')",
              },
            },
          },
        ],
      }),
    ],
  };