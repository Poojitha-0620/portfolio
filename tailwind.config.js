/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you're using index.html outside of the src folder
    "./src/**/*.{js,ts,jsx,tsx}", // Include your source files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5733",
        secondary: "#f3f3f3",
      },
    },
  },
  plugins: [],
}

