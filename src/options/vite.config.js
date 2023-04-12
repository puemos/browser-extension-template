import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: "es2022",
    minify: false,
    outDir: resolve(__dirname, "../../dist"),
    rollupOptions: {
      output: {
        entryFileNames: `options.js`,
        chunkFileNames: `options.js`,
        assetFileNames: `options.[ext]`,
      },
      input: {
        app: "./options.html",
      },
    },
  },
  sourcemap: true,
  plugins: [react()],
});
