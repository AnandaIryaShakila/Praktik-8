import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/praktik-8/', // GANTI dengan nama repository GitHub kamu
  plugins: [react()],
})
