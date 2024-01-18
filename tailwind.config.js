/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00a5dd",

          secondary: "#6ddb00",

          accent: "#00e9ff",

          neutral: "#202c26",

          "base-100": "#fffbff",

          info: "#008cd2",

          success: "#00ff84",

          warning: "#b14a00",

          error: "#ff9cb4",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
