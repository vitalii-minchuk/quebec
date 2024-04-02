import { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
export default config;
