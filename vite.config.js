import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import path from "path";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression2";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from "vite-plugin-svgr";


export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
        compression(),
        ViteImageOptimizer(),
        svgr(),
    ],
    resolve: {
        alias: {
            "!assets": path.resolve(__dirname, "./resources/assets"),
        },
    },
    optimizeDeps: {
        include: ["@zxing/library", "react-qr-code"],
    },
    build: {
        minify: "terser",
        sourcemap: "hidden",
        manifest: "manifest.json",
        rollupOptions: {
            output: {
                // Template untuk nama asset yang menambahkan hash
                assetFileNames: `assets/[hash].[ext]`,
                // Template untuk nama chunks yang menambahkan hash
                chunkFileNames: `assets/[hash].js`,
                // Template untuk nama entry files yang menambahkan hash
                entryFileNames: `assets/[hash].js`,
            },
            onwarn(warning, defaultHandler) {
                if (warning.code === "SOURCEMAP_ERROR") {
                    return;
                }

                defaultHandler(warning);
            },
        },
    },
});