import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#F9FDFF",
        textColor: "#333333",
        oneColor: "#00B9B6",
      },
      fontSize: {
        sm: ["16px", "20px"],
        lg: ["48px", "28px"],
        xl: ["24px", "32px"],
      },

      fontFamily: {
        inter: ["inter"],
        interBold: ["interBold"],
      },
    },
  },
  plugins: [],
};
export default config;
