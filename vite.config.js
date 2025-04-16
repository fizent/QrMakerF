import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "QrMaker",
        short_name: "QrMaker",
        description: "A React PWA built with Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/Qr192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/Qr512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
