/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.build.json'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HElement',
      fileName: 'h-element'
    },
    rollupOptions: {
      external: ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        }
      }
    }
  }
})
