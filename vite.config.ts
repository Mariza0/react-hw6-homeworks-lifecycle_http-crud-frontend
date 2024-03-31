import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "react-hw5-composition-decomposition",
  assetsInclude: ['src/img'],
  plugins: [react()],
})
