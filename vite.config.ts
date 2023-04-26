import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [ssr({
      prerender: {
        partial: true
      }
    }), vercel(), vercelSsr()],
    vercel: {
      // Tweak what you need, check TS definition for details
    },
    server: {
      port: 3000
    }
  };
});