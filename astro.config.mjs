import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: cloudflare(),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['lucide-react']
    },
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': [/node_modules/],
            'hero': ['./src/scripts/heroVideo.ts'],
            'theme': [
              './src/scripts/themeNav.ts',
              './src/scripts/themeAwareLogos.ts'
            ],
            'contact': ['./src/scripts/contactFormHandler.js'],
            'blog': ['./src/scripts/blogInteractions.js']
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
          passes: 2,
          ecma: 2020,
          module: true
        },
        mangle: {
          toplevel: true,
          module: true
        },
        format: {
          comments: false,
          ecma: 2020
        }
      }
    },
    optimizeDeps: {
      exclude: ['node_modules/*'],
      include: ['@astrojs/tailwind']
    }
  }
});