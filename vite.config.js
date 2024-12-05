import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        formulario: resolve(__dirname, "./src/formulario.html"),
      },
    },
  },
  base: "./", // Opcional: rutas relativas para mayor compatibilidad
});