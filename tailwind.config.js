/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#282828",
          "300": "#07080f",
          "400": "#06070e",
          "500": "#07040f",
          "600": "rgba(250, 250, 250, 0.4)",
          "700": "rgba(34, 34, 37, 0.69)",
          "800": "rgba(250, 250, 250, 0.6)",
          "900": "rgba(250, 250, 250, 0.8)",
          "1000": "rgba(255, 255, 255, 0.6)",
        },
        darkslategray: {
          "100": "#3d3f52",
          "200": "#3e3f49",
          "300": "#343434",
          "400": "rgba(61, 63, 82, 0.63)",
        },
        white: "#fff",
        darkslateblue: "#373b64",
        gainsboro: "#d9d9d9",
        dimgray: "#727272",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "cabinet-grotesk-variable": "'Cabinet Grotesk Variable'",
        inherit: "inherit",
      },
    },
    fontSize: {
      lg: "18px",
      "15xl": "34px",
      "13xl": "32px",
      "45xl": "64px",
      "5xl": "24px",
      "9xl": "28px",
      "29xl": "48px",
      xl: "20px",
      "23xl": "42px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
