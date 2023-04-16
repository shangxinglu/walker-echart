import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'
import path from 'path/posix'

import visualizer from "rollup-plugin-visualizer";
import legacy from '@vitejs/plugin-legacy'
const plugins = [] as any;

// 打包生产环境才引入的插件
if (process.env.NODE_ENV === "production") {
  // 打包依赖展示
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  );
}

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/examples'),
      '@packages': path.resolve(__dirname, '/packages')
    }
  },
  build: {
    // sourcemap: true
  },
  base: './',
  experimental: {} as any,
  server: {
    host: '0.0.0.0',
    // port: 80,
    port: 3000,
    proxy: {

    }
  },
  plugins: [
    ...plugins,
    vue(),
    vuejsx({ enableObjectSlots: true }),
    styleImport({
      libs: [
      ]
    }),
    legacy({
      targets: ['chrome 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true,
      polyfills: true,
    }),
  ],
  css: {
    modules: {
      generateScopedName: '[path]_[local]_[hash:base64:5]',
      hashPrefix: 'prefix'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
         
        },
        javascriptEnabled: true,
      }
    }
  },
} as any)
