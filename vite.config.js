import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      // console.log(import.meta.url);
      // output: file:///Users/richie/Project/LiteralResource/masterVue3/event-booking/vite.config.js

      // new URL('./src', import.meta.url)：取得與當前模組相對的 ./src 資料夾的 URL。
      // fileURLToPath：把這個 URL 轉換成系統可使用的絕對路徑字串（例如 /Users/richie/.../src）。

      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
