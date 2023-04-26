import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr'
import vercel from 'vite-plugin-vercel'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), ssr({
    prerender: {
      partial: true
    }
  }), 

  vercelSsr(),
  vercel()
],
  // vercel: {
  //   additionalEndpoints: []
  // }
}

export default config
