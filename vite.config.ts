import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Static SPA build. Relative asset paths so the same build works both at the
// root (Lovable hosting) and under the GitHub Pages repository subpath.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "./" : "/",

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
