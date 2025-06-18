import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 반드시 defineConfig로 감싸야 자동 JSX가 제대로 작동함
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://callme.mirim-it-show.site',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});