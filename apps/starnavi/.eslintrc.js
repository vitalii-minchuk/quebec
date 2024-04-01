/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js", "eslint-plugin-testing-library",
    "eslint-plugin-testing-library"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
