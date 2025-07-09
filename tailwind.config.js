// TELJES FÁJL: tailwind.config.js
const colors = require('tailwindcss/colors');
const { themeColors } = require('./src/theme.js');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { 'xl': '1200px', '2xl': '1700px' },
      animation: { 'spin-slow': 'spin 20s linear infinite', pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
      keyframes: { spin: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }, pulse: { '0%, 100%': { opacity: 1 }, '50%': { opacity: .5 } } },
      colors: {
        sky:     colors.sky,
        lime:    colors.lime,
        green:   colors.green,
        blue:    colors.blue,
        neutral: colors.neutral,
        amber:   colors.amber,
        red:     colors.red,
      },
      fontFamily: { mono: ['"Fira Code"', 'monospace'] },
      fontSize: { xs: "0.563rem", sm: "0.75rem", base: "1rem", xl: "1.333rem", "2xl": "1.777rem", "3xl": "2.369rem", "4xl": "3.157rem", "5xl": "4.209rem" },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: themeColors.default,
            'primary-content': colors.neutral['900'],
            secondary: colors.neutral['500'],
            'secondary-content': colors.neutral['100'],
            accent: colors.sky['600'],
            'accent-content': '#ffffff',
            neutral: colors.neutral['200'],
            'base-100': colors.neutral['900'],
            'base-200': colors.neutral['800'],
            'base-300': colors.neutral['700'],
            'base-content': colors.neutral['200'],
            info: colors.sky['500'],
            success: colors.green['500'],
            warning: colors.amber['500'],
            error: colors.red['500'],
          },
          backgroundImage: {
            'button-accent-gradient':  `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.sky['950']})`,
            'button-neutral-gradient': `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.neutral['900']})`,
            'panel-gradient':          `linear-gradient(to bottom, ${colors.sky['950']}, ${colors.sky['800']})`,
          },
          borderColor: {
            'button-theme': 'rgba(56, 189, 248, 0.4)',
            'button-theme-hover': 'rgba(56, 189, 248, 0.7)'
          },
          boxShadow:   { 'button-theme-hover': `0 0 15px ${colors.sky['400']}` },
          dropShadow:  { 'text-theme': `0 0 5px rgba(56, 189, 248, 0.9)` }
        },
      },
      themes: [
        {
          name: "plasma",
          extend: {
            colors: {
              primary: themeColors.plasma,
              'primary-content': colors.neutral['900'],
              secondary: colors.neutral['500'],
              'secondary-content': colors.neutral['100'],
              accent: colors.sky['600'],
              'accent-content': '#ffffff',
              neutral: colors.neutral['200'],
              'base-100': colors.neutral['900'],
              'base-200': colors.neutral['800'],
              'base-300': colors.neutral['700'],
              'base-content': colors.neutral['200'],
              info: "rgb(191, 191, 191)",
              success: "rgb(63, 178, 121)",
              warning: colors.amber['500'],
              error: colors.red['500'],
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)"
            },
            backgroundImage: {
              'button-accent-gradient':  `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.sky['950']})`,
              'button-neutral-gradient': `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.neutral['900']})`,
              'panel-gradient':          `linear-gradient(to bottom, ${colors.sky['950']}, ${colors.sky['800']})`,
            },
            borderColor: { 'button-theme': 'rgba(56, 189, 248, 0.4)', 'button-theme-hover': 'rgba(56, 189, 248, 0.7)' },
            boxShadow:   { 'button-theme-hover': `0 0 15px ${colors.sky['400']}` },
            dropShadow:  { 'text-theme': `0 0 5px rgba(56, 189, 248, 0.9)` }
          },
        },
        {
          name: "ion",
          extend: {
            colors: {
              primary: themeColors.ion,
              'primary-content': colors.neutral['900'],
              secondary: colors.neutral['500'],
              'secondary-content': colors.neutral['100'],
              accent: colors.lime['600'],
              'accent-content': colors.neutral['900'],
              neutral: colors.neutral['200'],
              'base-100': colors.neutral['900'],
              'base-200': colors.neutral['800'],
              'base-300': colors.neutral['700'],
              'base-content': colors.neutral['200'],
              info: "rgb(191, 191, 191)",
              success: "rgb(63, 178, 121)",
              warning: colors.amber['500'],
              error: colors.red['500'],
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)"
            },
            backgroundImage: {
              'button-accent-gradient':  `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.lime['950']})`,
              'button-neutral-gradient': `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.neutral['900']})`,
              'panel-gradient':          `linear-gradient(to bottom, ${colors.lime['950']}, ${colors.lime['700']})`,
            },
            borderColor: { 'button-theme': 'rgba(163, 230, 53, 0.4)', 'button-theme-hover': 'rgba(163, 230, 53, 0.7)' },
            boxShadow:   { 'button-theme-hover': `0 0 15px ${colors.lime['400']}` },
            dropShadow:  { 'text-theme': `0 0 5px rgba(163, 230, 53, 0.9)` }
          },
        },
        {
          name: "fusion",
          extend: {
            colors: {
              primary: themeColors.fusion,
              'primary-content': colors.neutral['900'],
              secondary: colors.neutral['500'],
              'secondary-content': colors.neutral['100'],
              accent: colors.green['600'],
              'accent-content': '#ffffff',
              neutral: colors.neutral['200'],
              'base-100': colors.neutral['900'],
              'base-200': colors.neutral['800'],
              'base-300': colors.neutral['700'],
              'base-content': colors.neutral['200'],
              info: "rgb(191, 191, 191)",
              success: "rgb(63, 178, 121)",
              warning: colors.amber['500'],
              error: colors.red['500'],
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(129, 171, 178)"
            },
            backgroundImage: {
              'button-accent-gradient':  `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.green['950']})`,
              'button-neutral-gradient': `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.neutral['900']})`,
              'panel-gradient':          `linear-gradient(to bottom, ${colors.green['950']}, ${colors.green['700']})`,
            },
            borderColor: { 'button-theme': 'rgba(74, 222, 128, 0.4)', 'button-theme-hover': 'rgba(74, 222, 128, 0.7)' },
            boxShadow:   { 'button-theme-hover': `0 0 15px ${colors.green['400']}` },
            dropShadow:  { 'text-theme': `0 0 5px rgba(74, 222, 128, 0.9)` }
          },
        },
        {
          name: "quantum",
          extend: {
            colors: {
              primary: themeColors.quantum,
              'primary-content': '#ffffff',
              secondary: colors.neutral['500'],
              'secondary-content': colors.neutral['100'],
              accent: colors.blue['600'],
              'accent-content': '#ffffff',
              neutral: colors.neutral['200'],
              'base-100': colors.neutral['900'],
              'base-200': colors.neutral['800'],
              'base-300': colors.neutral['700'],
              'base-content': colors.neutral['200'],
              info: "rgb(40, 164, 241, 0.938)",
              success: "rgb(237, 237, 237)",
              warning: colors.amber['500'],
              error: colors.red['500'],
              dark: "rgb(0, 0, 0)",
              asidebg: "rgb(237, 237, 237)"
            },
            backgroundImage: {
              'button-accent-gradient':  `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.blue['950']})`,
              'button-neutral-gradient': `linear-gradient(to bottom, ${colors.neutral['800']}, ${colors.neutral['900']})`,
              'panel-gradient':          `linear-gradient(to bottom, ${colors.blue['950']}, ${colors.blue['800']})`,
            },
            borderColor: { 'button-theme': 'rgba(96, 165, 250, 0.4)', 'button-theme-hover': 'rgba(96, 165, 250, 0.7)' },
            boxShadow:   { 'button-theme-hover': `0 0 15px ${colors.blue['400']}` },
            dropShadow:  { 'text-theme': `0 0 5px rgba(96, 165, 250, 0.9)` }
          },
        },
      ],
    }),
  ],
};