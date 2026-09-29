/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Served from https://<user>.github.io/todo-react/
const base = '/todo-react/'

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      pwaAssets: {
        image: 'public/logo.png',
      },
      manifest: {
        name: 'To-Do List',
        short_name: 'To-Do',
        background_color: '#1976D2',
        theme_color: '#1976D2',
        start_url: `${base}?homescreen=1`,
        display: 'standalone',
      },
    }),
  ],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
  },
})
