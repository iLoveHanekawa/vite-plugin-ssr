import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr'
import vercel from 'vite-plugin-vercel'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), ssr({
    prerender: true
  }), vercel(), vercelSsr()],
  vercel: {
  }
}

export default config
