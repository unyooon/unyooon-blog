import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
      dirs: [path.resolve(__dirname, './composables')],
      vueTemplate: true,
      dts: false,
    }),
  ],

  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
