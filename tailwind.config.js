/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        mobile: "300px",
        mmm: "402px",
        xxm: "424px",
        xlm: '452px',
        xsm: "500px",
        ssm: "586px",
        sm: "640px",
        md: "768px",
        mdxl: "770px",
        lg: "1024px",
        blg: "1108px",
        xl: "1300px",
        lxl: "1395px",
        mxl: "1450px",
      },
      extend: {},
    },
    plugins: [],
  };


