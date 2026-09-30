import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: 'https://freki-inc.github.io/product-preview-card-component/',
})
