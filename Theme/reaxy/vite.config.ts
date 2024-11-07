import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteSvgPlugin from "vite-plugin-svgr";
import path from "path";
// vite.config.js / vite.config.ts

import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );

// ** https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSvgPlugin()],
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "src/config"),
      "@layout": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@router": path.resolve(__dirname, "src/router"),
      "@doc": path.resolve(__dirname, "src/doc"),
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
