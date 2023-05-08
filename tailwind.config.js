/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    // themes: [
    //   "pastel",
    //   {
    //     mytheme: {
    //       primary: "#ffdbba",

    //       secondary: "#4971d1",

    //       accent: "#128496",

    //       neutral: "#1C1A23",

    //       "base-100": "#fff",

    //       info: "#55A1D3",

    //       success: "#33E178",

    //       warning: "#F3B816",

    //       error: "#E25250",
    //     },
    //   },
    // ],
    // styled: true,
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    // darkTheme: "dark",
  },
  plugins: [require("daisyui")],
};
