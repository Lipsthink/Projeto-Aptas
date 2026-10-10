import { defineConfig } from "vite";
import { resolve } from "node:path";

const pagina = (arquivo) => resolve(import.meta.dirname, "html", arquivo);

export default defineConfig({
    root: "html",
    base: "./",

    build: {
        outDir: "../dist",
        emptyOutDir: true,

        rollupOptions: {
            input: {
                index: pagina("index.html"),
                projetos: pagina("projetos.html"),
                cadastro: pagina("cadastro.html")
            }
        }
    }
});
