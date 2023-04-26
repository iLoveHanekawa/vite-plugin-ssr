import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [react(), ssr({
      prerender: {
        partial: true
      }
    }), vercel(), vercelSsr()],
    vercel: {
    },
    server: {
      port: 3000
    }
  };
});