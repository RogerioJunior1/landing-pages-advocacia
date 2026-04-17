import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/", // Isso garante que o CSS seja buscado no lugar certo
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
