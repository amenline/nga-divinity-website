import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        nda: {
          texts: "#343434",
          primary: "#2c7ba7",
          secondary: "#11dcd0",
          gray: "#d9d9d9",
          adjacent: "#0cc1b6",
          bg1: "#f1f1f1",
          bg2: "#f9fdff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#CC9A00",
          // secondary: "#5F3D00",
          // accent: "#CC7300",
          // neutral: "#CC7300",
          // "base-100": "#ffffff",
          // info: "#CC7300",
          // success: "#CC9000",
          // warning: "#fbbd23",
          // error: "#f87272",
        },
      },
    ],
  },
};
export default config;
