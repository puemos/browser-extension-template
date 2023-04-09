import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2022",
    minify: false,
  },
  sourcemap: true,
  plugins: [react()],
});
