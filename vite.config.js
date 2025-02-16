// vite.config.js
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // Указываем путь к конфигурации PostCSS
  },
  server: {
    port: 3000, // Указываем порт 3000
  },
});
