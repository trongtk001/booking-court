/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#58D66C",
        primaryLight: "#9beca8",
        primaryDark: "#06a720",
        primaryLink: "#278410",
        textLight: "#545563",
        textGray: "#D6DBFF",
        grayLight: "#C7C8D2",
      },
      boxShadow: {
        buttonShadow: "0 2px 10px 0px rgba(0, 0, 0, 0.25)",
      },
      width: {
        39: "9.75rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
