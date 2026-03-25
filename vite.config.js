import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://jay-68.github.io/botanical-grimoire/',
})
