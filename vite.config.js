import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const API_BACKEND_URL = process.env.VITE_APP_API_URL
console.log(API_BACKEND_URL);


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
        target: API_BACKEND_URL, // URL backend Spring Boot
        changeOrigin: true,
        secure: false, // Jika menggunakan http
      }
    }
  }
})
