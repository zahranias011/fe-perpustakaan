import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // ⬅️ Ini bagian pentingnya
    }
  },
  server: {
    port: 5173,  // Port untuk frontend
    proxy: {
      '/auth': {
        target: 'http://localhost:8080', // URL backend Spring Boot
        changeOrigin: true,
        secure: false, // Jika menggunakan http
      }
    }
  }
})
