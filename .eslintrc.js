/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "tailwindcss"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    // reguli custom:
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/react-in-jsx-scope": "off", // Next.js nu cere import React
    "tailwindcss/no-custom-classname": "off", // opțional, dacă ai clase custom
  },
};
