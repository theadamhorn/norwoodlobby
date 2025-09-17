import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  base: "/norwoodlobby/", 
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
  },
});
