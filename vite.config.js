import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: './src',
        },
      },
    }),
    Components({
      dirs: ['src/components'],
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8082,
    origin: '//localhost:8082',
  },
  build: {
    cssCodeSplit: false,
    assetsDir: 'assets/editor/',
    rollupOptions: {
      input: {
        editor: 'src/main.js',
      },
      preserveEntrySignatures: 'exports-only',
      output: {
        exports: 'auto',
        assetFileNames: 'assets/editor/[name][extname]',
        entryFileNames: '[name].js',
        experimentalMinChunkSize: 20000,
      },
    },
  },
})
