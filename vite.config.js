import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Replace 'Personal-Portfolio' with your repo name exactly as it appears on GitHub
export default defineConfig({
  plugins: [react()],
  base: '/Personal-Portfolio/', 
})
