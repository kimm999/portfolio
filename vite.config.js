import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // GitHub repository 이름으로 변경하세요 (예: '/your-repo-name/')
})

