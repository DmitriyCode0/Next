module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lightGray: "#F8F8F8",
        mediumGray: "#E0E0E0",
        darkGray: "#808080",
        black: "#1A1A1A",
        blue: "#1E90FF", // Replace with your chosen vibrant color
        orange: "#FF6E00", //Hot orange for dark mode
        green: "#32CD32",
        yellow: "#FFD700",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
