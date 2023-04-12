import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: "es2022",

    minify: false,
    outDir: resolve(__dirname, "../../dist"),
    rollupOptions: {
      input: resolve(__dirname, "src/index.tsx"),
      output: {
        entryFileNames: `content.js`,
        chunkFileNames: `content.js`,
        assetFileNames: `content.[ext]`,
      },
    },
  },
  sourcemap: true,
  plugins: [react()],
});
