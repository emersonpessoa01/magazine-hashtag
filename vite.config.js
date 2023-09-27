import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// import vueJsxPlugin from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "/magazine-hashtag",
});
