/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "300px",
      xxm: "424px",
      xsm: "500px",
      sm: "640px",
      md:"768px",
      mdxl: "770px",
      lg: "1024px",
      blg: "1108px",
      xl: "1300px",
      lxl: "1395px",
    },
    extend: {},
  },
  plugins: [],
}

