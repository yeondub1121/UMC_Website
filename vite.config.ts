import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, 
  },
  resolve: {
    alias: {
      // styled-components 경로를 ESM 모듈로 설정
      'styled-components': 'styled-components/dist/styled-components.esm.js',
    },
  },
  build: {
    rollupOptions: {
      // styled-components 외부화 해제
      external: [],
    },
  },
});
