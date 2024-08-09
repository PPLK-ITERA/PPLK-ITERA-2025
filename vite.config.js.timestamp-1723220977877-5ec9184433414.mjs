// vite.config.js
import react from "file:///I:/OTHER/PPLK-ITERA-2024/node_modules/@vitejs/plugin-react/dist/index.mjs";
import laravel from "file:///I:/OTHER/PPLK-ITERA-2024/node_modules/laravel-vite-plugin/dist/index.js";
import path from "path";
import { defineConfig } from "file:///I:/OTHER/PPLK-ITERA-2024/node_modules/vite/dist/node/index.js";
import compression from "file:///I:/OTHER/PPLK-ITERA-2024/node_modules/vite-plugin-compression2/dist/index.mjs";
import { ViteImageOptimizer } from "file:///I:/OTHER/PPLK-ITERA-2024/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var __vite_injected_original_dirname = "I:\\OTHER\\PPLK-ITERA-2024";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      refresh: true
    }),
    react(),
    compression(),
    ViteImageOptimizer()
  ],
  resolve: {
    alias: {
      "!assets": path.resolve(__vite_injected_original_dirname, "./resources/assets")
    }
  },
  optimizeDeps: {
    include: ["@zxing/library", "react-qr-code"]
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
        entryFileNames: `assets/[hash].js`
      },
      onwarn(warning, defaultHandler) {
        if (warning.code === "SOURCEMAP_ERROR") {
          return;
        }
        defaultHandler(warning);
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJJOlxcXFxPVEhFUlxcXFxQUExLLUlURVJBLTIwMjRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkk6XFxcXE9USEVSXFxcXFBQTEstSVRFUkEtMjAyNFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vSTovT1RIRVIvUFBMSy1JVEVSQS0yMDI0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGxhcmF2ZWwgZnJvbSBcImxhcmF2ZWwtdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjJcIjtcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBcInJlc291cmNlcy9qcy9hcHAuanN4XCIsXG4gICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgY29tcHJlc3Npb24oKSxcbiAgICAgICAgVml0ZUltYWdlT3B0aW1pemVyKClcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIFwiIWFzc2V0c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vcmVzb3VyY2VzL2Fzc2V0c1wiKSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgICBpbmNsdWRlOiBbXCJAenhpbmcvbGlicmFyeVwiLCBcInJlYWN0LXFyLWNvZGVcIl0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgICBtaW5pZnk6IFwidGVyc2VyXCIsXG4gICAgICAgIHNvdXJjZW1hcDogXCJoaWRkZW5cIixcbiAgICAgICAgbWFuaWZlc3Q6IFwibWFuaWZlc3QuanNvblwiLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICAvLyBUZW1wbGF0ZSB1bnR1ayBuYW1hIGFzc2V0IHlhbmcgbWVuYW1iYWhrYW4gaGFzaFxuICAgICAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBgYXNzZXRzL1toYXNoXS5bZXh0XWAsXG4gICAgICAgICAgICAgICAgLy8gVGVtcGxhdGUgdW50dWsgbmFtYSBjaHVua3MgeWFuZyBtZW5hbWJhaGthbiBoYXNoXG4gICAgICAgICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGBhc3NldHMvW2hhc2hdLmpzYCxcbiAgICAgICAgICAgICAgICAvLyBUZW1wbGF0ZSB1bnR1ayBuYW1hIGVudHJ5IGZpbGVzIHlhbmcgbWVuYW1iYWhrYW4gaGFzaFxuICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBgYXNzZXRzL1toYXNoXS5qc2AsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb253YXJuKHdhcm5pbmcsIGRlZmF1bHRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdhcm5pbmcuY29kZSA9PT0gXCJTT1VSQ0VNQVBfRVJST1JcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdEhhbmRsZXIod2FybmluZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1EsT0FBTyxXQUFXO0FBQ2xSLE9BQU8sYUFBYTtBQUNwQixPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUywwQkFBMEI7QUFMbkMsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osbUJBQW1CO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILFdBQVcsS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLElBQzNEO0FBQUEsRUFDSjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1YsU0FBUyxDQUFDLGtCQUFrQixlQUFlO0FBQUEsRUFDL0M7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLGVBQWU7QUFBQSxNQUNYLFFBQVE7QUFBQTtBQUFBLFFBRUosZ0JBQWdCO0FBQUE7QUFBQSxRQUVoQixnQkFBZ0I7QUFBQTtBQUFBLFFBRWhCLGdCQUFnQjtBQUFBLE1BQ3BCO0FBQUEsTUFDQSxPQUFPLFNBQVMsZ0JBQWdCO0FBQzVCLFlBQUksUUFBUSxTQUFTLG1CQUFtQjtBQUNwQztBQUFBLFFBQ0o7QUFFQSx1QkFBZSxPQUFPO0FBQUEsTUFDMUI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
