import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // This ensures '@' resolves to the 'src' folder
    },
  },
  plugins: [react(), tailwindcss()],
  darkMode: "class",
});
