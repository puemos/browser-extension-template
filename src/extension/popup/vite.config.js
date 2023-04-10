import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: "es2022",
    minify: false,
    outDir: resolve(__dirname, "../../../dist"),
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  sourcemap: true,
  plugins: [react()],
});
