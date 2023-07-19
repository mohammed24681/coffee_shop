/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        main: "#bc9667",
        secondary: "#edeae3",
        text: "#fff",
      },
      fontSize: {
        "15px": "15px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      spacing: {
        navbar: "68px",
      },
      padding: {
        section: "120px",
        "nav-length": "68px",
      },
      boxShadow: {
        "main-shadow": "2px 2px 10px 4px rgb(14 55 54 / 15%)",
      },
      // backgroundImage: {
      //   header: 'url("/public/assests/bg.png")',
      //   header: 'url("/src/images/bg.png")',
      // },
    },
  },
  plugins: [],
};
