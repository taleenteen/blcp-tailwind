// filepath: /Users/mac/Projects/blcp-tailwind/tailwind.config.js
import { colors } from "./src/tokens/color";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "test-red": "#ff0000",
        "test-blue": "#0000ff",
      },
    },
  },
  plugins: [],
};
