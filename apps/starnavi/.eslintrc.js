/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@repo/eslint-config/next.js", 
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  parser: "@typescript-eslint/parser",
  env: {
    jest: true
  }
};
