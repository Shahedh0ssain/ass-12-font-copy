/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#ff216e",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",

      },
    },
    "dark",
  ],


  plugins: [require("daisyui")],
}

// theme: {
//   extend: {
//     container: {

//       sm: '2rem',
//       lg: '4rem',
//       xl: '8rem',


//     },
//   },
// },