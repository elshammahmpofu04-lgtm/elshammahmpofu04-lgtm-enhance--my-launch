import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Static SPA build. Production assets are served from the GitHub Pages
// repository subpath; the dev server keeps serving from the root.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/elshammahmpofu04-lgtm-enhance--my-launch/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
}));
