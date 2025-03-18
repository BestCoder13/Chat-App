/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/App.jsx", // Ensure all relevant files are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Correct DaisyUI plugin usage
};
