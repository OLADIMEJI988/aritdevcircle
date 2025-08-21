/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      xxm: "424px",
      xsm: "500px",
      sm: "640px",
      md:"768px",
      mdxl: "770px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {},
  },
  plugins: [],
}

