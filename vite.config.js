import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: repo is udbhavsaxena.github.io → served at root, so base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
