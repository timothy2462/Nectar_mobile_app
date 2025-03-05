/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        CustomBg: "#53B175",
        disabled: "#FCFCFCB2",
        googlebtn: "#5383EC",
        facebookbtn: "#4A66AC",
        primary: "#030303",
        customText: "#7C7C7C",
      },
      fontFamily: {
        gilroyBold: ["Gilroy-ExtraBold"],
        gilroyLight: ["Gilroy-Light"],
        gilroyMedium: ["gilroy-medium"],
      },
    },
  },
  plugins: [],
};