import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite"
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      fontFamily: {
        sans: ["var(--font-aguda)"],
        poppins: ["Poppins", "sans-serif"]
      },
      textShadow: {
        sm: "1px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 4px var(--tw-shadow-color)",
        lg: "4px 4px 8px var(--tw-shadow-color)",
        xl: "4px 4px 16px var(--tw-shadow-color)"
      },
      zIndex: {
        "-1": "-1"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        black: {
          DEFAULT: "#2C3532",
          50: "rgba(44, 53, 50, 0.5)",
          100: "#2C3532",
          200: "#242D2A",
          300: "#1C2522",
          400: "#141D1A",
          500: "#0C1512",
          600: "#040D0A",
          700: "#000502",
          800: "#000000",
          900: "#000000"
        },
        white: {
          DEFAULT: "#fff",
          50: "#f7f7f7",
          40: "#F4F4F4",
          30: "#F8F8F8"
        },
        primary: {
          DEFAULT: "#550C18",
          50: "#F9E8EA",
          100: "#F2C2C7",
          200: "#E99BA3",
          300: "#DF747F",
          400: "#D64D5B",
          500: "#550C18",
          600: "#440A13",
          700: "#33080E",
          800: "#22060A",
          900: "#110305"
        },
        secondary: {
          DEFAULT: "#786452",
          50: "#F5F2EF",
          100: "#E5DED7",
          200: "#D5C9BF",
          300: "#C5B4A7",
          400: "#B59F8F",
          500: "#786452",
          600: "#605042",
          700: "#483C32",
          800: "#302822",
          900: "#181411"
        },
        tertiary: {
          DEFAULT: "#F7DAD9",
          50: "#FEF5F5",
          100: "#FDEBEB",
          200: "#FBD7D7",
          300: "#F9C3C3",
          400: "#F7AFAF",
          500: "#F7DAD9",
          600: "#F5B8B6",
          700: "#F29693",
          800: "#F07470",
          900: "#EE524D"
        },
        basic: {
          DEFAULT: "#C5CEE0",
          100: "#FFFFFF",
          200: "#F7F9FC",
          300: "#EDF1F7",
          400: "#E4E9F2",
          500: "#C5CEE0",
          600: "#8F9BB3",
          700: "#2E3A59",
          800: "#222B45",
          900: "#1A2138",
          1000: "#151A30",
          1100: "#101426"
        },
        danger: {
          DEFAULT: "#FF4E53",
          100: "#FFEBE9",
          200: "#FFC3C4",
          300: "#FF9B9C",
          400: "#FF767C",
          500: "#FF4E53",
          600: "#DB323B",
          700: "#B71926",
          800: "#930F19",
          900: "#7A0A14"
        },
        success: {
          DEFAULT: "#5BD36B",
          500: "#5BD36B",
          600: "#42B55C",
          700: "#3ba051",
          800: "#2e7f42",
          900: "#1f5c2f",
          1000: "#144020",
          1100: "#0b2b15",
          1200: "#061a0c",
          1300: "#030b06"
        },
        warning: {
          DEFAULT: "#FCB353",
          500: "#FCB353",
          600: "#E89B3F",
          700: "#c47f32",
          800: "#9e6124",
          900: "#7a481a",
          1000: "#5a3412",
          1100: "#3e220b",
          1200: "#261207",
          1300: "#140b04"
        },
        info: {
          DEFAULT: "#28C2ED",
          500: "#28C2ED",
          600: "#1D98CB",
          700: "#1981aa"
        }
      }
    }
  }
} satisfies Config;
