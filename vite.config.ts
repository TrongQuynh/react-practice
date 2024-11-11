import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

console.log(path.resolve(__dirname, './src/assets'));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, './src'),
      "@": path.resolve(__dirname, './')
    }
  },
  server: {
    port: 3001
  }
})
