/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FCFBF8",
        peach: "#FFDCCB",
        sky: "#DDEEFF",
        lilac: "#EAE1FF",
        ink: "#27303F",
      },
      fontFamily: {
        rounded: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 55px rgba(39, 48, 63, 0.08)",
        card: "0 14px 35px rgba(39, 48, 63, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
