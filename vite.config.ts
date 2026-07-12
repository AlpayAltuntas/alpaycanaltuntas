import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Repo name is "alpaycanaltuntas" -> GitHub Pages project site path.
  // If the repo is ever renamed, update this one line to match.
  base: '/alpaycanaltuntas/',
  plugins: [react()],
})
