/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/*.html"],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "1.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      colors: {
        midnight: "#121063",

        secondary: "#23557F",
        primary: "#4AB39A",
        light: {
          primary: "#FFFFFF",
          secondary: "#23557F",
        },
        dark: {
          primary: "#0F0F0F",
          secondary: "#202020",
        },
      },
    },
    // extend: {
    //   backgroundImage: {
    //     "custom-gradient":
    //       "linear-gradient(140.9deg, #F2FFFD 27.61%, #F9FDFF 72.42%)",
    //   },

    //   // fontFamily: {
    //   //   manrope: "var(--font-manrope)",
    //   // },
    //   animation: {
    //     text: "text 5s ease infinite",
    //   },

    //   screens: {
    //     // ...defaultTheme.screens,
    //     xs: { min: "320px", max: "420px" },
    //     sm: { min: "420px", max: "767px" },
    //   },
    //   spacing: {
    //     spacing: {
    //       // ...defaultTheme.spacing,
    //       1: "5px",
    //       2: "10px",
    //       3: "15px",
    //       4: "20px",
    //       5: "25px",
    //     },
    //   },
    // },
  },
  plugins: [],
};
