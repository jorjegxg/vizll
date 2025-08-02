// tailwind.config.js
const { heroui } = require("@heroui/theme");

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        "brand-primary": "#ff6b6b",
        "brand-hover": "#ff5252",
        "brand-teal": "#4ecdc4",
        "brand-dark": "#14141e",
        "brand-footer": "#222",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
        "contact-gradient":
          "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
      },
    },
  },

  plugins: [],
};
