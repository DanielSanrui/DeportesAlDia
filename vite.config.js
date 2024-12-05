import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    root: "./src",
    outDir: "../docs", // Cambia el directorio de salida
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        formulario: resolve(__dirname, "./src/formulario.html"),
      },
    },
  },
  base: "./", // Opcional: rutas relativas para mayor compatibilidad
});