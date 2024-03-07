/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "plain-dark-blue": "#003049",
      "plain-light-blue": "#669BBC",
      "plain-beige": "#FDF0D5",
      "dark-pomegranade": "#780000",
      "pomegranate":"#C1121F",
      "white": "#ffffff",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        'custom': '620px', // You can adjust the value as needed
      },
      width: {
        'width-custom': '420px', // You can adjust the value as needed
      },
    },
  },
  plugins: [],
};
