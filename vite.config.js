import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  //CORS 문제 해결(Gallery)
    server: {
    proxy: {
      '/galleryapi': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/galleryapi/, ''),
      },
    },
  },
})
