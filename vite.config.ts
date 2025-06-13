import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hamedajorlou.github.io/', // Add repository name for proper asset loading
  plugins: [react()],
})
