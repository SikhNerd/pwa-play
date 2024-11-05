import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/sql\.js\.org\/dist\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'sql-js-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /.*\.sqlite$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'sqlite-cache',
              expiration: {
                maxEntries: 1,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Gurbani Search',
        short_name: 'Gurbani',
        description: 'Offline-first Gurbani search application',
        theme_color: '#11171c',
        background_color: '#11171c',
        lang: 'en',
        scope: '/',
        dir: 'auto',
        orientation: 'any',
        categories: ['education'],
        icons: [
          {
            src: '/khanda.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
});
