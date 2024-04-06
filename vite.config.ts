import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "react-hw6-lifecycle-crud-frontend",
  assetsInclude: ['src/img'],
  plugins: [react()],
})
